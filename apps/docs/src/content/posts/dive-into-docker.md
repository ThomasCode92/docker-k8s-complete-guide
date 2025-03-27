---
author: Thomas
categories: ["introduction", "docker"]
date: 27/03/2025
image: /images/docker.png
title: Dive into Docker!
---

In this article, we'll explore Docker, its role in software development, and why
it's widely used. We'll break down the concept of images and their relationship
to containers. Additionally, we'll walk through the process of creating and
running a simple Docker container.

# Dive into Docker

## What and Why Docker?

The following diagram shows a typical installation process for a software
package.

```mermaid
flowchart TD
    id1[Download installer] --> id2[Run installer] --> id3[Get an Error installation]
    --> id4[Troubleshoot issue] --> id5[Rerun installer] --> id6[Get another Error!]
    --> id4
```
