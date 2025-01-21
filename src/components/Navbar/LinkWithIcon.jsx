import React from 'react'
import './LinkWithIcon.css'
import { Link, NavLink } from 'react-router-dom'

const LinkWithIcon = ({ title, link, emoji}) => {
  return (
    // navLink는 자동으로 avtive 클래스 추가됨(네브바에서 사용)
      <NavLink to={link} className='align_center'>
            {title} <img src={emoji} alt='' className='link_emoji' />
       </NavLink>
  )
}

export default LinkWithIcon