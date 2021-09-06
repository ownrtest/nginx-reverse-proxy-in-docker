# containerized-reverse-proxy-localhost

- usage

```
docker-compose up -d
```

- GET endpoints:

  - /
  - /apache
  - /node
  - /node2

- notes:
  - 4 servers running; 2 on port 80, 2 on port 3000; nginx reverse proxy's all 4 on localhost (default port 80) by the location (route or path on the browser bar - like /node or /apache)
