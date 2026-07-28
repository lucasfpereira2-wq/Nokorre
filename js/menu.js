class TopbarMenu extends HTMLElement {
    connectedCallback() {
        // Descobre a URL atual em que o usuário está
        const currentPath = window.location.pathname;

        // Lógica inteligente: Verifica se estamos dentro da pasta 'pages'
        const isInPagesFolder = currentPath.includes('/pages/');

        // Se estiver na pasta 'pages', volta uma pasta ('../') para achar o index
        const rootPrefix = isInPagesFolder ? '../' : '';
        // Se NÃO estiver na pasta 'pages', precisa adicionar 'pages/' na frente
        const pagesPrefix = isInPagesFolder ? '' : 'pages/';

        // Constrói os links corretamente
        const linkIndex = rootPrefix + 'index.html';
        const linkFidelidade = pagesPrefix + 'planos-fidelidade.html';
        const linkAluguel = pagesPrefix + 'aluguel-seminovas.html';

        // Verifica qual menu deve ficar "ativo" (verde)
        const isIndexActive = currentPath.includes('index.html') || currentPath.endsWith('/');
        const isFidelidadeActive = currentPath.includes('planos-fidelidade');
        const isAluguelActive = currentPath.includes('aluguel-seminovas');

        // Injeta o HTML na tela
        this.innerHTML = `
                    <header class="topbar">
                        <nav>
                            <a href="${linkIndex}" class="${isIndexActive ? 'active' : ''}">
                                Simulador<br>Grupo Audi
                            </a>
                            <a href="${linkFidelidade}" class="${isFidelidadeActive ? 'active' : ''}">
                                Planos<br>Fidelidade
                            </a>
                            <a href="${linkAluguel}" class="${isAluguelActive ? 'active' : ''}">
                                Aluguel<br>Seminovas
                            </a>
                        </nav>
                    </header>
                `;
    }
}

// Registra nossa tag personalizada <topbar-menu>
customElements.define('topbar-menu', TopbarMenu);
