var inputText = document.querySelector("#input");
var btnInr = document.querySelector("#inr");
var btnPounds = document.querySelector("#pounds");
var outputText = document.querySelector("#output");
var url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";

btnInr.addEventListener("click", ()=>{
    fetch(url)
    .then(response => response.json())
    .then(json =>{
        var value = json.usd.inr;
        outputText.innerText = `Indian Ruppes: ${inputText.value*value.toFixed(3)}`; 
          
    });
})



btnPounds.addEventListener("click", ()=>{
    fetch(url)
    .then(response => response.json())
    .then(json =>{
        var value = json.usd.gbp;
        outputText.innerText = `British Pounds: ${(inputText.value*value).toFixed(3)}`; 
          
    });
})


