 let counter=0;
 
 function addvalue(){
   
    counter =counter +1;
    //console.log(counter);
    document.getElementById("counter").textContent=counter;

 }
 function removevalue(){
    counter=counter-1;
    document.getElementById("counter").textContent=counter;
 }