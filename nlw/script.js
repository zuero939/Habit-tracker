const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já registrado")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSETUPma", JSON.stringify(nlwSetup.data))
}
JSON.parse(localStorage.getItem("NLWSETUPma"))

const data = JSON.parse(localStorage.getItem("NLWSETUPma")) || {}

//const data = {
//  assistir: [
//  "01-18",
//  "01-19",
//  "01-20",
//  "01-21",
//  "01-22",
//  "01-23",
//  "01-24",
//  "01-25",
//  "01-26",
// "01-27",
//  "01-28",
//  "01-29",
//  ],
//}

nlwSetup.setData(data)
nlwSetup.load()
a