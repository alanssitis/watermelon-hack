# Build
FROM golang:1.19 AS build

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

ADD cmd ./cmd
ADD pkg ./pkg

RUN go build -o /backend ./cmd/backend/main.go

# Deploy
FROM debian:bullseye-slim

WORKDIR /

COPY --from=build /backend /backend

ENTRYPOINT ["/backend"]
