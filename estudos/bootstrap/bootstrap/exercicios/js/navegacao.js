(function () {
    function navegarViaAjax(hash) {
        if (!hash) return // se o has for c

        const link = document.querySelector(`[wm-link='${hash}']`)
        if(!link) return

        const destino = document.querySelector('[wm-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
               const caminho = link.getAttribute("wm-link")
               link.setAttribute("href" , `#${caminho}`)
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()