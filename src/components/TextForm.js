// importing useState to create states in the program
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange=(event)=>{
        
        setText(event.target.value)
    }
    const handleUpClick=()=>{
        
        //will convert the text to an uppercase.
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick=()=>{
        
        //will convert the text to an uppercase.
        let newText = text.toLowerCase()
        setText(newText)
    }
    // this is the syntax of using a state method
    //text is a variable value, whereas setSet is a function used to update the text.
    const [text, setText] = useState("Enter your text");
    // to update the text, you cannot just change the value of text as a variable, but you will have to use a method
    //text = "This is your new text"; // this is the wrong way
    //setText("new text"); // this is the right way to update the changes.
  return (
    <>
    <div style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text area.</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Change to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Change to Lower Case</button>

    </div>
    <div style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="container my-5">Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minuts read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
</>
  )
}
