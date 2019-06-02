const rd=require('readline')
rd.
x=i=>Math.ceil(Math.random()*256)
y=i=>console.log(i);
let myar=[]
for(let a=0;a<20;a++)
    myar.push(0)
myar=myar.map((x)=>Math.ceil(Math.random()*256))
let input = myar.join(' ');
//myar.map(y)
console.log(input)
input.split(' ').map(x=>String.fromCharCode(x)).reduce((a,c)=>a+c).split(' ').map(j=>console.log(j))