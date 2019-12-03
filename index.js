function add1(){
var a=document.getElementById("rupee").value;
document.getElementById("1").value=a*71.61;
document.getElementById("2").value=a*19.9;
document.getElementById("3").value=a*48.94;
document.getElementById("4").value=a*19.68;
document.getElementById("5").value=a*245.48;
document.getElementById("6").value=a*52.46;
document.getElementById("7").value=a*10.17;


}
setInterval(function(){function clock()
    {
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var p= h<12?"Am":"Pm";
    var time=`<h5>${h}:${m}:${s}-${p}</h5>`;
    document.getElementById("template").innerHTML=time;
    
    }
    clock();
},1000);
