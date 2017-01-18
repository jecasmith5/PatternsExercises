var spiderman=(function () {
  var secretIdentity = "Peter Parker";

return{
  civilianHobbies: function(){
    console.log("Photography");
  },
  spiderHobbies: function(){
    console.log("webslinging," + " " + "Saving New York");
  }

};

})();

//spiderman. secretIdentity = "Overrides and shows new secretIdentity";

console.log(spiderman.secretIdentity);

spiderman.spiderHobbies();

spiderman.civilianHobbies();
