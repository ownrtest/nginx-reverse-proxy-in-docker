# containerized-reverse-proxy-localhost

- docker-compose up and you have 3 services: one apache another nginx and a reverse proxy. Both apache and nginx listen on port 80 but those ports do not conflict with one another because they are running as separate containers inside the same multiservice docker application network (i believe it's called a 'bridge' network).

- anyhow hit localhost:8080 and you'll get the nginx service; hit localhost:8081 and you'll get the apache service. Localhost (default localhost:80) still works it serves the reverse proxy's homepage.

- notes about the nginx.conf file:
  - the 'upstream' refers to an arbitrary name for the upstream service you define in that file only (it doesn't have to correspond to anything in docker or anywhere else).
  - the 'server' refers to the actual service you want to proxy to. In this case, it's the apache service.
    - the DNS name aka the domain aka the URL to the docker container's service is the service name you define in the docker-compose file.

```
  upstream docker-nginx {
        server nginx_service:80;
    }
    server {
        listen 8080;
        location / {
            proxy_pass         http://docker-nginx;
            proxy_redirect     off;
            proxy_set_header   Host $host;
            proxy_set_header   X-Real-IP $remote_addr;
            proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Host $server_name;
        }
    }
```
