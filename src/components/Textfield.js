// import React from 'react'
import React, { useState } from 'react'

export default function Textfield(props) {
    const [text, setText] = useState('Enter your text');
    const OnUpHandler = () => {
        console.log('UpperCase was clicked');
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const OnLowerCaseHandler = () => {
        console.log('LowerCase was clicked');
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const OnRemoveHandler = () => {
        console.log('Remove was clicked');

        setText('');
    }
    // to capitalize the first character of any string
    const OnCapHandler = () => {
        let CapitalizeWords = text[0].toUpperCase();
        for (let i = 1; i <= text.length - 1; i++) {
            let currentCharacter, previousCharacter = text[i - 1];
            if (previousCharacter && previousCharacter === ' ') {
                currentCharacter = text[i].toUpperCase();
            } else {
                currentCharacter = text[i];
            }
            CapitalizeWords = CapitalizeWords + currentCharacter;
        }
        setText(CapitalizeWords);
    }
    const OnCopyHandler = () => {
        console.log('Copy was clicked');
        let text = document.getElementById('textBox');
        text.select();
        navigator.clipboard.writeText(text.value);

    }


    const OnChangeHandler = (event) => {
        console.log('OnChange')
        setText(event.target.value);
    }
    return (
        <>
            <div className="container">

                <h1>{props.heading}</h1>

                <div className="input-group">
                    {/* <span className ="input-group-text">With textarea</span> */}
                    <textarea value={text} onChange={OnChangeHandler} className="form-control" rows='8' id='textBox' aria-label="With textarea"></textarea>


                </div>
                <button type="button" onClick={OnUpHandler} className="btn btn-outline-primary my-2">Convert to Uppercase</button>
                <button type="button" onClick={OnLowerCaseHandler} className="btn btn-outline-info my-2 mx-2">Convert to Lowercase</button>
                <button type="button" onClick={OnCapHandler} className="btn btn-outline-info my-2 mx-2">Capitalize Case</button>
                <button type="button" onClick={OnCopyHandler} className="btn btn-outline-info my-2 mx-2">Copy Text</button>
                <button type="button" onClick={OnRemoveHandler} className="btn btn-outline-info my-2 mx-2">Remove</button>

            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(' ').length} words and  {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes read</p>
                <h2>Preview</h2>
                <p><b>{text}</b></p>
            </div>

        </>
    )
}
