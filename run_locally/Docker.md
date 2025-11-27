
#### To start the Docker server, first build the image, then launch the server:

```bash
docker build -f run_locally/Dockerfile -t site . && \
docker run --rm -p 4000:4000 --network="host" site
```

Always execute `docker build` before running the `docker run` command to ensure the website content is updated. **If you need to use this container for development**, please consider creating a container with the command below. Update the volume path to sync the project code inside the container (you may encounter some warnings about permissions).

```bash
docker run -it -v $(pwd):/app -w /app -p 4000:4000 --network="host" --rm --entrypoint /bin/bash ruby:latest
```

After initiating the development container, you can install dependencies (as described in the [Dockerfile](./Dockerfile)) and run the bundler and server.

> The container will be removed after you detach. If you wish to detach without removing the container, omit the `--rm` option from the `docker run` command.