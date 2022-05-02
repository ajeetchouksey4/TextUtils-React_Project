import React, { useState } from 'react'


export default function FormComponent(props) {
    const [text, setText] = useState("Enter text here");

    const handleOnClick = () => {
        console.log("Uppercase was cliecked" + text)
        const txt = text.toUpperCase();
        setText(txt);
    }

    const handleOnChange = (event) => {
        console.log("Uppercase was cliecked")
        setText(event.target.value);
    }

    // function handleOnClickForLower() {
    //     console.log("Lower was cliecked" + text)
    //     const txt = text.toLowerCase();
    //     setText(txt);
    // }

    const handleOnClickForLower = () => {
        console.log("Lower was cliecked" + text)
        const txt = text.toLowerCase();
        setText(txt);

    }

    const reset = () => {
        setText('');
    }

    let myStyle = {
        color:'red',
        backgroundColor:'blue'
    }

    // setText("Hey !! new text");
    return (
        <>
        <div className="container" style={myStyle}>
            <div className="container">
            {/* <button className="btn btn-secondary mx-12 float: right;" onClick={reset} >Reset</button> */}
                <div className="mb-3">

                    <label htmlFor="myBox" className="form-label">{props.title}</label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                    <button className="btn btn-primary mx-2" onClick={handleOnClick} >Convert to Upper case</button>
                    <button className="btn btn-primary mx-2" onClick={handleOnClickForLower} >Convert to Lower case</button>
           
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>


                </div>
            </div>

            <div className="container my-4">
                <h1>YOur text summary</h1>
                <p>{text.length} characters, {text.split(' ').length - 1} words</p>
            </div>

            <div class="card">
                <h5 class="card-header">Preview</h5>
                <div class="card-body">

                    <p class="card-text">{text}</p>

                </div>
            </div>
            </div>
        </>
    )
}
