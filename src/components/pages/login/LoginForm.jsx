import React from 'react'

export default function LoginForm() {
    const [prenom, setPrenom] = useState('')
    const handleSubmit = (event) => {
       //  event.preventDefault()
        alert("Bonjour "+prenom)
        //setPrenom("")
     }
    const handleChange = (event) => { 
        setPrenom(event.target.value)
     }
  return (
   
        <form action='submit' onSubmit={handleSubmit}>
            <h2>Bienvenue</h2>
            <br />
            <h3>Connectez-vous</h3>
            <input 
                type='text' 
                placeholder='Entrez votre prénom ...'
                value={prenom}
                onChange={handleChange} 
                required/>
            <button type='submit'>Accédez à votre compte</button>
        </form>
    
  )
}
