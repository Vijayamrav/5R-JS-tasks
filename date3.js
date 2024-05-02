var calcDays=(date1,date2)=>{
    d1=new Date(date1);
    d2=new Date(date2);
    m1=d1.getTime();
    m2=d2.getTime();
    m3=m2-m1;
    days=m3/(1000*3600*24);
    console.log(days);
}
calcDays('2024-04-10','2024-05-30');
// var date1=new Date('2001-07-02');
// console.log(date1.getTime());
// console.log(date1.getMilliseconds());

