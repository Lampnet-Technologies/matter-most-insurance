import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/affiliate",
  "/articles",
  "/claims",
  "/compliance",
  "/contact",
  "/equity-indexed-annuity",
  "/indexed-universal-life",
  "/join-us",
  "/long-term-care",
  "/privacy",
  "/services",
  "/support",
  "/term-life-benefits",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://matter-most-insurance.vercel.app/";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
