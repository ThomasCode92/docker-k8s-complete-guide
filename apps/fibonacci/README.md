# Fibonacci - Calculate your Favorite Fibonacci Number

## Overview

The **Fibonacci** application is a _multi-container setup_ consisting of several services. Docker configuration files are located in the [`/docker`](/docker/) directory, with related files prefixed by _"Fib"_ (e.g. `FibClient.Dockerfile.dev`). The application's source code resides in the [`/apps/fibonacci`](/apps/fibonacci/) directory.

## Usage Instructions

### Development

To build the Docker Image and Start the Containers for development, use the following commands:

```bash
  # Build the Image
  docker build -f ./docker/FibClient.Dockerfile.dev -t fib-client-dev --progress=plain ./apps/fibonacci/client/
```
