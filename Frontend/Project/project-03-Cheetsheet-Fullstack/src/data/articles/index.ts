import type { Article } from "./types";
import { cssArticle } from "./css";

const articleList: Article[] = [cssArticle];

export function getAllArticles(): Article[] {
  return articleList;
}

export function getArticle(slug: string): Article {
  const existingArticle = articleList.find((article) => article.slug === slug);

  if (existingArticle) {
    return existingArticle;
  }

  return {
    slug,
    title: "Article Not Found",
    description: "The requested article could not be found.",
    category: "Unknown",
    difficulty: "Beginner",
    duration: "1 min",
    sections: [],
  };
}
