import { playsound } from './sound.js'
import {makeparticle} from './particle.js'
import {getHand} from './player'
import {cubecrater,ringcrater} from './shapes'
//import { makePlayer } from './player'
export function throwproj(noa,item){
	var matrixangle=noa.camera.getDirection()
	
	console.log('wathhhhhh'+item)
	/*var options={
		height:1,
		width:1,
		depth:1
	}*/
	
		//var mat = new BABYLON.StandardMaterial("coon", noa.scene);
			//var tex = new BABYLON.Texture("./texPack/blocks/stone.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			//mat.diffuseTexture=tex
	var coon=itemList[item.name].clone(item.name)//BABYLON.MeshBuilder.CreateBox("box", options, noa.scene);
	//coon.material=mat
	coon.rotation.y=-Math.PI/2+playermesh.rotation.y
	coon.rotation.z=-Math.PI/3-noa.camera.pitch
	 var cid = noa.entities.add( [pos[0],pos[1]+1,pos[2]], 0.1, 0.1, coon, [0.2,0,0.2], true, false,false,null )
	
	 	var body=noa.ents.getPhysicsBody(cid)
		
		 var vec = matrixangle

			 vec3.normalize(vec, vec)//
			 vec3.scale(vec, vec, 40)//strength was 40
			  
			  var body = noa.entities.getPhysicsBody(cid)
			  body.applyImpulse(vec);
			  var poso = noa.ents.getState(noa.playerEntity, 'position').position
			   datablock.content4=[poso,vec,40]
	 
			    noa.entities.addComponent(cid, noa.entities.names.collideTerrain, {
					callback: collideter
				  })
				  
				    var onCollideEnt = function(ownID, otherID) {
				  otherID=cid
    collideEnti(noa, ownID, otherID,item)
  }
				  
				   noa.entities.addComponent(cid, noa.entities.names.collideEntities, {
					callback: onCollideEnt
				  })
				  		  noa.entities.addComponent(cid, noa.entities.names.info, {
					   nameinfo:  'arrow',
					   health:1
				   })
				  
				  setTimeout(function(){ 
	var blockp= noa.ents.getState(cid, 'position').position
					//	noa.ents.deleteEntity(cid)
						//playsound('./texPack/audio/rocket_launch.ogg', 0.5,undefined,noa,noa.scene)
						
						//cubecrater(blockp[0],blockp[1],blockp[2],noa,blockPick)
                            crater(blockp[0],blockp[1],blockp[2],noa,blockPick)
				  }, 1000);
				  function collideter(){
						   // noa.entities.removeComponent(cid, noa.entities.names.physics)
						//var blockp= noa.ents.getState(cid, 'position').position
					//	noa.ents.deleteEntity(cid)
						//playsound('./texPack/audio/rocket_launch.ogg', 0.5,undefined,noa,noa.scene)
						//ringcrater(blockp[0],blockp[1],blockp[2],noa,blockPick)
						//noa.ents.deleteEntity(cid)
						//noa.setBlock(0,Math.floor(blockp[0]), Math.floor(blockp[1]-1), Math.floor(blockp[2]))
					}
				  
				  

}





				  function collideEnti(noa, otherID, ownID,item){
					  
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
						getHand(noa,itemStack[selected])
						return;
					  }
						
						if(otherID!==noa.playerEntity){
							//var c=itemList['arrow'].clone('arrow')
							
							noa.ents.getState(otherID,'info').health-=1
							
							if(noa.ents.getState(otherID,'info').health<1){
								return;
							}
						var entpos=noa.ents.getState(otherID,'position').position
						
						var body=noa.ents.getPhysicsBody(otherID)
						body.applyImpulse([0,7,0])
						makeparticle('lol',entpos,scene,2,0.3)
							
							
							playsound('blop',0.1)
							
						}
						noa.ents.deleteEntity(ownID)
						
						//console.log(otherID)
						/*for (const key in listofmobs) {
							console.log(listofmobs[key])
							if(ownID==listofmobs[key]){
								var body=noa.ents.getPhysicsBody(otherID)
								console.log('wow')
										body.applyImpulse([0,1,0])
							}
						}*/
						
						
}


	export function crater(x,y,z,noa,p){

	
	var radius=5;
	var rad = Math.ceil(radius)
//	console.log('wasgggg');
	for (var i=-rad-1;i<=rad+1;i++){
		for (var k=-rad-1;k<=rad+1;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
								
											noa.setBlock(blocks['stone'],Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k );
												
												
												
									
								
						}
					}
				}
			}
			
			
			radius=12;
	rad = Math.ceil(radius)
//	console.log('wasgggg');
	for (var i=-rad-1+3;i<=rad+1-3;i++){
		for (var k=-rad-1+3;k<=rad+1-3;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
								
											
												noa.setBlock(blocks['stone'],Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k +12);
												
												
												
									
								
						}
					}
				}
			}
				  
		
	  }

