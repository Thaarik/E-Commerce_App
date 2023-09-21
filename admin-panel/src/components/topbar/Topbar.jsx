import React from 'react'
import './Topbar.css'
import Profilepic from './../../assets/profilepic/profilepic.jpg'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
            <span className='logo'>Admin</span>
        </div>
        <div className='topRight'>
            <div className='topBarIconContainer'>
                <NotificationsNone/>
                <span className='topIconBadge'>2</span>
            </div>
            <div className='topBarIconContainer'>
                <Language/>
                <span className='topIconBadge'>2</span>
            </div>
            <div className='topBarIconContainer'>
                <Settings/>
            </div>
            <img src={Profilepic} alt='profile pic' className='topAvatar'/>
        </div>
      </div>

    </div>
  )
}

export default Topbar
