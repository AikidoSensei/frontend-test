import { Stage, Container, AnimatedSprite, Sprite, Text } from '@pixi/react'

  
  const scale = 1.7
  const anchor = 0.1
  const ref = React.useRef()
  React.useEffect(() => {
    window.app = ref.current
    ref.current.app.renderer.resize(window.innerWidth, window.innerHeight)
    console.log(window.innerWidth)
  }, [window.innerWidth, window.innerHeight])
  React.useEffect(() => {
    const change = setInterval(() => setVegasView((prev) => prev + 1), 1000)
    if (vegasView >= 8) {
      return
    }
    console.log(vegasView)
    return () => {
      clearInterval(change)
    }
  }, [vegasView])
  return (
    // <div className='showdown-wrapper'>
    <Stage
      width={1280}
      height={768}
      raf={false}
      renderOnComponentChange={true}
      options={{ antialias: true, backgroundAlpha: 0 }}
      ref={ref}
    >
      {/* #######OFF####### */}
      <Sprite
        anchor={anchor}
        x={190}
        y={140}
        image={off}
        scale={{ x: scale, y: scale }}
      />
      {/* #######SHOWDOWN######## */}
      {showdown.map((word) => {
        const { x, letter } = word
        return (
          <Sprite
            anchor={anchor}
            x={x}
            y={160}
            image={letter}
            scale={{ x: scale, y: scale }}
          />
        )
      })}
      <>
        {/* ######VEGAS###### */}
        {vegasView >= 3 && (
          <Sprite
            anchor={anchor}
            x={200}
            y={85}
            image={vegas}
            scale={{ x: scale, y: scale }}
          />
        )}
        {/* ######BOLT###### */}
        <Sprite
          anchor={anchor}
          x={670}
          y={35}
          image={bolt}
          scale={{ x: scale, y: scale }}
        />
        {/* ######SLOTS###### */}
        <Sprite
          anchor={anchor}
          x={845}
          y={85}
          image={slots}
          scale={{ x: scale, y: scale }}
        />
      </>
      <>
        <Sprite
          anchor={anchor}
          x={290}
          y={480}
          image={must}
          scale={{ x: 1.1, y: 1.1 }}
        />
      </>
    </Stage>
    // </div>
  )