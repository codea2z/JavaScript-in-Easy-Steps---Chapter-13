/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function sendMsg()
{
    var win = document.getElementById("ifr").contentWindow;
    win.postMessage("Message received from: " + document.domain,
    "http://netbeans.local"); 
}

function readMsg(event)
{
    if (event.origin === "http://netbeans.local")
    {
        document.getElementById("para").innerHTML = (event.data);
    }
}
function init()
{
    document.getElementById("host").innerHTML += document.domain;
    window.addEventListener("message", readMsg, false);
    document.getElementById("btn").onclick = sendMsg;
}

document.addEventListener("DOMContentLoaded", init, false);
