import React, { useState } from 'react'

export default function CardLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          >
            Log in
          </button>
        </div>
      </div>
    </>
  )
}
