import React, { useState, useRef } from 'react'
import Lottie from "lottie-react";
import welcome from "../../assets/welcome.json";
import hurray from "../../assets/hurray.json";
import './Wheel.css'
import {motion, animate} from 'framer-motion'
import { spinButton, marker, wheel } from '../../assets/data';
const url = 'http://localhost:3000/spin'
const Wheel = () => {

  const [luckyNumber, setLuckynumber] = useState();
  const [value, setValue] = useState(0)
  const [loadSpin, setLoadSpin] = useState(true)
  const spinner = document.getElementById('spin')
  const display = document.getElementById('display')

//  checks what value the the endpoint returned 
 const valueCheck =(value)=>{
 if (value>=0&&value<=90){return'1'}
 else if (value>=90&&value<=180){return'2'}
  
 else if(value>=180&&value<=270){return'3'}
 return '4'
 }
//  HANDLE SPIN FUNCTION 
 const handleSpin = async ()=>{
  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Oops an error occure')
      }
      return response.json()
    })
    .then((data) => {
      // the function below gets a random number between 0 to 360degrees based on the endpoint response 0-90degrees = 1, 90-180degrees = 2, etc.
      //NOTE: this function allows the marker to be able to point to any part of the wheel in all directions but still know what part of the board it has pointed to.
      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      if (data.POSITION === 1) {
        setValue(getRandomNumber(0, 90))
        console.log(value)
        return
      } else if (data.POSITION === 2) {
        setValue(getRandomNumber(90, 180))
        console.log(value)

        return
      } else if (data.POSITION === 3) {
        setValue(getRandomNumber(181, 270))
        console.log(value)

        return
      }
      setValue(getRandomNumber(271, 360))
      console.log(value)
    })
    .then(
      // animates the wheel smoothly to the value based on the endpoint
      animate(
        spinner,
        { rotate: [-4320, -value] },
        { type: 'tween', bounce: 50, duration: 7 },
        
      )
    )
    .then(
      // animates the lucky number text
      animate(
        display,
        { scale: [0,1] },
        { type: 'spring', duration: 1, delay:7 }
      )
    ).then(setLuckynumber(valueCheck(value)))
    .catch((error) => console.log(error))
   }
  //  ANIMATES THE WELCOME TEXT
   React.useEffect(() => {
    const change = setTimeout(() => setLoadSpin(false), 8000)
    return () => {
      clearTimeout(change)
    }
  }, [])
  return (
    <div className='wheel-wrapper'>
      <div className='wheel-container'>
        {loadSpin ? (
          <div className='welcome'>
            <Lottie animationData={welcome} loop={false} />
          </div>
        ) : (
          <>
            <div className='wheel'>
              <motion.div
                className='engine'
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  rotate: 720,
                  transition: {
                    type: 'spring',
                    duration: 1.8,
                  },
                }}
              >
                <img src={wheel} alt='wheel' id='spin' />
                <img src={marker} alt='marker' />
              </motion.div>
              <a className='spin-button' onClick={handleSpin}>
                <img src={spinButton} alt='button' />
              </a>
              <div id='display'>
                {luckyNumber&&<div className='hurray'><Lottie animationData={hurray} loop={true} /></div>}
                <h1 style={{color:'white'}}>Your Lucky Number is {luckyNumber}</h1>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Wheel
