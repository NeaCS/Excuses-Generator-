let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function onLoad(a,b,c,d) {
    return a[Math.floor(Math.random()*3)] + " " + b[Math.floor(Math.random()*3)] + " " + c[Math.floor(Math.random()*3)] + " " + d[Math.floor(Math.random()*3)]

}


let newExcuse = onLoad(who,action,what,when);

document.getElementById("excuse").innerHTML = newExcuse; 
