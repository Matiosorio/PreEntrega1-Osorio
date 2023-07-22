// const misProductos = [
//     { id: "1", nombre: "Alguicida", precio: 1219, stock: 10, img: "../img/alguicida.jpg", idCat: "2" },
//     { id: "2", nombre: "Aromatizante Glade", precio: 409.99, stock: 10, img: "../img/aromatizante.jpg", idCat: "1" },
//     { id: "3", nombre: "Balde Vileda", precio: 4921.63, stock: 5, img: "../img/balde-vileda.jpg", idCat: "3" },
//     { id: "4", nombre: "Bolsas Asurin 45x60", precio: 430, stock: 10, img: "../img/bolsas-45x60.jpg", idCat: "3" },
//     { id: "5", nombre: "Bolsas Asurin 50x65", precio: 2041.73, stock: 10, img: "../img/bolsas-50x65.jpg", idCat: "3" },
//     { id: "6", nombre: "Bolsas Asurin 80x105", precio: 2298.78, stock: 10, img: "../img/bolsas-80x105.jpg", idCat: "3" },
//     { id: "7", nombre: "Boya", precio: 999, stock: 4, img: "../img/boya.jpg", idCat: "2" },
//     { id: "8", nombre: "Cepillo La Gauchita", precio: 947.26, stock: 7, img: "../img/cepillo-la-gauchita.jpg", idCat: "3" },
//     { id: "9", nombre: "Ceramicol", precio: 620.63, stock: 15, img: "../img/ceramicol.jpg", idCat: "1" },
//     { id: "10", nombre: "Cera Suiza", precio: 1229.37, stock: 13, img: "../img/cera-suiza.jpg", idCat: "1" },
//     { id: "11", nombre: "Cif Baño", precio: 235.17, stock: 9, img: "../img/cif-baño.jpg", idCat: "1" },
//     { id: "12", nombre: "Clarificador", precio: 5859, stock: 9, img: "../img/clarificador.jpg", idCat: "2" },
//     { id: "13", nombre: "Cloro Granulado", precio: 3669, stock: 8, img: "../img/cloro-granulado.jpg", idCat: "2" },
//     { id: "14", nombre: "Detergente Cif", precio: 334.52, stock: 14, img: "../img/detergente-cif.jpg", idCat: "1" },
//     { id: "15", nombre: "Detergente Magistral", precio: 778, stock: 9, img: "../img/detergente-magistral.jpg", idCat: "1" },
//     { id: "16", nombre: "Escobilla La Gauchita", precio: 1648.05, stock: 3, img: "../img/escobilla-la-gauchita.jpg", idCat: "3" },
//     { id: "17", nombre: "Escobillon La Gauchita", precio: 1459.40, stock: 5, img: "../img/escobillon-la-gauchita.jpg", idCat: "3" },
//     { id: "18", nombre: "Esponja de acero Mortimer", precio: 141.94, stock: 20, img: "../img/esponja-acero.jpg", idCat: "3" },
//     { id: "19", nombre: "Esponja Fibra Mortimer", precio: 232.71, stock: 17, img: "../img/esponja-fibra-mortimer.jpg", idCat: "3" },
//     { id: "20", nombre: "Esponja Amarilla Mortimer", precio: 116, stock: 10, img: "../img/esponja-mortimer-amarilla.jpg", idCat: "3" },
//     { id: "21", nombre: "Esponja Patito", precio: 115, stock: 20, img: "../img/esponja-patito.jpg", idCat: "3" },
//     { id: "22", nombre: "Esponja Spunita", precio: 265.11, stock: 15, img: "../img/esponja-spunita.jpg", idCat: "3" },
//     { id: "23", nombre: "Filtro Pearl", precio: 17999, stock: 15, img: "../img/filtro.jpg", idCat: "2" },
//     { id: "24", nombre: "Franela Capullo", precio: 525, stock: 7, img: "../img/franela.jpg", idCat: "3" },
//     { id: "25", nombre: "Guantes chicos Patito", precio: 662, stock: 8, img: "../img/guantes-chicos.jpg", idCat: "3" },
//     { id: "26", nombre: "Guantes medianos Patito", precio: 661.79, stock: 10, img: "../img/guantes-medianos.jpg", idCat: "3" },
//     { id: "27", nombre: "Guantes grandes Patito", precio: 682.97, stock: 15, img: "../img/guantes-grandes.jpg", idCat: "3" },
//     { id: "28", nombre: "Jabón en polvo Ala 3Kg", precio: 1975.70, stock: 12, img: "../img/jabon-en-polvo-ala.jpg", idCat: "6" },
//     { id: "29", nombre: "Jabón en polvo Granby 800g", precio: 1975.70, stock: 12, img: "../img/jabon-en-polvo-granby.jpg", idCat: "6" },
//     { id: "30", nombre: "Jabón en polvo Skip 2.5 Kg", precio: 2680, stock: 7, img: "../img/jabon-en-polvo-skip.jpg", idCat: "6" },
//     { id: "31", nombre: "Jabón en polvo Zorro 800g", precio: 480, stock: 14, img: "../img/jabon-en-polvo-zorro.jpg", idCat: "6" },
//     { id: "32", nombre: "Jabón Liquido Algabo", precio: 417.06, stock: 10, img: "../img/jabon-liquido-algabo.jpg", idCat: "1" },
//     { id: "33", nombre: "Jabón de mano Veritas", precio: 473.68, stock: 20, img: "../img/jabon-veritas.jpg", idCat: "1" },
//     { id: "34", nombre: "Lavandina Ayudin", precio: 220.80, stock: 15, img: "../img/lavandina-ayudin.jpg", idCat: "1" },
//     { id: "35", nombre: "Lavandina Odex", precio: 180.24, stock: 10, img: "../img/lavandina-odex.jpg", idCat: "1" },
//     { id: "36", nombre: "Lavandina Querubin", precio: 235, stock: 20, img: "../img/lavandina-querubin.jpg", idCat: "1" },
//     { id: "37", nombre: "Limpiador Baño Cif", precio: 415.57, stock: 12, img: "../img/limpiador-baño-cif.jpg", idCat: "1" },
//     { id: "38", nombre: "Limpiador Cremoso Cif", precio: 538.16, stock: 8, img: "../img/limpiador-cremoso-cif.jpg", idCat: "1" },
//     { id: "39", nombre: "Limpiador Mr. Músculo", precio: 459.18, stock: 7, img: "../img/limpiador-mrmusculo.jpg", idCat: "1" },
//     { id: "40", nombre: "Limpia Vidrios Cif", precio: 235.17, stock: 10, img: "../img/limpia-vidrios.jpg", idCat: "1" },
//     { id: "41", nombre: "Liquido Pisos Glade", precio: 319.78, stock: 17, img: "../img/liquido-pisos-glade.jpg", idCat: "1" },
//     { id: "42", nombre: "Liquido Pisos Poet", precio: 309.05, stock: 15, img: "../img/liquido-pisos-poet.jpg", idCat: "1" },
//     { id: "43", nombre: "Liquido Pisos Procenex", precio: 296.16, stock: 14, img: "../img/liquido-pisos-procenex.jpg", idCat: "1" },
//     { id: "44", nombre: "Lysoform", precio: 547.65, stock: 10, img: "../img/lysoform.jpg", idCat: "1" },
//     { id: "45", nombre: "Mopa Vileda", precio: 547.65, stock: 3, img: "../img/mopa-vileda.jpg", idCat: "3" },
//     { id: "46", nombre: "Repelente Off", precio: 689.03, stock: 8, img: "../img/off.jpg", idCat: "4" },
//     { id: "47", nombre: "Pala La Gauchita", precio: 422.65, stock: 4, img: "../img/pala.jpg", idCat: "3" },
//     { id: "48", nombre: "Paños Multiuso Mortimer", precio: 465, stock: 8, img: "../img/paños-mortimer.jpg", idCat: "3" },
//     { id: "49", nombre: "Pañuelos Elite", precio: 304.45, stock: 18, img: "../img/pañuelos.jpg", idCat: "5" },
//     { id: "50", nombre: "Papel Higienico Campanita 100mt", precio: 1588, stock: 6, img: "../img/papel-higienico-campanita.jpg", idCat: "5" },
//     { id: "51", nombre: "Papel Higienico Elite 80mt", precio: 1588, stock: 9, img: "../img/papel-higienico-elite.jpg", idCat: "5" },
//     { id: "52", nombre: "Pastillas de cloro", precio: 4999, stock: 12, img: "../img/pastillas-cloro.jpg", idCat: "2" },
//     { id: "53", nombre: "Raid Mata Cucarachas", precio: 908.48, stock: 7, img: "../img/raid-cucarachas.jpg", idCat: "4" },
//     { id: "54", nombre: "Raid Mata Hormigas", precio: 908.48, stock: 16, img: "../img/raid-hormigas.jpg", idCat: "4" },
//     { id: "55", nombre: "Raid Mata Moscas", precio: 514.69, stock: 13, img: "../img/raid-moscas.jpg", idCat: "4" },
//     { id: "56", nombre: "Raid Mata Pulgas", precio: 1179.66, stock: 13, img: "../img/raid-pulgas.jpg", idCat: "4" },
//     { id: "57", nombre: "Rollo de cocina Campanita", precio: 519.41, stock: 12, img: "../img/rollo-cocina-campanita.jpg", idCat: "5" },
//     { id: "58", nombre: "Rollo de cocina Sussex", precio: 429.49, stock: 13, img: "../img/rollo-cocina-sussex.jpg", idCat: "5" },
//     { id: "59", nombre: "Suavizante Vivere", precio: 1203.65, stock: 19, img: "../img/suavizante-vivere.jpg", idCat: "6" },
//     { id: "60", nombre: "Woolite Bebe", precio: 471.44, stock: 12, img: "../img/woolite-bebe.jpg", idCat: "6" },
// ]

// export const getProductos = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(misProductos);
//         }, 100)
//     })
// }

// //Función que retorna un solo item

// export const getUnProducto = (id) => {
//     return new Promise (resolve => {
//         setTimeout( () => {
//             const producto = misProductos.find(prod=> prod.id === id);
//             resolve(producto);
//         }, 100)
//     })
// }

// //Función que detorna array de categoría de producto:

// export const getProductosPorCategoria = (idCategoria) => {
//     return new Promise (resolve => {
//         setTimeout( () => {
//             const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
//             resolve(productosCategoria);
//         }, 100)
//     })
// }