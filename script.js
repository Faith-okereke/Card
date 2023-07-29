const number = document.getElementById("number");
const cardnumber = document.getElementById("cardnumber");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvcInput");
const cvcInputPara = document.querySelector(".cvcInput-p");
const monthPara = document.querySelector(".month-p");
const yearPara = document.querySelector(".year-p");
const form = document.getElementById("form");
const submitForm = document.querySelector('.submit')
const thankyou = document.getElementById("thankyou");
const cardName = document.getElementById("name");
const avatar = document.querySelector(".avatar");
const mainNumber = document.querySelector(".main-number");
const monthCard = document.querySelector(".main-2");
const yearCard = document.querySelector(".main-2-half");
const cvcData = document.querySelector(".cvcdata");
const avatarP = document.querySelector(".avatar-p");
const continueButton = document.querySelector(".continueButton")

cardName.addEventListener("input", () => {
    avatar.innerHTML = cardName.value;
    validateName();
});
number.addEventListener("input", (event) => {
    mainNumber.innerHTML = number.value;
    let inputTarget = event.target.value;
    number.value = inputTarget
        .replace(/\s/g, "")
        .replace(/([0-9]{4})/g, "$1 ")
        .trim();
    validateNumber();
});
monthInput.addEventListener("input", () => {
    monthCard.innerHTML =
        monthInput.value < 10 ? "0" + monthInput.value : monthInput.value;
    validateMonth();
});
yearInput.addEventListener("input", () => {
    yearCard.innerHTML = yearInput.value;
    validateYear();
});
cvcInput.addEventListener("input", () => {
    cvcData.innerHTML = cvcInput.value;
    validateCvc();
});
let cardNameBoolean = false;
let cardNumberBoolean = false;
let monthCardBoolean = false;
let yearCardBoolean = false;
let cvcCardBoolean = false;
submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (
        cardNameBoolean &&
        cardNumberBoolean &&
        monthCardBoolean &&
        yearCardBoolean &&
        cvcCardBoolean
    ) {
        // form.replaceChild(thankyou, form)
        form.style.display = "none"
        thankyou.style.display = "block"
    } else {
        validateName();
        validateNumber();
        validateMonth();
        validateYear();
        validateCvc();
    }
})
function validateName() {
    if (!cardName.value) {
        avatarP.innerHTML = "Can't be blank";
        cardName.style.border = "1px solid red";
        avatar.textContent = `JANE APPLESEED`;
    } else {
        avatarP.innerHTML = "";
        cardName.style.border = "1px solid #fff";
        cardNameBoolean = true;
    }
}
function validateNumber() {
    const numberValue = number.value;
    const reg = /^[(\d)+(\s)]+$/gi;
    if (!numberValue) {
        cardnumber.innerHTML = "Can't be blank";
        number.style.border = "1px solid red";
        mainNumber.textContent = "0000 0000 0000 0000";
    }
    else if (!numberValue.match(reg)) {
        cardnumber.innerHTML = "Wrong format, numbers only";
        number.style.border = "1px solid red";
    } else if (number.length < 19) {
        cardnumber.innerHTML = "Incomplete";
    } else {
        cardnumber.innerHTML = "";
        number.style.border = "1px solid hsl(270, 3%, 87%)"
        cardNumberBoolean = true
    }
}
function validateMonth() {
    if (monthInput.value == "") {
        monthPara.innerHTML = "Can't be blank";
        monthInput.style.border = "1px solid red";
        monthCard.textContent = "00";
    } else if (monthInput.value > 12) {
        monthPara.innerHTML = "Invalid!";
        monthInput.style.border = "1px solid red";
    } else {
        monthInput.style.border = "1px solid hsl(270, 3%, 87%)";
        monthPara.innerHTML = "";
        monthCardBoolean = true
    }
}
function validateYear() {
    const year = new Date().getFullYear();
    const two = Number(String(year).substring(2));
    if (yearInput.value == "") {
        yearInput.style.border = "1px solid red";
        yearPara.innerHTML = "Can't be blank";
        yearCard.textContent = "00";
    } else if (yearInput.value <= two) {
        yearPara.innerHTML = "Invalid!";
    } else {
        yearInput.style.border = "1px solid hsl(270, 3%, 87%)";
        yearPara.innerHTML = "";
        yearCardBoolean = true
    }
}
function validateCvc() {
    if (cvcInput.value == "") {
        cvcInput.style.border = "1px solid red";
        cvcInputPara.innerHTML = "Can't be blank";
        cvcData.textContent = "000";
    } else {
        cvcInputPara.innerHTML = "";
        cvcInput.style.border = "1px solid hsl(270, 3%, 87%)";
        cvcCardBoolean = true
    }
}
continueButton.addEventListener('click', ()=>{
    form.style.display = "block"
    thankyou.style.display = "none"
    location.reload()
    form.reset();
})