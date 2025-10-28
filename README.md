# 📝 NoteKeeper API
A lightweight full-stack application built with C# (.NET Core) for the backend and Angular with Angular Material for the frontend!

## 💭 Features
- CRUD notes
- Full-stack API built with C# Core
- Routing for adding/editing notes and viewing all notes
- Entity Framework Core + SQLite

## ✅ Getting Started
### Prerequisites
- .NET 7 SDK
- Node.js and npm
- Angular CLI:
```bash
npm install -g @angular/cli
```

## 💻 Run Locally
### Cloning
```bash
git clone https://github.com/DaraMoh/NoteKeeperApp.git
```
### Backend (API)
```bash
cd NoteKeeperApp/NoteKeeper.Api
dotnet ef database update
dotnet run
```
### Frontend (Angular)
```bash
cd notekeeper-frontend
npm install
ng serve
```

## ⚙️ Technologies Used
- Backend: C# .NET Core 7, Entity Framework Core
- Frontend: Angular 16, Angular Material, TypeScript
- Styling: CSS, Angular Material Components
- Animation: Angular Animations

## ✨ Future Improvements (Possibly)
- Add user authentication
- Categorize notes with tags and/or colors
- Search functionality
- Drag-and-drop note functionality
- Light/Dark mode
