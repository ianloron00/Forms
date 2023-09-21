import './MyForm.css'
import {useState} from 'react'

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando formulário...")
    console.log(name, email)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name} />
        </div>
        <label>
          <span>E-mail:</span>
          <input type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
        </label>
        <input type="submit" value="enviar" />
      </form>
    </div>
  )
}

export default MyForm