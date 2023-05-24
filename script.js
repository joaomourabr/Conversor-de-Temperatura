function conversorTempC() {
    var celsius = parseFloat(document.getElementById('temperature').value);
    if (celsius < -273.15) {
        alert('Temperatura abaixo do zero absoluto (-273.15°C) não é permitida.');
        return;
    }

    var CtoF = ((celsius * 1.8) + 32);
    var CtoK = (celsius + 273.15);

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = 'Sua temp em F é ' + CtoF.toFixed(2) + '<br>' +
        'Sua temp em K é ' + CtoK.toFixed(2);

    var body = document.body;
    if (CtoK === 0) {
        body.style.backgroundColor = "#396a80";
        resultContainer.innerHTML += '<br><strong>Zero Absoluto! Essa temperatura é impossível de alcançar!</strong>';
    } else {
        var color = mapRange(celsius, -10, 40, [0, 0, 255], [50, 200, 255], [255, 0, 0]);
        body.style.backgroundColor = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    }
}

function conversorTempF() {
    var fahrenheit = parseFloat(document.getElementById('temperature').value);

    var FtoC = ((fahrenheit - 32) * 5 / 9);
    var FtoK = (((fahrenheit - 32) * 5 / 9) + 273.15);

    if (FtoC < -273.15) {
        alert('Temperatura abaixo do zero absoluto (-459.67°F) não é permitida.');
        return;
    }

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = 'Sua temp em C é ' + FtoC.toFixed(2) + '<br>' +
        'Sua temp em K é ' + FtoK.toFixed(2);

    var body = document.body;
    if (FtoK === 0) {
        body.style.backgroundColor = "#396a80";
        resultContainer.innerHTML += '<br><strong>Zero Absoluto! Essa temperatura é impossível de alcançar!</strong>';
    } else {
        var color = mapRange(FtoC, -10, 40, [0, 0, 255], [100, 0, 255], [255, 0, 0]);
        body.style.backgroundColor = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    }
}

function conversorTempK() {
    var kelvin = parseFloat(document.getElementById('temperature').value);

    if (kelvin < 0) {
        alert('Temperatura abaixo do zero absoluto (0K) não é permitida.');
        return;
    }

    var KtoC = (kelvin - 273.15);
    var KtoF = (((kelvin - 273.15) * 1.8) + 32);

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = 'Sua temp em C é ' + KtoC.toFixed(2) + '<br>' +
        'Sua temp em F é ' + KtoF.toFixed(2);

    var body = document.body;
    if (kelvin === 0) {
        body.style.backgroundColor = "#396a80";
        resultContainer.innerHTML += '<br><strong>Zero Absoluto! Essa temperatura é impossível de alcançar!</strong>';
    } else {
        var color = mapRange(KtoC, -10, 40, [0, 0, 255], [100, 0, 255], [255, 0, 0]);
        body.style.backgroundColor = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
    }
}

function mapRange(value, minIn, maxIn, minOut, midOut, maxOut) {
    var red, green, blue;
    if (value <= 0) {
        red = map(value, minIn, 0, minOut[0], midOut[0]);
        green = map(value, minIn, 0, minOut[1], midOut[1]);
        blue = map(value, minIn, 0, minOut[2], midOut[2]);
    } else {
        red = map(value, 0, maxIn, midOut[0], maxOut[0]);
        green = map(value, 0, maxIn, midOut[1], maxOut[1]);
        blue = map(value, 0, maxIn, midOut[2], maxOut[2]);
    }
    return [red, green, blue];
}

function map(value, minIn, maxIn, minOut, maxOut) {
    return (value - minIn) * (maxOut - minOut) / (maxIn - minIn) + minOut;
}
