# Visits - Count the Page Visits

## Overview

The **Visits** application is a _multi-container setup_ consisting of a Node.js service and a Redis datastore to count and store page visits. The necessary configuration files for Docker are located in the [`/docker`](/docker/) directory, including `Visits.Dockerfile` and `Visits.docker-compose.yml`. The application's source code can be found in the [`/apps/visits`](/apps/visits/) directory.

## Usage Instructions

To build the Docker image and manage the containers, use the following commands:

```bash
  # Build the Image and Start Containers
  docker compose -f docker/visits.docker-compose.yml up -d --build

  # Stop a Container
  docker compose -f docker/visits.docker-compose.yml down
```

### Command Breakdown

- `-f docker/visits.docker-compose.yml` - Specifies the path to the Docker Compose file, indicating that it is located outside the default directory.
- `-d` - Starts the services in the background, allowing to continue using the terminal.
- `--build` - Builds the images before starting the containers, ensuring that any changes to the Dockerfile and source code are applied.

## Summary

The **Visits** application utilizes Docker Compose to facilitate a smooth deployment process, ensuring consistent operation on any system with Docker installed. By isolating the Node.js service and Redis datastore in separate containers, this configuration simplifies management and scaling. The startup command optimizes the setup by running services in the background, allowing for uninterrupted terminal access.
