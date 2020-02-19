#fdebarros/NewsLetterAPI

FROM febarros/base:node_mongo

COPY . /usr/src/NewsLetterAPI/app

WORKDIR /usr/src/NewsLetterAPI/app

RUN apt-get -y install npm \
    && npm install --save-dev nodemon \
    && npm install express --save \
    && npm install mongoose --save

RUN mkdir -p /data/db

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000