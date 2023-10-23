export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(info=>{
        return{
            params : {id : info.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const data = await res.json()

    return{
        props : { spidy : data }
    }
}


function Info({ spidy }) {
  return (
    <div>
        <p1>NAME : {spidy.name}</p1>
        <br/>
        <p1>PHONE : {spidy.phone}</p1>
    </div>
  )
}

export default Info