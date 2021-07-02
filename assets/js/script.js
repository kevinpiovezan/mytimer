function relogio() {
    function getTimeSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: `UTC`
        });
    }
    const relogio = document.querySelector(`.relogio`);
    let segundos = 0;
    let timer;
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeSeconds(segundos);
        }, 1000);
    };
    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        };
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        };
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = `00:00:00`;
        };
    })
};
relogio();