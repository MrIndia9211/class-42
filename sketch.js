function setup(){
  var name = "raghav";
  console.log(name)
  var number = 20;
  console.log(number);
  console.log(name.length);
  console.log(name.toUpperCase());
  var test
  console.log(test);

  if(2>3){
    console.log("happy")
  }else{
    console.log("notHappy")
  }
  
switch(number){
  case 10: console.log("ten")
  break;
  case 20: console.log("twenty")
  break;
  default: break;
}
for(var i = 1;i<6;i+=2){
  console.log(i)
 
}
var n= 0;
while(n<6){
  console.log(n)
  n++
}
var friends = ["ekam","aarav","saksham"]
console.log(friends)
friends.push("!)");
console.log(friends);
friends.pop();
console.log(friends[1])
console.log(circumference(20))
}
function circumference(r){
 var c= 2*3.14*r
 return c 
}