document.addEventListener('DOMContentLoaded', () => {
    // 1. Encontra todos os carrosséis na página
    const carrosseis = document.querySelectorAll('.carrossel-container');

    // 2. Itera sobre cada carrossel para adicionar a funcionalidade
    carrosseis.forEach(carrossel => {
        // 3. Seleciona os elementos específicos deste carrossel
        const nextBtnLateral = carrossel.querySelector('.botao-lateral.proximo');
        const prevBtnLateral = carrossel.querySelector('.botao-lateral.anterior');
        
        const nextBtnInfo = carrossel.querySelector('.botao-nav.proximo-info');
        const prevBtnInfo = carrossel.querySelector('.botao-nav.anterior-info');

        const fotosWrapper = carrossel.querySelector('.carrossel-fotos-wrapper');
        const fotos = carrossel.querySelectorAll('.carrossel-img');
        const infoSlides = carrossel.querySelectorAll('.info-slide');

        let currentIndex = 0;
        const totalSlides = fotos.length;

        // 4. Função para atualizar o carrossel (foto e informações)
        function updateCarrossel() {
            // Atualiza a foto
            const offset = -currentIndex * 100;
            fotosWrapper.style.transform = `translateX(${offset}%)`;

            // Atualiza as informações
            infoSlides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        // 5. Funções para navegação
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarrossel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarrossel();
        }

        // 6. Adiciona os event listeners para os botões deste carrossel
        if (nextBtnLateral) nextBtnLateral.addEventListener('click', nextSlide);
        if (prevBtnLateral) prevBtnLateral.addEventListener('click', prevSlide);
        
        if (nextBtnInfo) nextBtnInfo.addEventListener('click', nextSlide);
        if (prevBtnInfo) prevBtnInfo.addEventListener('click', prevSlide);

        // 7. Inicia o carrossel na primeira foto e texto
        updateCarrossel();
    });
});