
var elForm = document.querySelector(".js-form");
var elEntryMoney = elForm.querySelector(".js-entryMoney-input");
var elSelectCurrency = elForm.querySelector(".js-selectedCurrency");
var elConverterResult = elForm.querySelector(".js-convertedMoney-result")

var inputValue = Number(elEntryMoney.value)

elConverterResult.textContent = "0 so'm"

elForm.addEventListener("submit", function(evt){
    
    evt.preventDefault();
    
    var inputValue = elEntryMoney.value
    var selectValue = elSelectCurrency.value
    
    var USDconverter = inputValue * 12400;
    var EURconverter = inputValue * 13514;
    var AUDconverter = inputValue * 8273;
    var CADconverter = inputValue * 9213;
    
    if (selectValue === "USD" ) {
        elConverterResult.textContent = USDconverter;
    } else if (selectValue === "EUR") {
        elConverterResult.textContent = EURconverter;
    } else if (selectValue === "AUD") {
        elConverterResult.textContent = AUDconverter;
    } else {
        elConverterResult.textContent = CADconverter;
    }
    
})

