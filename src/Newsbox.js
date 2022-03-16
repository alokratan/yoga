import React from 'react'

function Newsbox({newsdata}) {
  return (
    <>
    {newsdata.map((arr)=>{

        return(
            <div className="newsboxx" key={arr.id}>
                <img src={arr.image} alt="none"/>
                <div className="imgbotom">
                <h6  className='text-center'>{arr.date}/{arr.name}</h6>
                <h1 className='text-center'>{arr.title}</h1>
                </div>
                
            </div>
        )
    })}
    </>
  )
}

export default Newsbox;