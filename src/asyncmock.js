const misProductos = [
    { id: "1", nombre: "Alguicida", precio: 1219, stock: 10, img: "../img/alguicida.jpg", idCat: "2" },
    { id: "2", nombre: "Aromatizante Glade", precio: 409.99, stock: 10, img: "../img/aromatizante.jpg", idCat: "1" },
    { id: "3", nombre: "Balde Vileda", precio: 4921.63, stock: 5, img: "../img/balde-vileda.jpg", idCat: "3" },
    { id: "4", nombre: "Bolsas Asurin 45x60", precio: 430, stock: 10, img: "../img/bolsas-45x60.jpg", idCat: "3" },
    { id: "5", nombre: "Bolsas Asurin 50x65", precio: 2041.73, stock: 10, img: "../img/bolsas-50x65.jpg", idCat: "3" },
    { id: "6", nombre: "Bolsas Asurin 80x105", precio: 2298.78, stock: 10, img: "../img/bolsas-80x105.jpg", idCat: "3" },
    { id: "7", nombre: "Boya", precio: 999, stock: 4, img: "../img/boya.jpg", idCat: "2" },
    { id: "8", nombre: "Cepillo La Gauchita", precio: 947.26, stock: 7, img: "../img/cepillo-la-gauchita.jpg", idCat: "3" },
    { id: "9", nombre: "Ceramicol", precio: 620.63, stock: 15, img: "../img/ceramicol.jpg", idCat: "1" },
    { id: "10", nombre: "Cera Suiza", precio: 1229.37, stock: 13, img: "../img/cera-suiza.jpg", idCat: "1" },
    { id: "11", nombre: "Cif Baño", precio: 235.17, stock: 9, img: "../img/cif-baño.jpg", idCat: "1" },
    { id: "12", nombre: "Clarificador", precio: 5859, stock: 9, img: "../img/clarificador.jpg", idCat: "2" },
    { id: "13", nombre: "Cloro Granulado", precio: 3669, stock: 8, img: "../img/cloro-granulado.jpg", idCat: "2" },
    { id: "14", nombre: "Detergente Cif", precio: 334.52, stock: 14, img: "../img/detergente-cif.jpg", idCat: "1" },
    { id: "15", nombre: "Detergente Magistral", precio: 778, stock: 9, img: "../img/detergente-magistral.jpg", idCat: "1" },
    { id: "16", nombre: "Escobilla La Gauchita", precio: 1648.05, stock: 3, img: "../img/escobilla-la-gauchita.jpg", idCat: "3" },
    { id: "17", nombre: "Escobillon La Gauchita", precio: 1459.40, stock: 5, img: "../img/escobillon-la-gauchita.jpg", idCat: "3" },
    { id: "18", nombre: "Esponja de acero Mortimer", precio: 141.94, stock: 20, img: "../img/esponja-acero.jpg", idCat: "3" },
    { id: "19", nombre: "Esponja Fibra Mortimer", precio: 232.71, stock: 17, img: "../img/esponja-fibra-mortimer.jpg", idCat: "3" },
    { id: "20", nombre: "Esponja Amarilla Mortimer", precio: 116, stock: 10, img: "../img/esponja-mortimer-amarilla.jpg", idCat: "3" },
    { id: "21", nombre: "Esponja Patito", precio: 115, stock: 20, img: "../img/esponja-patito.jpg", idCat: "3" },
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