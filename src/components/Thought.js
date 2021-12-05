import React, { useEffect } from 'react';

function Thought(props) {
  const { thought, removeThought } = props;

  useEffect(()=>{
      const timeRemaining = thought.expiresAt - Date.now();
      const timeout = setTimeout(() => {removeThought(thought.id)
      }, timeRemaining);
      return () => clearTimeout(timeout);
    }, [thought]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <div className="text">{thought.text}</div>
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
    </li>
  );
}

export default Thought;