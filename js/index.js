document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.agg_carrito');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const productoDiv = e.target.closest('.Producto')
            const id = productoDiv.getAttribute('data-id');
            const texto = productoDiv.querySelector('p').textContent.trim();
            const [nombre, precioTexto] =  texto.split('$');
            const precioLimpio = precioTexto.replace('.', '').replace(',', '.');
            const precio = parseFloat(precioLimpio);

            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            let index = carrito.findIndex(item => item.id === id);

            if (index !== -1) {
                carrito[index].cantidad += 1;
            } else {
                carrito.push({ id, nombre: nombre.trim(), cantidad: 1, precio });
            }
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto agregado al carrito');
            console.log(localStorage)
        });
    });
});
