# CTF Challenge

Intentionally vulnerable application used to demonstrate security vulnerabilities

## Run the app with Docker
```
docker build -t <app_name> .
docker run -it --rm -p 3000:3000 <app_name>
```

App can now be accessed at http://localhost:3000.

### ToDo

Create Terraform file so app can be launched on various AWS services

- [ ] EC2 with IMDSv1
- [ ] EC2 with IMDSv2
- [ ] Lightsail
- [ ] ECS
