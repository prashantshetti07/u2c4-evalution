// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",matches1)
matchesArr=JSON.parse(localStorage.getItem("schedule")) || []
function matches1(){
     event.preventDefault()
     obj={
          number1 : masaiForm.matchNum.value,
         teamA1 : masaiForm.teamA.value,
         teamB1 : masaiForm.teamB.value,
         date1 :  masaiForm.date.value,
         venue1 : masaiForm.venue.value,
     }
     console.log (obj)
     matchesArr.push(obj)
     localStorage.setItem("schedule",JSON.stringify( matchesArr))
window.location.href="matches.html"
}