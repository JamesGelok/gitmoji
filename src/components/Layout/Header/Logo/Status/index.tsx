import Joy from './Joy'
import Loved from './Loved'
import Sexy from './Sexy'
import Smiling from './Smiling'
import Sunglasses from './Sunglasses'
import Tongue from './Tongue'

export const EmojiStatus = {
  JOY: 'joy',
  LOVED: 'loved',
  SEXY: 'sexy',
  SMILING: 'smiling',
  SUNGLASSES: 'sunglasses',
  TONGUE: 'tongue',
} as const

type ObjectValues<T> = T[keyof T]

type Props = {
  status: ObjectValues<typeof EmojiStatus>
}

const Status = (props: Props) => {
  switch (props.status) {
    case EmojiStatus.JOY:
      return <Joy />

    case EmojiStatus.LOVED:
      return <Loved />

    case EmojiStatus.SEXY:
      return <Sexy />

    case EmojiStatus.SMILING:
      return <Smiling />

    case EmojiStatus.SUNGLASSES:
      return <Sunglasses />

    case EmojiStatus.TONGUE:
      return <Tongue />

    default:
      throw new Error('Invalid status')
  }
}

export default Status
