(function () {
    function navegarViaAjax(hash) {
        if (!hash) return

        // Remove qualquer barra no início do hash
        const path = hash.replace(/^#\/?/, '');
        const link = document.querySelector(`[wm-link="/${path}"]`) || 
                     document.querySelector(`[wm-link="${path}"]`);
        if(!link) return

        const destino = document.querySelector("[wm-link-destino]")

        // Garante que a URL comece com /paginas/ se necessário
        const url = path.startsWith('paginas/') ? path : `paginas/${path}`;
        fetch(url)
            .then(resp => {
                if(!resp.ok) throw new Error('Página não encontrada');
                return resp.text();
            })
            .then(html => {
                destino.innerHTML = html;
                // Rola para o topo após carregar o conteúdo
                window.scrollTo(0, 0);
            })
            .catch(e => {
                console.error('Erro ao carregar página:', e);
                destino.innerHTML = '<h1>Página não encontrada</h1>';
            });
    }

    function configurarLinks() {
        document.querySelectorAll("[wm-link]")
            .forEach(link => {
                const caminho = link.getAttribute("wm-link");
                // Remove barra inicial se existir
                const hashPath = caminho.replace(/^\//, '');
                link.href = `#${hashPath}`;
            });
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash);
        } else {
            // Vai para a página de boas-vindas por padrão
            const caminhoPadrao = 'paginas/bemVindo.html';
            history.replaceState(null, null, `#${caminhoPadrao}`);
            navegarViaAjax(`#${caminhoPadrao}`);
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash);
    
    configurarLinks();
    navegacaoInicial();
})();