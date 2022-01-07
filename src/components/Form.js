// import React  from 'react'
import React, { useState } from 'react'

export default function Form(props) {
    const handelupcase = () => {
        console.log("uppercase is clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handellocase = () => {
        console.log("uppercase is clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const clear = () => {
        // console.log("uppercase is clicked" + text);
        let newtext = ''
        setText(newtext)
    }
    const handlecopy =()=>{
        var text =document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraspaces =() =>{
        let newText =text.split (/[ ]+/);
        setText(newText.join(" "))
    }
    const handelonchange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // setText("Harsh's text");
    return (
        <>
            <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                {/* <h1>{props.heading}</h1> */}
                <div className="mb-3">
                    <label htmlFor='mybox' className="form-label"></label>
                    <textarea className="form-control" onChange={handelonchange} value={text} id="mybox" rows="8" style={{backgroundColor : props.mode==='light'?'white':'darkgrey',color: props.mode=== 'dark'?'white':'black'}}></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2"onClick={handelupcase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handellocase}>Convert to lowercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handlecopy}>copy text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove extra spaces</button>
                <button type="button" className="btn btn-primary mx-2" onClick={clear}>Clear</button>
            </div>
            

            <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{ text.split(" ").length}words and {text.length} characters</p>
                <p>{ 0.008*text.split(" ").length} Minutes read</p>
                <h1>Preview </h1>
                <p>{text.length>0 ? text : "Enter the text above to preview it here"}</p>
            </div>

        </>
    )
}
