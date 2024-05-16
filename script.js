function byId(id) {
    return document.getElementById(id);
}
function randItem(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}
var sword;
var btn = byId("btn");
var swordmat = byId("swordmaterial");
var swordname = byId("swordname");
var adj = ["Supreme","Ultra","Awesome","Sick","Beebod","Psychic","Joyful","Zippy","Eager","Crabby","Furtive"];
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
}
btn.addEventListener("click",function() {
    sword = new Sword();
    swordname.innerHTML = sword.name;
    swordmat.innerHTML = sword.jump;
});