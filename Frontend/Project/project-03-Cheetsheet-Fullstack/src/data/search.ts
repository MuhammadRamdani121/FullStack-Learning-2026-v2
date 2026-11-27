import { cssArticle } from "./articles/css";
import type { Article } from "./articles/types";

const articles: Article[] = [cssArticle];

export interface SearchResult {
  slug: string;
  title: string;
  category: string;
  description: string;
  matchedContent: string;
}

function extractArticleContent(article: Article): string {
  return article.sections
    .map((section) => {
      const sectionContent = section.blocks
        .map((block) => {
          return [block.text, block.title, block.code, ...(block.items ?? [])]
            .filter(Boolean)
            .join(" ");
        })
        .join(" ");

      return `${section.title} ${sectionContent}`;
    })
    .join(" ");
}

export function searchArticles(query: string): SearchResult[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return [];

  return articles
    .map((article) => ({
      article,
      content: extractArticleContent(article),
    }))
    .filter(({ article, content }) => {
      const searchableContent = [
        article.title,
        article.category,
        article.description,
        content,
      ]
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(normalizedQuery);
    })
    .map(({ article, content }) => ({
      slug: article.slug,
      title: article.title,
      category: article.category,
      description: article.description,
      matchedContent: content,
    }));
}
