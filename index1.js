let pass1 = document.getElementById('pass1')
let pass2 = document.getElementById('pass2')

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate(){
  let  str1 ='';
  let  str2 ='';
  let length =15;
  
  for(let i=0 ; i<length ;i++){
    let chars
    do{
         chars = characters[Math.floor(Math.random()*characters.length)]
    }
    while(str1.includes(chars)|| str2.includes(chars) )
    str1+=chars

  
  do{
       chars = characters[Math.floor(Math.random()*characters.length)]
  }
  while(str1.includes(chars)|| str2.includes(chars) )
  str2+=chars
  }
  

  pass1.textContent=str1
  pass2.textContent=str2
}
  
 
