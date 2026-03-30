import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { createHighlighter } from "shiki";

// Create a Shiki highlighter with GitHub Dark theme
const highlighter = await createHighlighter({
  themes: ["github-dark-default"],
  langs: [
    "javascript",
    "typescript",
    "jsx",
    "tsx",
    "html",
    "css",
    "json",
    "markdown",
    "bash",
    "shell",
    "python",
    "rust",
    "go",
    "sql",
    "yaml",
    "svelte",
    "swift",
    "kotlin",
    "java",
    "c",
    "cpp",
  ],
});

/**
 * Escape curly braces for Svelte compatibility
 */
function escapeSvelte(str) {
  return str
    .replaceAll("{", "&#123;")
    .replaceAll("}", "&#125;");
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      highlight: {
        highlighter: (code, lang) => {
          const html = highlighter.codeToHtml(code, {
            lang: lang || "text",
            theme: "github-dark-default",
          });
          // Escape curly braces and wrap with language label
          const escaped = escapeSvelte(html);
          return `<div class="code-block" data-lang="${lang || "code"}">${escaped}</div>`;
        },
      },
    }),
  ],

  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter(),
  },
  vitePlugin: {
    inspector: true,
  },
};

export default config;
