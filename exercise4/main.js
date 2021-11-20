
var r;
var g;
var b;
var r2;
var g2;
var b2;

var rID1;
var gID1;
var bID1;

var rID2;
var gID2;
var bID2;

var paragraph;

document.addEventListener("DOMContentLoaded", () => {
paragraph = document.getElementById("myparagraph");    
   
})

function main()
{
    rID1 = document.getElementById("redIn").value;
    gID1 = document.getElementById("greenIn").value;
    bID1 = document.getElementById("blueIn").value;
    rID2 = document.getElementById("redIn2").value;
    gID2 = document.getElementById("greenIn2").value;
    bID2 = document.getElementById("blueIn2").value;
    var arr = [];
    arr.push(rID1);
    arr.push(gID1);
    arr.push(bID1);
    arr.push(rID2);
    arr.push(gID2);
    arr.push(bID2);
    console.log(paragraph);

    var string1 = "rgb(" + arr[3] + "," + arr[4] + "," + arr[5] + ")"
    var string2 = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")"
    paragraph.style.backgroundColor= string1;
    paragraph.style.borderColor = string2;

    console.log(string1 + string2);
}