import React from 'react';


function MainMenu() {
  return (
    <div className="main-menu">
      <nav>
        <ul>
          <li><a href="/produtos">PRODUTOS</a></li>
          <li><a href="/blog">BLOG</a></li>
          <li><a href="/onde-comprar">ONDE COMPRAR</a></li>
          <li><a href="/contato">CONTATO E PARCERIAS</a></li>
          <li><a href="/grupo-bem-bolado">GRUPO BEM BOLADO</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default MainMenu;