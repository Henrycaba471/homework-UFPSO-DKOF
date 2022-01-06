"use strict";

console.log("Conected");

const d = document;

let lotNum = Math.round(Math.random() * 99),
    lotNum1 = Math.round(Math.random() * 99);
const $fromJS = d.querySelector(".fromJS"),
    $fromJSone = d.querySelector(".fromJSone"),
    $btnRefresh = d.querySelector(".btn-refresh");

switch (lotNum) {
    case 0:
        $fromJS.textContent = ("00");
        break;
    case 1:
        $fromJS.textContent = ("01");
        break;
    case 2:
        $fromJS.textContent = ("02");
        break;
    case 3:
        $fromJS.textContent = ("03");
        break;
    case 4:
        $fromJS.textContent = ("04");
        break;
    case 5:
        $fromJS.textContent = ("05");
        break;
    case 6:
        $fromJS.textContent = ("06");
        break;
    case 7:
        $fromJS.textContent = ("07");
        break;
    case 8:
        $fromJS.textContent = ("08");
        break;
    case 9:
        $fromJS.textContent = ("09");
        break;
    default:
        $fromJS.textContent = lotNum;
        break;
}

switch (lotNum1) {
    case 0:
        $fromJSone.textContent = ("00");
        break;
    case 1:
        $fromJSone.textContent = ("01");
        break;
    case 2:
        $fromJSone.textContent = ("02");
        break;
    case 3:
        $fromJSone.textContent = ("03");
        break;
    case 4:
        $fromJSone.textContent = ("04");
        break;
    case 5:
        $fromJSone.textContent = ("05");
        break;
    case 6:
        $fromJSone.textContent = ("06");
        break;
    case 7:
        $fromJSone.textContent = ("07");
        break;
    case 8:
        $fromJSone.textContent = ("08");
        break;
    case 9:
        $fromJSone.textContent = ("09");
        break;
    default:
        $fromJSone.textContent = lotNum1;
        break;
}
//$fromJS.textContent = lotNum;

const one = Math.round(Math.random() * 9),
    two = Math.round(Math.random() * 9),
    three = Math.round(Math.random() * 9),
    four = Math.round(Math.random() * 9),
    signo = Math.round(Math.random() * 11);

const $one = d.querySelector(".one"),
    $two = d.querySelector(".two"),
    $three = d.querySelector(".three"),
    $four = d.querySelector(".four"),
    $signo = d.querySelector(".signo");

switch (signo) {
    case 0:
        $signo.textContent = "Aries ♈";
        break;
    case 1:
        $signo.textContent = "Tauro ♉";
        break;
    case 2:
        $signo.textContent = "Geminis ♊";
        break;
    case 3:
        $signo.textContent = "Cancer ♋";
        break;
    case 4:
        $signo.textContent = "Leo ♌";
        break;
    case 5:
        $signo.textContent = "Virgo ♍";
        break;
    case 6:
        $signo.textContent = "Libra ♎";
        break;
    case 7:
        $signo.textContent = "Escorpion ♏";
        break;
    case 8:
        $signo.textContent = "Sagitario ♐";
        break;
    case 9:
        $signo.textContent = "Capricornio ♑";
        break;
    case 10:
        $signo.textContent = "Acuario ♒";
        break;
    case 11:
        $signo.textContent = "Piscis ♓";
        break;
    default:
        break;
}

$one.textContent = one;
$two.textContent = two;
$three.textContent = three;
$four.textContent = four;
//$signo.textContent = signo;

$btnRefresh.addEventListener("click", e => location.reload())