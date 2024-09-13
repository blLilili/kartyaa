//változók, típusok
/*
var, let -> let a = 23;
let -> block scope
var -> function scope
állandó: const const a = 10;
Elemi típusok:
"sztring", 'string' `string (template) literal $változó`;
number: 3, 3.12 parseInt(), number(), parseFloat();
undefined (érték és egyben típus) -> nics definiálva, de majd lesz
null -> vagy null a definiált dípusa vagy semmit adtak értékül az inputba, típusa ugyanúgy number
operátorok: + (túlterhelt), -, *, /, %(modulo, modulus), = (értékadó)
inkrementálás: ++ (python +=1)
dekrementálás: -- (python -=1

összehasonlító operátorok:
<, >, <=, >=, ==, ===,

logikai operátorok:
negálás -> !, and -> &&, or -> ||

A JS gyengén típusos nyelv: ==, 3 + "4" -> '34', 3*"4" -> 12
*/
//HTML elemek elérése
const button = document.querySelector("ul li:last-child a");
button.textContent = "࣪ ִֶָ☾. added ࣪ ִֶָ☾.";
button.style.backgroundColor = "rgb(97, 130, 147)";
console.log(button);

document.querySelector(".card").style.backgroundColor = "rgb(71, 46, 101)";

const floatDiv = document.querySelector(".float-div");
floatDiv.appendChild(p);

/*
array (tömb) ~ python lista (dinamikus, heterogén)
const t = []; const t = new Array();
Elemek elérése: t[0], t.at[-1]
*/