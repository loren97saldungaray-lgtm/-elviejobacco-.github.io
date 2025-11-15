const btnCarrito = document.getElementById('btn-carrito');
const carrito = document.getElementById('carrito');
const listaCarrito = document.getElementById('lista-carrito');
const totalSpan = document.getElementById('total');

let carritoItems = [];

btnCarrito.addEventListener('click', () => {
  carrito.style.display = carrito.style.display === 'block' ? 'none' : 'block';
});

const botones = document.querySelectorAll('.producto button');
botones.forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.dataset.nombre;
    const precio = parseFloat(btn.dataset.precio);
    carritoItems.push({nombre, precio});
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  listaCarrito.innerHTML = '';
  let total = 0;
  carritoItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    listaCarrito.appendChild(li);
    total += item.precio;
  });
  totalSpan.textContent = total.toFixed(2);
}
