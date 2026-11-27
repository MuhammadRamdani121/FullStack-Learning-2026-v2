import { Copy, Check } from "lucide-react";
import { useState } from "react";
import type { ArticleBlock, ArticleSection } from "../../data/articles/types";
import Callout from "./Callout";

function CodeBlock({
  code,
  language = "text",
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-slate-800 bg-[#0f172a]">
      {/* Code Header */}
      <div className="flex items-center justify-between border-b border-slate-700 px-4 py-3">
        <span className="text-xs font-medium text-slate-400">{language}</span>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-white"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}

          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-4 text-sm leading-7">
        <code className="font-mono text-slate-200">{code}</code>
      </pre>
    </div>
  );
}

function BlockRenderer({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-base leading-8 text-slate-600">{block.text}</p>;

    case "heading":
      if (block.level === 3) {
        return (
          <h3 className="pt-4 text-xl font-semibold tracking-tight text-slate-900">
            {block.text}
          </h3>
        );
      }

      return (
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {block.text}
        </h2>
      );

    case "list":
      return (
        <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-600 marker:text-indigo-500">
          {block.items?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "code":
      return <CodeBlock code={block.code ?? ""} language={block.language} />;

    case "callout":
      return (
        <Callout type={block.calloutType} title={block.title}>
          {block.text}
        </Callout>
      );

    default:
      return null;
  }
}

interface ArticleContentProps {
  sections: ArticleSection[];
}

export default function ArticleContent({ sections }: ArticleContentProps) {
  return (
    <div className="mt-10 space-y-12">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-24 space-y-5"
        >
          <h2 className="border-b border-docs-border pb-3 text-2xl font-semibold tracking-tight text-slate-900">
            {section.title}
          </h2>

          <div className="space-y-5">
            {section.blocks.map((block, index) => (
              <BlockRenderer key={`${section.id}-${index}`} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
