import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { FormContainer, FormError, SymbolInfo, SymbolCards } from './styles';

export function FindForm () {
  const [socket, setSocket] = useState(
    io('http://localhost:3333', { transports: ['websocket', 'polling', 'flashsocket'] })
  );

  const [symbolName, setSymbolName] = useState('');
  const [symbol, setSymbol] = useState(null);
  const [symbols, setSymbols] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    socket.on("connect", (socket) => {
      console.log('socket connectado'); // prints { x: "42", EIO: "4", transport: "polling" }
    });

    socket.on('quote', (quotes) => {
      setSymbols(quotes);
    });
  }, [socket]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    setSymbolName('');
    setSymbol(null);
    setError('');

    const request = await fetch(`http://localhost:3333/symbols?name=${symbolName}`)

    if (request.status >= 400) {
      const error = await request.json()
      setError(error.message);
    } else {
      const data = await request.json();
      setSymbol(data);
    }
  }

  return (
    <FormContainer>
      {symbols.length > 0 && (<small>Atualizações em tempo real das ultimas 3 buscas salva no banco de dados a cada 10 segundo</small>)}

      <SymbolCards>
        {symbols.map(symb => (
          <span key={symb.id}>
            <ul>
              <li>Nome: {symb.name}</li>
              <li>Preço: {symb.price}</li>
            </ul>
          </span>
        ))}
      </SymbolCards>

      <h2>Buscar dados da ação</h2>

      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          required
          placeholder="Digite o Símbolo da ação"
          value={symbolName}
          onChange={(e) => setSymbolName(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {symbol && (
          <SymbolInfo>
            <h3>Ultimas Pesquisas</h3>
            <ul>
              <li>
                <b>Nome:</b> {symbol.name}
              </li>

              <li>
                <b>Preço:</b> {symbol.price}
              </li>

              <li>
                <b>Empresa:</b> {symbol.company}
              </li>
            </ul>
          </SymbolInfo>
      )}

      {error && (<FormError>{error}</FormError>)}
    </FormContainer>
  )
}
