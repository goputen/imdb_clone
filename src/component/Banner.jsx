import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(https://www.tallengestore.com/cdn/shop/products/Movie_Poster_Art_-_Deadpool_-_Sweet_-_Tallenge_Hollywood_Poster_Collection_41cb01fb-b175-444b-a425-dab9ce088a77.jpg?v=1578045027)`}}>
      <div className='text-white text-2xl bg-blue-900/60 text-center w-full font-medium p-3'>Deadpool and the wolverine</div>
    </div>
  )
}

export default Banner