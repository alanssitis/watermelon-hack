# Build
FROM golang:1.19 AS build

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./

RUN go build -o /backend

# Deploy
FROM debian:bullseye-slim

WORKDIR /

COPY --from=build /backend /backend

ENTRYPOINT ["/backend"]
