import React from 'react';


function IconItem({ icon, text }) {
  return (
    <div className="icon-item">
      <img src={icon} alt={text} /> {/* Receberemos o caminho da imagem como prop */}
      <p className="icon-text">{text}</p>
    </div>
  );
}

export default IconItem;