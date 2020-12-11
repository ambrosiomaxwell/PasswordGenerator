//a list of alphanumeric characters + a way to mix up capitalized and uncapitalized letters
submitButton = document.querySelector('#final-button')
var modal = document.querySelector('#modalLoginForm')
var pLength = 1
const pNumbers = '1234567890'
const pSymbols = '!@#$%^&*()_-+=-'
const pLower = 'qwertyuiopasdfghjklzxcvbnm'
const pUpper = pLower.toUpperCase()
var finalIncluded = ''
var finalPassword = ''
var pPlacement = document.querySelector('#thePassword')


//detects what the criteria for each selector is
submitButton.addEventListener('click', function(event){

    if(event.target.matches('button')){
         //event.preventDefault();
        modal.setAttribute('display', 'none')
        var pLength = document.querySelector('#customRange11').value;
        var includeLower = document.querySelector('#lower');
        var includeUpper = document.querySelector('#upper');
        var includeSymbols = document.querySelector('#symbols');
        var includeNumbers = document.querySelector('#numbers');
        var parallel = [pLower, pUpper, pSymbols, pNumbers]
        var whatToInclude = [includeLower,includeUpper, includeSymbols, includeNumbers]
        for(x=0; x < whatToInclude.length; x++){
            if(whatToInclude[x].checked === true)
                finalIncluded = finalIncluded + parallel[x] 

        }
        
        finalPassword = passwordCreate(pLength)
        pPlacement.value = finalPassword
        
        finalIncluded = ''
        finalPassword = ''

    }
});

//random number to character function
function passwordCreate(z){
    for(x=0; x < z; x++){

    let place = Math.floor(Math.random() * finalIncluded.length)
        finalPassword = finalPassword + finalIncluded[place]

    }
    return finalPassword
}


$(document).ready(function() {

    const $valueSpan = $('.valueSpan2');
    const $value = $('#customRange11');
    $valueSpan.html($value.val());
    $value.on('input change', () => {
  
      $valueSpan.html($value.val());
    });
  });

  console.log(finalPassword)