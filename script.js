// Controle das cartas abertas
let cartasAbertas = {
    1: false,
    2: false,
    3: false,
    4: false
};

// Abrir a caixa
function abrirCaixa() {
    document.getElementById("home").classList.remove("active");
    document.getElementById("caixa").classList.add("active");
}

// Voltar para a caixa
function voltar() {
    document.getElementById("carta-aberta").classList.remove("active");
    document.getElementById("caixa").classList.add("active");
}

function abrirCarta(numero) {
    const caixa = document.getElementById("caixa");
    const cartaAberta = document.getElementById("carta-aberta");
    const conteudo = document.getElementById("conteudo");

    // Bloqueio da carta 5 (Só abre se as outras 4 já foram abertas)
    if (numero === 5) {
        const todasAbertas = cartasAbertas[1] && cartasAbertas[2] && cartasAbertas[3] && cartasAbertas[4];
        if (!todasAbertas) {
            alert("Abre todas as cartas antes 💛");
            return;
        }
    }

    // Marca a carta como aberta
    if (numero !== 5) {
        cartasAbertas[numero] = true;
    }

    caixa.classList.remove("active");
    cartaAberta.classList.add("active");

    // Limpa o conteúdo anterior antes de gerar o novo
    conteudo.innerHTML = "";

    /* ===== LOGICA DAS CARTAS ===== */

    if (numero === 1) {
        conteudo.innerHTML = `
            <div class="carta-agua-viva">
                <div class="medusa-container">
                    <div class="medusa-cabeca"><div class="brilho"></div></div>
                    <div class="tentaculos"><div class="tentaculo"></div><div class="tentaculo"></div><div class="tentaculo"></div><div class="tentaculo"></div></div>
                </div>
                <div class="texto-container">
                    <p class="texto-agua">“Se eu puder ter um pedido a mais, Guarde o melhor que tivemos... É tão bom saber que alguém que me conhece assim tão bem, <strong>EXISTE</strong>.”</p>
                    <span class="autor-agua">Água-viva — Anavitória</span>
                </div>
            </div>`;
    } 
    
    else if (numero === 2) {
        conteudo.innerHTML = `
            <div class="carta-ivy-css">
                <div class="flor-container topo-esquerda"><div class="petala p1"></div><div class="petala p2"></div><div class="petala p3"></div><div class="petala p4"></div><div class="miolo"></div></div>
                <div class="texto-ivy-container">
                    <p class="texto-ivy">“I thought that I was <strong>dreaming</strong> when you said you love me.”</p>
                    <span class="autor-ivy">~ Ivy, Frank Ocean</span>
                </div>
                <div class="flor-container base-direita"><div class="petala p1"></div><div class="petala p2"></div><div class="petala p3"></div><div class="petala p4"></div><div class="miolo"></div></div>
            </div>`;
    } 

    else if (numero === 3) {
        conteudo.innerHTML = `<div class="carta-estelar"><div id="sky"></div><div class="texto-estelar-container"><p class="texto-noite">“Take me back to the <strong>night we met</strong>.”</p></div></div>`;
        const sky = document.getElementById('sky');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'estrela-fixa';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            sky.appendChild(star);
        }
    } 

    else if (numero === 4) {
        conteudo.innerHTML = `
            <div class="carta-rapunzel-v2">
                <div class="reino-background"><div class="montanha-esq"></div><div class="castelo-silhueta"></div><div class="montanha-dir"></div></div>
                <div class="texto-rapunzel-container">
                    <p class="texto-caligrafia">All at once, everything is <span class="destaque">different,</span> now that I see you.</p>
                </div>
                <div id="lanterna-box"></div>
            </div>`;
        const box = document.getElementById('lanterna-box');
        for (let i = 0; i < 15; i++) {
            const l = document.createElement('span');
            l.className = 'lanterna-v2';
            l.style.left = Math.random() * 100 + '%';
            l.style.animationDelay = Math.random() * 10 + 's';
            box.appendChild(l);
        }
    } 

    else if (numero === 5) {
        conteudo.innerHTML = `
            <div class="carta-final-limpa">
                <div class="texto-final-container">
                    <p>Hoje é dia do amor da minha vida. Todos os dias eu agradeço por ter uma pessoa tão boa comigo, por ter alguém tão incrível. Eu sou apaixonada por você, pelo seu coração, pela pessoa que você é.</p>
                    
                    <p>Obrigado por me fazer feliz todos os dias. Eu tenho muito orgulho da pessoa que você é e vem se tornando a cada dia. Feliz aniversário, meu amor. Que você continue sendo essa pessoa de coração puro.</p>
                    
                    <p>A vida sorriu quando você apareceu, de todas as formas. Você me deu um propósito novamente e consertou os quebrados em mim, me deu novos objetivos e sonhos.</p>
                    
                    <p>Eu quero continuar amando pra sempre a mesma pessoa que eu amo desde 2023.</p>
                    
                    <p class="assinatura-final">Eu te amo muito 🤍</p>
                </div>
            </div>`;
    }
} 