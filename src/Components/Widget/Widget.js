import React from 'react'
import './Widget.css';
 
 
 
const Widget = (props) => {
  return (
    <div className="widget">
        <iframe
          title="facebook react page"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact%2F&tabs=timeline&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          scrolling="no" 
          frameBorder="0" 
          allowFullScreen={true} 
          allow="encrypted-media;">
        </iframe>
    </div>
  )
}
 
 
 
export default Widget;
 