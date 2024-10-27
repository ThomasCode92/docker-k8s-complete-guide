# SimpleWeb - Simple Web Server

## Overview

The Dockerfile for **SimpleWeb** is located in the [`/docker`](/docker/) directory and is named `SimpleWeb.Dockerfile`. The actual code and resources for **SimpleWeb** are in the [`/apps/simpleweb`](/apps/simpleweb/) directory. The Docker build context is set to this folder to ensure only files in `/apps/simpleweb` are included in the image, improving build efficiency and security by isolating it from other parts of the project.

## Step-by-Step Commands

```bash
  # Build the Image
  docker build -f ./docker/SimpleWeb.Dockerfile -t simpleweb --progress=plain ./apps/simpleweb/

  # Start a Container
  docker run -p 8080:8080 simpleweb:latest
```

- `-f ./docker/SimpleWeb.Dockerfile` - Specifies the Dockerfile's path, making it explicit that it is not located in the default location.
- `-t simpleweb` - Tags the resulting image as `simpleweb`, which is an identifier that you’ll use to reference the image when running it.
- ` --progress=plain` - Displays detailed build progress, which is helpful for debugging and seeing each layer's output.
- `./apps/simpleweb/` - Sets the build context, meaning that only files from this directory are available in the image during the build process.

<br />

- `-p 8080:8080` - Maps port `8080` from the container to port `8080` on the host machine, making the web server accessible at `http://localhost:8080`.
- `simpleweb:latest` - Specifies the image to run (`simpleweb`) and uses the latest tag by default, which points to the most recent version of the image built.

## Summary

These commands encapsulate **SimpleWeb** in a Docker environment, making it easy run on any system with Docker installed. The explicit use of context and detailed progress output ensures a smooth setup and debugging experience.
