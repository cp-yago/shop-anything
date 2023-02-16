import { ReactElement } from "react"
import { Container, IconContainer } from './styles'

interface ItemProps {
  text: string
  icon: ReactElement
  iconBackgroundColor: string
}

interface IconWithBackgroundProps {
  icon: ReactElement
  iconBackgroundColor: string
}

export const IconWithBackground = ({ icon, iconBackgroundColor }: IconWithBackgroundProps) => {
  return (
    <IconContainer iconBackgroundColor={iconBackgroundColor}>
      {icon}
    </IconContainer>
  )
}

export const Item = ({ text, icon, iconBackgroundColor }: ItemProps) => {
  return (
    <Container>
      <IconWithBackground
        icon={icon}
        iconBackgroundColor={iconBackgroundColor}
      />
      <div>
        <span>{text}</span>
      </div>
    </Container>
  )
}