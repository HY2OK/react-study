import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPhonePage = () => {
  const { id } = useParams()
  console.log(id)

  return <div>DetailPhonePage</div>
}

export default DetailPhonePage
