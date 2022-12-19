import { Logo, Keyboard, Language, Feedback, More } from '~/assets/svg'
import Button from '~/components/Button'

function Upload() {
  return (
    <>
      <Button hasIcon left={<Logo />}>
        Logo Header
      </Button>
      <Button hasIcon left={<More />}>
        Header Right Button
      </Button>
      <Button hasIcon left={<Keyboard />}>
        Header Right Button
      </Button>
      <Button hasIcon left={<Language />}>
        Header Right Button
      </Button>
      <Button hasIcon left={<Feedback />}>
        Header Right Button
      </Button>
    </>
  )
}

export default Upload
