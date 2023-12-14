import React from 'react'

const CheckBox = ({checked, onCheck}) => {
  return (
    <label>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e)=>onCheck(e)}/>
    </label>
  )
}

export default CheckBox