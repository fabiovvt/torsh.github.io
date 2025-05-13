document.addEventListener('DOMContentLoaded', function() {
    const imagenesVehiculos = document.querySelectorAll('.apartado img');
    imagenesVehiculos.forEach(img => {
        img.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.03)';
            img.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.boxShadow = 'none';
        });
        img.addEventListener('click', function(e) {
            if (!this.parentElement.href) return;
            
            e.preventDefault();
            this.style.transform = 'scale(0.98)';
           
            setTimeout(() => {
                window.location.href = this.parentElement.href;
            }, 200);
        });
    });

    const elementosPrincipales = [
        document.querySelector('h1'),
        document.querySelector('.foto1 img'),
        ...document.querySelectorAll('.apartados-container')
    ];
    elementosPrincipales.forEach((el, index) => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `all 0.5s ease ${index * 0.1}s`;
        }
    });
    
    setTimeout(() => {
        elementosPrincipales.forEach(el => {
            if (el) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }, 100);
    document.querySelectorAll('.apartado a').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            if (this.querySelector('img')) return; // Ignorar enlaces con imágenes
            
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                window.location.href = this.href;
            }, 200);
        });
    });
});
document.getElementById('comparar-modelos')?.addEventListener('click', function() {
    const modal = document.createElement('div');
    modal.className = 'modal-comparacion';
    modal.innerHTML = `
        <div class="contenido-comparacion">
            <span class="cerrar-comparacion">&times;</span>
            <h2>Comparación de Modelos</h2>
            <table class="tabla-comparacion">
                <thead>
                    <tr>
                        <th>Característica</th>
                        <th>Torsh 511</th>
                        <th>Torsh 730</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Motor</td>
                        <td>6 cilindros bóxer</td>
                        <td>4 cilindros turbo</td>
                    </tr>
                    <tr>
                        <td>Potencia</td>
                        <td>394-650 HP</td>
                        <td>220-300 HP</td>
                    </tr>
                    <tr>
                        <td>Velocidad máxima</td>
                        <td>294-330 km/h</td>
                        <td>220-250 km/h</td>
                    </tr>
                    <tr>
                        <td>Aceleración (0-100 km/h)</td>
                        <td>2.7-3.9 s</td>
                        <td>5.8-7.2 s</td>
                    </tr>
                    <tr>
                        <td>Consumo mixto</td>
                        <td>10.6-12 l/100km</td>
                        <td>6.5-8 l/100km</td>
                    </tr>
                    <tr>
                        <td>Capacidad</td>
                        <td>2 personas</td>
                        <td>5 personas</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.querySelector('.cerrar-comparacion').addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    });
    
    setTimeout(() => {
        modal.style.display = 'block';
    }, 10);
});