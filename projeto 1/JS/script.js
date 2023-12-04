function criarQuadro() {
    const x = parseInt(document.getElementById('x').value);
    const y = parseInt(document.getElementById('y').value);
    const quadroSelecionado = document.querySelector('input[name="quadro"]:checked').value;

    const quadro = document.getElementById(quadroSelecionado);
    const coordenadaNumero = document.createElement('div');
    const quadradinho = document.createElement('div');
    const linhaHorizontal = document.createElement('div');
    const linhaVertical = document.createElement('div');

    coordenadaNumero.className = 'coordenada-numero';
    quadradinho.className = 'quadradinho';
    linhaHorizontal.className = 'linha-horizontal';
    linhaVertical.className = 'linha-vertical';

    coordenadaNumero.textContent = `(${x}, ${y})`;
    coordenadaNumero.style.left = x + 'px';
    coordenadaNumero.style.top = y - 20 + 'px';

    quadradinho.style.left = x + 'px';
    quadradinho.style.top = y + 'px';
    
    linhaHorizontal.style.top = y + 'px';
    linhaVertical.style.left = x + 'px';

    quadro.appendChild(coordenadaNumero);
    quadro.appendChild(quadradinho);
    quadro.appendChild(linhaHorizontal);
    quadro.appendChild(linhaVertical);
}

function limparQuadros() {
    const quadros = document.querySelectorAll('.quadro');
    quadros.forEach(quadro => {
        quadro.innerHTML = '';
    });
}

