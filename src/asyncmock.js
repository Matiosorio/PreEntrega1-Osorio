const misProductos = [
    { id: 1, nombre: "Alguicida", precio: 1219, img: "./img/alguicida.jpg" },
    { id: 2, nombre: "Aromatizante Glade", precio: 409.99, img: "./img/aromatizante.jpg" },
    { id: 3, nombre: "Balde Vileda", precio: 4921.63, img: "./img/balde-vileda.jpg" },
    { id: 4, nombre: "Bolsas Asurin 45x60", precio: 1219, img: "./img/bolsas-45x60.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}