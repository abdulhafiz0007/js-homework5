
var elForm = document.querySelector(".js-findNumber-form");
var elInput = elForm.querySelector(".js-input");
var elResult = document.querySelector(".js-findNumber-result")
var elAttempCount = document.querySelector(".attempCount")

var maxAttempCount = 6;
elAttempCount.textContent = `Urinishlar soni ${maxAttempCount} ta`

var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);


elForm.addEventListener("submit", function(evt){

    evt.preventDefault();

    maxAttempCount--;
    elAttempCount.textContent = `Urinishlar soni ${maxAttempCount} ta`

    var inputValue = Number(elInput.value);

    if (maxAttempCount == 0) {
        elAttempCount.textContent = "Urinishlar soni tugadi";
        elInput.disabled = true;
        alert("Urinishlar soni tugadi");
    }

    if(inputValue > randomNumber) {
        elResult.textContent = "Siz kiritgan raqam taxminiy raqamdan katta"
    } else if (inputValue < randomNumber) {
        elResult.textContent = "Siz kiritgan raqam taxminiy raqamdan kichik"
    } else {
        elResult.textContent = "Urraa Topdingiz"
    }


})