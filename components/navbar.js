import Link from 'next/link'

function Navbar() {
  return (
    <div>
      <Link href='/'>HOME</Link>
      <Link href='/about'>ABOUT</Link>
      <Link href='/spidy'>SPIDY</Link>
    </div>
  )
}

export default Navbar