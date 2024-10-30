# Docker and Kubernetes - The Complete Guide

Build, test, and deploy Docker applications with Kubernetes while learning production-style development workflows. 🐳☸️

## Introduction

Dive into Docker and Kubernetes with [this complete guide](https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/), starting with Docker´s image management and containerization. Then, explore Kubernetes for deploying, scaling, and managing container clusters. Hands-on examples demonstrate best practices, security measures, and CI/CD integration. Gain essential skills for efficiently managing containerized applications in production environments.

**What is in this Repository**

- Learn Docker from scratch, no previous experience required
- Master the Docker CLI to inspect and debug running containers
- Build a CI/CD pipeline from scratch with Github, Travis CI and AWS
- Understand the purpose and theory of Kubernetes by building a complex app
- Automatically deploy your code when it is pushed to Github

## Docker

Docker is a platform that simplifies creating, deploying, and managing applications within containers. Containers are lightweight and portable, bundling the application and its dependencies together, which allows it to run consistently across multiple environments. Follow [this link](./docs/docker/introduction.md) for more documentation.

### 1. Docker Client

The **Docker Client** is the user interface for Docker. It's a _command-line interface_ (CLI) tool that allows users to interact with the Docker platform. The client communicates with the Docker Server, sending commands to build, run, and manage containers. The primary commands for interacting with Docker include:

- `docker build` - Creates an image from a Dockerfile.
- `docker run` - Creates and starts a new container.
- `docker stop` - Stops a running container.

More information can be found [here](./docs/docker/docker-client.md).

### 2. Docker Server

The **Docker Server** (or Docker Daemon) is the core of Docker’s architecture, running on the host machine and handling all Docker operations. It listens for commands from the Docker Client and manages containers, images, networks, and volumes on behalf of the user. The Docker Server is responsible for:

- **Building Images** - Creating images based on Dockerfile instructions.
- **Managing Containers** - Creating, starting, stopping, and destroying containers.
- **Orchestrating Networks** - Setting up networks so containers can communicate with each other.
- **Handling Storage** - Managing data volumes to store persistent data outside containers.

The Docker Server runs in the background on the host machine and can be managed by the Docker Client or other Docker tools. More information can be found [here](./docs/docker/docker-server.md).

### 3. Making a Real Project

When creating a real-world project, Docker can simplify environment setup and application deployment by packaging everything needed for the project into a container. Here’s a high-level overview of using Docker in a project:

- **Define Dependencies** - Using a Dockerfile, specify the project’s dependencies (OS, libraries, runtime, etc.).
- **Build an Image** - Run docker build to create a container image of the application. This image can then be shared or deployed consistently across environments.
- **Run the Container** - Use docker run to launch a container based on the image, making the application available locally or on a server.

Using Docker in a real project ensures that the application runs in a controlled environment. Find more details [here](./docs/docker/basic-project.md) and explore a [Dockerized project example](./apps/simpleweb/README.md).

### 4. Docker Compose

**Docker Compose** is a tool for defining and running _multi-container_ Docker applications. With a simple YAML file (typically `docker-compose.yml`), Docker Compose allows easy management of multiple services, networks, and volumes in a single configuration file. This makes it particularly useful for projects with complex dependencies, such as microservices architectures.

Key benefits of Docker Compose include:

- **Declarative Setup** - Configure services, volumes, and networks in a `docker-compose.yml` file.
- **Multi-Container Management** - Easily start, stop, and scale multiple services with commands like `docker compose up` and `docker compose down`.
- **Networking** - Docker compose sets up a private network for containers to communicate, making inter-service communication easier.

With Docker Compose, complex projects can be managed more straightforwardly, making it ideal for local development setups and testing environments. Find more details [here](./docs/docker/docker-compose.md) and explore a [Docker Compose example](./apps/visits/README.md).
