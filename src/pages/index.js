import React from 'react'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import '../global/global.css'
import { Helmet } from 'react-helmet'

export default function Index() {
  return(
    <div>
      <Header/>
      <Main/>
    </div>
  )
}