# Express Node Mongodb Server API for Ember app. 
---
Here is a link to the front end ember app to work along with
this API. All directions for the app will be here on the server
side. 

[Front End](../../../meen-app1/blob/master/README.md)


This was a tutorial I found online but was build on a while ago 
and the turorial no longer works so I had to add a few things not
much though. Mostly because I was on cloud9 and had to deal with 
not being on my home computer. There are 4 parts to the turorial.
[Old Tutorial](http://www.programwitherik.com/setup-your-ember-project-with-node/)
---
### Lets get into making the app now
---
Once you create the meenserver folder move to that folder and 
download mongodb. Since on cloud9 this is how you would get it to
work for development purposes. 
```bash
mkdir data
echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
chmod a+x mongod
```
Now to run mogodb just type ./mongod. However if you turn off c9 
without turning off mongodb you will need to repair it so run
./mongod --repair and then ./mongod to run it back up again. 
Also in the same /meenserver if you open another terminal you can
run $ mongo and use mongo shell commands to query mongodb.

Part 1: Working this project on cloud9 and had started out with then
nodejs template. 
```bash
mkdir meenserver
cd meenserver
mkdir app
mkdir public
touch server.js
cd app
touch routes.js
cd ..
npm init
sudo npm install express mongoose body-parser --save
cd public 
touch index.html
cd ..
npm install -g ember-cli
node server 
```
When I have touch <fileName> I actually filled the contents then
however you could fill them before running node server. 

In file server.js I set the port to 8081 because when I run 
Ember on the front end it automatically runs on my port 8080.
And since I am on the same server I have to use this to run both. 
Front end Terminal
```bash
ember serve --proxy=http://localhost:8081 --live-reload false
```
Back end Terminal
```bash
node server
```
However you can create a production app of your ember front end to
run with the server side since they are already on the same server.

#### Setting up the ember app starter to quickly test the setup
/meenserver
Create the app in the server.
```bash
ember new meen-app1
cd meen-app1
ember build --environment=production --output-path=../public/
cd ..
node server
```
This should run the ember app on the server now. You should 
be able to see the app at http://localhost:8081/ 
---
### Part 2
---
File structure for server

    |_api
    |   |_quote.js
    |
    |_app
    |   |_routes.js
    |
    |_models
    |   |_quotes.js
    |
    |_package.json
    |
    |_meen-app1

Create the models file. Models is just another term for Schema.

To test the app. In /meenserver 
```bash
mongo
show databases
use RESTServer
show tables
db.quotes.find({}) 
```
You can also use postman to test your API. 
---
#### Working with Ember in /meenserver/meen-app1
---
You will be able to find documentation here.
[Front End](../../../meen-app1/blob/master/README.md)

Lets create some routes. g = generate
```bash
ember g resource quote quote:string author: string
```
I could just end after typing quote and fill things in myself but I
wanted to show you that you can use the command itself to create the
schema. 

This command also will create many other files. You can find them in
/app/model/quote.js
/app/route/quote.js
/app/templates/quote.hbs

Now to serialize the _id into id
```bash
ember g serializer application
```
/app/serializers/application.js

Also to work with the server I changed a couple lines in the
/meen-app1/config/environment.js file
lines 20-31 were added. Line 25 is very important. You will set
this to the url of your app. 

Now lets create the other files needed
```bash
ember install ember-bootstrap
ember g route quote/edit
ember g controller quote/edit
ember g route quote/new
ember g controller qoute/new
ember g adapter application
```
If you use ember g route this actually inserts a route and creates
a template for that route. Since I used qoute/edit it creates a 
folder called quote with the file edit inside. And in the routes
it creates a route within the quote route for you. Simple stuff. 

We still have to add the controllers as well. Make sure to match 
the file structure it will make things easy on you. 

Now for the adapater. This was needed so that ember would use
RESTful http requests instead of json requests which ember does
by default. I am useing version 2.6.0. Also the namespace = ''
however this is only because my api starts at '/', if it was 
something like 'api/v1' then I would have to place that in the
namespace. 

Fill out the files. I should have comments and if not I am working
on filling them out. 
---
### Finishign up
---
So lets get this baby on the road. and test things out. 
Also don't forget to check /meen-app1/app/styles/app.css

Lets test before we build
In /meenserver
Terminal 1
```bash
./mongod
```
Terminal 2
```bash
node server
```
In /meenserver/meen-app1
```bash
ember serve --proxy=http://localhost:8081 --live-reload false
```
Check to see the app running now at 
url/quote 
url/quote/new
url/quote/edit

Now if everything is working lets build the app on the server
In /meenserver/meen-app1
```bash
ember build --environment=production --output-path=../public/
```
Now in /meenserver
```bash
node server
```
You should now be able to see the app at
url:8081/quote
url:8081/quote/new
url:8081/quote/edit

If you would like to get rid of the :8081 then go into server.js
and change the port to 
```javascript
var port = process.env.PORT || 8080;
// or simply
var port = 8080;
// This is for cloud9 I am sure if on your own home computer
// port 3000 is the avg port everyone uses for testing. 
var port = 3000;
```

Well that should be it. This was fun and hope to make more. 
