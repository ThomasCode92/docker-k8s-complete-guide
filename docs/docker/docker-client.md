# Manipulating Containers with the Docker Client

## Running a Container

`docker run hello-world`

![docker run command](./images/docker-run-command.excalidraw.png)

**Overriding Default Commands**:<br />
`docker run busybox echo hi there`<br />
`docker run busybox ls`

`docker run hello-world ls` => Will throw an error!

![busybox](./images/busybox-image.excalidraw.png)

## Container Management

- **List Containers** - `docker ps`, logs all running containers
- **List all Containers** - `docker ps --all`, logs all running and stopped containers
- **Create Container** - `docker create <image>`, create a container
- **Start Container** - `docker start -a <container_id>`, start a container
- **Run Container** - `docker run <image>`, create and start a container
