const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require('express');
const bodyParser = require("body-parser");
const { match } = require('assert');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/static"));

app.use(express.static(__dirname+"/images"));


app.get('/', function(req, res) {
   res.sendFile(__dirname+'/home.html');
});

var activeusers = [];
var waiting = [];
var inmatch = [];
var matchsocket = [];
var matchpos = [];
var frnd_waiting = [];

function getRandomInt() {
   min = Math.ceil(1);
   max = Math.floor(8);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


app.post("/",(req,res)=>{
});

app.get('/practice', function(req, res) {
   res.sendFile(__dirname+'/practice.html');
});

app.get('/race', function(req, res) {
   res.sendFile(__dirname+'/race.html');
});


//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   const n = Math.round(Math.random()*(10000));

   socket.on('new-user-joined', (name) => {
    activeusers.push({'id':socket.id,'name':name});
    console.log(`A ${name} connected`);
    socket.emit('user-joined', activeusers);
    socket.broadcast.emit('user-joined', activeusers);  //sends msg to all  except the one who has sent (broadcast)
   });

     //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      for(var m=0;m<activeusers.length;m++){
         if(activeusers[m].id == socket.id){
            activeusers.splice(m, 1);
            io.sockets.emit('user-dissconnected', activeusers);
         }
      }
   });

   socket.on('waiting',(name)=>{
      waiting.push([name,socket.id]);
   });


   socket.on('check-waiting',(name)=>{
      if(waiting.length >= 3){
         for(var h=0;h<=2;h++){
            inmatch.push({'roomno':"room"+n,"name":waiting[h][0],'ranno':5});
            socket.emit('match-found',inmatch);
            socket.broadcast.to(waiting[h][1]).emit('match-found',inmatch);
            if(h == 2){
               matchsocket.push(inmatch);
               matchpos.push(["room"+n]);
               inmatch = [];
            }
         }
         waiting.splice(0,1);
         waiting.splice(1,1);
         waiting.splice(2,1);
      }
   });
      

   socket.on('match-start', (data) => {
      for(var m=0;m<matchsocket.length;m++){
      if(matchsocket[m][0].roomno == data.roomno){
         for(var h=0;h<=2;h++){
            if(matchsocket[m][h].name == data.name){
               matchsocket[m][h] = data;
               matchsocket[m][h].id = socket.id;
               socket.emit('match-start',matchsocket);
            }else{
               socket.broadcast.to(matchsocket[m][h].id).emit('match-start',matchsocket);
            }
         }
      }
      }
   });

   socket.on('score-update', (data) => {
      for(var m=0;m<matchsocket.length;m++){
      if(matchsocket[m][0].roomno == data.roomno){
         for(var h=0;h<=2;h++){
            if(matchsocket[m][h].name == data.name){
               matchsocket[m][h] = data;
               if(data.place == "finished"){
                  for(var a=0;a<matchpos.length;a++){
                     if(matchpos[a].includes(data.roomno)){
                        if(matchpos[a].length == 1){
                           matchpos[a].push("1st place");
                           matchsocket[m][h].place = "1st place";
                           }
                        else if(matchpos[a].length == 2){
                              matchpos[a].push("2nd place");
                              matchsocket[m][h].place = "2nd place";
                           }
                        else if(matchpos[a].length == 3){
                              matchpos[a].push("3rd place");
                              matchsocket[m][h].place = "3rd place";
                           }
                        else if(matchpos[a].length == 4){
                              matchpos[a].push("4th place");
                              matchsocket[m][h].place = "4th place";
                           }
                        else if(matchpos[a].length == 5){
                              matchpos[a].push("5th place");
                              matchsocket[m][h].place = "5th place";
                           }
                     }
                  }
               }if(data.place == "unfinished"){
                  matchsocket[m][h].place = "unfinished";
               }
            }
            socket.emit('score-update',matchsocket);
            socket.broadcast.to(matchsocket[m][h].id).emit('score-update',matchsocket);
         }
      }
   }
   });

   socket.on('match-finsihed',(room)=>{
      for(var m=0;m<matchpos.length;m++){
         if(matchpos[m][0] == room){
            matchpos.splice(m,1);
         };
      }

      for(var m=0;m<matchsocket.length;m++){
         for(var h=0;h<=2;h++){
            console.log(matchsocket[m][h]);
            if(matchsocket[m][h].roomno == room){
               socket.emit('match-finished',room);
               socket.broadcast.to(matchsocket[m][h].id).emit('match-finished',room);
            }
         }
         matchsocket.splice(m,1);
      }
   });
});

http.listen(port, function() {
   console.log(`listening on port ${port}`);
});

