document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.apartado').forEach(apartado => {
        apartado.addEventListener('click', function() {
            this.style.backgroundColor = this.style.backgroundColor === 'rgb(185, 198, 201)' ? '#f0f0f0' : '#b9c6c9';
        });
    });
    const mensajesOfertas = [
        "¡Oferta especial! 10% de descuento en reparaciones.",
        "Financiación 0% interés en modelos 2024.",
        "¡Nuevos vehículos añadidos al catálogo!"
    ];
    alert(mensajesOfertas[Math.floor(Math.random() * mensajesOfertas.length)]);
    let visitas = 0;
    document.querySelector('h1').addEventListener('click', () => {
        visitas++;
        document.querySelector('.subtitulo').innerHTML += `<p>Visitas: ${visitas}</p>`;
    });
    const simuladorHTML = `
        <div class="simulador-cuotas">
            <h3>SIMULA TUS CUOTAS</h3>
            <input type="number" id="precioCoche" placeholder="Precio total (€)" min="1000">
            <input type="number" id="plazoMeses" placeholder="Plazo (meses)" min="12" max="60">
            <button id="calcularCuota">Calcular</button>
            <p id="resultadoCuota"></p>
        </div>
    `;
    document.querySelector('.container').insertAdjacentHTML('beforeend', simuladorHTML);

    document.getElementById('calcularCuota').addEventListener('click', function() {
        const precio = parseFloat(document.getElementById('precioCoche').value);
        const plazo = parseInt(document.getElementById('plazoMeses').value);
        
        if (isNaN(precio) || isNaN(plazo)) {
            alert("Ingresa valores válidos (precio ≥ 1000€, plazo 12-60 meses).");
            return;
        }
        
        const interesAnual = 0.05;
        const interesMensual = interesAnual / 12;
        const cuota = (precio * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazo));
        
        document.getElementById('resultadoCuota').textContent = 
            `Cuota mensual: ${cuota.toFixed(2)} € (${plazo} meses)`;
        document.getElementById('resultadoCuota').style.color = "#A4031F";
        document.getElementById('resultadoCuota').style.fontWeight = "bold";
    });
});