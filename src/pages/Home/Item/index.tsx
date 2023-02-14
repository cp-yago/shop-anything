import { ReactElement } from "react"
import { Container } from './styles'

interface ItemProps {
  text: string
  icon: ReactElement
  iconBackgroundColor: string
}

export const Item = ({ text, icon, iconBackgroundColor }: ItemProps) => {
  return (
    <Container iconBackgroundColor={iconBackgroundColor}>
      <div className="icon">
        {icon}
      </div>
      <div>
        <span>{text}</span>
      </div>
    </Container>
  )
}