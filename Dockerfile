# Production Dockerfile for .NET backend
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src
COPY ["ToDoGrpc.csproj", "./"]
RUN dotnet restore "ToDoGrpc.csproj"

COPY . .
RUN dotnet build "ToDoGrpc.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ToDoGrpc.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .

EXPOSE 5225
EXPOSE 7101

ENV ASPNETCORE_URLS=http://+:5225
ENTRYPOINT ["dotnet", "ToDoGrpc.dll"]
