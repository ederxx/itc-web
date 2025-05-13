// src/componentes/Logo.jsx
import React from "react";

export default function Img({ src, alt = "Img" }) {
  return <img src={src} alt={alt} className="img" />;
}