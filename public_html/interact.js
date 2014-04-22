/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var svgDoc, svgTxt, svgBtn, htmTxt;

function send2svg()
{
    svgTxt.lastChild.replaceWholeText(htmTxt.value);
    htmTxt.value = "";
}

function send2htm()
{
    htmTxt.value = svgTxt.lastChild.wholeText;
    svgTxt.lastChild.replaceWholeText("SVG Text");
}

function init()
{
    svgDoc = document.getElementById("svgDoc").getSVGDocument();
    svgTxt = svgDoc.getElementById("svgTxt");
    svgBtn = svgDoc.getElementById("svgBtn");
    htmTxt = document.getElementById("htmTxt");
    
    svgDoc.getElementById("svgBtn").onclick = send2htm;
    document.getElementById("htmBtn").onclick = send2svg;
}

window.onload = init; 
