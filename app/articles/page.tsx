import React from "react";
import { client } from "@/sanity/lib/client";
import MainNav from "@/components/navbars/MainNav";
import MainFooter from "@/components/footers/MainFooter";
import ArticleCard from "@/components/article/ArticleCard";
import styles from "./articles.module.css";

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  excerpt?: string;
  publishedAt: string;
  author?: {
    name: string;
  };
  categories?: Array<{
    title: string;
  }>;
}

export default async function ArticlesPage() {
  const posts = await client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage {
        asset
      },
      excerpt,
      publishedAt,
      author->{
        name
      },
      categories[]->{
        title
      }
    }`,
  );

  return (
    <div className={styles.section}>
      <MainNav />

      <main id="main-content" className={styles.main}>
        <section className={styles.section_content}>
          <div className={styles.container}>
            <h1 className={styles.heading}>Our Articles</h1>
            <p className={styles.subheading}>
              Explore our latest articles and insights.
            </p>

            {posts.length > 0 ? (
              <div className={styles.grid}>
                {posts.map((post) => (
                  <ArticleCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <p className={styles.emptyState}>
                No articles found yet. Check back soon!
              </p>
            )}
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}
