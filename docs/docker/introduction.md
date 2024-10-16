# Dive Into Docker

## Docker - What and Why?

### Why Use Docker

![why docker](./images/why-docker.excalidraw.png)

### What is Docker

![what is docker](./images/what-is-docker.excalidraw.png)

## Using the Docker Client

**Basic Command:** `docker run hello-world`

![docker client](./images/docker-client.excalidraw.png)

## Containers

![containers](./images/containers.excalidraw.png)

### Linux Virtual Machine

The _Namespaces_ and _Control Group_ features are unique to the Linux operating system. To support these, Docker utilizes a _Linux Virtual Machine_. To identify the operating system used for this virtual machine, check the `OS/Arch` field after running the `docker version` command.

![linux virtual machine](./images/linux-virtual-machine.excalidraw.png)
