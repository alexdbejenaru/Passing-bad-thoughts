import React, { useEffect } from 'react';
import styled from 'styled-components';

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
    <Wrapper>
      <li className="Thought">
        <div className="text">{thought.text}</div>
        <button
          aria-label="Remove thought"
          className="remove-button"
          onClick={handleRemoveClick}
        >
          Click here if it really pisses you off
        </button>
      </li>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  & {
    li {
      display: flex;
      flex-direction: row;
      border: 1px solid #3E6765;
      border-radius: 10px;
      padding: 10px;
    }
  }
`;

export default Thought;