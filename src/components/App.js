import "../styles/index.scss";
import { generateId, getNewExpirationTime } from '../utilities';
import AddThoughtForm from './AddThoughtForm';
import Thought from './Thought';
import React, { useState } from "react";

const App = () => {

  const [ thoughts, setThoughts ] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing BAD thoughts',
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
      <section className="app-container">
        <header>
          <h1>Forget your bad thoughts</h1>
        </header>
        <section>
          <AddThoughtForm addThought={addThought} />
          <ul className="thoughts">
            {thoughts.map((thought) => (
              <Thought key={thought.id} thought={thought} removeThought={removeThought} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default App;
