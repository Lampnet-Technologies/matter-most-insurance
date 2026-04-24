/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";
import styles from "./post.module.css";

interface BlockContent {
  _type: string;
  _key: string;
  [key: string]: any;
}

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  excerpt?: string;
  publishedAt: string;
  author?: {
    name: string;
  };
  body?: BlockContent[];
}

interface Props {
  params: Promise<{
    post: string;
  }>;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await client.fetch<Post>(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        mainImage {
          asset,
          alt
        },
        excerpt,
        publishedAt,
        author->{
          name
        },
        body
      }`,
      { slug },
    );
    return post || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

function renderBlockContent(block: BlockContent) {
  if (block._type === "block") {
    const style = block.style || "normal";
    const text = block.children?.map((child: any) => child.text).join("") || "";

    switch (style) {
      case "h1":
        return (
          <h1 key={block._key} className={styles.blockHeading1}>
            {text}
          </h1>
        );
      case "h2":
        return (
          <h2 key={block._key} className={styles.blockHeading2}>
            {text}
          </h2>
        );
      case "h3":
        return (
          <h3 key={block._key} className={styles.blockHeading3}>
            {text}
          </h3>
        );
      case "blockquote":
        return (
          <blockquote key={block._key} className={styles.blockQuote}>
            {text}
          </blockquote>
        );
      default:
        return (
          <p key={block._key} className={styles.blockParagraph}>
            {text}
          </p>
        );
    }
  }

  if (block._type === "image") {
    return (
      <div key={block._key} className={styles.blockImage}>
        <Image
          src={urlFor(block.asset).url()}
          alt={block.alt || "Image"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }

  return null;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function PostPage({ params }: Props) {
  const { post: slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.section}>
      <MainNav />

      <main id="main-content" className={styles.main}>
        <section className={styles.section_content}>
          <div className={styles.container}>
            <h1 className={styles.heading}>{post.title}</h1>
            <div className={styles.meta}>
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              {post.author && <span>by {post.author.name}</span>}
            </div>
            {post.excerpt && (
              <p className={styles.excerpt}>{post.excerpt}</p>
            )}

            {post.mainImage && (
              <div className={styles.imageContainer}>
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            )}

            <div className={styles.content}>
              {post.body && post.body.length > 0 ? (
                post.body.map((block) => renderBlockContent(block))
              ) : (
                <p>No content available.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}
