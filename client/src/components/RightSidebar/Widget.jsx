import React from 'react'

import'./RightSidebar.css'
import comment from '../../assests/cmnt.png'
import pen from '../../assests/pen.png'
import rsicon from '../../assests/Rsicon.png'
const Widget = () => {
  return (
    <div className='widget'>
        <h4> The overflow blog</h4>
        <div className='right-sidebar-div-1'> 
        <div className='right-sidebar-div-2'> 
        <img src={pen} alt="pen"  width='18' />
        <p>Observabilty is thekey to the future of software (and DEVops carrer)</p>
        </div>
        <div className='right-sidebar-div-2'> 
        <img src={pen} alt="pen"  width='18' />
        <p>Podcast 374:How valuable is your screen name?</p>
        </div>
        </div>
        <h4> Featured on meta</h4>
        <div className='right-sidebar-div-1'> 
        <div className='right-sidebar-div-2'> 
        <img src={comment} alt="comment"  width='18' />
        <p>Review queue workflows -Final release...</p>
        </div>
        <div className='right-sidebar-div-2'> 
        <img src={comment} alt="comment"  width='18' />
        <p>Please welcome Valued Associates:#958-V2Blast#959-SpencerG</p>
        </div>
        <div className='right-sidebar-div-2'> 
        <img src={rsicon} alt="rsicon"  width='18' />
        <p>Outdated Answers:accepted answer is now unpinned on Stack overflow</p>
        </div>
        </div>
        <h4> Hot meta posts</h4>
        <div className='right-sidebar-div-1'> 
        <div className='right-sidebar-div-2'> 
        <p>38</p>
        <p>Why was this spam flag declined,yet the questions marked as spam</p>
        </div>
        <div className='right-sidebar-div-2'> 
        <p>20</p>
        <p>What is the best course to action when a user has high enough rep to....</p>
        </div>
        <div className='right-sidebar-div-2'> 
        <p>14</p>
        <p>Is a link to the"How to ask " help page a useful comment?</p>
        </div>
        </div>
        
    </div>
  )
}

export default Widget
