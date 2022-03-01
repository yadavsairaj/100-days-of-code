let countEl = prompt("enter a number");
document.getElementById("count-el").innerText = countEl;


function myLength(){
    let feet = countEl * 3.28084
    let f = feet.toFixed(3)
    let meter = countEl * 0.3048
    let m = meter.toFixed(3)
    document.getElementById("length-el").innerText = `${countEl} meters = ${f} feet | ${countEl} feet = ${m} meters`;
    
}
function myVolume(){
    let liters = countEl * 3.78541
    let l = liters.toFixed(3)
    let gallons = countEl * 0.264172
    let g = gallons.toFixed(3)
    document.getElementById("volume-el").innerText = `${countEl} liters = ${g} gallons | ${countEl} gallons = ${l} liters`   
    
}
function myMass(){
    let kilos = countEl * 0.453592
    let k = kilos.toFixed(3)
    let pounds = countEl * 2.20462
    let p = pounds.toFixed(3)
    document.getElementById("mass-el").innerText = `${countEl} kilograms = ${p} pounds | ${countEl} pounds = ${k} kilograms`;
    
}

myLength()
myVolume()
myMass()
