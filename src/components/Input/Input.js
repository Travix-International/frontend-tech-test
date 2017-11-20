import React from 'react'
import './Input.css'

const Input = ({ inputClass, title, type, handleChange }) => (
  <div className="input">
    <label className={inputClass}>
      <div className="input-title">{title}</div>

      <div className="input-wrap">
        <input type={type} onChange={e => handleChange(e)} />

        <svg className="input-border" width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg">
          <rect fill="none" x="0" y="0" width="100%" height="100%"/>
        </svg>
      </div>
    </label>
  </div>
)

export default Input
