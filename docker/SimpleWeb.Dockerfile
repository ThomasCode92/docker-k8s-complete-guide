# Specify the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/app

# Copy the files
COPY ./ ./

# Install some dependencies
RUN npm install

# Default command
CMD [ "npm", "start" ]
