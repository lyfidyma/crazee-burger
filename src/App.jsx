import { useState } from 'react'
import './App.css'

function App() {
  const [prenom, setPrenom] = useState('')
  const handleSubmit = () => {
    alert("Bonjour "+prenom)
  }
  const handleChange = (event) => {
   setPrenom(event.target.value)
  }
  return (
    <>
      <div>
        <h2>Bienvenue chez nous !</h2>
        <h4>Connectez-vous</h4>
         <form action='submit' onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={prenom} 
            placeholder='Entrer votre prénom ...'
            onChange={handleChange}
            required />
          <button type='submit'>Accédez à votre espace</button>
         </form>
      </div>
    
    </>
  )
}

export default App
