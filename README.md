# Docker and Kubernetes - Complete Guide

Welcome to **Docker and Kubernetes - Complete Guide** — the _all-in-one_
repository for learning and experimenting with Docker and Kubernetes! 🚀

This repository serves as a hands-on resource, providing the tools to build,
deploy, and manage dockerized applications. It includes learning materials,
curated resources, and a simple demo project with multiple services for
practical exploration.

> **Inspiration:** This repository draws inspiration from the excellent
> [Docker and Kubernetes: The Complete Guide](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/)
> course on Udemy. If you’re serious about mastering these technologies, this
> course is a highly recommended starting point.

## Monorepo Setup with Turborepo 📂

The repository is organized as a monorepo using Turborepo to manage multiple
services and projects. Turborepo optimizes builds, reduces redundant tasks, and
streamlines local development. Each service resides in its own package, with
shared configurations and scripts for easier maintenance and scalability.

### Key benefits of using Turborepo

- **Efficient Builds:** Caches and optimizes tasks to speed up development.
- **Unified Management:** Centralizes scripts and dependencies for consistent
  tooling.
- **Scalability:** Easily add new services or utilities without complicating the
  setup.

This setup makes it easier to experiment with Docker and Kubernetes in a
structured and efficient way.

### Apps and Packages

- `@repo/eslint-config`: `eslint` configurations (includes
  `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`'s used throughout the monorepo
- `@apps/docs`: A blog providing documentation on _Docker_ and _Kubernetes_.

This Turborepo has some additional tools already setup:

- [Pnpm](https://pnpm.io/) as the package manager
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io) for code
  quality

## Useful Links

- [Turbo Documentation](https://turbo.build/repo/docs)
- [Turbo API Reference](https://turbo.build/repo/docs/reference)
