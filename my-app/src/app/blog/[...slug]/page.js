import React from 'react'

const page = async({params}) => {
    const slug=(await params).slug
  return (
    <div>
    <ul>
        <li>{slug[0]}</li>
        <li>{slug[1]}</li>
        <li>{slug[2]}</li>
    </ul>
    </div>
  )
}

export default page
