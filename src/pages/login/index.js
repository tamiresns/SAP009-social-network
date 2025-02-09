import { login, loginGoggle } from '../firebase/auth.js';
import imgRetangle83 from '../../image/Rectangle83.png';
import imgRetangle86 from '../../image/Rectangle86.png';
import imgGoogle from '../../image/google.png';

export default () => {
  const container = document.createElement('div');
  container.classList.add('container-login');

  const template = `
        <img class="icon" src="${imgRetangle86}" alt="imagem de menina mexendo no cabelo">
        <section class="bloco-login">
            <header class="form-header">
                <div class="welcome-title">
                    <h3>Bem-vindo à C&H</h3>
                    <h1>Login</h1>
                </div>
                <div class="welcome-title">
                    <label>Não tem conta?</label>
                    <a href="#cadastro" type="button" style="text-decoration:none">Cadastre-se</a>
                </div>
            </header>

            <form class="form-login">
                <div class="input-group">
                    <div class="input-box">   
                        <label>E-mail</label>
                        <input type="text" name="username" id="username"
                        placeholder=" seu e-mail">
                    </div>

                    <div class="input-box">
                        <label>Senha</label>
                        <input type="password" name="password" id="password"
                        placeholder="senha">
                    </div>

                    <div class="forgot-password">
                        <a href="#">Esqueci a Senha</a>
                    </div>

                    <div class="button-enter">
                        <button id="enter" type="submit" class="enter" style="text-decoration:none" href="#feed">Entrar</button>
                    </div>

                    <div class"option"
                        <span class="other">ou</span>
                    </div>

                    <div class="btnGoogle">                        
                        <button id="google" class="btnGoogle" type="button" class="google" style="text-decoration:none"><img class="logo-google" src="${imgGoogle}" alt="imagem com logo do Google">Entrar com Google</button>
                    </div>
                </div>
            </form>
        </section>
        <img class="icon" src="${imgRetangle83}" alt="imagem de menina mexendo no cabelo">
    `;

  container.innerHTML = template;

  const form = container.querySelector('.form-login');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    login(username, password)
      .then(() => {
        // redireciona
        window.location.hash = '#feed';
      })
      .catch((error) => {
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          // alert('Usuário não encontrado');
        } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
          // alert('Senha incorreta');
        }
      });
  });

  const gmail = container.querySelector('.btnGoogle');
  gmail.addEventListener('click', () => {
    loginGoggle()
      .then(() => {
        // redireciona
        window.location.hash = '#feed';
      })
      .catch(() => {
        // alert('Erro ao efetuar login com o google');
      });
  });

  return container;
};
