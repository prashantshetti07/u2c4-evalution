// write js code here corresponding to matches.html


var mArr=JSON.parse(localStorage.getItem("schedule"))
function handaleNamesort(){
    var selected = document.querySelector("#filterVenue").value
    filterlist= mArr.filter(function(elem){
        return elem.venue1==selected
    })
    displayData(filterlist)
}

displayData(mArr)

function displayData(mArr){
    document.querySelector("tbody").innerHTML=""
    mArr.forEach(function(elem){
        tr=document.createElement("tr")
        td1=document.createElement("td")
        td1.innerText=elem.number1
        td2=document.createElement("td")
        td2.innerText=elem.teamA1
        td3=document.createElement("td")
        td3.innerText=elem.teamB1
        td4=document.createElement("td")
        td4.innerText=elem.date1
        td5=document.createElement("td")
         td5.innerText = elem.venue1
        td6=document.createElement("td")
        td6.innerText = "favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"
        td6.addEventListener("click",function(){
            fav(elem)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
favArr = JSON.parse(localStorage.getItem("favourites"))|| [] 

function fav(elem){
    favArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(favArr))

}