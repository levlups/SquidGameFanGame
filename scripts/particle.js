export function makeparticle(name,pos,scene,time,size){
	 //audio.volume=0.5
	 //audio.play()
	 
	  var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
	  var c=new BABYLON.Texture("./texPack/"+funpack+"/particle/bubble.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
	  /*c.wrapU = 1, c.wrapV = 1
	 c.uOffset = .5;
c.vOffset = .5;*/
    particleSystem.particleTexture= c//new BABYLON.Texture('/textures/'+name+'.png', scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

    // Position where the particles are emiited from
	//var box=pos
	
	
	
	var partmesh= new BABYLON.Mesh("dummy", scene);//	//partmesh.clone('tot')
	partmesh.position.x=pos[0]+0.5
	partmesh.position.y=pos[1]
	partmesh.position.z=pos[2]+0.5
	//partmesh.layerMask = 0x10000000;
	noa.rendering.addMeshToScene(partmesh,false)
	particleSystem.init= function(p) {
      p.position.x = Math.random() * 0.8 - 0.4
      p.position.y = Math.random() * 0.8 - 0.4
      p.position.z = Math.random() * 0.8 - 0.4
      p.velocity.x = p.position.x / 2
      p.velocity.y = p.position.y / 2
      p.velocity.z = p.position.z / 2
      p.size =     Math.random()/2 // was 0.5
      p.age = Math.random()/2
      p.lifetime =  10
    }
	
	
	
	
	/*particleSystem.startSpriteCellID = 0;
                particleSystem.endSpriteCellID = 3;
                particleSystem.spriteCellHeight = 4;
               particleSystem.spriteCellWidth = 4;
                particleSystem.spriteCellLoop = true;
				 particleSystem.spriteCellChangeSpeed=1;
				particleSystem.spriteRandomStartCell=false;*/
	


           particleSystem.emitter= partmesh//pos// new BABYLON.Vector3(pos[0], pos[1], pos[2])//partmesh
	       particleSystem.minSize =size/2
           particleSystem.maxSize =size
		   
		   particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 0.9);
particleSystem.color2 = new BABYLON.Color4(1, 1, 1, 0.8);
particleSystem.colorDead = new BABYLON.Color4(1, 1, 1, 0.1);
		   particleSystem.blendMode =BABYLON.ParticleSystem.BLENDMODE_STANDARD;
	
		//  particleSystem.manualEmitCount=8
		   particleSystem.minEmitPower = 1;
            particleSystem.maxEmitPower = 2;
            particleSystem.updateSpeed = 0.020
			 particleSystem.gravity = new BABYLON.Vector3(0,1, 0);
			 
		
			 
	particleSystem.start()
	
	setTimeout(function() {
		particleSystem.dispose()
		partmesh.dispose()
			}, time*1000);
		
			 
	return particleSystem;
	
}