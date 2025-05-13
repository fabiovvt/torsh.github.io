document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');
    if(formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const checkbox = this.querySelector('input[type="checkbox"]').checked;
            if(!nombre) {
                mostrarError('Por favor ingresa tu nombre');
                return;
            }
            
            if(!email || !validarEmail(email)) {
                mostrarError('Ingresa un email válido');
                return;
            }
            
            if(!checkbox) {
                mostrarError('Debes aceptar los términos');
                return;
            }
            enviarFormulario(nombre, email);
        });
    }
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        // Efecto focus
        input.addEventListener('focus', function() {
            this.style.borderColor = '#a68b3c';
            this.style.boxShadow = '0 0 8px rgba(166, 139, 60, 0.3)';
        });
        
        // Efecto blur
        input.addEventListener('blur', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });
    document.querySelectorAll('a, input[type="submit"]').forEach(elemento => {
        elemento.addEventListener('click', function(e) {
            if(this.tagName === 'A') {
                return;
            }
            
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    function validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function mostrarError(mensaje) {
        const errorExistente = document.querySelector('.error-formulario');
        if(errorExistente) errorExistente.remove();
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-formulario';
        errorDiv.textContent = mensaje;
        formulario.prepend(errorDiv);
        
        setTimeout(() => {
            errorDiv.style.opacity = '0';
            setTimeout(() => errorDiv.remove(), 300);
        }, 3000);
    }
    
    function enviarFormulario(nombre, email) {
        const loader = document.createElement('div');
        loader.className = 'form-loader';
        formulario.appendChild(loader);
        
        setTimeout(() => {
            loader.remove();
            const success = document.createElement('div');
            success.className = 'form-success';
            success.innerHTML = `
                <p>¡Gracias ${nombre}!</p>
                <p>Hemos recibido tu mensaje y te contactaremos pronto a ${email}</p>
            `;
            formulario.replaceWith(success);
        }, 1500);
    }
});