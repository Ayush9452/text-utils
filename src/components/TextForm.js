import React,{useState} from 'react'

export default function TextForm(props)
{
    const [text, setText] = useState('')
    const changeU = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert('Converted to Upper Case','success')
    }
    const changeL = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showalert('Converted to Lower Case','success')
    }
    const clear = () => {
        let newtext = ''
        setText(newtext)
        props.showalert('Cleared','success')
    }
    const copytext = () => {
        navigator.clipboard.writeText(text);
        props.showalert('Copied to clipboard','success')
    }
    const handleextraspaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert('Removed Extra spaces','success')
    }
    const onChangeHandle = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div className='container' style={{color:`${props.mode === 'dark'?'white':'black'}`}}>
                <h1 >{props.heading}</h1>
                <textarea className='form-control' style={{color: `${props.mode === 'dark'?'white':'black'}`, backgroundColor: `${props.mode === 'dark'?'rgb(35 53 72)':'white'}`}} value={text} onChange={onChangeHandle} id="mybox" rows="10"></textarea>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={changeU}>To Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={changeL}>To Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={clear}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={copytext}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-1" onClick={handleextraspaces}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{color:`${props.mode === 'dark'?'white':'black'}`}}>
                <h2>Your Text Summary</h2>
                <p>words: {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} charactes: {text.length}</p>
            </div>
        </>
    )
}