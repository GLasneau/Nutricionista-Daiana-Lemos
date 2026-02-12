/* 1. Lógica do Carrossel de Imagens */
const images = document.querySelectorAll('.carousel img');
let currentImageIndex = 0;

function rotateImages() {
    // Remove a classe 'active' da imagem atual
    images[currentImageIndex].classList.remove('active');
    
    // Calcula o próximo índice (se for o último, volta pro zero)
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Adiciona a classe 'active' na nova imagem
    images[currentImageIndex].classList.add('active');
}

// Troca de imagem a cada 3.5 segundos (3500ms)
if(images.length > 0) {
    setInterval(rotateImages, 3500);
}


/* 2. Animação ao Rolar (Scroll Reveal) - BÔNUS */
// Isso faz os elementos aparecerem suavemente quando você desce a tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// Seleciona todos os elementos que queremos animar (vamos adicionar a classe .hidden no CSS)
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));