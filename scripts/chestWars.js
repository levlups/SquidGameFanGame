var mycolor=''
var colors=['red','blue']
mycolor=colors[Math.floor(Math.random()*2)]
console.log('mycolor is :'+mycolor)

var score={'red':0,'blue':0};
global.gameState={1:'gathering',2:'started',3:'ended'}
var teamSpawn={'-48,50,-7':'red','-26,48,48':'blue'}//,'yellow':[-71,62,35],'green':[-7,41,7]}
var num=2
export function chestWars(){
	debug=true
	
	//bigSign=rtcblocklist.worldname//'Game:'+gameState[num]
	bigSign=''
	bigSignTime=3000
} 


export function checkState(poso){
	
	console.log(poso.toString())
	if(teamSpawn[poso.toString()]!==undefined){
		bigSign=teamSpawn[poso.toString()]+' has lost'//gameState[3]
	   bigSignTime=10
	   
	   
	   score[teamSpawn[poso.toString()]]=1
	   console.log(score)
	   
	   if(teamSpawn[poso.toString()].toString()==mycolor){
		 bigSign='youuuuuuuuuuuuuuuuu lost'
		 bigSignTime=10
		 
		 noa.ents.setPosition(noa.playerEntity,poso[0],poso[1]+100,poso[2])
	   }
		
	}
	
	if(score['red'] ==1 && score['blue']==1){
		bigSign='Game:'+gameState[3]
		
		
	}

 
}	
