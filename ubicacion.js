document.addEventListener('DOMContentLoaded', function() {
    const seccionHorarios = document.createElement('section');
    seccionHorarios.className = 'seccion-horarios';
    seccionHorarios.innerHTML = `
        <h3><span class="icono-reloj">🕒</span> HORARIOS DE ATENCIÓN</h3>
        <div class="controles-horarios">
            <button class="btn-sede active" data-sede="bercial">Bercial</button>
            <button class="btn-sede" data-sede="madrid">Madrid</button>
            <button class="btn-sede" data-sede="barcelona">Barcelona</button>
        </div>
        <div class="info-horario"></div>
    `;
    
    const fotoAlcazar = document.querySelector('.foto1 img[src="alcazar.jpg"]');
    if (fotoAlcazar) {
        fotoAlcazar.parentNode.insertAdjacentElement('afterend', seccionHorarios);
    } else {
        document.querySelector('.parrafo').insertAdjacentElement('afterend', seccionHorarios);
    }

    const horarios = {
        bercial: [
            { dia: 'Lunes a Viernes', horas: '8:00 - 19:00' },
            { dia: 'Sábados', horas: '9:00 - 14:00' },
            { dia: 'Domingos', horas: 'Cerrado' }
        ],
        madrid: [
            { dia: 'Lunes a Viernes', horas: '8:00 - 20:00' },
            { dia: 'Sábados', horas: '9:00 - 15:00' },
            { dia: 'Domingos', horas: '10:00 - 14:00' }
        ],
        barcelona: [
            { dia: 'Lunes a Viernes', horas: '8:30 - 18:30' },
            { dia: 'Sábados', horas: '9:00 - 13:00' },
            { dia: 'Domingos', horas: 'Cerrado' }
        ]
    };

    function mostrarHorario(sede) {
        const contenedor = document.querySelector('.info-horario');
        contenedor.innerHTML = `
            <ul>
                ${horarios[sede].map(item => `
                    <li><strong>${item.dia}:</strong> ${item.horas}</li>
                `).join('')}
            </ul>
        `;
    }
    document.querySelectorAll('.btn-sede').forEach(boton => {
        boton.addEventListener('click', function() {
            document.querySelectorAll('.btn-sede').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            mostrarHorario(this.dataset.sede);
        });
    });

    mostrarHorario('bercial');
});