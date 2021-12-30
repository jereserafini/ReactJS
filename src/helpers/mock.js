const productos = [

    { id: 1, producto: "Nozzle volcano 0,2mm", precio: 400, image: "../image/nozzle.jpg"},
    { id: 2, producto: "Nozzle volcano 0,4mm", precio: 420, image: "../image/nozzle.jpg"},
    { id: 3, producto: "Nozzle volcano 0,8mm", precio: 440, image: "../image/nozzle.jpg"},
    { id: 4, producto: "Nozzle volcano 1mm", precio: 460, image: "../image/nozzle.jpg"},
    { id: 5, producto: "Nozzle volcano 1,2mm", precio: 480, image: "../image/nozzle.jpg"},
    { id: 6, producto: "Hotend e3d", precio: 2000, image: "../image/hotend.jpg"},
    { id: 7, producto: "Sensor de final de filamento", precio: 950, image: "../image/sensor-final-filamento.jpg"},
    { id: 8, producto: "Sensor de final de carrera", precio: 1500, image: "../image/sensor-final-carrera.jpg"},
    { id: 9, producto: "Cama magnetica 310x310mm", precio: 5000, image: "../image/cama-magnetica.jpg"},
    { id: 10, producto:  "Cama caliente Artillery", precio: 7200, image: "../image/cama-caliente.jpg"},
    { id: 11, producto:  "Filamento 3n3 1kg", precio: 1200, image: "../image/filamento.jpg"},
    { id: 12, producto:  "Impresora tipo bowden", precio: 60000, image: "../image/artilleryb.jpg"},
    { id: 13, producto:  "Impresora extrusion directa", precio: 88000, image: "../image/artillery.jpg"},
    { id: 14, producto:  "Impresora de resina", precio: 55000, image: "../image/resina.png"}

];

export const getFetch = new Promise ((resolve, reject)=>{

    let condicion = true;

    if (condicion) {
        
        setTimeout(()=>{
            resolve(productos)
        }, 2000)

    } else {
        
        reject("error")

    }

});