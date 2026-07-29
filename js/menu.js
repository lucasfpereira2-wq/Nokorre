class SidebarMenu extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Mapeamento de rotas
        const currentPath = window.location.pathname;
        const isPagesDir = currentPath.includes('/pages/');
        const prefix = isPagesDir ? '../' : '';


        const logoIcon = `<img src="https://raw.githubusercontent.com/lucasfpereira2-wq/Nokorre/main/logo.jpeg" style="width: 44px; height: 44px; object-fit: contain; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">`;

        // Ícones Funcionais
        const iconHome = `<svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
        const iconList = `<svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`;
        const iconKey = `<svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>`;

        // Ícones para as futuras opções
        const iconCadastro = `<svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>`;
        const iconReport = `<svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
        const iconConfig = `<svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`;

        this.innerHTML = `
            <aside class="sidebar" id="mySidebar">
                <div class="sidebar-header">
                    <button id="toggleMenuBtn" class="menu-btn" title="Expandir/Recolher">
                        ${logoIcon}
                    </button>
                    <h2 class="logo-text">No<span>Korre</span></h2>
                </div>
                
                <nav class="sidebar-nav">
                    <a href="${prefix}index.html" class="${currentPath.includes('index.html') || currentPath === '/' ? 'active' : ''}" title="Simulador Grupo Audi">
                        <div class="icon-box">${iconHome}</div>
                        <span class="nav-text">Simulador Grupo Audi</span>
                    </a>
                    
                    <a href="${prefix}pages/planos-fidelidade.html" class="${currentPath.includes('planos-fidelidade') ? 'active' : ''}" title="Planos Fidelidade">
                        <div class="icon-box">${iconList}</div>
                        <span class="nav-text">Planos Fidelidade</span>
                    </a>
                    
                    <a href="${prefix}pages/aluguel-seminovas.html" class="${currentPath.includes('aluguel-seminovas') ? 'active' : ''}" title="Aluguel Seminovas">
                        <div class="icon-box">${iconKey}</div>
                        <span class="nav-text">Aluguel Seminovas</span>
                    </a>
        
                    <a href="${prefix}pages/cadastro-motocicletas.html" class="${currentPath.includes('cadastro-motocicletas') ? 'active' : ''}" title="Cadastro Motocicletas">
                        <div class="icon-box">${iconCadastro}</div>
                        <span class="nav-text">Cadastro Motocicletas</span>
                    </a>

                    <!-- ========================================================= -->
                    <!-- NOVAS OPÇÕES FUTURAS (Basta tirar do comentário e testar) -->
                    <!-- ========================================================= -->
                    
                    <!-- 
                    <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.05); margin: 10px 10px;">
                    
                    
                    <a href="#" title="Relatórios de Venda">
                        <div class="icon-box">${iconReport}</div>
                        <span class="nav-text">Relatórios de Venda</span>
                    </a>
                    
                    <a href="#" title="Configurações">
                        <div class="icon-box">${iconConfig}</div>
                        <span class="nav-text">Configurações</span>
                    </a>
                    -->

                </nav>
            </aside>
        `;

       // Inteligência: Eventos para expandir o menu ao passar o mouse
        const sidebar = this.querySelector('#mySidebar');
        
        if (sidebar) {
            // Quando o mouse ENTRA em qualquer parte do menu (Expande)
            sidebar.addEventListener('mouseenter', () => {
                sidebar.classList.add('expanded');
                document.body.classList.add('menu-expanded');
            });

            // Quando o mouse SAI do menu (Recolhe)
            sidebar.addEventListener('mouseleave', () => {
                sidebar.classList.remove('expanded');
                document.body.classList.remove('menu-expanded');
            });
        }
    }
}

// Inicia o componente customizado no HTML
customElements.define('topbar-menu', SidebarMenu);
