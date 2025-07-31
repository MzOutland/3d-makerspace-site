const printerInventory = [
    {name: "Bambu Lab H2D", type: "FDM", price: 1999, brand: "BambuLab", buildVolume: "325x320x325 mm", features: ["Heated bed", "Filament sensor"]},
    {name: "Bambu Lab P1S", type: "FDM", price: 869, brand: "BambuLab", buildVolume: "230x190x200 mm", features: ["Dual extrusion", "Heated bed", "Touchscreen", "Filament run-out sensor"]},
    {name: "Creality Ender 3 V2", type: "FDM", price: 279, brand: "Creality", buildVolume: "220x220x250 mm", features: ["Affordable", "Large community support", "Upgradable"]},
    {name: "Anycubic Photon Mono X", type: "SLA", price: 599, brand: "Anycubic", buildVolume: "192x120x245 mm", features: ["High resolution", "Fast printing", "Large build volume"]},
    {name: "Formlabs Form 3", type: "SLA", price: 3499, brand: "Formlabs", buildVolume: "145x145x185 mm", features: ["Professional quality", "Automated resin dispensing", "Touchscreen"]},
    {name: "Raise3D Pro2", type: "FDM", price: 3999, brand: "Raise3D", buildVolume: "305x305x610 mm", features: ["Dual extrusion", "Enclosed build chamber", "High precision"]}
];

document.addEventListener('DOMContentLoaded', function () {
    const list = document.getElementById('printerInventory');

    printerInventory.forEach(printer => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${printer.name}</strong> (${printer.type}) - $${printer.price} <br>
                        Brand: ${printer.brand} <br>
                        Build Volume: ${printer.buildVolume} <br>`;
        list.appendChild(li);
    });
});