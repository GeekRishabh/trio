## Description

1. Web API(Backend Facing Frontend) for handling REST and WebSocket the codename is Nashville.
2. Task Manager micro-service which handles the logic. Its codename is Gallatin.
2. Logger micro-service that logs events to the console or another place in the future. Its codename is Ashland.

The Nashville BFF would interact with the Gallatin micro-service via GRPC.
- Both Microservices (Ashland, Gallatin) are connected to a RabbitMQ message broker.
- Gallatin should emit all logical events (e.g., a new Task has been created and so on.) to the Ashland.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

