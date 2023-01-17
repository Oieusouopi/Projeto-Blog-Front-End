import React, { useState } from 'react'
import { login } from '../../APIs/Api';

export default function CardLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    login(email, password);
  }

  return (
    <>
      <div>
        <div>
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={ ({target}) => setEmail(target.value) }
            value = { email }
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={ ({target}) => setPassword(target.value) }
            value = { password }
          />
        </div>
        <div>
          <button
            type="button"
            onClick={ submitLogin() }
          >
            Log in
          </button>
        </div>
      </div>
    </>
  )
}
