/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/app/articles/page";
import styles from "./ArticleCard.module.css";

export default function ArticleCard({ post }: { post: Post }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const category = (post as any).categories?.[0]?.title || "Others";

  return (
    <Link
      key={post._id}
      href={`/articles/${post.slug.current}`}
      className={styles.card}
    >
      {post.mainImage && (
        <div className={styles.imageContainer}>
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            loading="eager"
          />
        </div>
      )}
      <div className={styles.cardBody}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{post.title}</h3>
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        <p className={styles.meta}>
          {formatDate(post.publishedAt)}
          {post.author && ` • ${post.author.name}`}
        </p>
      </div>
    </Link>
  );
}
