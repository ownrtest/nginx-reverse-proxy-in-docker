# nginx-reverse-proxy-in-docker

[working solution on okteto](https://reverseproxy-nginx-reverse-proxy-in-docker-bronifty.cloud.okteto.net/)

- usage

```
docker-compose up -d
```

- GET endpoints:

  - /
  - /nginx
  - /apache
  - /node2

- notes:

  - 4 servers running; 2 on port 80, 2 on port 3000; nginx reverse proxy's all 4 on localhost (default port 80) by the location (route or path on the browser bar - like /node or /apache)

- other helpful docker commands:

```
docker container stop $(docker ps -aq)
docker system prune -af
```
