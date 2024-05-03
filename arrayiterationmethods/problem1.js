//1) Take an arr = [1,2,3,4,5] print the array using array iteration methods
//using forEach
arr=[1,2,3,4,5];
arr.forEach((x,y,z)=>{
    console.log(z);
    
})

//using map
var result=arr.map((x,y,z)=>{
    return z;
})
console.log(result);

  
// using reduce
arr.reduce((x,y,z,a)=>{
    
    console.log(a);
})

