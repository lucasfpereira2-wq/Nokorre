import { supabase } from './auth.js';

async function protegerPagina() {
    const { data: { session } } = await supabase.auth.getSession();
    
    // 1. Se não tiver sessão ativa, expulsa de volta para o index
    if (!session) {
        window.location.replace('../index.html');
        return; // Para a execução do script aqui
    }

    // 2. Se a pessoa está logada, preenche o e-mail dela na tela
    const spanEmail = document.getElementById('emailUsuarioLogado');
    if (spanEmail) {
        spanEmail.innerText = session.user.email;
    }
}

// Executa a proteção assim que a página abre
protegerPagina();

// 3. Configura o funcionamento do botão "Sair" nestas páginas internas
const btnSair = document.getElementById('btnSair');
if (btnSair) {
    btnSair.addEventListener('click', async () => {
        btnSair.innerText = "Saindo...";
        await supabase.auth.signOut();
        // Volta para a tela inicial de login
        window.location.replace('../index.html'); 
    });
}