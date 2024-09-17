"use client"

import HomePage from '../components/HomePage/page'
import FirstBar from '../components/FirstBar/page'
import SecondBar from '../components/SecondBar/page'
import ThirdBar from '../components/ThirdBar/page'
import FinalBar from '../components/FinalBar/page'
import Modal from '../components/Modal/page'

import { useState } from 'react'

export default function Home() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <HomePage />
      <FirstBar />
      <SecondBar open={open} setOpen={setOpen}/>
      <ThirdBar />
      <FinalBar />
      
      { open &&
        <Modal setOpen={setOpen}/>
      }
    </>
  );
}
