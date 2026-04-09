# Simple Full Stack Docker App

## Tech Stack
- Frontend: HTML + JS
- Backend: Node.js + Express
- Docker

## Ports
- Frontend: 3000
- Backend: 5000

## Run Instructions

### Backend
cd backend
docker build -t backend-app .
docker run -p 5000:5000 backend-app

### Frontend
cd frontend
docker build -t frontend-app .
docker run -p 3000:80 frontend-app

## CI/CD
Jenkins can be used to automate build and deployment.