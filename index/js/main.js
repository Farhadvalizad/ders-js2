var btn=document.getElementById("btn")

btn.onclick=function(){
    var tag=document.getElementById("tag").value
    var tag2=document.getElementById("tag2").value
    var newTag2=document.createElement("span")
    var newTag=document.createElement("span")
    var myDiv=document.createElement("div")
    newTag2.innerText=tag2
    newTag.innerText=tag;
    myDiv.appendChild(newTag)
    myDiv.appendChild(newTag2)
    document.getElementById("allDiv").appendChild(myDiv)
}