export type CalloutType = "info" | "tip" | "warning";

export interface ArticleBlock {
  type: "paragraph" | "heading" | "list" | "code" | "callout";

  text?: string;
  level?: 2 | 3;
  items?: string[];
  language?: string;
  code?: string;
  calloutType?: CalloutType;
  title?: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  blocks: ArticleBlock[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  sections: ArticleSection[];
  previous?: string;
  next?: string;
}
