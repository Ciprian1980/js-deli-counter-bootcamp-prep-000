let num = 1;
function takeANumber(array){
  array.push(num);
  num++;
  return 


function  nowServing(lineOfPeople){
  if(lineOfPeople.length === 0){
    return 'There is nobody waiting to be served!';
    }
  else if(lineOfPeople !== []){
     return 'Currently serving ' + lineOfPeople.shift() +'.';
  } 
}
function currentLine(lineOfPeople){
  if(lineOfPeople.length === 0){
    return 'The line is currently empty.';
  }
  var newLine = 'The line is currently: ';
  var newArray = [];
  for(let i = 0; i < lineOfPeople.length; i++){
    
      newArray.push((i + 1) + '. '  +  (lineOfPeople[i]));
    
  }
  
  return newLine + newArray.join(', ');
}


