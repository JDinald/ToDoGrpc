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
* **Docker Support**: Frontend ready for containerized deployment with multi-stage builds using Node.js 22 Alpine
* **CORS Enabled**: Configured to allow cross-origin requests from the frontend

## Getting Started

### Prerequisites

- .NET 10 SDK or later
- Node.js 22+ (for frontend development)
- Docker (optional, for containerized frontend deployment)

### Backend (gRPC Service)

1. Restore dependencies:
```bash
dotnet restore
```

2. Run the gRPC service:
```bash
dotnet run
```

The service will be available at:
- HTTPS: https://localhost:7101
- HTTP: http://localhost:5225

### Frontend (Nuxt.js)

#### Option 1: Development Mode

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

#### Option 2: Docker Development (with Hot Reload)

Run frontend in Docker with live code reloading:

```bash
# From project root
docker-compose up --build

# This will:
# - Rebuild the container on each start
# - Mount your code as volumes for instant changes
# - Run in development mode with hot-reload
```

The frontend will be available at http://localhost:3000

**Note:** The container automatically rebuilds when you run `docker-compose up --build`, so any code changes are reflected immediately without rebuilding.

#### Option 3: Docker Production

For production deployment:

```bash
# From project root
docker-compose -f docker-compose.prod.yml up --build -d

# Or using Docker directly (from frontend directory):
cd frontend
docker build -t todo-frontend .
docker run -p 3000:3000 -e API_BASE_URL=http://localhost:5225 todo-frontend
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
