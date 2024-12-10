FROM node:22.8.0-slim

RUN apt-get update && \
    apt-get install -y openssl procps && \
    npm install -g @nestjs/cli@10.0.0

USER node 

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]