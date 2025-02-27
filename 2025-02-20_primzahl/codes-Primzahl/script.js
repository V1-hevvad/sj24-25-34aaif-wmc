function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkPrime() {
    let input = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    let numberPattern = /^[0-9]+$/;

    if (!numberPattern.test(input)) {
        result.textContent = "Ungültig geben sie bitte ein zahl ein";
        result.style.color = "red";
        return;
    }

    let number = parseInt(input);
    if (isPrime(number)) {
        result.textContent = number + " ist eine Primzahl.";
        result.style.color = "green";
    } else {
        result.textContent = number + " ist keine Primzahl.";
        result.style.color = "red";
    }
}
