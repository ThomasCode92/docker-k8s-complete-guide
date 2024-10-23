# Building Custom Images through Docker Server

## Creating Docker Images

![creating image](./images/creating-images.excalidraw.png)

At the root level of this project, there is a _`docker`_ folder containing a _`Redis.Dockerfile`_. To create an image, run the following command from the root directory:<br />
`docker build -f ./docker/Redis.Dockerfile .`.
