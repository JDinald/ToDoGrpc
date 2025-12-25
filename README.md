**gRPC Service with JSON Transcoding + Nuxt Frontend**

**Overview**
This project demonstrates building a gRPC service with comprehensive CRUD functionalities, including Create, Read (single), List (multiple), Update, and Delete methods. Built with .NET 10 and leveraging the JSON transcoding feature, the service is made accessible as a REST-based API, enabling web-based endpoints to consume it. The project includes a modern Nuxt.js frontend with a beautiful dark green, dark, and gold color scheme.

**Features**
* **Built with .NET 10**: Leverages the latest .NET 10 framework with enhanced performance and features
* **Entity Framework Core 10.0.1**: Latest SQLite provider for robust data persistence
* **gRPC 2.76.0**: Latest gRPC AspNetCore with JSON transcoding support
* **gRPC Methods**: Implements five fundamental methods:
  * Create: Add new entries.
  * Read (single): Retrieve a specific entry.
  * List (multiple): Fetch multiple entries.
  * Update: Modify an existing entry.
  * Delete: Remove an entry.
* **JSON Transcoding**: Utilizes the JSON transcoding feature to transcode between gRPC and RESTful calls seamlessly
* **Dual-Protocol Support**: Offers simultaneous support for both gRPC and REST clients, ensuring broad compatibility and accessibility
* **Modern Frontend**: Nuxt 4 UI with dark green, dark, and gold theme for an elegant user experience
* **Full Docker Support**: Complete containerized deployment with backend and frontend
  * Development mode with hot-reload for both services
  * Production-ready multi-stage builds
  * Single command to run entire stack
* **CORS Enabled**: Configured to allow cross-origin requests from the frontend

## Getting Started

### Prerequisites

**For local development:**
- .NET 10 SDK or later
- Node.js 22+ (for frontend development)

**For Docker:**
- Docker and Docker Compose

### Option 1: Docker (Recommended for Development)

Run the entire application (backend + frontend) with one command:

```bash
# Start both backend and frontend in development mode with hot reload
docker-compose up --build

# This will:
# - Build and run the .NET backend (port 5225)
# - Build and run the Nuxt frontend (port 3000)
# - Enable hot-reload for both services
# - Create a shared network for communication
```

**Access the application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5225/v1/todo

**Stop the application:**
```bash
docker-compose down
```

### Option 2: Local Development (Manual)

**Backend:**
```bash
dotnet restore
dotnet run
```
Backend will be available at http://localhost:5225

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```
Frontend will be available at http://localhost:3000

### Production Deployment

```bash
# Build and run in production mode
docker-compose -f docker-compose.prod.yml up --build -d

# Stop production containers
docker-compose -f docker-compose.prod.yml down
```

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
