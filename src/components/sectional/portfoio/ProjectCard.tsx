import Link from 'next/link'
import React from 'react'

const ProjectCard = () => {
  return (
    <div className='bg-neutral-300 text-neutral-900 rounded-md mt-4 p-2 '>
      <p>Title</p>
      <section>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos accusantium tempore officiis dicta, error quos.</p>
        <Link href="/">Card Link</Link>
      </section>
    </div>
  )
}

export default ProjectCard