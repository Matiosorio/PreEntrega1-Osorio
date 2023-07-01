const misProductos = [
    { id: "1", nombre: "Alguicida", precio: 1219, stock: 10, img: "../img/alguicida.jpg", idCat: "2" },
    { id: "2", nombre: "Aromatizante Glade", precio: 409.99, stock: 10, img: "../img/aromatizante.jpg", idCat: "1" },
    { id: "3", nombre: "Balde Vileda", precio: 4921.63, stock: 5, img: "../img/balde-vileda.jpg", idCat: "3" },
    { id: "4", nombre: "Bolsas Asurin 45x60", precio: 1219, stock: 10, img: "../img/bolsas-45x60.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}

//Función que retorna un solo item

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Función que detorna array de categoría de producto:

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}