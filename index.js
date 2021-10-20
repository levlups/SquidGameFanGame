const app = require('express')();
const http = require('http').Server(app);
const fs=require('fs')

const io = require('socket.io')(http, {

  cors: {
  //  origin: "*",
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
	// allowedHeaders: ["nabilov"],
	 //credentials: true
  }
})
const port = process.env.PORT || 3000;
const cors = require('cors');
console.log(port)


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


  

io.on('connection', (socket) => {
	console.log('connected yall')
 
  
 
  socket.on('chunk', data => {
	  
	
	var no=data.ids
	var z=data.chk
	var l=no.replace('|',',').replace('|',',').replace('|',',')
	

	fs.writeFileSync('./worlds/'+l,z, function (err){
		 if (err) throw err;
  console.log('File is created successfully.');
	  })
  
  });
  
  
    socket.on('getchunk', data => {
		
		var l=data.replace('|',',')
	var yo=l.replace('|',',')
	var to=yo.replace('|',',')
	var c=to
	//console.log(c)
	
	if(fs.existsSync('./worlds/'+c)){
	var datapack = fs.readFileSync('./worlds/'+c,{
		// encoding: 'utf8',
	})
	
		socket.emit('sendingchunk',{id:data,datas:datapack.toString()})
	}
	});
	
  
  
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
