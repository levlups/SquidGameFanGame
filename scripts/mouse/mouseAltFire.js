import {checkWater,checkFlower,setUpWactions} from './waterAction.js'
import {doorAction} from './doorAction.js'
import {blocklook} from '../blocklook.js'
import {stairsup,wall} from '../shapes.js'
import { makePlayer,getHand,getThirPHand,addEquip } from '../player'
global.meshname=null
export function mouseAltFire(noa){
	
	

	//wall(5)
	
	const entClick = castRay();
	
	if (!!entClick){
		
		console.log(entClick[1])
		
		if(entClick[1]=='door'){
			doorAction(meshname)
			return 'door'
			
		}
		if(entClick[1]=='fence'){
			doorAction(meshname)
			return 'fence'
			
		}
		if(entClick[1]=='stairs'){
			doorAction(meshname)
			return 'stairs'
			
		}
	   if(entClick[1]=='boat'){
		noa.ents.getState(listofmobs[entClick[2]], 'position').position
		var entpos=noa.ents.getState(listofmobs[entClick[2]], 'position').position
		
			noa.ents.setPosition(noa.playerEntity,[entpos[0],entpos[1]+1,entpos[2]])
			
			noa.ents.deleteEntity(listofmobs[entClick[2]])
			 spawnedEnt={name:'none',po:[0,0,0],id:entClick[2]}
			addEquip(entClick[1],playermesh)
			rideName=entClick[1]
			rideNameRtc=rideName
			
	   }
			
		if(entClick[2]!==mainplayerid && (entClick[3]-noa.camera.zoomDistance) <3){
			hitting=true
			target=entClick[2]
			
		}
		
		fired=true;
		    return true;
	}
	

}



export function castRay() {
	
		let ray = scene.createPickingRay(
			window.innerWidth / 2,
			window.innerHeight / 2,
			BABYLON.Matrix.Identity(),
			noa.rendering.getScene().activeCameras[0]
		);

		const hit = scene.pickWithRay(
			ray,
			(mesh) => {
				
				if(mesh.name=='boyo'){
					return false;
				}else{
				return mesh.name.startsWith('hitbox:');
				}
			},
			true
		);

		if (hit.pickedMesh) {
			
			var str=hit.pickedMesh.name.split(':');
			
			meshname=hit.pickedMesh.name
			
			//console.log(hit.pickedMesh.name.substring(7))
			//return [hit.pickedMesh.name.substring(7), hit.distance];
			//console.log('lol')
			//console.log('yo   '+str[2])
		return [str[0], str[1],str[2],str[3],hit.distance];
		} else return null;
	}



