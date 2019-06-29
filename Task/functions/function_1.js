function addinput()
{
    
    alert("dsf");

}
window.onresize = resize;
function resize()
{
    if(window.innerWidth<768)
    {
        document.getElementById("head").style.width="100%";
    }
else
{document.getElementById("head").style.width="auto";
}
}
function overflw(ths)
{
    if(ths==1)
    document.getElementById("menu").style.overflowX = "auto";
    else
    document.getElementById("menu").style.overflowX = "hidden";
    
    //alert(document.getElementById("menu").;    
    
}
function clicked(val)
{
    alert(document.getElementById(val).value);
}

