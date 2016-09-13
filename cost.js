window.addEventListener("load", function(){

			document.getElementById("checkvalid").addEventListener("click",start,false);
			

				

},false);

function start(){

 var pinCode= validate() ;
 var problem= document.getElementById("problemhealth").value ;

		
    
if(problem == "appendectomy"){
 				switch(true) {
   					 case ( pinCode > 99501 && pinCode < 99950 ):

    							document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
       							 break;
    				case ( pinCode > 35004 && pinCode < 36925 ):
     
     							document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
      							  break;
      				case ( pinCode > 71601 && pinCode < 72959 ):
     
     							document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
      							  break;
      							  			  
					case ( pinCode > 85001 && pinCode < 86556 ):
     
     							document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
      							  break;
      				case ( pinCode > 32004 && pinCode < 34997 ):
     
     							document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
      							  break;
      							  			  
					case ( pinCode > 60001 && pinCode < 62999 ):
     
     							document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
      							  break;
      				case ( pinCode > 66002 && pinCode < 67954 ):
     
     							document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
      							  break;
      							  			  
					case ( pinCode > 40003 && pinCode < 42788 ):
     
     							document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
      							  break;
      				case ( pinCode > 63001 && pinCode < 65899 ):
     
     							document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
      							  break;
      				case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;			  			  
					     default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
			       	}
        }else if(problem == "arthroscopic"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "asthama"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "bloodsugar"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "bonemarrow"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "brainscan"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
               default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
              
              }


        }else if(problem == "bypass"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
               default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "cancer"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "cardiologist"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
               default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "diabetes"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
               default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "foodpoison"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
               default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "gallbladder"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "heartattack"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "hbp"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "kidney"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "liver"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "neuroloogist"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "thyroid"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }else if(problem == "Weight"){

         switch(true) {
             case ( pinCode > 99501 && pinCode < 99950 ):

                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Alaska is about 21000$";      
                     break;
            case ( pinCode > 35004 && pinCode < 36925 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Albama is about 22000$"; 
                      break;
              case ( pinCode > 71601 && pinCode < 72959 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arkansas is about 23000$"; 
                      break;
                              
          case ( pinCode > 85001 && pinCode < 86556 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Arizona is about 24000$"; 
                      break;
              case ( pinCode > 32004 && pinCode < 34997 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Florida is about 23000$"; 
                      break;
                              
          case ( pinCode > 60001 && pinCode < 62999 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in  Illinois is about 31000$"; 
                      break;
              case ( pinCode > 66002 && pinCode < 67954 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kansas is about 31000$"; 
                      break;
                              
          case ( pinCode > 40003 && pinCode < 42788 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Kentucky is about 28000$"; 
                      break;
              case ( pinCode > 63001 && pinCode < 65899 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in Missouri is about 29000$"; 
                      break;
              case ( pinCode > 90001 && pinCode < 96162 ):
     
                  document.getElementById("result").innerHTML = "Cost of " + problem + " in California is about 38000$"; 
                      break;                
             default:
                    document.getElementById("result").innerHTML = "Sorry pin code not found";
    
              }


        }
  
  
  
  
  
  
  
	
function validate(){

 var pinCode= document.getElementById("pincodeBox").value ;
 var input1 = pinCode.trim();
 if (input1 = parseInt(pinCode)){

      return pinCode;
 }else{

  document.getElementById("result").innerHTML = "Enter pincode in number";

 }


}



}