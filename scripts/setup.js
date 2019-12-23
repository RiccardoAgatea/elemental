document.getElementById("mana-button").style.display = "block";

fetch("/img/lines-gather-mana.svg")
    .then(response => response.text())
    .then(text => {
        const svgFile = document.implementation.createHTMLDocument("File");
        svgFile.documentElement.innerHTML = text;
        var svg = svgFile.getElementById("lines-gather-mana");
        buttonsDiv = document.getElementById("buttons");
        buttonsDiv.insertBefore(svg, (buttonsDiv.children)[1]);
    });

fetch("/img/lines-sparks.svg")
    .then(response => response.text())
    .then(text => {
        const svgFile = document.implementation.createHTMLDocument("File");
        svgFile.documentElement.innerHTML = text;
        var svg = svgFile.getElementById("lines-sparks");
        buttonsDiv = document.getElementById("fire-buttons");
        buttonsDiv.insertBefore(svg, (buttonsDiv.children)[1]);
    });

fetch("/img/lines-splash.svg")
    .then(response => response.text())
    .then(text => {
        const svgFile = document.implementation.createHTMLDocument("File");
        svgFile.documentElement.innerHTML = text;
        var svg = svgFile.getElementById("lines-splash");
        buttonsDiv = document.getElementById("water-buttons");
        buttonsDiv.insertBefore(svg, (buttonsDiv.children)[1]);
    });
