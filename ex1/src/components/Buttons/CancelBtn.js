import React from 'react'
import styled from 'styled-components'
import colors from '../../theme'

const CancelButton = styled.button`
border: 1px solid ${colors.primary};
color:${colors.primary};
background-color: #fff;
padding: 16px 35px;
border-radius: 5px;
&:hover {
  color: black;
  border-color: black;
}
`
function CancelBtn() {
  return (
    <CancelButton>Cancel</CancelButton>
  )
}

export default CancelBtn