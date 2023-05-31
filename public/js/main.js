document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento de envío del formulario por defecto

    // Aquí es donde puedes agregar el código para manejar el envío del formulario
    console.log('Formulario enviado!');
});
