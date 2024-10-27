# Specify the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/app

# Copy the package.json file
COPY ./package.json ./

# Install some dependencies
RUN npm install

# Copy source code
COPY ./ ./

# Default command
CMD [ "npm", "start" ]
