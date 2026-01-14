import React from 'react'

const Border = ({children,text}:{children:React.ReactNode,text:string}) => {
  return (
    <div className='p-5 rounded-2xl border-white border max-h-fit items-center flex flex-col'>
        <p className='px-3 py-2'>{text}</p>
        {children}
    </div>
  )
}

export default Border