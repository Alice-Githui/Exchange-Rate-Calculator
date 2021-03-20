const currencyRate1 = document.getElementById('currencyrates1')
const currencyValue = document.getElementById('currencyvalue')
const currencyRates2 = document.getElementById('currencyrates2')
const currencyValue2 = document.getElementById('currencyvalue2')

const swapRate = document.getElementById('swap-rate')
const swap = document.getElementById('rate')

//functions
//fetch excahnge rates and update the DOM

function calculate(){

    const value1= currencyRate1.value
    const value2 = currencyRates2.value

    //console.log(value1, value2)

    fetch(`https://api.exchangerate-api.com/v4/latest/${value1}`)
    .then(function(response){
        return response.json() //can also use fatarrow functions and fatarrow shortcut

    }) 
    .then(function(data){
       // console.log(data);

       const rate = data.rates[value2] //the .rates is for the rates that are in the object returned and under console.log(data)
       //console.log(rate)  -- gives value of chosen currency

       swapRate.innerHTML = `1 ${value1} = ${rate} ${value2}`

       currencyValue2.value = (currencyValue.value * rate).toFixed(2)
    })

}


//eventListeners
currencyRate1.addEventListener('change', calculate);
currencyRates2.addEventListener('change', calculate);
currencyValue.addEventListener('input', calculate);
currencyValue2.addEventListener('input', calculate);

swap.addEventListener('click', function(){
    const temp = currencyRate1.value;
    currencyRate1.value = currencyRates2.value;
    currencyRates2.value = temp;

    calculate();
})

calculate()

