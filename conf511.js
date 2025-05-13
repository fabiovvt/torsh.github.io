document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.apartado img');
    imagenes.forEach(img => {
        img.style.opacity = '0.7'; // Puedes ajustar este valor (0.7 = 70% opaco)
        
        img.addEventListener('click', function() {
            const grupo = this.closest('.apartados-container');
            grupo.querySelectorAll('img').forEach(i => {
                i.classList.remove('seleccionado');
                i.style.opacity = '0.7';
            });
            this.classList.add('seleccionado');
            this.style.opacity = '1'; // 100% opaco
            // document.querySelector('.foto1 img').src = this.src;
        });
    });
});