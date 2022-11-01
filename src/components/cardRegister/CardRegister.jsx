import React from "react"
import "./style.css"

export default function CardRegister() {
  return (
    <div>
      <h1 className="title">Community Code</h1>
      <div className="input_format">
        <label className="input_form">
          Nome
          <input type="text" />
        </label>
        <label className="input_form">
          Email
          <input type="email" />
        </label>
        <label className="input_form">
          Senha
          <input type="password" />
        </label>
        <label className="input_form">
          Senha novamente
          <input type="password" />
        </label>
        <label className="input_form">
          Apelido
          <input type="text" />
        </label>
          <button type="button">Registrar</button>
      </div>
    </div>
  )
}
