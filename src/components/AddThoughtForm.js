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

            input {
                padding: 20px;
                width: 300px;
                border: 1px solid #3E6765;
                border-radius: 10px;
            }

            button {
                margin-left: 30px;
                background-color: #3E6765;
                color: white;
                padding: 20px;
                border: none;
                border-radius: 10px;
                cursor: pointer;

                &:hover {
                    box-shadow: 1px 3px 6px 1px hsla(177, 25%, 32%, .5);
;
                }
            }
        }
    }
`;

export default AddThoughtForm;