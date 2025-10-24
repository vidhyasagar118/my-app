import React, { useState } from 'react';

function TextForm(props) {
  const [text, setText] = useState("enter the text here");

  const handleUpClick = (event) => {
    event.preventDefault();
    console.log("Uppercase was clicked");
    setText(text.toUpperCase());
    props.showalert("converted to uppecase","succesed")
  };

  const handleLowClick = (event) => {
    event.preventDefault();
    console.log("Lowercase was clicked");
        props.showalert("converted to lowercase","succesed")

    setText(text.toLowerCase());
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    console.log("Delete was clicked");
        props.showalert("delete all text","succesed")
    setText('');
  };

  const handleCopyClick = (event) => {
    event.preventDefault();
    console.log("Text was copied");
    const textArea = document.getElementById("myinput");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
            props.showalert("copy all text","succesed")

  };

  const handleExtraSpace = () => {
    const newText = text.split(/\s+/);
     props.showalert("remove spaces ","succesed")
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3"  >
        <h2 className="mb-3"  style={{
            backgroundColor: props.mode === 'light' ? '#f8f9fa' :'black',
            color: props.mode === 'light' ? 'black' : 'white',
          }} >Enter your text below</h2>
        <textarea
          value={text}
          onChange={handleOnChange}
          className="myinputclass form-control mb-3"
          id="myinput"
          rows={8}
          style={{
            backgroundColor: props.mode === 'light' ? '#f8f9fa' : 'black',
            color: props.mode === 'light' ? 'black' : 'white',
          }}
        />

        <button type="button" className="btn btn-primary mb-2 me-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button type="button" className="btn btn-primary mb-2 me-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button type="button" className="btn btn-primary mb-2 me-2" onClick={handleDeleteClick}>
          Delete Text
        </button>
        <button type="button" className="btn btn-primary mb-2 me-2" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button type="button" className="btn btn-primary mb-2 me-2" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>

        <div className="container my-3">
          <h1 style={{
            backgroundColor: props.mode === 'light' ? '#f8f9fa' :'black' ,
            color: props.mode === 'light' ? 'black' : 'white',
          }} >Your Text Summary</h1>
          <p>
            {
              text.trim().split(/\s+/).filter((word) => word.length > 0).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>{0.008 * text.split(/\s+/).filter((word) => word).length} Minutes read</p>
        </div>

        <h2 className="mb-3" style={{
            backgroundColor: props.mode === 'light' ? '#f8f9fa' :'black' ,
            color: props.mode === 'light' ? 'black' : 'white',
          }} >Preview</h2>
        <p style={{
            backgroundColor: props.mode === 'light' ? '#f8f9fa' :'black' ,
            color: props.mode === 'light' ? 'black' : 'white',
          }} >{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

export default TextForm;
