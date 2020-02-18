#fdebarros/NewsLetterAPI

FROM ubuntu

ENV NODE_VERSION=12.16.0
ENV NVM_DIR=/root/.nvm

#install wget
RUN  apt-get update \
    && apt-get install -y wget \
    && rm -rf /var/lib/apt/lists/* 

#install mongo
RUN apt-get update && apt-get -y install gnupg2 \
    && wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add - \
    && echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.2.list \
    && apt-get update \
    && apt-get install -y mongodb-org

COPY . /usr/src/NewsLetterAPI/app

WORKDIR /usr/src/NewsLetterAPI/app

#install node
RUN apt-get update \
    && apt-get install wget curl ca-certificates rsync -y \
    && wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash \
    && . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION} \
    && . "$NVM_DIR/nvm.sh" &&  nvm use v${NODE_VERSION} \
    && . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION} \
    && cp /root/.nvm/versions/node/v${NODE_VERSION}/bin/node /usr/bin/ \
    && cp /root/.nvm/versions/node/v${NODE_VERSION}/bin/npm /usr/bin/ \
    && /root/.nvm/versions/node/v${NODE_VERSION}/bin/npm install  leasot@latest -g \
    && npm install --save-dev nodemon \
    && npm install express --save \
    && npm install mongoose --save

RUN apt-get -y install npm

RUN mkdir -p /data/db

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000