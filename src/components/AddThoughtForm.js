import { generateId, getNewExpirationTime } from "../utilities";
import { useState } from "react";
import styled from "styled-components";

const AddThoughtForm = (props) => {

    const [ text, setText ] = useState('');
    const handleTextChange = ( event ) => {
        setText(event.target.value);
    };

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const thought = {
            id: generateId(),
            text: text,
            expiresAt: getNewExpirationTime(),
        };

        if ( text.length > 0 ) {
            props.addThought(thought);
            setText('');
        }
    }
    return ( 
        <Wrapper>
            <form className="add-thought-form" onSubmit={handleSubmit}>
                <input
                    value={text}
                    onChange={handleTextChange}
                    type="text"
                    aria-label="What's on your mind?"
                    placeholder="What's on your mind?"
                />
                <button type="submit" value="Let it go">Let it go</button>
            </form>
        </Wrapper>
     );
}

const Wrapper = styled.section`
    & {
        .add-thought-form {
            display: flex;
            flex-direction: column;
        }
    }
`;

export default AddThoughtForm;