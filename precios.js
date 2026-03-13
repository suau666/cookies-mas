/* ================= PRECIOS ================= */

const precios = {

    /* ========= TARTAS ========= */
    "tarta-banana": {
        tipo: "tarta",
        chica: 3900,
        mediana: 4200,
        grande: 5200
    },
    "tarta-frutal": {
        tipo: "tarta",
        chica: 3600,
        mediana: 4300,
        grande: 5400
    },
    "lemon-pie": {
        tipo: "tarta",
        chica: 3800,
        mediana: 4500,
        grande: 5600
    },
    "tarta-coco": {
        tipo: "tarta",
        chica: 4000,
        mediana: 4700,
        grande: 5800
    },
    "pasta-frola": {
        tipo: "tarta",
        chica: 3500,
        mediana: 4200,
        grande: 5300
    },
    "tarta-tofi": {
        tipo: "tarta",
        chica: 4200,
        mediana: 4900,
        grande: 6000
    },
    "tarta-bombon": {
        tipo: "tarta",
        chica: 4500,
        mediana: 5200,
        grande: 6400
    },
    "tarta-frutilla": {
        tipo: "tarta",
        chica: 3600,
        mediana: 4300,
        grande: 5400
    },
    "tarta-ricota": {
        tipo: "tarta",
        chica: 3700,
        mediana: 4400,
        grande: 5500
    },

    /* ========= COOKIES (precio único) ========= */
    "vainilla": {
        tipo: "cookie",
        precio: 900
    },
    "chocolate": {
        tipo: "cookie",
        precio: 950
    },
    "brownie-cookie": {
        tipo: "cookie",
        precio: 1100
    },
    "carrot-cookie": {
        tipo: "cookie",
        precio: 1000
    },
    "red-velvet-cookie": {
        tipo: "cookie",
        precio: 1050
    },
    "banana-ddl": {
        tipo: "cookie",
        precio: 1100
    },
    "lemon-cookie": {
        tipo: "cookie",
        precio: 950
    },
    "marroc": {
        tipo: "cookie",
        precio: 1150
    },
    "oreo": {
        tipo: "cookie",
        precio: 1200
    },
    "choco-sal": {
        tipo: "cookie",
        precio: 1200
    },

    /* ========= POSTRES ========= */
    "chocotorta": {
        tipo: "postre",
        individual: 1800,
        mediano: 4200,
        grande: 5600
    },
    "chocooreo": {
        tipo: "postre",
        individual: 1900,
        mediano: 4400,
        grande: 5800
    },
    "brownie": {
        tipo: "postre",
        individual: 1600,
        mediano: 4000,
        grande: 5400
    },
    "cheesecake": {
        tipo: "postre",
        individual: 2000,
        mediano: 4600,
        grande: 6200
    },
    "rogel": {
        tipo: "postre",
        individual: 2100,
        mediano: 4800,
        grande: 6500
    },
    "balcarce": {
        tipo: "postre",
        individual: 2200,
        mediano: 5000,
        grande: 6800
    },
    "tiramisu": {
        tipo: "postre",
        individual: 2000,
        mediano: 4700,
        grande: 6300
    },
    "carrot": {
        tipo: "postre",
        individual: 1900,
        mediano: 4500,
        grande: 6000
    },
    "red-velvet": {
        tipo: "postre",
        individual: 2000,
        mediano: 4700,
        grande: 6300
    },
    "selva-negra": {
        tipo: "postre",
        individual: 2100,
        mediano: 4900,
        grande: 6600
    },
    "flan": {
        tipo: "postre",
        individual: 1500,
        mediano: 3800,
        grande: 5200
    },
    "torta-imposible": {
        tipo: "postre",
        individual: 2200,
        mediano: 5000,
        grande: 6800
    },
    "lemon-cake": {
        tipo: "postre",
        individual: 1900,
        mediano: 4500,
        grande: 6000
    },
    "turron": {
        tipo: "postre",
        individual: 1700,
        mediano: 4200,
        grande: 5600
    },
    "pavlova": {
        tipo: "postre",
        individual: 2000,
        mediano: 4800,
        grande: 6400
    },
    "alfajor-gigante": {
        tipo: "postre",
        individual: 2500,
        mediano: 0,
        grande: 0
    },
    "bombones-quaker": {
        tipo: "postre",
        docena: 1600,
    },
    "masas-secas": {
        tipo: "postre",
        docena: 0,
    },
    "postres-individuales": {
        tipo: "postre",
        individual: 1500,
        mediano: 0,
        grande: 0
    },

    /* ========= TORTAS ========= */
    // listo para el futuro
    // "torta-ejemplo": {
    //     tipo: "torta",
    //     precio: 8000
    // }
};

/* ========= FORMATO PRECIO ========= */
function formatPrecio(numero) {
    if (!numero || numero === 0) return "-";
    return "$" + numero.toLocaleString("es-AR");
}

