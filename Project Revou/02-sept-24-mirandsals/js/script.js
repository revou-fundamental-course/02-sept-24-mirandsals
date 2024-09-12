document.getElementById("triangle-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let alas = parseFloat(document.getElementById("alas").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        document.getElementById("result").innerHTML = "Masukkan nilai yang valid!";
        return;
    }

    let luas = (1/2) * alas * tinggi;
    document.getElementById("result").innerHTML = `Luas Segitiga: ${luas}`;
});

document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("result").innerHTML = "";
});

function calculatePerimeter() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    if (side1 && side2 && side3) {
        const perimeter = side1 + side2 + side3;
        document.getElementById("hasil").innerText = `Keliling segitiga adalah: ${perimeter.toFixed(0)}`;
    } else {
        document.getElementById("hasil").innerText = "Masukkan semua sisi segitiga!";
    }
}


document.getElementById("triangle-Form").addEventListener("submit", function(event) {
    event.preventDefault();  
    calculatePerimeter(); 
});

document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("hasil").innerHTMl = ""; 
});


