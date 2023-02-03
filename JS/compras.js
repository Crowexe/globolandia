// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarCurso);


    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; 

        limpiarHTML(); 
    })
}


function agregarCurso(e) {
    e.preventDefault();


    if( e.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );

        carritoHTML(); 
    }
}

function leerDatosCurso(curso) {

    const infoCurso = {
        titulo: curso.querySelector('h2').textContent,
        precio: curso.querySelector('.precio span').textContent, 
        cantidad: curso.querySelector('.cantidad span').textContent,
        id: curso.querySelector('input').getAttribute('data-id')
    }

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id  );

    articulosCarrito = [...articulosCarrito, infoCurso];

    console.log(articulosCarrito);

    carritoHTML();
}

function carritoHTML() {

    limpiarHTML();
    

    articulosCarrito.forEach( curso => {
        const {titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;

        contenedorCarrito.appendChild(row);
    });


}

function limpiarHTML() {
  
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}