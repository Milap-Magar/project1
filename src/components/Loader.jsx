import React from 'react'
import { ClockLoader } from 'react-spinners';

const Loader = () => {
   const override = {
      display: "block",
      margin: "0 auto",
      borderColor: "red",
   };
   return (
      <div className='flex justify-center items-center h-screen'>
         <ClockLoader
            loading={true}
            cssOverride={override}
            size={150}
         />
      </div>
   )
}

export default Loader