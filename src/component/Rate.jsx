import React from 'react'


function Rate({rate}) {
  const arrStar=[1,2,3,4,5];
  return (
    <div className='RateContainer'>
      {arrStar.map ( (el)=> el < rate ? <span>&#9733;</span> : <span>&#9734;</span> )  }
    </div>
  )
}

export default Rate
