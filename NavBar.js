let ToI = document.getElementById("ToI");
ToI.onclick = function()
{
    alert("Да, пока-что только информатика… Пока-что!");
}

let nav = document.getElementById("nav-bar");

document.addEventListener("scroll", test);
test();

function test() 
{
    var bodyRect = document.body.getBoundingClientRect(),
        elemRect = nav.getBoundingClientRect(),
        offset   = elemRect.top - bodyRect.top;

    if(offset > 20) 
    {
        let t = clamp((offset - 20) * 5);
        console.log(t);
        nav.style.boxShadow = "0px 0px " + t + "px 0px rgba(0, 0, 0, 0.5)";
    }
    else nav.style.boxShadow = "none";
}

function clamp(x) {
    return Math.min(Math.max(x, 0), 100);
}