import React from 'react';
import './SidebarRow.css';
import Avatar from '@material-ui/core/Avatar';
 
 
const SidebarRow = ({src, Icon, title}) => {
  return (
    <div className="sidebar__row">
      <div className="sidebar__row__icon">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
      </div>
      <h4>{title}</h4>
    </div>
  )
}
 
 
 
export default SidebarRow;
 