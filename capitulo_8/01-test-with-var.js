var arr = [];

for(var i = 0; i <= 5; i++) {
    arr.push(function(){
        console.log(i);
    });
}

console.log(arr);

var i = 10;

for(item of arr){
    item();
}

var arrlet = [];

for(let j = 0; j <=5; j++) {
    arrlet.push(function(){
        console.log(j)
    });
}

for(let item of arrlet) {
    item();
}