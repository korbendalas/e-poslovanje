var arr=[];
var arrItem;



function onClick(){
arrItem= document.getElementById("input").value;

if ((isNaN(arrItem))||(arrItem==="")){
    var html = "Dozvoljen unos samo brojeva";
   // document.querySelector(".obavestenje").innerHTML=html;
    alert("Dozvoljen samo broj");
   document.getElementById("input").value="";
    arrItem="";
}else{
    arr.push(arrItem);
    
    document.querySelector(".obavestenje").innerHTML=arr;
    document.getElementById("input").value="";
}
console.log(arrItem);
console.log(arr);

}

function pop(){
    arr.pop();

 document.querySelector(".obavestenje").innerHTML=arr;
    document.getElementById("input").value="";
    console.log(arr);
}

function ascending(){
    arr.sort(function(a, b){return a-b});
    document.querySelector(".obavestenje").innerHTML = arr;

}

function descending(){
    arr.sort(function(a, b){return b-a});
    document.querySelector(".obavestenje").innerHTML = arr;

}