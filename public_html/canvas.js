/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ctx, cw, ch, x, y, dx, dy;

function position()
{
    paint();
    if ((x + dx > cw) || (x + dx < 0)) 
    {
        dx = -dx;
    }
    if ((y + dy > ch) || (y + dy < 0)) 
    {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

function paint()
{
    ctx.clearRect(0, 0, cw, ch);
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, true);
    ctx.fill();
}

function init()
{
    var canvas = document.getElementById("canvas");
    
    if (canvas.getContext)
    {
            
        ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        x = 5, y = 44, dx = 5, dy = 5;
        cw = canvas.width;
        ch = canvas.height;
        
        setInterval(position, 25);
    }
}

document.addEventListener("DOMContentLoaded", init, false);
