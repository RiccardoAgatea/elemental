resources = {
    "mana": 0
}

events = {
    updateStatus: new CustomEvent("updateStatus"),
    activateButton: new CustomEvent("activateButton")
}

document.getElementById("mana-button").onclick = function () {
    resources.mana++;
    document.getElementById("status").dispatchEvent(events.updateStatus);

    switch (resources.mana) {
        case 5:
            document.getElementById("sparks-button").style.display = "block";
            document.getElementById("gather-mana-to-sparks-line").style.display = "block";
            document.getElementById("gust-button").style.display = "block";
            document.getElementById("gather-mana-to-gust-line").style.display = "block";
            document.getElementById("splash-button").style.display = "block";
            document.getElementById("gather-mana-to-splash-line").style.display = "block";
            document.getElementById("pebble-button").style.display = "block";
            document.getElementById("gather-mana-to-pebble-line").style.display = "block";
            break;
        case 13:
            document.getElementById("fireball-button").style.display = "block";
            document.getElementById("sparks-to-fireball-line").style.display = "block";
            document.getElementById("wave-button").style.display = "block";
            document.getElementById("splash-to-wave-line").style.display = "block";
            break;
        default:
            break;
    }
}

document.getElementById("status").addEventListener("updateStatus", function () {
    document.getElementById("mana-status").innerHTML = resources.mana;
});
