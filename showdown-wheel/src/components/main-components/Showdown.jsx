import React from 'react'
import './Showdown.css'
import { motion } from 'framer-motion'
const showdown = [
  {
    x: -10,
    letter: s,
  },
  {
    x: 160,
    letter: h,
  },
  {
    x: 390,
    letter: o,
  },
  {
    x: 500,
    letter: w,
  },
  {
    x: 685,
    letter: d,
  },
  {
    x: 830,
    letter: o2,
  },
  {
    x: 980,
    letter: w2,
  },
  {
    x: 1140,
    letter: n,
  },
]
import { Stage, Container, AnimatedSprite, Sprite, Text } from '@pixi/react'
import {
  off,
  vegas,
  slots,
  offBolt,
  s,
  h,
  o,
  w,
  d,
  o2,
  w2,
  n,
  bolt,
  must,
  listVariant,
  boxVariant,
  lightSequence,
  lightSequence2,
  lightSequenceBolt,
} from '../../assets/data'
const Showdown = () => {
  return (
    <div className='showdown-wrapper'>
      <motion.div
        className='showdown-container'
        variants={boxVariant}
        initial='hidden'
        animate='visible'
      >
        <img src={off} alt='off' className='off' />
        <motion.img
          src={vegas}
          alt='vegas'
          className='vegas'
          initial={{ opacity: [1] }}
          animate={{ opacity: lightSequence }}
        />
        <motion.img
          src={bolt}
          alt='offBolt'
          className='bolt'
          initial={{ opacity: 0 }}
          animate={{ opacity: lightSequenceBolt }}
          transition={{ delay: 0.6, duration: 0.4, repeat:Infinity }}
        />
        <motion.img
          src={slots}
          alt='slots'
          className='slots'
          initial={{ opacity: [1] }}
          animate={{ opacity: lightSequence }}
        />
        {/* #####SHOWDOWN */}
        <motion.img
          src={s}
          alt='s'
          className='letters'
          variants={listVariant}
        />
        <motion.img
          src={h}
          alt='h'
          className='letters'
          variants={listVariant}
        />
        <motion.img
          src={o}
          alt='o'
          className='letters'
          variants={listVariant}
        />
        <motion.img
          src={w}
          alt='w'
          className='letters'
          variants={listVariant}
        />
        <motion.img
          src={d}
          alt='d'
          className='letters'
          variants={listVariant}
        />
        <motion.img
          src={o2}
          alt='o2'
          className='letters'
          variants={listVariant}
        />
        <motion.img
          src={w2}
          alt='w2'
          className='letters'
          variants={listVariant}
        />
        <motion.img
          src={n}
          alt='n'
          className='letters'
          variants={listVariant}
        />
        <motion.img
          src={must}
          alt='must'
          className='must'
          variants={listVariant}
          initial={{ opacity: 0 }}
          animate={{ opacity: lightSequence2 }}
          transition={{ delay: 1.5, duration: 1.3 }}
        />
      </motion.div>
    </div>
  )
}

export default Showdown
