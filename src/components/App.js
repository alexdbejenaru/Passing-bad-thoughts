import "../styles/index.scss";
import { generateId, getNewExpirationTime } from '../utilities';
import AddThoughtForm from './AddThoughtForm';
import Thought from './Thought';
import React, { useState } from "react";
import logo from '../images/_for__get_.png'
import styled from "styled-components";

const App = () => {

  const [ thoughts, setThoughts ] = useState([
    {
      id: generateId(),
      text: 'This is the place to get rid of your bad thoughts',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: 'They will be removed after 15 seconds so you can forget about them',
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = ( thought ) => {
    setThoughts(( prev ) => [thought, ...prev]);
  };

  const removeThought = ( thoughtIdToRemove ) => {
    setThoughts(( prev ) => prev.filter(( thought ) => thought.id !== thoughtIdToRemove));
  };

  return (
    <main>
      <Wrapper>
      <section className="app-container">
        <header>
          <img className="logo" src={logo} alt="for-get" />
        </header>
        <section className="add-thoughts">
          <AddThoughtForm addThought={addThought} />
          <ul className="thoughts">
            {thoughts.map((thought) => (
              <Thought key={thought.id} thought={thought} removeThought={removeThought} />
            ))}
          </ul>
        </section>
      </section>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .add-thoughts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .header {
    margin: 0 auto;
  }
  .logo {
    margin: 0 auto;
  }
`;

export default App;
