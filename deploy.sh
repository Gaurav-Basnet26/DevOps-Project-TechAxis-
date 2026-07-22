#!/bin/bash

echo "Building Docker image..."
docker build -t devops-app .

echo "Stopping old container..."
docker stop devops-container || true
docker rm devops-container || true

echo "Starting new container..."
docker run -d --name devops-container -p 3002:3001 devops-app

echo "Deployment completed!"
