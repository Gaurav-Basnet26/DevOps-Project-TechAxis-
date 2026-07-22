# DevOps Project – TechAxis

## Project Description

This project demonstrates the implementation of a complete DevOps workflow for a Node.js and Express.js application.

The project uses Git and GitHub for version control, Docker for containerization, Docker Compose for multi-container orchestration, Nginx as a reverse proxy, and Jenkins for implementing a CI/CD pipeline.

The CI and CD processes are separated into two Jenkins pipelines:

- **CI Pipeline** – Builds and tests the application and creates the Docker image.
- **CD Pipeline** – Automatically deploys the Docker image after the CI pipeline completes successfully.

This project demonstrates how application code can be developed, tested, containerized, and deployed using an automated DevOps workflow.

---

## Technologies Used

- Node.js
- Express.js
- Git
- GitHub
- Docker
- Docker Compose
- Jenkins
- Nginx
- Bash

---

## Project Structure

```text
DevOps-Project-TechAxis-/
│
├── src/
│   └── index.js
│
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile.ci
├── Jenkinsfile.cd
├── nginx.conf
├── deploy.sh
├── .dockerignore
├── .gitignore
├── .env
├── package.json
├── package-lock.json
└── README.md
```

---

# Git Workflow

The project uses Git branching to manage development.

The main branches used are:

- `main` – Production-ready code
- `develop` – Development integration branch
- `feature/api` – Feature development branch

The development workflow is:

```text
feature/api
     │
     ▼
  develop
     │
     ▼
    main
```

Changes are developed in feature branches, merged into the `develop` branch, tested, and then merged into the `main` branch.

---

# Running the Application Locally

## 1. Clone the Repository

```bash
git clone https://github.com/Gaurav-Basnet26/DevOps-Project-TechAxis-.git
```

## 2. Navigate to the Project

```bash
cd DevOps-Project-TechAxis-
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Application

```bash
npm start
```

The application runs on:

```text
http://localhost:3001
```

---

# Environment Variables

The application uses environment variables for configuration.

Create a `.env` file:

```text
PORT=3001
```

The application uses the configured port to start the Express server.

---

# Docker

## Build the Docker Image

To build the Docker image manually:

```bash
docker build -t devops-app .
```

## Run the Docker Container

```bash
docker run -d \
  --name devops-container \
  -p 3002:3001 \
  devops-app
```

The application will be available at:

```text
http://localhost:3002
```

---

# Docker Compose

Docker Compose is used to run the application and Nginx reverse proxy together.

## Start the Services

```bash
docker compose up --build -d
```

## Check Running Containers

```bash
docker ps
```

## Stop the Services

```bash
docker compose down
```

The application can be accessed through the Nginx reverse proxy at:

```text
http://localhost:8081
```

The request flow is:

```text
Client / Browser
       │
       ▼
Nginx Reverse Proxy
       │
       ▼
Node.js / Express Application
```

Nginx forwards incoming requests to the Node.js application running on port `3001` inside the Docker network.

---

# Nginx Reverse Proxy

The project uses Nginx as a reverse proxy.

The configuration is stored in:

```text
nginx.conf
```

Example configuration:

```nginx
events {}

http {
    server {
        listen 80;

        location / {
            proxy_pass http://app:3001;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
```

The Nginx container receives requests on port `80` and forwards them to the `app` service on port `3001`.

---

# Jenkins CI/CD Pipeline

The project uses Jenkins to automate the Continuous Integration and Continuous Deployment process.

The CI/CD workflow consists of two separate Jenkins pipelines.

```text
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    ▼
CI Pipeline
    │
    ├── Checkout
    ├── Install Dependencies
    ├── Build
    ├── Test
    └── Docker Build
            │
            │ CI Success
            ▼
CD Pipeline
    │
    └── Deploy
            │
            ▼
Running Docker Container
```

---

## CI Pipeline

The CI pipeline is defined in:

```text
Jenkinsfile.ci
```

The CI pipeline performs the following stages:

1. **Checkout**
   - Retrieves the source code from GitHub.

2. **Install Dependencies**
   - Installs Node.js dependencies using:

```bash
npm install
```

3. **Build**
   - Builds the Docker image:

```bash
docker build -t devops-app .
```

4. **Test**
   - Runs the application tests:

```bash
npm test
```

5. **Trigger CD**
   - After the CI pipeline completes successfully, Jenkins automatically triggers the CD pipeline.

---

## CD Pipeline

The CD pipeline is defined in:

```text
Jenkinsfile.cd
```

The CD pipeline is responsible for deploying the application.

The deployment process:

1. Stops the existing Docker container.
2. Removes the old container.
3. Starts a new Docker container using the newly built image.

The deployment command uses:

```bash
docker run -d \
  --name devops-container \
  -p 3002:3001 \
  devops-app
```

---

# Jenkins Pipeline Configuration

## CI Pipeline Job

Jenkins job name:

```text
devops-project-techaxis-ci
```

The pipeline uses:

```text
Jenkinsfile.ci
```

The pipeline is configured using:

```text
Pipeline script from SCM
```

The GitHub repository is:

```text
https://github.com/Gaurav-Basnet26/DevOps-Project-TechAxis-.git
```

The branch used is:

```text
main
```

---

## CD Pipeline Job

Jenkins job name:

```text
devops-project-techaxis-cd
```

The pipeline uses:

```text
Jenkinsfile.cd
```

The CD pipeline is automatically triggered after the CI pipeline completes successfully.

This creates an automated CI/CD workflow:

```text
CI Success
    │
    ▼
Trigger CD
    │
    ▼
Deploy Application
```

---

# Automatic CI/CD Trigger

The CI pipeline can be triggered automatically when changes are pushed to GitHub using a GitHub webhook.

The complete automated workflow is:

```text
Developer Pushes Code
        │
        ▼
GitHub Repository
        │
        ▼
Jenkins CI Pipeline
        │
        ├── Build
        ├── Test
        └── Docker Build
                │
                ▼
          CI Successful
                │
                ▼
       Jenkins CD Pipeline
                │
                ▼
             Deploy
```

---

# Deployment Script

The project also includes a Bash deployment script:

```text
deploy.sh
```

Make the script executable:

```bash
chmod +x deploy.sh
```

Run the deployment:

```bash
./deploy.sh
```

The script builds the Docker image, stops the previous container, removes it, and starts a new container.

---

# Docker and Container Management

To view running containers:

```bash
docker ps
```

To view application logs:

```bash
docker logs devops-container
```

To stop the application:

```bash
docker stop devops-container
```

To remove the container:

```bash
docker rm devops-container
```

---

# Screenshots

The following screenshots can be included as evidence of the project implementation:

1. GitHub repository
2. Git branches (`main`, `develop`, and feature branch)
3. Successful Git merge
4. Docker image creation
5. Running Docker containers
6. Docker Compose services
7. Nginx reverse proxy working in the browser
8. Jenkins CI pipeline successful build
9. Jenkins CD pipeline successful deployment
10. CI pipeline automatically triggering CD pipeline
11. Application running successfully after deployment

---

## Author

**Gaurav Basnet**