document.addEventListener('DOMContentLoaded', function() {
    const imagenPrincipal = document.querySelector('.foto1 img');
    if(imagenPrincipal) {
        setInterval(() => {
            imagenPrincipal.style.transform = 'scale(1.02)';
            setTimeout(() => {
                imagenPrincipal.style.transform = 'scale(1)';
            }, 1000);
        }, 2000);
    }

    const tarjetas = document.querySelectorAll('.apartado');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', () => {
            tarjeta.style.transform = 'translateY(-5px)';
            tarjeta.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        tarjeta.addEventListener('mouseleave', () => {
            tarjeta.style.transform = 'translateY(0)';
            tarjeta.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
        });
    });

    const filasTabla = document.querySelectorAll('tr:not(:first-child)');
    filasTabla.forEach(fila => {
        fila.style.transition = 'all 0.3s ease';
        
        fila.addEventListener('mouseenter', () => {
            fila.style.backgroundColor = '#f5f0e1';
            fila.style.transform = 'scale(1.01)';
        });
        
        fila.addEventListener('mouseleave', () => {
            fila.style.backgroundColor = '';
            fila.style.transform = 'scale(1)';
        });
    });
});