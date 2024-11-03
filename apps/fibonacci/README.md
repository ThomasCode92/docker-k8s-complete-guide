# Fibonacci - Calculate your Favorite Fibonacci Number

## Overview

The **Fibonacci** application is a _multi-container setup_ consisting of several services. Docker configuration files are located in the [`/docker`](/docker/) directory, with related files prefixed by _"Fib"_ (e.g. `FibClient.Dockerfile.dev`). The application's source code resides in the [`/apps/fibonacci`](/apps/fibonacci/) directory.

## Usage Instructions

### Development

To build the Docker Image and start the Containers for development, use the following commands:

```bash
  # Build the Image and Start the Container
  docker build -f ./docker/FibClient.Dockerfile.dev -t fib-client-dev --progress=plain ./apps/fibonacci/client/
  docker run -p 3000:5173 -v $(pwd)/apps/fibonacci/client:/usr/app fib-client-dev
```
