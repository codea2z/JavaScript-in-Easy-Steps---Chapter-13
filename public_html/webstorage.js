/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function storeName()
{
    var username = document.getElementById("username").value;
    if (username === "null" || username === "")
    {
        return false; 
    }
    localStorage.setItem("user", username);
    
    document.getElementById("leg").innerHTML =
            "\"" + localStorage.getItem("user") + "\" is Stored";
}

function recallName()
{
    if (localStorage.getItem("user") === "null")
    {
        return false; 
    }
    document.getElementById("username").value = "";
    document.getElementById("leg").innerHTML =
            "Stored Name is \"" + localStorage.getItem("user") + "\"";
}

function removeName()
{
    if (localStorage.getItem("user") === "null")
    {
        return false; 
    }
    document.getElementById("leg").innerHTML =
            "\"" + localStorage.getItem("user") + "\" is Removed";
    localStorage.removeItem("user");
    document.getElementById("username").value = "";
}

function init()
{
    document.getElementById("store").onclick = storeName;
    document.getElementById("recall").onclick = recallName;
    document.getElementById("remove").onclick = removeName;
}

document.addEventListener("DOMContentLoaded", init, false);
