# Manipulating Containers with the Docker Client

## Running a Container

`docker run hello-world`

![docker run command](./images/docker-run-command.excalidraw.png)

**Overriding Default Commands**:<br />
`docker run busybox echo hi there`<br />
`docker run busybox ls`

`docker run hello-world ls` => Will throw an error!

![busybox](./images/busybox-image.excalidraw.png)
