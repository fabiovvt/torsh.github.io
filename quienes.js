document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll('.parrafo, .foto1, .foto2, .foto3');
    
    secciones.forEach((seccion, index) => {
        seccion.style.opacity = '0';
        seccion.style.transform = 'translateY(30px)';
        seccion.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            seccion.style.opacity = '1';
            seccion.style.transform = 'translateY(0)';
        }, 100);
    });

    const fotosHistoricas = document.querySelectorAll('.foto2 img, .foto3 img');
    fotosHistoricas.forEach(img => {
        img.style.transition = 'transform 0.4s ease, filter 0.4s ease';
        
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.03)';
            img.style.filter = 'sepia(70%) hue-rotate(5deg)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.filter = 'none';
        });
    });

    const fotoPrincipal = document.querySelector('.foto1 img');
    if (fotoPrincipal) {
        fotoPrincipal.style.transition = 'opacity 0.8s ease';
        fotoPrincipal.style.opacity = '0.9';
        
        setInterval(() => {
            fotoPrincipal.style.opacity = fotoPrincipal.style.opacity === '0.9' ? '1' : '0.9';
        }, 3000);
    }

    const parrafos = document.querySelectorAll('.parrafo p');
    parrafos.forEach(parrafo => {
        const texto = parrafo.innerHTML;
        const textoModificado = texto
            .replace(/([\w.-]+@[\w.-]+\.[\w]+)/g, '<a href="mailto:$1" class="email-destacado">$1</a>')
            .replace(/"(BMW|Audi)"/g, '<strong>"$1"</strong>');
        
        parrafo.innerHTML = textoModificado;

        parrafo.querySelectorAll('.email-destacado').forEach(email => {
            email.addEventListener('click', function(e) {
                e.preventDefault();
                const correo = this.textContent;
                
                navigator.clipboard.writeText(correo).then(() => {
                    const originalText = this.textContent;
                    this.textContent = '¡Copiado!';
                    this.style.color = '#6b8e23';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Error al copiar: ', err);
                    this.textContent = 'Pulsa para copiar';
                });
            });
        });
    });

    function mostrarAntiguedad() {
        const fundacion = 1970;
        const actual = new Date().getFullYear();
        const antiguedad = actual - fundacion;
        
        const badgeAntiguedad = document.createElement('div');
        badgeAntiguedad.className = 'badge-antiguedad';
        badgeAntiguedad.innerHTML = `<span>${antiguedad} años de historia (desde ${fundacion})</span>`;
        
        document.querySelector('h1').insertAdjacentElement('afterend', badgeAntiguedad);
    }

    mostrarAntiguedad();
});