# Docker & Kubernetes Blog 🚀

This blog explores Docker and Kubernetes, covering containerization,
orchestration, and best practices. The content is based on the Udemy course
[Docker and Kubernetes: The Complete Guide](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/)
by Stephen Grider.

## 🌟 Features

- **Fast & Optimized** – Built with Astro for high performance.
- **Markdown & MDX Support** – Write posts easily with Markdown.
- **Prerendered Pages** – Static Site Generation

## 📂 Structure

```text
/public               # Static assets
/src
  ├── components/     # UI elements
  ├── content/        # Blog posts (Markdown/MDX)
  ├── layouts/        # Page templates
astro.config.mjs      # Astro configuration
package.json          # Dependencies & scripts
```

## 🚀 Getting Started

```bash
pnpm install    # install dependencies
pnpm run dev    # start development server
pnpm run build  # build for production
```

This project utilizes [pnpm](https://pnpm.io/) for package management. Ensure it
is installed globally before proceeding. Since this project is part of a
monorepo, you may also need to run `pnpm install` in the root directory.

## ✍ Contributing

Want to share insights?

1. Fork the repo
2. Create a branch (`git checkout -b my-feature`)
3. Commit & push changes (`git commit -m "Add post"`)
4. Open a Pull Request
