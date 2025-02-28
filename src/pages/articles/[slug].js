import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const articles = await getCollection("articles");

  return articles.map((article) => ({
    params: { slug: article.slug },
  }));
}
