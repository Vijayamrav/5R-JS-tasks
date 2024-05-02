currentDate=new Date();
var countDays=(birthdate)=>{
    cd=currentDate.getTime();
    bd=new Date(birthdate);
    birthSec=bd.getTime();
    timeDiff=birthSec-cd;
    noOfDays=Math.ceil(timeDiff/(1000*3600*24));
    console.log(noOfDays);

}
countDays('2024-07-02');