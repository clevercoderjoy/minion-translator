const btn = document.querySelector('#btn-translate');
const input = document.querySelector('#ip');
const output = document.querySelector('#op');


function errorHandler(error){
    console.log("error: ", error);
}

function translate(){
    var inputTxt = input.value;
    var serverURL = "https://api.funtranslations.com/translate/minion.json";
    const url = serverURL+ "?"+"text="+inputTxt;
    fetch(url)
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(errorHandler)
}

btn.addEventListener("click", translate);