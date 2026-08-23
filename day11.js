const checkbox = document.getElementById("checkbox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const payments = document.getElementById("payments");

submit.onclick = function() {
    // 1. Terms & Conditions Check
    if (checkbox.checked) {
        result.textContent = `you followed terms and conditions`;
    } else {
        result.textContent = `you need to follow terms and conditions`;
    }

    // 2. Payment Options Check (Independent Checks)
    if (visa.checked) {
        payments.textContent = `You are paying through visa`;
    } else if (mastercard.checked) {
        payments.textContent = `you are paying through mastercard`;
    } else if (paypal.checked) {
        payments.textContent = `you are paying through paypal`;
    } else {
        payments.textContent = `select the payments methods you didn't select yet !`;
    }
}