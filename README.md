# DevOps Project – TechAxis

## Project Description

This project demonstrates the implementation of DevOps concepts using a simple Node.js and Express application. The project covers Git version control, Git branching strategies, Docker containerization, Docker Compose orchestration, Jenkins CI pipeline, and Nginx reverse proxy configuration.

The application displays a simple message through an Express server and is containerized using Docker for easy deployment.

---

## Technologies Used

- Node.js
- Express.js
- Git & GitHub
- Docker
- Docker Compose
- Jenkins
- Nginx

---

## Project Structure

```
devops-project-techaxis/
│── src/
│   └── index.js
│── Dockerfile
│── docker-compose.yml
│── Jenkinsfile
│── nginx.conf
│── deploy.sh
│── .dockerignore
│── .env
│── package.json
│── README.md
```

---

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Gaurav-Basnet26/DevOps-Project-TechAxis-.git
```

### 2. Go to the project directory

```bash
cd DevOps-Project-TechAxis-
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

The application will be available at:

```
http://localhost:3001
```

---

## Docker

### Build Docker Image

```bash
docker build -t devops-app .
```

### Run Docker Container

```bash
docker run -d --name devops-container -p 3001:3001 devops-app
```

---

## Docker Compose

### Start all services

```bash
docker compose up --build -d
```

### Stop all services

```bash
docker compose down
```

---

## Jenkins Pipeline

The project includes a `Jenkinsfile` that automates the following stages:

- Checkout Source Code
- Install Dependencies
- Build Application
- Run Tests
- Build Docker Image

To execute the pipeline:

1. Open Jenkins.
2. Create a new **Pipeline** project.
3. Connect the GitHub repository.
4. Use the `Jenkinsfile` from the repository.
5. Click **Build Now**.

---

## Nginx Reverse Proxy

Nginx is configured as a reverse proxy for the Express application.

Configuration file:

```
nginx.conf
```

Nginx forwards incoming requests to the Express application running inside the Docker container.

---

## Git Workflow

The following Git workflow was used:

- main
- develop
- feature branch
- Merge feature → develop
- Merge develop → main
- Merge conflict creation and resolution

---

## Environment Variables

Create a `.env` file:

```
PORT=3001
```

---

## Deployment Script

Run the deployment script:

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## Screenshots

Include screenshots of:

- Git branches
- Docker image creation
- Running Docker containers (`docker ps`)
- Docker Compose services
- Jenkins successful pipeline
- Application running in the browser

---

## Author

**Gaurav Basnet**
