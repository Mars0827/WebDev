function imgSlider(anything){
  document.querySelector('.whey').src = anything;
}

function changeBgColor(color){
  const sec = document.querySelector('.sec');
  sec.style.background = color;
}

function showLogin() {
  document.getElementById("login-page").style.zIndex = "1";
}


/*News Page*--------------------------------------*/

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
showSlide(currentSlide);

/*  Billings Page  */

window.onload = startForm;

function todayTxt() {
    var Today = new Date();
    return Today.getMonth() + 1 + "-" + Today.getDate() + "-" + Today.getFullYear();
}
function startForm() {
    document.forms[0].date.value = todayTxt();
    document.forms[0].prod.focus();
    document.forms[0].prod.onchange = calcPrice;
    document.forms[0].qty.onchange = calcPrice;

    for (var i = 0; i < document.forms[0].shipType.length; i++) {
        document.forms[0].shipType[i].onclick = calcShipping;
    }
    document.forms[0].onsubmit = checkForm1;

    document.forms[0].onreset = resetForm1;

}
function resetForm1() {
    location.reload();
}
function calcPrice() {
    var product = document.forms[0].prod;
    var pIndex = product.selectedIndex;
    var productPrice = product.options[pIndex].value;

    var quantity = document.forms[0].qty;
    var qIndex = quantity.selectedIndex;
    var quantityOrdered = quantity.options[qIndex].value;

    document.forms[0].price.value = (productPrice * quantityOrdered).toFixed(2);

    calcTotal();
}


function calcShipping() {
    document.forms[0].ship.value = this.value;

    calcTotal();

}

function calcTotal() {
    var priceVal = parseFloat(document.forms[0].price.value);
    var shipVal = parseFloat(document.forms[0].price.value);
    var taxVal = 0.05 * (priceVal + shipVal);
    document.forms[0].tax.value = taxVal.toFixed(2);
    document.forms[0].tot.value = (priceVal + shipVal + taxVal).toFixed(2);
}
function checkForm1() {
    if (document.forms[0].prod.selectedIndex == 0) {
        alert("Palit sa");
        return false;
    }
    else if (document.forms[0].qty.selectedIndex == 0) {
        alert("Nya pila man kuno");
        return false;
    }
    else if (document.forms[0].ship.value == "0.00") {
        alert("Unsaon mani wala may shipping method, ilabay ko ni ron");
        return false;
    }
    else
        alert("wala pay next na form pero sumbitted na ni")
        return false;

}