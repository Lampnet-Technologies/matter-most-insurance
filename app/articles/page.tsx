import React from "react";
import Link from "next/link";
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

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1", 10);
  const postsPerPage = 6;

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

  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.max(3, Math.ceil(posts.length / postsPerPage));

  // Generate pagination page numbers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.section}>
      <MainNav />

      {/* Skyscraper Hero Banner */}
      <section className={styles.hero} aria-label="Blog Header">
        <h1 className={styles.heroTitle}>BLOG</h1>
      </section>

      <main id="main-content" className={styles.main}>
        <section className={styles.section_content}>
          <div className={styles.container}>
            {paginatedPosts.length > 0 ? (
              <div className={styles.grid}>
                {paginatedPosts.map((post) => (
                  <ArticleCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <p className={styles.emptyState}>
                No articles found on this page. Check back soon!
              </p>
            )}
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <nav className={styles.pagination} aria-label="Pagination">
                {pages.map((p) => {
                  const isActive = p === currentPage;
                  const hasContent = p === 1 || p <= Math.ceil(posts.length / postsPerPage);

                  if (!hasContent) {
                    return (
                      <span
                        key={p}
                        className={`${styles.pageBtn} ${styles.pageBtnDisabled}`}
                        title="No articles on this page"
                      >
                        {p}
                      </span>
                    );
                  }

                  return (
                    <Link
                      key={p}
                      href={`/articles?page=${p}`}
                      className={`${styles.pageBtn} ${isActive ? styles.pageBtnActive : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {p}
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}
