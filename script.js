function byId(id) {
    return document.getElementById(id);
}
function randItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}
function mean(arr) {
    var number = 0;
    for (i = 0; i < arr.length; i++) {
        number += arr[i];
    }
    return number/arr.length;
}
function median(arr) {
    var len = arr.length;
    if (len % 2 == 0) {
        var data1 = arr[(len/2)-1];
        var data2 = arr[(len/2)];
        return mean([data1,data2]);
    } else if (len != 1 ) {
        var data1 = arr[Math.ceil(len/2)];
        return data1;
    } else if (len == 1) {
        return arr[0];
    }
}
function iqr(arr) {
    var data = arr.split(',');
    var datastring = '';
    for (i = 0; i < data.length; i++) {
        data[i] = Number(data[i]);
        datastring += data[i]+',';
    }
    data = sortUp(datastring);
    console.log(data);
    var medi = median(data);
    if (data.length % 2 == 0) {
        var splitpoint = 0;
        var set = [];
        for (j = 0; j <= data.length/2; j++) {
            set.push(data[0]);
            data.splice(0,1);
        }
        console.log(set);
        var set2 = data;
        var med1 = median(set);
        var med2 = median(set2);
        return med2-med1;
    } else {
        var splitpoint = 0;
        var set = [];
        for (k = 0; k < Math.ceil(data.length/2); k++) {
            set.push(data[0]);
            data.splice(0,1);
        }
        data.splice(0,1);
        
        var set2 = data;
        var med1 = median(set);
        var med2 = median(set2);
        console.log(set,set2,med1,med2);
        return med2-med1;
    }
}
function sortUp(arr) {
    var lowest = 1000000000;
    var lowestindex;
    var newarr = [];
    var curarr = arr.split(',');
    for (k = 0; k < curarr.length; k++) {
        curarr[k] = Number(curarr[k]);
    }
    var length = curarr.length;
    for (i = 0; i < length; i++) {
        lowest = 100000000;
        lowestindex = 100000000;
        for (j = 0; j < curarr.length; j++) {
            if (curarr[j] < lowest) {
                lowest = curarr[j];
                lowestindex = j;
            }
        }
        newarr.push(curarr[lowestindex]);
        curarr.splice(lowestindex,1);
    }
    newarr.splice(0,1);
    return newarr;
}
var sword;
var btn = byId("btn");
var text = byId("text");
var input = byId("input");
var curmode = byId("mode");
/*var adj = ["Supreme","Ultra","Awesome","Sick","Beebod","Psychic","Joyful","Zippy","Eager","Crabby","Furtive"];
var adj2 = ["Taco","Balodey","Yellow","Tomato","Tiny","Hooty","Lasagna","Omega"]
var names = ["Cat","Snail","Bassoon","Trumpet","Mouse","Eagle","Moose","Feebole","Filo","Cookie","Village"];

var direction = ["Left","Right","Forwards","Backwards"];
var dir2 = ["Vertical Loop","Horizontal Loop","Straight"]
var height = ["Up","Down","Very Up","Very Down"];
var distance = ["Far","Short","Medium"];
var terrain = ["Smooth","Sharp","Flat","Bumpy","Precise"];
var mod = ["Spinning","Bouncy","Speed","Mud","Moving Part","Spinning Moving Part","Crushing Part","Elevator Block","Elevator","Conveyor","Falling Balls"];
var act = ["Maze","Lava","Standard","Pressure","Speed Check","Jump"];
var material = ["Metal","Wood","Grass","Stone","Plastic","Concrete","Modernity Plastic","Glass","City","Snow","Sand","Dark"];
function Sword() {
    this.name = randItem(adj)+" "+randItem(adj2)+" "+randItem(names);
    this.jump = randItem(distance)+" jump where you have to go "+randItem(direction).toLowerCase()+" "+" "+randItem(dir2).toLowerCase()+" "+randItem(height).toLowerCase()+" through a "+randItem(terrain).toLowerCase()+" "+randItem(mod).toLowerCase()+" "+randItem(act).toLowerCase()+" section made of "+randItem(material).toLowerCase()+".";
}*/
btn.addEventListener("click",function() {
    if (curmode.value == "IQR") {
        text.innerHTML = iqr(input.value);
    }
    if (curmode.value == "SortUp") {
        text.innerHTML = sortUp(input.value);
    }
});
console.log(median([1,2,3,4]));