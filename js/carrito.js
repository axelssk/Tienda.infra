
document.addEventListener('DOMContentLoaded', () => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const tbody = document.getElementById('carrito-body');
    const totalCell = document.getElementById('total');
    const form = document.querySelector('form');
   

    function Cargar_Tabla_carrito(){
        let total = 0;

    carrito.forEach(item => {
        const subtotal = item.cantidad * item.precio;
        total += subtotal;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio.toLocaleString()}</td>
            <td>$${subtotal.toLocaleString()}</td>
        `;
        tbody.appendChild(row);
    });

    totalCell.textContent = `$${total.toLocaleString()}`;
    }

    Cargar_Tabla_carrito();

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        // Vaciar carrito
        localStorage.removeItem('carrito');
        carrito = [];

        // Limpiar UI
        tbody.innerHTML = "";
        totalCell.textContent = '$0';

        // Confirmación
        alert('Pedido enviado');

        form.reset();
    })
    


});
