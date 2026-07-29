import { supabase } from './auth.js';

const loginScreen = document.getElementById('loginScreen');
const app = document.getElementById('app');
const erroLogin = document.getElementById('erroLogin');

// Elementos da interface
const tituloLogin = document.getElementById('tituloLogin');
const textoLogin = document.getElementById('textoLogin');
const inputEmail = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');
const btnAcaoPrincipal = document.getElementById('btnAcaoPrincipal');
const linkEsqueciSenha = document.getElementById('linkEsqueciSenha');
const linkCriarConta = document.getElementById('linkCriarConta');
const linkVoltar = document.getElementById('linkVoltar');
const btnSair = document.getElementById('btnSair');

let modoAtual = 'login'; // Pode ser 'login', 'cadastro' ou 'recuperacao'

// 1. Controle visual da caixinha
function mudarModo(modo) {
    modoAtual = modo;
    erroLogin.innerText = "";
    inputEmail.value = "";
    inputSenha.value = "";

    if (modo === 'login') {
        tituloLogin.innerText = "NoKorre Web Portal";
        textoLogin.innerText = "Faça login para continuar";
        inputSenha.style.display = 'block';
        btnAcaoPrincipal.innerText = "Entrar";
        linkEsqueciSenha.style.display = 'block';
        linkCriarConta.style.display = 'block';
        linkVoltar.style.display = 'none';
    } 
    else if (modo === 'cadastro') {
        tituloLogin.innerText = "Criar Conta";
        textoLogin.innerText = "Cadastre seu e-mail e senha";
        inputSenha.style.display = 'block';
        btnAcaoPrincipal.innerText = "Cadastrar";
        linkEsqueciSenha.style.display = 'none';
        linkCriarConta.style.display = 'none';
        linkVoltar.style.display = 'block';
    } 
    else if (modo === 'recuperacao') {
        tituloLogin.innerText = "Recuperar Senha";
        textoLogin.innerText = "Digite seu e-mail para receber o link";
        inputSenha.style.display = 'none'; // Esconde a senha
        btnAcaoPrincipal.innerText = "Enviar Link";
        linkEsqueciSenha.style.display = 'none';
        linkCriarConta.style.display = 'none';
        linkVoltar.style.display = 'block';
    }
}

linkCriarConta.addEventListener('click', (e) => { e.preventDefault(); mudarModo('cadastro'); });
linkEsqueciSenha.addEventListener('click', (e) => { e.preventDefault(); mudarModo('recuperacao'); });
linkVoltar.addEventListener('click', (e) => { e.preventDefault(); mudarModo('login'); });

// 2. Ação Principal (Entrar, Cadastrar ou Recuperar)
btnAcaoPrincipal.addEventListener('click', async () => {
    const email = inputEmail.value;
    const senha = inputSenha.value;
    
    if (!email) {
        erroLogin.innerText = "Preencha o e-mail.";
        return;
    }

    erroLogin.style.color = "#A7BF3B"; // Verde para avisos de carregamento
    erroLogin.innerText = "Aguarde...";

    if (modoAtual === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
        if (error) {
            erroLogin.style.color = "#ff6666";
            erroLogin.innerText = "E-mail ou senha incorretos.";
        } else {
            window.location.reload(); // Recarrega para aplicar a sessão limpa
        }
    } 
    
    else if (modoAtual === 'cadastro') {
        const { error } = await supabase.auth.signUp({ email, password: senha });
        if (error) {
            erroLogin.style.color = "#ff6666";
            erroLogin.innerText = "Erro ao criar: " + error.message;
        } else {
            erroLogin.style.color = "#A7BF3B";
            erroLogin.innerText = "Conta criada com sucesso! Faça login.";
            setTimeout(() => mudarModo('login'), 2000);
        }
    } 
    
    else if (modoAtual === 'recuperacao') {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) {
            erroLogin.style.color = "#ff6666";
            erroLogin.innerText = "Erro: " + error.message;
        } else {
            erroLogin.style.color = "#A7BF3B";
            erroLogin.innerText = "Link de recuperação enviado para o e-mail!";
            setTimeout(() => mudarModo('login'), 3000);
        }
    }
});

// 3. Botão Sair (Logout)
if (btnSair) {
    btnSair.addEventListener('click', async () => {
        btnSair.innerText = "Saindo...";
        await supabase.auth.signOut();
        window.location.reload(); // Recarrega a página para voltar à tela de login
    });
}

// 4. Checar Sessão Inicial
async function checarSessao() {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
        // Preenche o e-mail do usuário logado na tela
        const spanEmail = document.getElementById('emailUsuarioLogado');
        if (spanEmail) {
            spanEmail.innerText = session.user.email;
        }

        loginScreen.style.display = 'none';
        app.style.display = 'block';
        if (typeof calculateAll === 'function') calculateAll();
    } else {
        loginScreen.style.display = 'flex';
        app.style.display = 'none';
    }
}

checarSessao();