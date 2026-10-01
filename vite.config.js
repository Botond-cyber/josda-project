import { defineConfig } from "vite";
import { HtmlValidate } from "html-validate";

const htmlValidator = new HtmlValidate({
  extends: ["html-validate:recommended"],
  rules: {
    "doctype-style": "off",
    "no-trailing-whitespace": "off",
    "void-style": "off",
  },
});

function htmlValidationPlugin() {
  return {
    name: "html-validation",
    apply: "serve",
    async transformIndexHtml(html, context) {
      const report = await htmlValidator.validateString(html, context.filename);

      if (!report.valid) {
        const messages = report.results[0]?.messages ?? [];
        const firstMessage = messages[0];
        const error = new Error(
          messages
            .map((message) => `${message.line}:${message.column} ${message.message}`)
            .join("\n"),
        );

        if (firstMessage) {
          error.loc = {
            file: context.filename,
            line: firstMessage.line,
            column: firstMessage.column,
          };
        }

        throw error;
      }

      return html;
    },
  };
}

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.GITHUB_ACTIONS && repository ? `/${repository}/` : "/";

export default defineConfig({
  base,
  plugins: [htmlValidationPlugin()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: true,
    watch: {
      usePolling: true,
    },
  },
});
