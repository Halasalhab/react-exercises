import React from 'react'
import styled from 'styled-components'
import colors from '../../theme'

const SaveButton = styled.button`
border: 1px solid ${colors.primary};
color: #fff;
background: linear-gradient(to bottom, #007bff, #0056b3);
padding: 16px 35px;
border-radius: 5px;
&:hover {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
`
function SaveBtn() {
  return (
    <SaveButton>SAVE</SaveButton>
  )
}

export default SaveBtn