import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Props = {}

const Nav = (props: Props) => {

  return (
    <section className='bg-[#171717] py-3'>
      <div className='container flex justify-between items-center'>
        <h1 className={`text-3xl text-white font-cookie`}>Spacegram</h1>
        <Link href={'https://github.com/Accountmm/mmm'} >
          <Image src={'/github.svg'} alt='github' width={30} height={30} />
        </Link>
      </div>
    </section>
  )
}

export default Nav