document.addEventListener('DOMContentLoaded', function() {
    const configuradorHTML = `
        <div class="configurador">
            <h3>CONFIGURA TU TORSH</h3>
            <div class="opciones">
                <label>
                    <input type="radio" name="modelo" value="basico" checked> Modelo Básico (€25,000)
                </label>
                <label>
                    <input type="radio" name="modelo" value="premium"> Modelo Premium (€35,000)
                </label>
            </div>
            <div class="colores">
                <h4>Color:</h4>
                <select id="color-vehiculo">
                    <option value="rojo" data-precio="0">Rojo Torsh</option>
                    <option value="azul" data-precio="500">Azul Metálico (+€500)</option>
                    <option value="negro" data-precio="300">Negro Mate (+€300)</option>
                </select>
            </div>
            <button id="calcular-precio">Calcular Total</button>
            <div id="resultado-configurador" style="color: #A4031F; font-weight: bold; margin-top: 15px;"></div>
        </div>
    `;
    document.querySelector('.parrafo').insertAdjacentHTML('afterend', configuradorHTML);

    document.getElementById('calcular-precio').addEventListener('click', function() {
        const modelo = document.querySelector('input[name="modelo"]:checked').value;
        const color = document.getElementById('color-vehiculo');
        const precioColor = parseFloat(color.options[color.selectedIndex].dataset.precio);
        
        let precioBase = modelo === 'basico' ? 25000 : 35000;
        let total = precioBase + precioColor;
        
        document.getElementById('resultado-configurador').innerHTML = `
            Precio total: <strong>€${total.toLocaleString('es-ES')}</strong><br>
            <small>Incluye garantía de 5 años</small>
        `;
    });

    const garantiaHTML = `
        <div class="garantia-interactiva">
            <h3>VERIFICADOR DE GARANTÍA</h3>
            <input type="text" id="codigo-garantia" placeholder="Ingresa tu código de garantía">
            <button id="verificar-garantia">Verificar</button>
            <div id="resultado-garantia" style="margin-top: 10px;"></div>
        </div>
    `;
    document.querySelector('.foto1 img[src="garantia.jpg"]').parentNode.insertAdjacentHTML('afterend', garantiaHTML);

    document.getElementById('verificar-garantia').addEventListener('click', function() {
        const codigo = document.getElementById('codigo-garantia').value;
        const resultado = document.getElementById('resultado-garantia');
        
        if (!codigo) {
            resultado.innerHTML = '<p style="color: red;">Por favor ingresa un código</p>';
            return;
        }
        
        // Simulación: Códigos válidos empiezan con "TORSH"
        if (codigo.toUpperCase().startsWith('TORSH')) {
            resultado.innerHTML = `
                <p style="color: green;">
                    ✔ Garantía válida hasta: <strong>${new Date().getFullYear() + 5}-12-31</strong>
                </p>
                <p>Cobertura completa para motor y carrocería</p>
            `;
        } else {
            resultado.innerHTML = '<p style="color: red;">✖ Código no válido</p>';
        }
    });
});