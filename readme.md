# Newsletter RESTful Node API #

---

### What does this API uses? ###

##### * Node 10.15.2 
##### * MongoDB 4.2.3

---

### What is this API made for? ###

##### This API was made to be used with my other project, the [*Newsletter Register*](https://github.com/fdebarros/Newsletter-Register), this was my first ever RESFTful API. Basically both project were developed for study and learning reasons (_so maybe I haven't used the best practices for it or even the best way to do the things. So don't get mad with this_). At last if you think that has something I should change, please, open a pull request. I would love to learn more with you :) .


---

### How can I run it? ###

### There's two ways to run it ###

### Docker: ###

##### To run the project using Docker i recomend using the 19.03 version or higher.
##### Enter the project folder, then run `sudo docker build -t fdebarros/news:API .`
###### _yes, it may take a loooooong time to build_
##### After the building you can now run `mkdir db_persistence`
##### And finally `docker run -v $pwd/db_persistence:/data/db -p 3000:3000 --rm -ti fdebarros/news:API`

### Locally: ###

##### First of all, you need to install Node and MongoDB, so you can take a look on the [Node](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/) and [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) tutorials.

##### After that you need to run `sudo mkdir -p /data/db`
##### Run `npm install --save-dev nodemon`, `npm install express --save` 
##### And `npm install mongoose --save`
##### Then go to the folder you cloned this repo and run `sudo mongod`*(Don't forget run as superuser)*
##### Finally run `sudo npm run start`

---

### How do I test if the API it's working? ###

##### I recommend using [Postman](https://linuxize.com/post/how-to-install-postman-on-ubuntu-18-04/) to do this.
##### It's very simple to use:

##### To test GET method:
###### Put the URL `http://localhost:3000/users` (depending on your host mapping you'll have to use `127.0.0.1:3000/users`) and click on "SEND". You'll receive the response `[]`

##### To test POST method:
###### Select POST, click on "Body" and "www-form-urlencoded". On the first key field enter "name", on the key field bellow you'll enter "email". On the first value field you can enter a name or whatever word you want, and on the email value you can do the same. Finally click on "SEND". You may see something like this: 




    [
        {
            "_id": "5e44128df5577428f9d47934",
            "name": "test",
            "email": "test@email.com",
            "__v": 0
        }
    ]


---

###### ...and that's it :heart:;

        
