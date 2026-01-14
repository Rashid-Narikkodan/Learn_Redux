import React from 'react'

const Border = ({children,text}:{children:React.ReactNode,text:string}) => {
  return (
  <div className="
  h-full w-full
  rounded-xl
  border border-white/20
  bg-neutral-900
  shadow-sm
  flex flex-col
  overflow-hidden
">
  <div className="
    shrink-0
    px-4 py-2
    text-sm font-medium
    text-gray-300
    border-b border-white/10
    bg-neutral-950
  ">
    {text}
  </div>

  <div className="
    flex-
    p-3
    overflow-auto
    min-h-0
  ">
    {children}
  </div>
</div>

  )
}

export default Border