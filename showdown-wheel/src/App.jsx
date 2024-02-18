import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Showdown from './components/main-components/Showdown'
import Wheel from './components/main-components/Wheel'
import { AnimatePresence, motion } from 'framer-motion'
import { projectVariant } from './assets/data'

function App() {
  const [project, setProject] = useState(true)

  return (
    <>
      <div className='main'>
        <button onClick={() => setProject(!project)} className='toggle'>
          {project ? 'Wheel' : 'Showdown'}
        </button>
        <AnimatePresence>
          {project ? (
            <motion.div
              key={'project'}
              variants={projectVariant}
              initial='hidden'
              animate='visible'
              exit='hidden'
              style={{ width: '100%', height: '100%' }}
            >
              <Showdown />
            </motion.div>
          ) : (
            <motion.div
              key={'project2'}
              variants={projectVariant}
              initial='hidden'
              animate='visible'
              exit='hidden'
              style={{ width: '100%', height: '100%' }}
            >
              <Wheel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
