import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import styles from "./KnowledgeHubSection.module.css";

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  categories?: Array<{
    title: string;
  }>;
}

export default async function KnowledgeHubSection() {
  const posts = await client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      mainImage {
        asset,
        alt
      },
      categories[]->{
        title
      }
    }`,
  );

  const articles = posts.map((post) => ({
    category: post.categories?.[0]?.title || "Insights",
    title: post.title,
    excerpt: post.excerpt || "Read more about this topic.",
    href: `/articles/${post.slug.current}`,
    image: post.mainImage ? urlFor(post.mainImage).url() : "/Risk20%Analysis.png",
    imageAlt: post.mainImage?.alt || post.title,
  }));

  return (
    <section className={styles.section} aria-label="Knowledge Hub">
      <div className={styles.container}>
        {/* Header row */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>
              Knowledge Hub: Editorial Insights
            </h2>
            <p className={styles.subheading}>
              Intelligence for the modern pragmatic protector.
            </p>
          </div>
          <Link href="/articles" className={styles.exploreLink}>
            Explore All Articles →
          </Link>
        </div>

        {/* Article cards */}
        <ul className={styles.grid} role="list">
          {articles.map((article) => (
            <li key={article.title}>
              <Link href={article.href} className={styles.card}>
                {/* Dark image placeholder */}
                <div className={styles.cardImage} aria-hidden="true">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    sizes="fit-content"
                    fill
                    className={styles.cardImageImage}
                  />
                  <div className={styles.imageScanlines} />
                  <div className={styles.imageGlint} />
                </div>

                {/* Card body */}
                <div className={styles.cardBody}>
                  <span className={styles.category}>{article.category}</span>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.excerpt}>{article.excerpt}</p>
                  <span className={styles.readMore}>Read More →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
