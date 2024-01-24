**gRPC Service with JSON Transcoding**

**Overview**
This project demonstrates building a gRPC service with comprehensive CRUD functionalities, including Create, Read (single), List (multiple), Update, and Delete methods. Leveraging the new JSON transcoding feature in .NET 7, the service is made accessible as a REST-based API, enabling web-based endpoints to consume it. This dual-protocol support ensures compatibility with both native gRPC clients and REST API consumers.

**Features**
* gRPC Methods: Implements five fundamental methods:
  * Create: Add new entries.
  * Read (single): Retrieve a specific entry.
  * List (multiple): Fetch multiple entries.
  * Update: Modify an existing entry.
  * Delete: Remove an entry.
* JSON Transcoding in .NET 7: Utilizes the JSON transcoding feature introduced in .NET 7 to transcode between gRPC and RESTful calls seamlessly.
* Dual-Protocol Support: Offers simultaneous support for both gRPC and REST clients, ensuring broad compatibility and accessibility.
