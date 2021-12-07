import "../styles/index.scss";
import { generateId, getNewExpirationTime } from '../utilities';
import AddThoughtForm from './AddThoughtForm';
import Thought from './Thought';
import React, { useState } from "react";
import logo from '../images/_for__get_.png'

const App = () => {

  const [ thoughts, setThoughts ] = useState([
    {
      id: generateId(),
      text: 'This is the place to get rid of them',
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
          <header className="header">
            <img className="logo" src={logo} alt="for-get" />
          </header>
          <h3 className="small-title">Do you have any bad thoughts that are ruining your day?</h3>
          <section className="add-thoughts">
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