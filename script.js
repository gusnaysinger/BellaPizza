//Dropdown Menu
/*
document.addEventListener('click', () => {
    console.log("Click ok");
})
*/



// Mudar tamanho da pizza

var small = document.getElementById('btnsmall');
var med = document.getElementById('btnmed');
var big = document.getElementById('btnbig');

function pizzasmall() {
    document.getElementById('food').style.transform= "scale(0.72)";
    if(small.value == "OFF") {
        small.value = "ON"
        document.getElementById('btnsmall').style.border= "5px solid #55cf0e"
        document.getElementById('btnmed').style.border= "0px solid #55cf0e"
        document.getElementById('btnbig').style.border= "0px solid #55cf0e"
    }else if(small.value == "ON") {
        small.value = "OFF"
        document.getElementById('btnsmall').style.border= "0px solid #55cf0e"
    }
}
function pizzamed() {
    document.getElementById('food').style.transform= "scale(0.8)";
    if(med.value == "OFF") {
        med.value = "ON"
        document.getElementById('btnsmall').style.border= "0px solid #55cf0e"
        document.getElementById('btnmed').style.border= "5px solid #55cf0e"
        document.getElementById('btnbig').style.border= "0px solid #55cf0e"
    }else if(med.value == "ON") {
        med.value = "OFF"
        document.getElementById('btnmed').style.border= "0px solid #55cf0e"
    }
}

function pizzabig() {
    document.getElementById('food').style.transform= "scale(1)";
    if(big.value == "OFF") {
        big.value = "ON"
        document.getElementById('btnsmall').style.border= "0px solid #55cf0e"
        document.getElementById('btnmed').style.border= "0px solid #55cf0e"
        document.getElementById('btnbig').style.border= "5px solid #55cf0e"
    }else if(big.value == "ON") {
        big.value = "OFF"
        document.getElementById('btnbig').style.border= "0px solid #55cf0e"
    }
}

//sabores

function molhodetomate() {
    var btn = document.getElementById('btnmoltomat');
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgmoltomat').style.opacity= "1";
        document.getElementById('btnmoltomat').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgmoltomat').style.opacity= "0";
        document.getElementById('btnmoltomat').style.border= "0px solid #55cf0e"
    }
}

function galinhadesfiada() {
    var btn = document.getElementById('btngal');
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imggaldesf').style.opacity= "1";
        document.getElementById('btngal').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imggaldesf').style.opacity= "0";
        document.getElementById('btngal').style.border= "0px solid #55cf0e"
    }
}

function beef() {
    var btn = document.getElementById('btnbeef');
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgbeef').style.opacity= "1";
        document.getElementById('btnbeef').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgbeef').style.opacity= "0";
        document.getElementById('btnbeef').style.border= "0px solid #55cf0e"
    }
}

function calabresa() {
    var btn = document.getElementById('btncalab')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgcalab').style.opacity= "1";
        document.getElementById('btncalab').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgcalab').style.opacity= "0";
        document.getElementById('btncalab').style.border= "0px solid #55cf0e"
    }
}

function bacon() {
    var btn = document.getElementById('btnbacon')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgbacon').style.opacity= "1";
        document.getElementById('btnbacon').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgbacon').style.opacity= "0";
        document.getElementById('btnbacon').style.border= "0px solid #55cf0e"

    }
}

function cheese() {
    var btn = document.getElementById('btncheese')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgcheese').style.opacity= "1";
        document.getElementById('btncheese').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgcheese').style.opacity= "0";
        document.getElementById('btncheese').style.border= "0px solid #55cf0e"
    }
}

function ham() {
    var btn = document.getElementById('btnham')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgham').style.opacity= "1";
        document.getElementById('btnham').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgham').style.opacity= "0";
        document.getElementById('btnham').style.border= "0px solid #55cf0e"
    }
}

function tempverde() {
    var btn = document.getElementById('btntempverde')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgtempverde').style.opacity= "1";
        document.getElementById('btntempverde').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgtempverde').style.opacity= "0";
        document.getElementById('btntempverde').style.border= "0px solid #55cf0e"
    }
}

function corn() {
    var btn = document.getElementById('btncorn')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgcorn').style.opacity= "1";
        document.getElementById('btncorn').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgcorn').style.opacity= "0";
        document.getElementById('btncorn').style.border= "0px solid #55cf0e"
    }
}

function olives() {
    var btn = document.getElementById('btnolives')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgolives').style.opacity= "1";
        document.getElementById('btnolives').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgolives').style.opacity= "0";
        document.getElementById('btnolives').style.border= "0px solid #55cf0e"
    }
}

function bell() {
    var btn = document.getElementById('btnbell')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgbell').style.opacity= "1";
        document.getElementById('btnbell').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgbell').style.opacity= "0";
        document.getElementById('btnbell').style.border= "0px solid #55cf0e"
    }
}

function tomato() {
    var btn = document.getElementById('btntomato')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgtomato').style.opacity= "1";
        document.getElementById('btntomato').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgtomato').style.opacity= "0";
        document.getElementById('btntomato').style.border= "0px solid #55cf0e"
    }
}

function pepper() {
    var btn = document.getElementById('btnpepper')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgpepper').style.opacity= "1";
        document.getElementById('btnpepper').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgpepper').style.opacity= "0";
        document.getElementById('btnpepper').style.border= "0px solid #55cf0e"
    }
}

function brocollis() {
    var btn = document.getElementById('btnbrocollis')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgbrocollis').style.opacity= "1";
        document.getElementById('btnbrocollis').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgbrocollis').style.opacity= "0";
        document.getElementById('btnbrocollis').style.border= "0px solid #55cf0e"
    }
}

function cebolinha() {
    var btn = document.getElementById('btncebolinha')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgcebolinha').style.opacity= "1";
        document.getElementById('btncebolinha').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgcebolinha').style.opacity= "0";
        document.getElementById('btncebolinha').style.border= "0px solid #55cf0e"
    }
}

function egg() {
    var btn = document.getElementById('btnegg')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgegg').style.opacity= "1";
        document.getElementById('btnegg').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgegg').style.opacity= "0";
        document.getElementById('btnegg').style.border= "0px solid #55cf0e"
    }
}

function oregano() {
    var btn = document.getElementById('btnoregano')
    if(btn.value == "OFF") {
        btn.value = "ON"
        document.getElementById('imgoregano').style.opacity= "1";
        document.getElementById('btnoregano').style.border= "5px solid #55cf0e"
    }else if(btn.value == "ON") {
        btn.value = "OFF"
        document.getElementById('imgoregano').style.opacity= "0";
        document.getElementById('btnoregano').style.border= "0px solid #55cf0e"
    }
}

function not_implemented() {
    alert("O sabor escolhido ainda está sendo implementado, agradecemos sua compreensão.")
}