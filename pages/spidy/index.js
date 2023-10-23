import Link from 'next/link'

export const getStaticProps = async()=>{
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await result.json()

    return{
        props : { info : data }
    }
}

function Spidy({ info }) {
  return (
    <div>
        {info.map(info=>(
            <Link href={'/spidy/'+info.id} key={info.id}>
                <h1>{info.username}</h1>
            </Link>
        ))}
    </div>
  )
}

export default Spidy