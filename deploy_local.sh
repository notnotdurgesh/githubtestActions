#!/bin/bash

# Stop and remove existing container if running
docker stop my-app || true
docker rm my-app || true

# Build the Docker image
docker build -t my-app .

# Run the Docker container locally
docker run -d --name my-app -p 3000:3000 my-app
