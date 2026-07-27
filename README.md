# Job Board Application

A Full Stack Job Board Application(Jobly) built using Spring Boot, Angular, PostgreSQL, and JWT Authentication.

## Live Demo

Frontend:
https://job-board-app-eight-zeta.vercel.app

Backend API:
https://job-board-app-1-818d.onrender.com

## Features

### User Features
- User Registration
- User Login
- Browse Available Jobs
- Apply for Jobs
- View Applied Jobs

### Employer Features
- Create Job Posts
- View Posted Jobs
- Manage Job Listings

### Security Features
- Password Encryption using BCrypt
- JWT Authentication
- Protected APIs
- CORS Configuration

---

## Tech Stack

### Frontend
- Angular
- TypeScript
- HTML
- CSS

### Backend
- Spring Boot
- Spring Data JPA
- Spring Security
- JWT

### Database
- PostgreSQL

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Render PostgreSQL

---

## Project Structure

```
Job-board-app
│
├── Frontend
│   ├── src
│   ├── app
│   └── services
│
├── Backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   └── config
│
└── README.md
```

---

## API Endpoints

### Authentication

#### Register User

POST

```http
/api/auth/register
```

Request Body

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "password123",
  "role": "USER"
}
```

#### Login

POST

```http
/api/auth/login
```

---

### Jobs

#### Get All Jobs

GET

```http
/api/jobs
```

#### Create Job

POST

```http
/api/jobs
```

---

## Database

Tables:

- users
- jobs
- applications

---

## How To Run Locally

### Backend

```bash
cd Backend

mvn clean install

mvn spring-boot:run
```

Runs on:

```text
http://localhost:8080
```

### Frontend

```bash
cd Frontend

npm install

ng serve
```

Runs on:

```text
http://localhost:4200
```

---

## Future Enhancements

- Resume Upload
- Email Notifications
- Job Search Filters
- Admin Dashboard
- Company Profiles

---

## Author

Keerthiraj K

Java Full Stack Developer

2024 Graduate
