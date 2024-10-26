# Specify the base image
FROM node:14-alpine

# Copy the files
COPY . .

# Install some dependencies
RUN npm install

# Default command
CMD [ "npm", "start" ]
