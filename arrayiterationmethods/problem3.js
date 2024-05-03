/*3) arr=[15,2,3,22,100] sort the array without using sort() method only using array iteration methods.
output:[2,3,15,22,100] */
arr=[15,2,3,22,100];

var sortArray=arr.map((value,index,array)=>{
      for(i=0;i<arr.length;i++){
            if(arr[index]>arr[index+1]){
                  temp=arr[index];
                  arr[index]=arr[index+1];
                  arr[index+1]=temp;
            }
      }
})
console.log(sortArray);