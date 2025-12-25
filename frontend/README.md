# ToDo Frontend

A modern Nuxt.js frontend for the gRPC ToDo service with a dark green, dark, and gold color scheme.

## Features

- 📝 Create, Read, Update, and Delete tasks
- 🎨 Beautiful dark theme with dark green and gold accents
- ⚡ Built with Nuxt 4 and Vue 3
- 🔄 Real-time task status updates (NEW, IN PROGRESS, COMPLETED)
- 📱 Responsive design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure the API base URL (optional):
```bash
cp .env.example .env
# Edit .env to change API_BASE_URL if needed (default: http://localhost:5225)
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
npm run preview
```

## Color Scheme

- **Dark Green**: #1a4d2e (Primary accent)
- **Dark**: #0d1117 (Background)
- **Gold**: #d4af37 (Highlights and CTAs)

## API Endpoints

The frontend connects to the gRPC service REST API at:
- GET `/v1/todo` - List all tasks
- GET `/v1/todo/{id}` - Get a specific task
- POST `/v1/todo` - Create a new task
- PUT `/v1/todo` - Update a task
- DELETE `/v1/todo/{id}` - Delete a task

## Project Structure

```
frontend/
├── assets/
│   └── css/
│       └── main.css          # Global styles with theme
├── composables/
│   └── useTodoApi.ts         # API service layer
├── pages/
│   └── index.vue             # Main todo page
├── types/
│   └── todo.ts               # TypeScript interfaces
├── nuxt.config.ts            # Nuxt configuration
└── package.json
```
