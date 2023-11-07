FROM node:20-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the contents of the current directory into the container
COPY ./build .

# Copy the package.json file from the current directory into the container
COPY package.json .

# Install project dependencies
RUN npm install ci

EXPOSE 3000
