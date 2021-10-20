import { playsound } from './sound.js'
import {throwproj} from './projectile.js'
import {flyState,setupFlying} from './fly.js'
import {addHat} from './armor.js'
import {mouseFire} from './mouse/mouseFire.js'
import {mouseAltFire} from './mouse/mouseAltFire.js'
import {blocklook} from './blocklook'
import {makeEnt,makeStaticEnt, makeEntMesh} from './ent'
import { makePlayer,getHand,getThirPHand,addEquip } from './player'
import { playerKneel } from './animation'
import { portal} from './portal'
const screenshot = require("canvas-screenshot")

global.isFlying=false;
	var k=null
	var music=null
	
	
	var directions={"north":0,"south":1,"east":2,"west":3}
		

export function  initKeys(noa){
	
	
	
k=noa
noa.camera.zoomDistance=10
var scene=noa.rendering.getScene()



flyState()
// place some grass on right click
noa.inputs.down.on('alt-fire', function () {
	 var pos = noa.targetedBlock.adjacent
        noa.setBlock(/*blocks['bed']*/1, pos[0], pos[1], pos[2])
	if(chatOn){
		return;
	}
	if(mouseAltFire(noa)=='door'){
		return;
	}
		fired=true;
    if (noa.targetedBlock) {
		playsound('blop',0.1)
		if(blockPick!==blocks['rack']){
		//portal(noa,[noa.targetedBlock.position[0],noa.targetedBlock.position[1],noa.targetedBlock.position[2]])
		}
		if(noa.world.getBlockID(noa.targetedBlock.position[0],noa.targetedBlock.position[1]+2,noa.targetedBlock.position[2])==blocks['watertop']){
		
		makeStaticEnt(noa,'boat',[noa.targetedBlock.position[0],noa.targetedBlock.position[1]+3,noa.targetedBlock.position[2]])
		
		//rideName='none';
		//rideNameRtc=rideName
		return;
		}
		if(noa.world.getBlockID(noa.targetedBlock.position[0],noa.targetedBlock.position[1]+1,noa.targetedBlock.position[2])==blocks['rail']){
		
		makeStaticEnt(noa,'minecart',[noa.targetedBlock.position[0]+0.5,noa.targetedBlock.position[1]+1,noa.targetedBlock.position[2]+0.5])
		
		//rideName='none';
		//rideNameRtc=rideName
		return;
		}
		
        var pos = noa.targetedBlock.adjacent
        noa.setBlock(blockPick, pos[0], pos[1], pos[2])
		var dir=blocklook(noa)
		var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
		}
	//	console.log(rtcblocklist)
	
		datablock.content3=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
		//console.log(datablock.content3)
		
    }
	
})



noa.inputs.up.on('alt-fire', function () {
	if(chatOn){
		return;
	}
		fired=false;
  
})



noa.inputs.down.on('social', function () {
	
	if(chatOn){
		return;
	}
   facingF=!facingF
})

noa.inputs.up.on('chat', function () {
	
	
		
		
   chatOn=true
})

noa.inputs.up.on('zoom', function () {
	if(chatOn){
		return;
	}
	
	 if (noa.camera.zoomDistance == 10) {noa.camera.zoomDistance = 0;
		for (var i=0;i<playermesh.getChildren().length;i++){
					playermesh._children[i].visibility=false
				}
		}
	
        else if (noa.camera.zoomDistance == 0) {noa.camera.zoomDistance = 10;
		for (var i=0;i<playermesh.getChildren().length;i++){
					playermesh._children[i].visibility=true
				}
		}
	
})

noa.inputs.up.on('inventory', function () {
	
	localStorage.setItem('blockss',JSON.stringify(rtcblocklist))
	//writeJson('info.json',rtcblocklist)
	if(chatOn){
		return;
	}
	
	if(currentUI==uis.inventory){
		currentUI=uis.hotbar
		//noa.container.canvas.requestPointerLock()
		
		
		setTimeout(function(){ noa.camera.applyInputsToCamera() }, 100);

	}else if(currentUI==uis.hotbar){
		
      currentUI=uis.inventory
	  
	  document.exitPointerLock()
	 
	  
	}
})

noa.inputs.up.on('drop', function () {
	
	drop(noa,itemStack[selected])
})
	
	noa.inputs.up.on('menu', function () {
		
	
	

	
})

noa.inputs.down.on('menu', function () {
          currentUI=uis.menu
})

	noa.inputs.up.on('screenshot', function () {
		//if (document.pointerLockElement == noa.container.canvas) {
			screenshot(noa.container.canvas, {filename: 'Squid' + Date.now() + '.png'})
		//}
	})
noa.inputs.down.on('crouch', function () {
	
if(rideName!=='none'){
		addEquip('none',playermesh)

//makeStaticEnt(noa,rideName,[pos[0],pos[1]+0.5,pos[2]])
rideName='none'
rideNameRtc='none'
return true;
}



	if(isFlying){
		playerbody.applyImpulse([0,-7,0])
	}
   kneeling=!kneeling
  
   playerKneel(playermesh,kneeling)
})

// add a key binding for "E" to do the same as alt-fire

noa.inputs.bind('drop', 'Q')
noa.inputs.bind('inventory', 'E')
noa.inputs.bind('social', 'L')
noa.inputs.bind('zoom', 'Z')
noa.inputs.bind('chat', 'C')
noa.inputs.bind('crouch', '"<shift>"')
noa.inputs.bind('screenshot', 'P')
//setupFlying(noa)
mouseFire(noa)
}




	
	
	
	

	
	
	
	
	
	function checkaudio(playPromise){
	
	if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
}
	


export function drop(noa,item){
	
	if(item==null){
		return;
	}
	if(!onRail){
	countStack[selected]--
	if(countStack[selected]<=0){
		itemStack[selected]=null
		playermesh._children[1]._children[0].dispose()
	}
	}
		var matrixangle=noa.camera.getDirection()

	
	var coon=itemList[item.name].clone(item.name)
	
	
	coon.scaling=new BABYLON.Vector3(jsonItems[item.name].held.hand.scale[0], jsonItems[item.name].held.hand.scale[1], jsonItems[item.name].held.hand.scale[2]);
	
	 var cid = noa.entities.add( pos, 0.5, 0.5, coon, [0,0.5,0], true, false,true,null )
	
	 	var body=noa.ents.getPhysicsBody(cid)
		
		 var vec = matrixangle

			 vec3.normalize(vec, vec)//
			 vec3.scale(vec, vec, 10)//strength was 40
			  
			  var body = noa.entities.getPhysicsBody(cid)
			  body.applyImpulse(vec);
			   var poso = noa.ents.getState(noa.playerEntity, 'position').position
			   datablock.content4=[poso,vec,10,item.name]
			  
			  	    var onCollideEnt = function(ownID, otherID) {
				  otherID=cid
    collideEnti(noa, ownID, otherID)
  }
				setTimeout(function(){ 
				   noa.entities.addComponent(cid, noa.entities.names.collideEntities, {
					callback: onCollideEnt
				  })
				  
				  }, 500);
				  
				  
				  	  function collideEnti(noa, otherID, ownID){
						
					if(otherID==noa.playerEntity){
						noa.ents.deleteEntity(ownID)
						for (var i=0;i<itemStack.length;i++){
							 if(itemStack[i]==jsonItems[item.name]){
								countStack[i]+=1
								break;
								
							}else if(itemStack[i]==null){
								itemStack[i]=jsonItems[item.name]
								countStack[i]+=1
								break;
							}
							
							
							
							
						}
					}
						
						
                     }

	
	
	
}