import React from 'react';



function TimerStatic() {
    return (
        <div className='timerstatic'>
          <div className='Units'> 
              <div>00</div>
              <div>Hour</div>
          </div>
          <div>:</div>
          <div className='Units'> 
             <div>00</div>
              <div>Minute</div>
          </div>
          <div>:</div>
          <div className='Units'> 
              <div>00</div>
              <div>Second</div>
          </div>
        </div>
    )
    
}
export default TimerStatic
