function byId(id) {
    return document.getElementById(id);
}
function randItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}
function format(str,stand) {
    var string = str.replace(stand+'{','');
    string = string.replace('}','');
    return string;
}
function mean(arr) {
    var number = 0;
    for (i = 0; i < arr.length; i++) {
        number += arr[i];
    }
    return number/arr.length;
}
function sum(arr) {
    var number = 0;
    for (i = 0; i < arr.length; i++) {
        number += arr[i];
    }
    return number;
}
function numberate(arr) {
    var newarr = [];
    for (i = 0; i < arr.length; i++) {
        newarr.push(Number(arr[i]));
    }
    return newarr;
}
function deviation(arr,choice) {
    var nummean = mean(arr);
    var newarr = [];
    for (i = 0; i < arr.length; i++) {
        newarr.push(arr[i]-nummean);
    }
    return choice == 1 ? sum(newarr) : newarr;
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
    var newarr = [0];
    var curarr = arr.split(',');
    for (k = 0; k < curarr.length; k++) {
        curarr[k] = Number(curarr[k]);
    }
    var length = curarr.length;
    for (i = 0; i < length; i++) {
        lowest = 100000000;
        lowestindex = 100000000;
        for (j = 0; j < curarr.length; j++) {
            if (curarr[j] <= lowest) {
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
function sortDown(arr) {
    var highest = -1000000000;
    var highestindex;
    var newarr = [0];
    var curarr = arr.split(',');
    for (k = 0; k < curarr.length; k++) {
        curarr[k] = Number(curarr[k]);
    }
    var length = curarr.length;
    for (i = 0; i < length; i++) {
        highest = -100000000;
        highestindex = 100000000;
        for (j = 0; j < curarr.length; j++) {
            if (curarr[j] >= highest) {
                highest = curarr[j];
                highestindex = j;
            }
        }
        newarr.push(curarr[highestindex]);
        curarr.splice(highestindex,1);
    }
    newarr.splice(0,1);
    return newarr;
}
function mad(arr,roundmeter) {
    var meter = Math.log10(roundmeter);
    if (meter % 1 != 0) {
        //return "Failure";
    }
    var arr = arr.split(',');
    for (m = 0; m < arr.length; m++) {
        arr[m] = Number(arr[m]);
    }
    var nummean = Number(mean(arr).toFixed(meter));
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        total += Math.abs(arr[i]-nummean);
    }
    return Number((total/arr.length).toFixed(meter));
}
function sd(arr,roundmeter) {
    var meter = Math.log10(roundmeter);
    var newarr = arr;
    console.log(arr);
    var arr = newarr.split(',');
    for (m = 0; m < arr.length; m++) {
        arr[m] = Number(arr[m]);
    }
    var nummean = Number(mean(arr).toFixed(meter));
    var total = [];
    var totaldev = 0;
    for (i = 0; i < arr.length; i++) {
        total.push(arr[i]-nummean);
    }
    for (j = 0; j < total.length; j++) {
        total[j] = total[j]*total[j];
    }
    for (k = 0; k < total.length; k++) {
        totaldev += total[k];
    }
    totaldev /= total.length;
    totaldev = Math.sqrt(totaldev);
    return Number(totaldev.toFixed(meter));
}
function cov(set1,set2) {
    var dev1 = deviation(set1,2);
    var dev2 = deviation(set2,2);
    var mdev = [];
    for (i = 0; i < set1.length; i++) {
        mdev.push(dev1[i]*dev2[i]);
    }
    var devsum = sum(mdev);
    return (devsum/set1.length)/(sd(set1.toString())*sd(set2.toString()));
} 
function cc(set1,set2) {
    var dev1 = deviation(set1,2);
    var dev2 = deviation(set2,2);
    var dev3 = [];
    var dev4 = [];
    var dev5 = [];
    for (var i = 0; i < set1.length; i++) {
        dev3.push(dev1[i]*dev2[i]);
    }
    for (var i = 0; i < set1.length; i++) {
        dev4.push(dev1[i]*dev1[i]);
    }
    for (var i = 0; i < set1.length; i++) {
        dev5.push(dev2[i]*dev2[i]);
    }
    var sum1 = sum(dev3);
    var sum2 = sum(dev4);
    var sum3 = sum(dev5);
    var totalsum = sum1+sum2+sum3;
    return sum1/(Math.sqrt(sum2*sum3));
    /*var xy = [];
    var x2 = [];
    var y2 = [];
    for (i = 0; i < set1.length; i++) {
        xy.push(set1[i]*set2[i]);
    }
    for (j = 0; j < set1.length; j++) {
        x2.push(set1[j]*set1[j]);
        console.log(set1[j]);
    }
    for (k = 0; k < set2.length; k++) {
        y2.push(set2[k]*set2[k]);
        console.log(set2[k]);
    }
    var sx = mean(set1);
    var sy = mean(set2);
    var sxy = sum(xy);
    var sx2 = sum(x2);
    var sy2 = sum(y2);
    console.log(sx,sy,sxy,sx2,sy2);
    var arrlength = set1.length;
    var final = (arrlength*sxy)-(sx*sy)/(Math.sqrt(((arrlength*sx2)-(sx*sx))*((arrlength*sy2)-(sy*sy))));
    return final;*/
}
function pytha1(a,b) {
    var as = a*a;
    var bs = b*b;
    var cs = as+bs;
    var c = Math.sqrt(cs);
    return c;
}
function carea(r,pip) {
    if (pip == "pi") {
        return r*r+"π";
    } else {
        return r*r*3.14;
    }
}
function ccircum(r,pip) {
    if (pip == "pi") {
        return r*2+"π";
    } else {
        return r*2*3.14;
    }
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
    if (curmode.value == "SortDown") {
        text.innerHTML = sortDown(input.value);
    }
    if (curmode.value.includes("MAD")) {
        /*var roundmeter = curmode.value.split("MAD{").pop();
        roundmeter = roundmeter.replace("}","");*/
        var roundmeter = format(curmode.value,"MAD");
        text.innerHTML = mad(input.value,Number(roundmeter));
    }
    if (curmode.value.includes("SD")) {
        /*var roundmeter = curmode.value.split("MAD{").pop();
        roundmeter = roundmeter.replace("}","");*/
        var roundmeter = format(curmode.value,"SD");
        text.innerHTML = sd(input.value,Number(roundmeter));
    }
    if (curmode.value.includes("CC")) {
        var theinput = input.value.split('|');
        var set1 = numberate(theinput[0].split(','));
        var set2 = numberate(theinput[1].split(','));
        text.innerHTML = cc(set1,set2);
    }
    if (curmode.value.includes("Pytha1")) {
        /*var roundmeter = curmode.value.split("MAD{").pop();
        roundmeter = roundmeter.replace("}","");*/
        var ab = input.value.split(",");
        a = Number(ab[0]);
        b = Number(ab[1]);
        text.innerHTML = pytha1(a,b);
    }
    if (curmode.value.includes("CircleArea")) {
        var pip = format(curmode.value,"CircleArea");
        text.innerHTML = carea(input.value,pip);
    }
    if (curmode.value.includes("CircleCircum")) {
        var pip = format(curmode.value,"CircleCircum");
        text.innerHTML = ccircum(input.value,pip);
    }
    // invalid results
    if (text.innerHTML == "Failure" || text.innerHTML == "NaN") {
        text.innerHTML = "Invalid input value";
    }
});
console.log(median([1,2,3,4]));