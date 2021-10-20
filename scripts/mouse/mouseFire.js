import {checkWater,checkFlower,setUpWactions} from './waterAction.js'
import {blocklook} from '../blocklook.js'
import {makeparticle} from '../particle.js'
import {throwproj} from '../projectile.js'
import { getHand } from '../player'
import { checkState } from '../chestWars'
export function mouseFire(noa){
	
	setUpWactions(noa)
		// clear targeted block on on left click
noa.inputs.down.on('fire', function () {
	
	if(chatOn){
		return;
	}
	const entClick = castRay();
	
	if (!!entClick){
		
		console.log(entClick[1])
		if(entClick[2]!==mainplayerid && (entClick[3]-noa.camera.zoomDistance) <3){
			hitting=true
			target=entClick[2]
		}
		//console.log(listofmobs[entClick[2]])
		if(listofmobs[entClick[2]]!==undefined){
			var body=noa.ents.getPhysicsBody(listofmobs[entClick[2]])
			body.mass=1
			body.applyImpulse([0,7,0])
			noa.ents.getState(listofmobs[entClick[2]],'info').health--
		}
	}
	if(countStack[selected]>0){
	throwproj(noa,itemStack[selected])
	countStack[selected]--
	
		if(countStack[selected]<1){
			itemStack[selected]=null
		}
		getHand(noa,itemStack[selected])
	}
	fired=true;
	
    if (noa.targetedBlock) {
		
		
        var pos = noa.targetedBlock.position
		
		checkState(Array.from(pos))
		
        noa.setBlock(0, pos[0], pos[1], pos[2])
		datablock.content3=[0, pos[0], pos[1], pos[2]]
		
		 rtcPart=[pos[0], pos[1], pos[2]]
		//var scene=noa.rendering.getScene()
	makeparticle('lol',pos,scene,11,0.3)
		var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[0, pos[0], pos[1], pos[2]]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[0, pos[0], pos[1], pos[2]]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[0, pos[0], pos[1], pos[2]]
		}
		
		
	
		
		
		checkWater (pos[0],pos[1], pos[2])
		checkFlower(pos[0],pos[1]+1, pos[2])
		//checkWaterBelowAdd (pos[0],pos[1], pos[2])
		//checkWaterHackBelowDestroy (pos[0],pos[1], pos[2])
		 //noa.setBlock(0, pos[0], pos[1], pos[2])
    }
	
	console.log(blocklook(noa))
})

noa.inputs.up.on('fire', function () {
	if(chatOn){
		return;
	}
	
	
	
	if(currentUI==uis.inventory){
		  
		  
		  setTimeout(function(){ document.exitPointerLock() }, 100);
		  return;
	}
	fired=false;
//	var num=Math.floor(Math.random()*2)+1
	//num=JSON.stringify(num)
//sounds['blop'].volume=0.1
	//var playPromise =sounds['blop'].play();

          //  checkaudio(playPromise)


   
})
	
	
}


function castRay() {
	
		let ray = scene.createPickingRay(
			window.innerWidth / 2,
			window.innerHeight / 2,
			BABYLON.Matrix.Identity(),
			noa.rendering.getScene().activeCameras[0]
		);

		const hit = scene.pickWithRay(
			ray,
			(mesh) => {
				
				return mesh.name.startsWith('hitbox:');
			},
			true
		);

		if (hit.pickedMesh) {
			
			var str=hit.pickedMesh.name.split(':');
			
			//raypos=hit.pickedMesh
			
			//console.log(hit.pickedMesh.name.substring(7))
			//return [hit.pickedMesh.name.substring(7), hit.distance];
			//console.log('lol')
			//console.log('yo   '+str[2])
		return [str[0], str[1],str[2],hit.distance];
		} else return null;
	}
