# Creating Production-Grade Workflows

## Development Workflow

What is a _Development Workflow_?
![development workflow](./images/dev-workflow.excalidraw.png)

### Flow Specifics

![flow specifics](./images/flow-specifices.excalidraw.png)

### Docker's Purpose

- The Flow Diagram didn't mention anything about Docker!
- Docker is a **tool** in a normal development flow.
- Docker makes some of these tasks a lot easier.

### Necessary Commands

These essential commands facilitate project workflow management, covering development, testing, and production stages. Each command serves a specific role, ensuring efficient progress across all phases.

- **npm run start** - Starts up a development server. _For development use only._
- **npm run test** - Runs tests associated with the project.
- **npm run build** - Builds a **production** version of the application.

## Docker Volumes

![docker volumes](./images/docker-volumes.excalidraw.png)

## Building for Production

### Need for Nginx

![nginx](./images/nginx.excalidraw.png)

### Multi-Step Docker Builds

![multi step builds](./images/multi-step.excalidraw.png)
