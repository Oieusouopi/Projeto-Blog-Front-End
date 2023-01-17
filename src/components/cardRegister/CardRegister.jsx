import { useState } from "react"
import { register } from "../../APIs/Api"
import "./style.css"
import { useNavigate } from "react-router-dom"

export default function CardRegister() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nickName, setNickName] = useState("")
  const [passwordAgain, setPasswordAgain] = useState("")
  const navigate = useNavigate()

  const submitButton = () => {
    if (password === passwordAgain) {
      register(name, email, nickName, password)
      navigate("/login")      
    }
  }

  return (
    <div>
      <h1 className="title">Community Code</h1>
      <div className="input_format">
        <label className="input_form">
          Nome
          <input
            type="text"
            value={ name }
            onChange={ ({ target }) => setName(target.value)}
          />
        </label>
        <label className="input_form">
          Email
          <input
            type="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value)}
          />
        </label>
        <label className="input_form">
          Senha
          <input
            type="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value)}
          />
        </label>
        <label className="input_form">
          Senha novamente
          <input
            type="password"
            value={ passwordAgain }
            onChange={ ({ target }) => setPasswordAgain(target.value)}
          />
        </label>
        <label className="input_form">
          Apelido
          <input
            type="text"
            value={ nickName }
            onChange={ ({ target }) => setNickName(target.value)}
          />
        </label>
          <button
            type="button"
            onClick={ submitButton() }
          >
            Registrar
          </button>
      </div>
    </div>
  )
}
