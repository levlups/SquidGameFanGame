
/*if (module.hot) {
  module.hot.accept();
}*/


global.worldtype='normal'
 import { blocklook } from './blocklook' 
 
global.language="en_us"
var lz=require("lz-string");
///rtc
global.datablock = {};
global.channel=null
global.entdatablock={}
global.dominator=false
global.entMeshes={}
global.playerMeshes={}
global.rtcblocklist={}
global.storage={}
//rtc ///
global.blocks={}
global.clerk={}
//const io = require('socket.io-client')
global.socketo=null
/*global.socketo=io.connect('ws://' + 'localhost:9559/')*/

global.gameStarted=null 

	if(JSON.parse(localStorage.getItem('worldData'))==null){
		rtcblocklist={}
	}else{
	rtcblocklist=JSON.parse(localStorage.getItem('worldData'))
	}
rtcblocklist['armor']=['bearhat','','','']
rtcblocklist['seed']='00000000000'
//if(localStorage.getItem('gamestarted')!==null){
	
	gameStarted=localStorage.getItem('gamestarted')
	
	//console.log(localStorage.getItem('gamestarted')+': nabil')
	
//}


gameStarted=true
  

//player info//
global.playermesh=null
global.playerbody=null
global.fired=false
global.blockPick=0
global.facingF=false
global.kneeling=false
global.pos=null
global.inWater=false
//player info
global.scene=null
global.listofplayers={}
global.listofmobs={}

global.dataMoblock = {};
global.hitting=false
global.itemList={}
global.health=12
global.target=null
global.noa2=null
global.rideName='none'
global.rideNameRtc='none'
global.spawnedEnt=null
global.rtcHand=null
global.rtcPart=null
//global.facingView='north'


///servers//
global.serverResponse=null
global.entityList ={}
var entityIgnore=0
//modding
global.funpack="mod1"


if(window.location.href.indexOf("start") > -1){
	dominator=true
}

global.uuid = require('uuid').v4;



global.mainplayerid=uuid()


/*setTimeout(function() {
		fetch('http://localhost:9559').then ( response => response.json())
			.then(function(data) {
				console.log('sweet')
				serverResponse=data
				resultChatMessage=serverResponse.welcome
				console.log(data)
				})
				})*/

import * as BABYLON from '@babylonjs/core/Legacy/legacy'

// Engine options object, and engine instantiation:
import { Engine } from 'noa-engine'

import { makePlayer,getHand,getThirPHand,addEquip } from './player'
import { getItemList } from './itemList'
import { getLangList } from './langList'
import { makeWorld} from './worldgen'
import { initBlocks } from './registry'
import { initKeys,drop } from './keyFunc'
import { playerAnim,playerKneel,createFunc } from './animation'
import {makeEnt,makeStaticEnt, makeEntMesh,makeStaticMesh,makeProp,makeSuperEnt} from './ent'
import { makeCube } from './cuber'
import { sendChat } from './gui/chat'
import { makeparticle } from './particle'
import { makeFog } from './fog'
import { getUuid } from './xhr'
getUuid('sing')
import { initBoard} from './letterBoards'
import { rtc} from './rtc'
import {makeCanvas} from './canvas'
import {playsound,initSound} from './sound'
import {castRay} from './mouse/mouseAltFire'
import {sign} from './sign'
var vec3 = require('gl-vec3')
// or import from local filesystem when hacking locally:
// import { Engine } from '../../../noa'
var opts = {
    debug: true,
    showFPS: true,
    chunkSize: 24,
    chunkAddDistance: 4,
    chunkRemoveDistance: 5,
	playerStart: [0, 100, 0]
    // See `test` example, or noa docs/source, for more options
}
var noa = new Engine(opts)

noa2=noa

console.log(noa.camera)
initSound(noa)


createFunc(Engine)
scene=noa.rendering.getScene()
getItemList(scene)
getLangList()
global.k=noa
makeFog(scene,noa)
initBlocks(noa)
makeStaticMesh(noa,'boat')
makeEntMesh(noa,'squid')

makeEntMesh(noa,'boy')
makeEntMesh(noa,'cow')

makeStaticMesh(noa,'minecart')

sign(noa)

 if(dominator){
	 setTimeout(function(){ 


 }, 6000);
 }
 
pos = noa.ents.getState(noa.playerEntity, 'position').position



// each tick, consume any scroll events and use them to zoom camera
noa.on('tick', function (dt) {
	
	       
	
	if(playermesh==null){
		
		return;
	}

    var scroll = noa.inputs.state.scrolly
    if (scroll !== 0) {
		
	    selected+= (scroll > 0) ? 1 : -1
		blockPick+= (scroll > 0) ? 1 : -1
		
		if(selected<0 || selected>8){
			selected=0
		}
			getHand(noa,itemStack[selected])
			
	    if(blockPick<0 || blockPick>10){
			blockPick=0
		}
		
		
		
       
    }
})





global.onRail=false
global.riding=false
global.swimming=false
var carfacing=null
var offset=false

noa.on('beforeRender', function(dt) {
	
	if(playerbody==null){
		return;
	}
		if(playermesh!==null){
		playerAnim(playermesh,noa)
	}
	//console.log(playerbody.resting)
	
	riding=false
	swimming=false
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1])-1,Math.floor(pos[2]))==blocks['floor']){
		
		if(!offset){
			
			
			noa.ents.getState(noa.playerEntity,'mesh').offset=[0,-0.5,0]
				noa.ents.getState(noa.playerEntity,'shadow').offset=[0,-0.5,0]			
							offset=true
		}
		
		
	}else{
		
		if(onStairs){
		
		noa.ents.getState(noa.playerEntity,'mesh').offset=[0,0,0]
		noa.ents.getState(noa.playerEntity,'shadow').offset=[0,0,0]
		onStairs=false
      
		}				
          //offset=false
	}
	/*if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1])-1,Math.floor(pos[2]))==blocks['stairs']){
		
		if(!offset){
			
			
			noa.ents.getState(noa.playerEntity,'mesh').offset=[0,-0.5,0]
				noa.ents.getState(noa.playerEntity,'shadow').offset=[0,-0.5,0]			
							offset=true
		}
		
		
	}else{
		noa.ents.getState(noa.playerEntity,'mesh').offset=[0,0,0]
				noa.ents.getState(noa.playerEntity,'shadow').offset=[0,0,0]			
							offset=false
	}*/
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))!==0){
		
		
	
		
			if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['ladder']){
		playerbody.velocity[1]=0.65
		
		if(noa.inputs.state.forward){
			
			playerbody.velocity[1]=3
			
		}
		
		if(noa.inputs.state.sprint){
			playerbody.velocity[1]=-3
		}
	}
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['fire']){
		
		playerbody.applyImpulse([0,0.3,0])
		health-=0.1
		
	}
	
	
		
	
		
		if(playerbody.inFluid && playerbody.ratioInFluid==1){
			swimming=true
		
	
		return;
	}
	
	if(rideName=='none'){
		return true;
	}
		
		if(playerbody.inFluid && playerbody.ratioInFluid>0.3){
			riding=true
		playerbody.velocity[1]=0.65
	
		return;
	}
		
	
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['rail'] ){
		if(rideName!=='minecart'){
			return;
		}
		if(!onRail){
			
			carfacing=blocklook(noa)
			onRail=true
			noa.entities.removeComponent(noa.playerEntity, noa.entities.names.receivesInputs)
			
		}
		
		switch(carfacing){
	    case "north":	
        playerbody.velocity[0]=0		
		playerbody.velocity[2]=3
		
		break;
		
		 case "south":	
        playerbody.velocity[0]=0		 
		playerbody.velocity[2]=-3
		
		break;
		
			 case "east":
        playerbody.velocity[2]=0				 
		playerbody.velocity[0]=3
		
		break;
		
			 case "west":	
        playerbody.velocity[2]=0			 
		playerbody.velocity[0]=-3
		
		break;
		
		}
		
		
	}
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['railside'] ){
		if(rideName!=='minecart'){
			return;
		}
		if(!onRail){
			
			carfacing=blocklook(noa)
			onRail=true
			noa.entities.removeComponent(noa.playerEntity, noa.entities.names.receivesInputs)
			
		}
		
		switch(carfacing){
	    case "north":	
        playerbody.velocity[0]=0		
		playerbody.velocity[2]=3
		
		break;
		
		 case "south":	
        playerbody.velocity[0]=0		 
		playerbody.velocity[2]=-3
		
		break;
		
			 case "east":
        playerbody.velocity[2]=0				 
		playerbody.velocity[0]=3
		
		break;
		
			 case "west":	
        playerbody.velocity[2]=0			 
		playerbody.velocity[0]=-3
		
		break;
		
		}
		
		
	}
	
	
	
	
	return;
	
	}
	
	if(onRail){
		
		
		switch(carfacing){
	    case "north":		
		playerbody.velocity[2]=7
		
		break;
		
		 case "south":		
		playerbody.velocity[2]=-7
		
		break;
		
			 case "east":		
		playerbody.velocity[0]=7
		
		break;
		
			 case "west":		
		playerbody.velocity[0]=-7
		
		break;
		
		}
		noa.entities.addComponent(noa.playerEntity, noa.entities.names.receivesInputs)
		onRail=false
		
	}
	

	})

	
	 rtc()
					//initKeys(noa)
					if(gameStarted){
			         makeWorld(noa)	
                     makePlayer(noa,1 )	
			  
					// makeProp(noa,'boy',2,[0,200,10])
					// makeProp(noa,'cow',2,[5,200,10])
					
					makeEnt(noa,'squid',2,[0,100,10])
					}			
            makeCanvas(noa)
	       
		   
			
					
					var timeout=setTimeout(function(){
						       makeSuperEnt(noa,'cow',2,[10,100,10])	
					initKeys(noa)

		clearTimeout(timeout);
			}, 3000);
			
			
			var timeout1=setTimeout(function(){  
			initBoard(noa)
			clearTimeout(timeout1);
			}, 10000);
			
			if(socketo==null){
				if(localStorage.getItem(rtcblocklist.worldname)!==null){
					
				storage=JSON.parse(localStorage.getItem(rtcblocklist.worldname))
				//console.log(storage)
				}
			}
			
			
			
			var optio={
				height:5,
				width:10,
				depth: 1
			}
			
			var scene=noa.rendering.getScene()
			var mat = noa.rendering.makeStandardMaterial('box')
			const box = new BABYLON.MeshBuilder.CreateBox("box", optio, scene);
			box.material=mat
			mat.hasAlpha=true
			mat.alpha=0.5
		 noa.rendering.addMeshToScene(box, false,[0,0,0])
			 
			 
			 noa.on('tick', function(dt) {
				
				 
			/*	 if(noa.targetedBlock){
					 
					 if(blocklook(noa)=='north'){
						 
						 box.rotation.y=Math.PI
					 }
					 
					  if(blocklook(noa)=='south'){
						 
						 box.rotation.y=0
					 }
					  if(blocklook(noa)=='east'){
						 
						 box.rotation.y=Math.PI/2
					 }
					 
					  if(blocklook(noa)=='west'){
						 
						 box.rotation.y=-Math.PI/2
					 }
					 
					 pos = noa.ents.getState(noa.playerEntity, 'position').position

					  
					 
					 box.position.copyFromFloats(m.position.x+0.5, m.position.y+2.5, m.position.z)
				
				 
				 }else{
					 	 box.position.y=1000
				 box.position.x=0
				 box.position.z=0
				 }*/
			 })
			 