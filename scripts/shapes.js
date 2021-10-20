import {blocklook} from './blocklook.js'

export function stairsup(){
	
	
	var side=blocklook(noa)
	console.log(side+ ':Sqid games fan game')
	
	
	if(side=='east'){
	
	for (var i=0;i<7;i++){
	noa.setBlock(blocks['stone'],pos[0]+2+i,pos[1]+i,pos[2])
	noa.setBlock(blocks['stone'],pos[0]+2+i,pos[1]+i,pos[2]+1)
	}
	}
	
	if(side=='west'){
	for (var i=0;i<7;i++){
    noa.setBlock(blocks['stone'],pos[0]-2-i,pos[1]+i,pos[2])
	noa.setBlock(blocks['stone'],pos[0]-2-i,pos[1]+i,pos[2]+1)
	}
	
	}
	
	if(side=='north'){
		
		   for (var i=0;i<7;i++){
		   noa.setBlock(blocks['stone'],pos[0],pos[1]+i,pos[2]+2+i)
		   noa.setBlock(blocks['stone'],pos[0]+1,pos[1]+i,pos[2]+2+i)
		   }
	}
	
	if(side=='south'){
		
		 for (var i=0;i<7;i++){
		noa.setBlock(blocks['stone'],pos[0]-1,pos[1]+i,pos[2]-2-i)
		noa.setBlock(blocks['stone'],pos[0],pos[1]+i,pos[2]-2-i)
		
		 }
		   
		   
	}
		
		
}  


export function wall(h ,floor){
	
	
	var side=blocklook(noa)
	console.log(side+ ':Sqid games fan game')
	
	var po=noa.targetedBlock.adjacent
	if(side=='east'){
	
		   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
	   noa.setBlock(blocks['stone'],po[0],po[1]+j,po[2]+i)
		}
	
    
	}
	}
	
	if(side=='west'){
	
		
			   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
	   noa.setBlock(blocks['stone'],po[0],po[1]+j,po[2]+i)
		}
	
    
	}
	
	}
	
	if(side=='north'){
		
		   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
	   noa.setBlock(blocks['stone'],po[0]+i,po[1]+j,po[2])
		}
	} 
	}
	
	if(side=='south'){
		
		 	   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
	   noa.setBlock(blocks['stone'],po[0]+i,po[1]+j,po[2])
		}
	} 
		   
		   
	}
		
		
}  

     