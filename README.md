# client-server-proxy

Example for connecting multiple separated Docker Compose based applications together through a reverse proxy using NGINX.

## Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Make](https://www.gnu.org/software/make/)

## Installation

This will clone the repository in your local filesystem.

```console
$ git clone https://github.com/aminnairi/client-server-proxy
$ cd client-server-proxy
```

## Setup

Edit the `/etc/hosts` file on your local filesystem with a text editor and append the following lines.

```
# client-server-proxy (client)
127.0.0.1   application.local       www.application.local

# client-server-proxy (server)
127.0.0.1   api.application.local   www.api.application.local
```

## Ignition

The ignition order is key. Do not start the client or the server before the proxy.

```console
$ make proxy
$ make client # in a new terminal
$ make server # in a new terminal
```

## Endpoints

These endpoints will be exposed once you edited the `/etc/hosts` file and started the application services.

URL | Description
---|---
[`http://application.local`](http://application.local) | Client for the application.
[`http://www.application.local`](http://www.application.local) | Client for the application (alias).
[`http://api.application.local`](http://api.application.local) | Server for the application.
[`http://www.api.application.local`](http://www.api.application.local) | Server for the application (alias).

## Stop

This will shutdown all three services in the following order: client, server and then proxy.

```console
$ make stop
```
