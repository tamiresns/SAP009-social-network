import { createUser } from '../firebase/auth.js';
import imgRetangle83 from '../../image/Rectangle83.png';
import imgRetangle86 from '../../image/Rectangle86.png';

export default () => {
  const container = document.createElement('div');
  container.classList.add('container-cadastro');

  const template = `
    <img class = "icon" src="${imgRetangle86}" alt="imagem de menina lavando o rosto">
    <section class = "bloco-cadastro">
        <div class="form-header">
            <div class="title">
                <span>Bem Vindo a C&H</span>
                <h1>Cadastre-se</h1>
            </div>

            <div class="return-button">
                <a href= "#login" type="button" class="btnVoltar" style="text-decoration:none">Voltar</a>
            </div>
        </div>

        <form class = "form-cadastro">
            <div class="input-group">
                <div class="input-box">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="seu endereço de e-mail" required>
                </div>

                <div class="input-box">
                    <label for="name">Nome</label>
                    <input type="text" name="name" id="txtName" placeholder="seu nome" required>
                </div>

                <div class="input-box">
                    <label for="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="senha" required>
                </div>
            </div>

            <div class="button-singnup">
                <button id="btnSignup" type="submit" class="btnSignup" style="text-decoration:none">Criar Conta</button>
            </div>
        </form>
    </section>
    <img class="icon" src="${imgRetangle83}" alt="imagem de menina mexendo no cabelo">
    `;
  container.innerHTML = template;

  const form = container.querySelector('.form-cadastro');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = form.password.value;
    const email = form.email.value;
    const userName = form.name.valeu;
    createUser(email, password, userName)
      .then(() => {
        window.location.hash = '#feed';
      });
    /* .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    }); */
  });

  return container;
};
