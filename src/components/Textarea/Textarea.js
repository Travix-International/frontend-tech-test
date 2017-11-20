import React from 'react'
import './Textarea.css'

const Textarea = ({ textareaClass, title, handleChange }) => (
  <div className="textarea">
    <label className={textareaClass}>
      <div className="textarea-title">{title}</div>

      <div className="textarea-wrap">
        <textarea onChange={e => handleChange(e)} />

        <svg className="textarea-border" width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg">
          <rect fill="none" x="0" y="0" width="100%" height="100%"/>
        </svg>
      </div>
    </label>
  </div>
)

export default Textarea
