# Full Stack Internship – Botsedge (MSME)

Practice projects built while learning Spring Boot and Angular during my
full-stack internship at Botsedge. The capstone, a cafe management system,
lives in its own repositories:

- **Backend (Spring Boot):** https://github.com/TDharshini18/Cafe_management_Backend
- **Frontend (Angular):** https://github.com/TDharshini18/Cafe-management-frontend

## Angular

| Folder | What it covers |
|---|---|
| `angular/01-helloworld` | First Angular app and component basics |
| `angular/02-directives-dashboard` | Structural and attribute directives on a dashboard |
| `angular/03-data-sharing-basic` | Parent to child data flow with `@Input` / `@Output` |
| `angular/04-data-sharing-forms` | Sharing form data between a form and a list |
| `angular/05-data-sharing-list` | Form and list components communicating through a service |
| `angular/06-datasharing-bank` | Bank account dashboard: add, list, and view account details |
| `angular/07-typing-speed` | Typing speed test component |

Run any Angular project with:

```
cd angular/<project>
npm install
ng serve
```


## Spring Boot

| Folder | What it covers |
|---|---|
| `springboot/01-basic-layers` | Controller, service, repository, and model layering |
| `springboot/02-exception-handling` | Global exception handlers and request validation |
| `springboot/03-crud-topics` | REST CRUD operations on a Topic entity |
| `springboot/04-basic-security` | Spring Security login basics |
| `springboot/05-jwt-postgres-auth` | JWT authentication with roles, backed by PostgreSQL |

Run any Spring Boot project with:

```
cd springboot/<project>
./mvnw spring-boot:run
```

`05-jwt-postgres-auth` reads its configuration from environment variables:
`DB_USERNAME`, `DB_PASSWORD`, and `JWT_SECRET`.

