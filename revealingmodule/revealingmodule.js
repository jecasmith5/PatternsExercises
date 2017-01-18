var RevealingModule = (function (){
  var private = 5;

  var publicFunction = function (){
    return private;
  }
  return{
    publicFunction:publicFunction
  }

}());
console.log(RevealingModule.publicFunction());
