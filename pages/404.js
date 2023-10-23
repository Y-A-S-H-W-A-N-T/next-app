import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Error() {

    const route = useRouter()
    const [time,setTime] = useState(3)

    useEffect(()=>{
      setTimeout(()=>{
        setTime(time-1)
      },1000)
      if(time==0)
        route.push('/')
    })

  return (
    <div>
        <h1>This page does not exists!!!</h1>
        <p>Redirecting to home page in {time} secs</p>
    </div>
  )
}

export default Error