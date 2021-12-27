import { useState } from 'react'

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('bg-blue-500')
  return (
    <>
      <button onClick={() => setShowModal(true)} className='px-3 py-1 bg-blue-500 text-white rounded-md shadow hover:bg-opacity-70'>Show Modal Window</button>
      {showModal ? (
        <div className='flex justify-center'>
          <div className='relative bg-white z-10 max-w-sm rounded-md shadow hover:bg-opacity-70'>
            <div className='flex justify-between border-b border-solid border-gray-300 p-5'>
              <h3 className='text-3xl font-bold'>Modal Title</h3>
              <button onClick={() => setShowModal(false)}><span className='text-2xl font-bold'>×</span></button>
            </div>
            <div className='p-5 border-b border-solid border-gray-300'>
              <p className='text-gray-600 text-lg font-light'>text text text text text text text text</p>
            </div>
            <div className='flex justify-end p-5'>
              <button onClick={() => setShowModal(false)} className='mx-6 text-red-500 font-bold uppercase text-sm'>close</button>
              <button onClick={() => setShowModal(false)} className='px-6 py-3 bg-green-400 text-white fond-bold uppercase text-sm rounded-md hover:shadowlg'>save change</button>
            </div>
          </div>
          <div onClick={() => setShowModal(false)} className='bg-black opacity-25 inset-0 fixed'></div>
        </div>
        ) : null
      }
        
    </>
  )
}

// export const Modal = () => {
//   const [showModal, setShowModel] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowModel(true)} className='px-3 py-1 bg-blue-500 text-white rounded-md shadow hover:bg-opacity-70 focus:outline-none'>Show Modal Window</button>
//       {showModal ? (
//         <div className='flex justify-center'>
//           <div className='relative bg-white max-w-sm rounded-lg shadow-lg z-10'>
//             <div className='flex justify-between border-b border-solid border-gray-300 p-5'>
//               <h3 className='text-3xl font-bold'>Modal Title</h3>
//               <button 
//               onClick={() => setShowModel(false)}
//               className='float-right focus:outline-none'>
//                 <span className='text-2xl font-bold'>×</span>
//               </button>
//             </div>
//             <div className='p-5 border-b border-solid border-gray-300'>
//               <p className='text-gray-600 text-lg font-light'>text text text texttext text text texttext text text texttext text text text</p>
//             </div>
//             <div className='p-5 flex justify-end'>
//               <button onClick={() => setShowModel(false)} className='mx-6 text-red-500 font-bold uppercase test-sm focus:outline-none'>close</button>
//               <button onClick={() => setShowModel(false)} className='px-6 py-3 bg-green-500 text-white font-bold uppercase test-sm rounded hover:shadow-lg focus:outline-none'>save change</button>
//             </div>
//           </div>
//           <div onClick={() => setShowModel(false)} className='bg-black opacity-25 inset-0 fixed'></div>
//         </div>
//       ) : null}
//     </div>
//   )
// }
