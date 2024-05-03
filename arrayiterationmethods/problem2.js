/*2)arr[{name:"prashnth",age:20},{name:"teja",age:22},{name:"shiva",age:15}];
output:prashanth,teja 
need to filter the array whose age is greater than 18*/
arr=[{name:"prashnth",age:20},{name:"teja",age:22},{name:"shiva",age:15}]
var res=arr.filter((x,y,z)=>{
      return arr[y].age>18;
})
for(i=0;i<res.length;i++){
    console.log(res[i].name);
}


