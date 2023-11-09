

var allproducts = document.querySelectorAll("#card")
 
var div1 = document.querySelector("#div1")

var btn1 = document.querySelector("#showprice")

var div2 = document.querySelector("#div2")

var totalprice =0



allproducts.forEach(function(item){
    item.onclick = function(){

        totalprice += +(item.getAttribute("price"))

        div1.innerHTML += item.textContent + "/"

        if(div1.innerHTML  != ""){

            btn1.style.display ="block"
        }
    }
})


btn1.onclick = function(){
    document.getElementById("div2").innerHTML = (totalprice)
}