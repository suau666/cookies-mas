/* ================== PRODUCTOS ================== */

const productosPorCategoria = [

  {
    titulo: "Postres",
    items: [
      { id: "chocotorta",          nombre: "Chocotorta",           descripcion: "", imagen: "chocotorta.jpeg",  badge: "popular" },
      { id: "chocooreo",           nombre: "Chocooreo",            descripcion: "", imagen: "chocooreo.jpeg" },
      { id: "brownie",             nombre: "Brownie",              descripcion: "", imagen: "brownie.jpeg" },
      { id: "cheesecake",          nombre: "Cheesecake",           descripcion: "", imagen: "cheesecake.jpeg",  badge: "popular" },
      { id: "rogel",               nombre: "Rogel",                descripcion: "", imagen: "rogel.jpeg" },
      { id: "balcarce",            nombre: "Balcarce",             descripcion: "", imagen: "balcarce.jpeg" },
      { id: "tiramisu",            nombre: "Tiramisú",             descripcion: "", imagen: "tiramisu.jpeg",    badge: "nuevo" },
      { id: "carrot",              nombre: "Carrot Cake",          descripcion: "", imagen: "carrot.jpeg" },
      { id: "red-velvet",          nombre: "Red Velvet",           descripcion: "", imagen: "red-velvet.jpeg",  badge: "nuevo" },
      { id: "selva-negra",         nombre: "Selva Negra",          descripcion: "", imagen: "selva-negra.jpeg" },
      { id: "flan",                nombre: "Flan",                 descripcion: "", imagen: "flan.jpeg" },
      { id: "torta-imposible",     nombre: "Torta Imposible",      descripcion: "", imagen: "torta-imposible.jpeg" },
      { id: "lemon-cake",          nombre: "Lemon Cake",           descripcion: "", imagen: "lemon-cake.jpeg" },
      { id: "turron",              nombre: "Turrón de Quaker",     descripcion: "", imagen: "turron.jpeg" },
      { id: "pavlova",             nombre: "Pavlova",              descripcion: "", imagen: "pavlova.jpeg",     badge: "popular" },
      { id: "alfajor-gigante",     nombre: "Alfajor Gigante",      descripcion: "", imagen: "alfajor-gigante.jpeg" },
      { id: "bombones-quaker",     nombre: "Bombones de Quaker",   descripcion: "", imagen: "bombones-quaker.jpeg" },
      { id: "masas-secas",         nombre: "Masas Secas y Finas",  descripcion: "", imagen: "masas-secas.jpeg" },
      { id: "postres-individuales",nombre: "Postres Individuales", descripcion: "", imagen: "postres-individuales.jpeg" }
    ]
  },

  {
    titulo: "Tartas",
    items: [
      { id: "tarta-banana",   nombre: "Tarta de Banana",  descripcion: "Deliciosa tarta de banana con base crocante y crema suave.", imagen: "tarta-banana.jpeg" },
      { id: "tarta-frutal",   nombre: "Tarta Frutal",     descripcion: "", imagen: "tarta-frutal.jpeg" },
      { id: "lemon-pie",      nombre: "Lemon Pie",        descripcion: "", imagen: "lemon-pie.jpeg",    badge: "popular" },
      { id: "tarta-coco",     nombre: "Tarta de Coco",    descripcion: "", imagen: "tarta-coco.jpeg" },
      { id: "pasta-frola",    nombre: "Pasta Frola",      descripcion: "", imagen: "pasta-frola.jpeg" },
      { id: "tarta-tofi",     nombre: "Tarta Tofi",       descripcion: "", imagen: "tarta-tofi.jpeg",  badge: "nuevo" },
      { id: "tarta-bombon",   nombre: "Tarta Bombón",     descripcion: "", imagen: "tarta-bombon.jpeg" },
      { id: "tarta-frutilla", nombre: "Tarta de Frutilla",descripcion: "", imagen: "tarta-frutilla.jpeg" },
      { id: "tarta-ricota",   nombre: "Tarta de Ricota",  descripcion: "", imagen: "tarta-ricota.jpeg" }
    ]
  },

  {
    titulo: "Tortas",
    items: [
      // por ahora vacío
    ]
  },

  {
    titulo: "Cookies",
    items: [
      { id: "vainilla",          nombre: "Clásica de Vainilla",   descripcion: "", imagen: "vainilla.jpeg" },
      { id: "chocolate",         nombre: "Clásica de Chocolate",  descripcion: "", imagen: "chocolate.jpeg" },
      { id: "brownie-cookie",    nombre: "Brownie",               descripcion: "", imagen: "brownie-cookie.jpeg" },
      { id: "carrot-cookie",     nombre: "Carrot",                descripcion: "", imagen: "carrot-cookie.jpeg" },
      { id: "red-velvet-cookie", nombre: "Red Velvet",            descripcion: "", imagen: "red-velvet-cookie.jpeg" },
      { id: "banana-ddl",        nombre: "Banana con DDL",        descripcion: "", imagen: "banana-ddl.jpeg" },
      { id: "lemon-cookie",      nombre: "Lemon",                 descripcion: "", imagen: "lemon-cookie.jpeg" },
      { id: "marroc",            nombre: "Marroc",                descripcion: "", imagen: "marroc.jpeg" },
      { id: "oreo",              nombre: "Oreo",                  descripcion: "", imagen: "oreo.jpeg" },
      { id: "choco-sal",         nombre: "Chocolate con Sal",     descripcion: "", imagen: "choco-sal.jpeg" }
    ]
  }

];

/* ================== HELPERS ================== */
function getProductoById(id) {
  if (!id) return null;
  for (const categoria of productosPorCategoria) {
    const prod = categoria.items.find(p => p.id === id);
    if (prod) return { ...prod, categoria: categoria.titulo };
  }
  return null;
}
