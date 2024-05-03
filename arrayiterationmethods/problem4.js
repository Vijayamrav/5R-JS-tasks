
/*4)arr=[1,2,3,4,5] sum of the array elements using reduce()
output: 15 */
debugger;
arr=[1,2,3,4,5];
sum=0;
arr.reduce((x,y,z)=>{
    
    sum=sum+y;
    
},arr[0])
console.log(sum);