import React from 'react'
import styled from 'styled-components'
import colors from '../theme'

const MemberCard = styled.div`
width: 300px;
position: relative;
border: 1px solid ${colors.primary};
margin-block: 0.3rem;
padding: 10px 30px 10px 30px;
`
const SelectedMember = styled.p`
margin: 0;
`

const NotSelectedMember = styled.p`
color: ${colors.primary};
margin: 0;
`
const AvatarIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  cursor: pointer;
`
const SelectedIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`
const RadioCheckBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: #fff;
  border: 2px solid ${colors.primary}; 
  border-radius: 50%;
`

function Card({ member, handelCheckMarkBtn }) {
  return (
    <MemberCard>
    {member.member ? (
      <>
        <AvatarIcon src='/icons/selected-user.png' />
        <SelectedMember>{member.name}</SelectedMember>
        <SelectedIcon src='/icons/checkmark.svg' aria-hidden="true" role='button'onClick={() => handelCheckMarkBtn(member.id)}/>
      </>
    ) : (
      <>
        <AvatarIcon src='/icons/user.png' />
        <NotSelectedMember>{member.name}</NotSelectedMember>
        <RadioCheckBtn onClick={() => handelCheckMarkBtn(member.id)}/>
      </>
    )}
  </MemberCard>
 )
}

export default Card