// write js code here corresponding to favourites.html
 favArr=JSON.parse(localStorage.getItem("favourites"))
displayData(favArr)

function displayData(favArr){
    favArr.forEach(function(elem,index){
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
         td6.innerText = "delete"
         td6.style.color = "red"
         td6.style.cursor = "pointer"
         td6.addEventListener("click", function(){
                Delete1(elem,index)
         })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function  Delete1(elem,index){
    favArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favArr))
    window.location.reload();
}