# otherside_client

## Run with Docker

### BUILD
```
cd client
docker build -t client:dev .
```

### RUN

```
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true client:dev

```

## Run with node
```
cd client
npm install
npm start
```
