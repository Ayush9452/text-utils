import React from 'react'

export default function Alert(props) {
    const capitalise = (text) =>{
        let newtext = text.toLowerCase();
        return newtext.charAt(0).toUpperCase() + newtext.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
        {props.alert && <div className="alert alert-success " role="alert">
        <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
    </div>
  )
}
