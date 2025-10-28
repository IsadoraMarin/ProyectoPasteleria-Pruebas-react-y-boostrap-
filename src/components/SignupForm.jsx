import React, { useState } from 'react';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [warnings, setWarnings] = useState('');

  // Regex without global flag to avoid .test() stateful behavior
  const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
  const emailDuoc = /^[a-zA-Z0-9._%+-]+@duocuc\.cl$/i;

  function handleSubmit(e) {
    e.preventDefault();
    let msgs = [];

    if (name.trim().length > 20) {
      msgs.push('Maximo 20 caracteres');
    }

    if (!regexEmail.test(email)) {
      msgs.push('El correo electronico no es valido');
    }

    if (emailDuoc.test(email)) {
      msgs.push('¡Como eres parte de la comunidad Duoc UC, recuerda canjear tu torta gratis el día de tu cumpleaños!');
    }

    if (password.length < 8) {
      msgs.push('Minimo de 8 caracteres');
    }

    // here age is optional in original code; keep no validation unless you want

    if (msgs.length > 0) {
      setWarnings(msgs.join('<br/>'));
    } else {
      setWarnings('');
      alert('Formulario enviado correctamente');
    }
  }

  return (
    <form id="form" onSubmit={handleSubmit} style={{marginTop: '20px'}}>
      <div style={{marginBottom: '8px'}}>
        <label htmlFor="name">Nombre:</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{marginLeft: '8px'}} />
      </div>

      <div style={{marginBottom: '8px'}}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{marginLeft: '8px'}} />
      </div>

      <div style={{marginBottom: '8px'}}>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{marginLeft: '8px'}} />
      </div>

      <div style={{marginBottom: '8px'}}>
        <label htmlFor="age">Edad:</label>
        <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{marginLeft: '8px'}} />
      </div>

      <button type="submit">Enviar</button>

      <div id="warnings" style={{color: 'darkred', marginTop: '12px'}} dangerouslySetInnerHTML={{ __html: warnings }} />
    </form>
  );
}
