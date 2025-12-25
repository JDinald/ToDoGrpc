**gRPC Service with JSON Transcoding + Nuxt Frontend**

**Overview**
This project demonstrates building a gRPC service with comprehensive CRUD functionalities, including Create, Read (single), List (multiple), Update, and Delete methods. Leveraging the new JSON transcoding feature in .NET 7, the service is made accessible as a REST-based API, enabling web-based endpoints to consume it. The project includes a modern Nuxt.js frontend with a beautiful dark green, dark, and gold color scheme.

**Features**
* gRPC Methods: Implements five fundamental methods:
  * Create: Add new entries.
  * Read (single): Retrieve a specific entry.
  * List (multiple): Fetch multiple entries.
  * Update: Modify an existing entry.
  * Delete: Remove an entry.
* JSON Transcoding in .NET 7: Utilizes the JSON transcoding feature introduced in .NET 7 to transcode between gRPC and RESTful calls seamlessly.
* Dual-Protocol Support: Offers simultaneous support for both gRPC and REST clients, ensuring broad compatibility and accessibility.
* Modern Frontend: Nuxt.js-based UI with dark green, dark, and gold theme for an elegant user experience.

## Getting Started

### Backend (gRPC Service)

1. Run the gRPC service:
```bash
dotnet run
```

The service will be available at:
- HTTPS: https://localhost:7101
- HTTP: http://localhost:5225

### Frontend (Nuxt.js)

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:3000

## API Endpoints

The REST API endpoints are available at:
- `GET /v1/todo` - List all tasks
- `GET /v1/todo/{id}` - Get a specific task
- `POST /v1/todo` - Create a new task
- `PUT /v1/todo` - Update a task
- `DELETE /v1/todo/{id}` - Delete a task

## Project Structure

```
ToDoGrpc/
├── frontend/          # Nuxt.js frontend application
│   ├── assets/        # Stylesheets and assets
│   ├── composables/   # API service layer
│   ├── pages/         # Vue pages
│   └── types/         # TypeScript types
├── Data/              # Database context
├── Models/            # Data models
├── Protos/            # gRPC protocol definitions
└── Services/          # gRPC service implementations
```
