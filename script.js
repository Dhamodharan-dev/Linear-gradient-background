let color1 = document.getElementById("color-1");
let color2 = document.getElementById("color-2");
let body = document.getElementById("body");
let btn = document.getElementById("btn");
let h3 = document.getElementById("h3");

const setBg =()=>{
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBg);
color2.addEventListener("input", setBg);

const toggle = ()=>{
    // document.body.style.color = "#ffffff" ? "#000000" : "#ffffff";
    txtColor = document.body.style.color ===  "white" ? "black" : "white";
    document.body.style.color = txtColor;
}
