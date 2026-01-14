import React, { useCallback, useState, type ChangeEvent } from "react"
import {produce} from 'immer'

/* =========================
   Types
========================= */
type Room = {
  name: string
  text: string
}

type House = {
  name: "house"
  rooms: Room[]
}

type Car = {
  name: "car"
  text: string
}

type State = [House, Car]

/* =========================
   Initial State
========================= */
const initialState: State = [
  {
    name: "house",
    rooms: [
      { name: "room1", text: "Room 1" },
    ],
  },
  {
    name: "car",
    text: "i20",
  },
]

/* =========================
   Components
========================= */
const RoomName = ({ data, onChange }:{data:Room,onChange:(e:ChangeEvent<HTMLInputElement>)=>void}) => {
  console.log('roomname')

  return (
    <div>
      <div>Room name</div>
      <input
        className="border border-white"
        value={data.text}
        onChange={onChange}
      />
    </div>
  )
}

const CarName = React.memo(({ data, onChange }:{data:Car,onChange:(e:ChangeEvent<HTMLInputElement>)=>void}) => {
  console.log('carname')
  return (
    <div>
      <div>Car name</div>
      <input
        className="border border-white"
        value={data.text}
        onChange={onChange}
      />
    </div>
  )
})

/* =========================
Main Component
========================= */
const ComplexState = () => {
  const [info, setInfo] = useState<State>(initialState)

  console.log(info)
  
  const updateRoom = (e:ChangeEvent<HTMLInputElement>) => {
    // 1st Approach
    // setInfo(prev => [  //its a deeply shallow copy technique, possible but complecated 
    //   {
    //     ...prev[0],
    //     rooms:[{
    //       ...prev[0].rooms[0],
    //       text:e.target.value
    //     }],
    //   },
    //   prev[1],
    // ])

    // 2nd Approach
    //deep copy way - works fine, but huge critical issue, it will clone enire state, even we dont wanted, to expensive
    // const newState = JSON.parse(JSON.stringify(info))
    // newState[0].rooms[0].text = e.target.value
    // setInfo(newState)

    // 3rd Approach (best approach using immer)
    setInfo((state)=>{ //it allow us to update like mutable, but not deep copy
      return produce(state,(draft)=>{
        draft[0].rooms[0].text = e.target.value
      })
    })

  }

  const updateCar = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    setInfo(prev => [
      prev[0],
      {
        ...prev[1],
        text: e.target.value,
      },
    ])
  },[])

  return (
    <div>
      <RoomName
        data={info[0].rooms[0]}
        onChange={updateRoom}
      />
      <div>{info[0].rooms[0]?.text}</div>

      <CarName
        data={info[1]}
        onChange={updateCar}
      />
    </div>
  )
}

export default ComplexState
