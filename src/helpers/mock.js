const productos = [

    { id: '1', producto: 'Nozzle volcano 0,2mm', precio: 400, image: '../image/nozzle.jpg', categoria: 'repuestos', descripcion: 'Pico para impresora 3D tipo bowden, con espesor de 0,2mm.'},
    { id: '2', producto: 'Nozzle volcano 0,4mm', precio: 420, image: '../image/nozzle.jpg', categoria: 'repuestos', descripcion: 'Pico para impresora 3D tipo bowden, con espesor de 0,4mm.'},
    { id: '3', producto: 'Nozzle volcano 0,8mm', precio: 440, image: '../image/nozzle.jpg', categoria: 'repuestos', descripcion: 'Pico para impresora 3D tipo bowden, con espesor de 0,8mm.'},
    { id: '4', producto: 'Nozzle volcano 1mm', precio: 460, image: '../image/nozzle.jpg', categoria: 'repuestos', descripcion: 'Pico para impresora 3D tipo extrusión directa, con espesor de 1mm.'},
    { id: '5', producto: 'Nozzle volcano 1,2mm', precio: 480, image: '../image/nozzle.jpg', categoria: 'repuestos', descripcion: 'Pico para impresora 3D tipo extrusión directa, con espesor de 1,2mm.'},
    { id: '6', producto: 'Hotend e3d', precio: 2000, image: '../image/hotend.jpg', categoria: 'repuestos', descripcion: 'Repuesto de hotend para impresora 3d tipo bowden.'},
    { id: '7', producto: 'Sensor de final de filamento', precio: 950, image: '../image/sensor-final-filamento.jpg', categoria: 'repuestos', descripcion: 'Repuesto de sensor de final de filamento genérico.'},
    { id: '8', producto: 'Sensor de final de carrera', precio: 1500, image: '../image/sensor-final-carrera.jpg', categoria: 'repuestos', descripcion: 'Repuesto de sensor de final de carrera genérico.'},
    { id: '9', producto: 'Cama magnetica 310x310mm', precio: 5000, image: '../image/cama-magnetica.jpg', categoria: 'repuestos', descripcion: 'Cama magnética genérica de 310mmx310mm para despegar tus piezas más fácilmente.'},
    { id: '10', producto:  'Cama caliente Artillery', precio: 7200, image: '../image/cama-caliente.jpg', categoria: 'repuestos', descripcion: 'Repuesto de cama caliente para Artillery X1.'},
    { id: '11', producto:  'Filamento 3n3 1kg', precio: 1200, image: '../image/filamento.jpg', categoria: 'filamentos', descripcion: 'Rollo de filamento de 1kg. Espesor de 1,75mm, y variedad de colores.'},
    { id: '12', producto:  'impresoras tipo bowden', precio: 60000, image: '../image/artilleryb.jpg', categoria: 'impresoras', descripcion: 'En las impresoras 3D con los sistemas de extrusión Bowden el extrusor se mantiene fijo en la estructura de la impresora 3D y empuja el filamento hacia el hotend a través de un tubo llamado tubo Bowden.'},
    { id: '13', producto:  'impresoras extrusion directa', precio: 88000, image: '../image/artillery.jpg', categoria: 'impresoras', descripcion: 'En las impresoras 3D con los sistemas de extrusión directa el extrusor y el hotend forman un único elemento, minimizando la distancia entre el punto de tracción y el nozzle.'},
    { id: '14', producto:  'impresoras de resina', precio: 55000, image: '../image/resina.png', categoria: 'impresoras', descripcion: 'Una impresora 3D de resina está formada por un láser UV controlado por ordenador. Al proyectar una imagen en una superficie llena de resina, cambia su estado de líquida a sólida.'}

];

export const getFetch = new Promise ((resolve, reject)=>{

    let condicion = true;

    if (condicion) {
        
        setTimeout(()=>{
            resolve(productos)
        }, 2000)

    } else {
        
        reject('error')

    }

});