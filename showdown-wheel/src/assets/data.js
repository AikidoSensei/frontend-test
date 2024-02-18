import off from '../../showdown/showdown-off.png'
import vegas from '../../showdown/vegas@2x.png'
import slots from '../../showdown/slots@2x.png'
import offBolt from '../../showdown/bolt-off@2x.png'
import s from '../../showdown/s@2x.png'
import h from '../../showdown/h@2x.png'
import o from '../../showdown/o-1@2x.png'
import w from '../../showdown/w-1@2x.png'
import d from '../../showdown/d@2x.png'
import o2 from '../../showdown/o-2@2x.png'
import w2 from '../../showdown/w-2@2x.png'
import n from '../../showdown/n@2x.png'
import bolt from '../../showdown/bolt@2x.png'
import must from '../../showdown/must_drop.png'
import spinButton from '../../wheel/btn-spin.png'
import wheel from '../../wheel/wheel.png'
import marker from '../../wheel/marker.png'

//showdown light animation sequences
export const lightSequence = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1]
export const lightSequence2 = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1]
export const lightSequenceBolt= [0,1,0,1,0,1]

// animation between the two projects
export const projectVariant = {
  hidden: {opacity:0,scale:2},
  visible: {opacity:1,scale:1,
    transition: {
      type:'spring',
      duration: 1,
    },
  },
}

// animation behaviour of the showdown lights :)
export const boxVariant = {
  hidden: {},
  visible: {
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
}

export const listVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type:'spring',
      duration: 1,
    },
  },
}
export { off, vegas, slots, offBolt, s, h, o, w, d, o2, w2, n, bolt, must, spinButton, wheel, marker }
