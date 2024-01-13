

const btnWatchMenu=document.getElementById('watchMenu')
const currencyBtn=document.querySelector('.currency')
const prices=document.querySelectorAll('.products-item-price')
const productsBtn=document.querySelectorAll('.product-btn')
const burgerInput=document.getElementById('burger')
const nameInput=document.getElementById('name')
const phoneInput=document.getElementById('phone')
const orderBnt=document.getElementById('order-btn')
const titles=document.querySelectorAll('.products-item-title')

btnWatchMenu.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:'smooth'
    })
}
currencyBtn.onclick = () => {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
    let currentCurrency = currencyBtn.innerText;
    let newCurrency = '$';
    let coef = 0;
    if (currentCurrency === '$') {
        newCurrency = '⃀';
        coef = 89.32;
        Som(newCurrency, coef);
    } else if (currentCurrency === '⃀') {
        newCurrency = '€';
        coef = 0.91;
        convertCurrency(newCurrency, coef);
    } else if (currentCurrency === '€') {
        newCurrency = '$';
        coef = 0.91;
        Euro(newCurrency, coef);
    }
    currencyBtn.innerText = newCurrency;
};

function convertCurrency(currency, coefcit) {
    for (let i = 0; i < prices.length; i++) {
        let basePrice = prices[i].getAttribute('data-base-price');
        prices[i].innerText = (basePrice * coefcit).toFixed(2) + ' ' + currency;
}
}
//som
function Som(currencyy, coefcitt) {
    for (let i = 0; i < prices.length; i++) {
        let basePrice = prices[i].getAttribute('data-base-price');
        prices[i].innerText = (basePrice * coefcitt).toFixed(2) + ' ' + currencyy;
}
}
//euro
function Euro(currencyy, coefcitt) {
    for (let i = 0; i < prices.length; i++) {
        let basePrice = prices[i].getAttribute('data-base-price');
        prices[i].innerText = (basePrice * coefcitt).toFixed(2) + ' ' + currencyy;
}
}

//
productsBtn.forEach((btn, i)=>{

    btn.onclick=()=>{
        burgerInput.value=`${titles[i].innerText}-${prices[i].innerText}`
        document.getElementById('order').scrollIntoView({
            behavior:'smooth'
})
}
})
//
orderBnt.onclick=()=>{
      const inputName = nameInput.value.trim();
       const inputPhone = phoneInput.value.trim();
         nameInput.value=''
          phoneInput.value=''
    if (inputName||inputPhone) {
        alert('Ваш заказ Принят') 
        burgerInput.value=''
       // 
} else {
    nameInput.style.borderWidth = '5px';
     nameInput.style.borderColor='red'
      phoneInput.style.borderWidth = '5px'
       phoneInput.style.borderColor='red'
        burgerInput.style.borderWidth = '5px'
         burgerInput.style.borderColor='red'
}
}