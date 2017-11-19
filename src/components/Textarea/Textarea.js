import React from 'react'

const Textarea = ({ textareaClass, title, handleChange }) => (
  <label className={textareaClass}>
    <div className="textarea-title">{title}</div>

    <div className="textarea-wrap">
      <textarea onChange={e => handleChange(e)} />

      <svg width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg">
        <rect fill="none" x="0" y="0" width="100%" height="100%"/>
      </svg>
    </div>
  </label>
)

export default Textarea
