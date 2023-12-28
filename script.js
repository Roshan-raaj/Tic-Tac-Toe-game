






let var1 = document.getElementsByClassName("eachbox");
let gamegrid=["","","","","","","","",""]
let currentplayer="X";
const heade = document.getElementById("bol")


let bnt= document.getElementById("raj");
bnt.addEventListener("click",b);

function b(){
  bnt.style.backgroundColor="violet"
 
}


function check(){
  if( gamegrid[0]=="X" && gamegrid[1]=="X" && gamegrid[2]=="X"){
    var1[0].style.backgroundColor="green"
    var1[1].style.backgroundColor="green"
    var1[2].style.backgroundColor="green"
    return true;
  }

 else if( gamegrid[3]=="X" && gamegrid[4]=="X" && gamegrid[5]=="X"){
    var1[3].style.backgroundColor="green"
    var1[4].style.backgroundColor="green"
    var1[5].style.backgroundColor="green"
    return true;
  }

  else if( gamegrid[6]=="X" && gamegrid[7]=="X" && gamegrid[8]=="X"){
    var1[6].style.backgroundColor="green"
    var1[7].style.backgroundColor="green"
    var1[8].style.backgroundColor="green"
    return true;
  }


  else if( gamegrid[0]=="X" && gamegrid[4]=="X" && gamegrid[8]=="X"){
    var1[0].style.backgroundColor="green"
    var1[4].style.backgroundColor="green"
    var1[8].style.backgroundColor="green"
    return true;
  }

  else if( gamegrid[2]=="X" && gamegrid[4]=="X" && gamegrid[6]=="X"){
    var1[2].style.backgroundColor="green"
    var1[4].style.backgroundColor="green"
    var1[6].style.backgroundColor="green"
    return true;
  }


  else if( gamegrid[0]=="X" && gamegrid[3]=="X" && gamegrid[6]=="X"){
    var1[0].style.backgroundColor="green"
    var1[3].style.backgroundColor="green"
    var1[6].style.backgroundColor="green"
    return true;
  }

  else if( gamegrid[1]=="X" && gamegrid[4]=="X" && gamegrid[7]=="X"){
    var1[1].style.backgroundColor="green"
    var1[4].style.backgroundColor="green"
    var1[7].style.backgroundColor="green"
    return true;
  }


  else if( gamegrid[2]=="X" && gamegrid[5]=="X" && gamegrid[8]=="X"){
    var1[2].style.backgroundColor="green"
    var1[5].style.backgroundColor="green"
    var1[8].style.backgroundColor="green"
    return true;
  }

  else if( gamegrid[0]=="O" && gamegrid[1]=="O" && gamegrid[2]=="O"){
    var1[0].style.backgroundColor="green"
    var1[1].style.backgroundColor="green"
    var1[2].style.backgroundColor="green"
    return true;
  }

  else if( gamegrid[3]=="O" && gamegrid[4]=="O" && gamegrid[5]=="O"){
    var1[3].style.backgroundColor="green"
    var1[4].style.backgroundColor="green"
    var1[5].style.backgroundColor="green"
    return true;
  }

  else if( gamegrid[6]=="O" && gamegrid[7]=="O" && gamegrid[8]=="O"){
    var1[6].style.backgroundColor="green"
    var1[7].style.backgroundColor="green"
    var1[8].style.backgroundColor="green"
    return true;
  }


  else if( gamegrid[0]=="O" && gamegrid[4]=="O" && gamegrid[8]=="O"){
    var1[0].style.backgroundColor="green"
    var1[4].style.backgroundColor="green"
    var1[8].style.backgroundColor="green"
    return true;
  }

  else if( gamegrid[2]=="O" && gamegrid[4]=="O" && gamegrid[6]=="O"){
    var1[2].style.backgroundColor="green"
    var1[4].style.backgroundColor="green"
    var1[6].style.backgroundColor="green"
    return true;
  }


  else if( gamegrid[0]=="O" && gamegrid[3]=="O" && gamegrid[6]=="O"){
    var1[0].style.backgroundColor="green"
    var1[3].style.backgroundColor="green"
    var1[6].style.backgroundColor="green"
    return true;
  }

  else if( gamegrid[1]=="O" && gamegrid[4]=="O" && gamegrid[7]=="O"){
    var1[1].style.backgroundColor="green"
    var1[4].style.backgroundColor="green"
    var1[7].style.backgroundColor="green"
    return true;
  }


  else if( gamegrid[2]=="O" && gamegrid[5]=="O" && gamegrid[8]=="O"){
    var1[2].style.backgroundColor="green"
    var1[5].style.backgroundColor="green"
    var1[8].style.backgroundColor="green"
    return true;
  }










}





var1[0].addEventListener("click",boy0);
function boy0(){
    if(gamegrid[0]===""){

    if(currentplayer === "X"){
    var1[0].innerText="X"
    gamegrid[0]="X";
    
   
}
else{
    var1[0].innerText="O"
    gamegrid[0]="O";

}

if(check()){
  heade.innerText=`player - ${currentplayer} win`
}
else{

if(currentplayer=="X"){
     currentplayer="O"
}

else{
  currentplayer="X"
}

heade.innerText=`current player - ${currentplayer}`
}
}



}



    var1[1].addEventListener("click",boy1);
    
    function boy1(){
        if(gamegrid[1]===""){
        if(currentplayer === "X"){
        var1[1].innerText="X"
        gamegrid[1]="X";
        
       
    }
    else{
        var1[1].innerText="O"
        gamegrid[1]="O";
        
    }
    }
    if(check()){
      heade.innerText=`player - ${currentplayer} win`
    }
    else{
    
    if(currentplayer=="X"){
         currentplayer="O"
    }
    
    else{
      currentplayer="X"
    }
    
    heade.innerText=`current player - ${currentplayer}`
    }
    }
   
   
        var1[2].addEventListener("click",boy2);
        function boy2(){
            if(gamegrid[2]===""){

            if(currentplayer === "X"){
            var1[2].innerText="X"
            gamegrid[2]="X";
           
            
        }
        else{
            var1[2].innerText="O"
            gamegrid[2]="O";
            
            
        }
        }
        if(check()){
          heade.innerText=`player - ${currentplayer} win`
        }
        else{
        
        if(currentplayer=="X"){
             currentplayer="O"
        }
        
        else{
          currentplayer="X"
        }
        
        heade.innerText=`current player - ${currentplayer}`
        }

        }
        
       
            var1[4].addEventListener("click",boy4);
            function boy4(){
                if(gamegrid[4]===""){

                if(currentplayer === "X"){
                var1[4].innerText="X"
                gamegrid[4]="X";
               
                
            }
            else{
                var1[4].innerText="O"
                gamegrid[4]="O";
                
                
            }
            }
            if(check()){
              heade.innerText=`player - ${currentplayer} win`
            }
            else{
            
            if(currentplayer=="X"){
                 currentplayer="O"
            }
            
            else{
              currentplayer="X"
            }
            
            heade.innerText=`current player - ${currentplayer}`
            }

            }
            
            

                 

                var1[3].addEventListener("click",boy3);
                function boy3(){
                    if(gamegrid[3]===""){
                    if(currentplayer === "X"){
                    var1[3].innerText="X"
                    gamegrid[3]="X";
                   
                    
                }
                else{
                    var1[3].innerText="O"
                    gamegrid[3]="O";
                   
                    
                }
                }
                if(check()){
                  heade.innerText=`player - ${currentplayer} win`
                }
                else{
                
                if(currentplayer=="X"){
                     currentplayer="O"
                }
                
                else{
                  currentplayer="X"
                }
                
                heade.innerText=`current player - ${currentplayer}`
                }

                }
               
                

                    var1[5].addEventListener("click",boy5);
                    function boy5(){
                        if(gamegrid[5]===""){
                        if(currentplayer === "X"){
                        var1[5].innerText="X"
                        gamegrid[5]="X";
                       
                        
                    }
                    else{
                        var1[5].innerText="O"
                        gamegrid[5]="O";
                        
                        
                    }
                    }
                    if(check()){
                      heade.innerText=`player - ${currentplayer} win`
                    }
                    else{
                    
                    if(currentplayer=="X"){
                         currentplayer="O"
                    }
                    
                    else{
                      currentplayer="X"
                    }
                    
                    heade.innerText=`current player - ${currentplayer}`
                    }
                    }
                    
                    

                        var1[6].addEventListener("click",boy6);
                        function boy6(){
                            if(gamegrid[6]===""){
                            if(currentplayer === "X"){
                            var1[6].innerText="X"
                            gamegrid[6]="X";
                            
                           
                        }
                        else{
                            var1[6].innerText="O"
                            gamegrid[6]="O";
                           
                           
                        }
                        }
                        if(check()){
                          heade.innerText=`player - ${currentplayer} win`
                        }
                        else{
                        
                        if(currentplayer=="X"){
                             currentplayer="O"
                        }
                        
                        else{
                          currentplayer="X"
                        }
                        
                        heade.innerText=`current player - ${currentplayer}`
                        }
                        }
                        
                       

                            var1[7].addEventListener("click",boy7);
                            function boy7(){
                                if(gamegrid[7]===""){
                                if(currentplayer === "X"){
                                var1[7].innerText="X"
                                gamegrid[7]="X";
                               
                            
                            }
                            else{
                                var1[7].innerText="O"
                                gamegrid[7]="O";
                               
                               
                            }
                            }
                            if(check()){
                              heade.innerText=`player - ${currentplayer} win`
                            }
                            else{
                            
                            if(currentplayer=="X"){
                                 currentplayer="O"
                            }
                            
                            else{
                              currentplayer="X"
                            }
                            
                            heade.innerText=`current player - ${currentplayer}`
                            }
                            }
                            
                            

                                var1[8].addEventListener("click",boy8);
                                function boy8(){
                                    if(gamegrid[8]===""){
                                    if(currentplayer === "X"){
                                    var1[8].innerText="X"
                                    gamegrid[8]="X";
                                   
                                    
                                }
                                else{
                                    var1[8].innerText="O"
                                    gamegrid[8]="O";
                                    
                                   
                                }
                                }
                                if(check()){
                                  heade.innerText=`player - ${currentplayer} win`
                                }
                                else{
                                
                                if(currentplayer=="X"){
                                     currentplayer="O"
                                }
                                
                                else{
                                  currentplayer="X"
                                }
                                
                                heade.innerText=`current player - ${currentplayer}`
                                }
                                }
                                

                               




                               
                            

                                     
                            
                        
                              
                                 
    


