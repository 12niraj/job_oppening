import React from 'react'


const card = (props) => {
  return (
        
     
      <div className="card">

        <div className="header">
        <img src={props.brandlogo} alt="Amazon" />
          <button>Save  <i class="fa-regular fa-bookmark"></i> </button>
      </div>

     <div className="center">
       <h3>{props.company} <span>{props.posted}</span></h3>
     
       <h2>{props.post}</h2>
      <div className='tag'>
        <h4>{props.time}</h4>
         <h4>{props.level}</h4>
       </div>
     </div>

     <div className="footer">
       <div>
        <h3>{props.pay}</h3>
        <button>Apply now</button>
       </div>
      
     </div>
    </div>
    
  )
}

export default card
