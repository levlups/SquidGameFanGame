var vxhr=null
export function getUuid(name){
	
	
	
	  var xhr = new XMLHttpRequest();
    const url = 'https://galacticau.fun/getuuid.php';


    xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
    xhr.send("username=" + name);


    xhr.onreadystatechange = (e) => {
		
           if(vxhr==null){
			  
		

        if (xhr.responseText !== "") {
			
			 vxhr= xhr.responseText
				
            console.log(vxhr)
           localStorage.setItem('uuid', vxhr);
				}
			
              
			  
			  
		   
			  

        }
		
	}
    


    
	
	
	
}
