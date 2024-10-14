import { ButtonCalculator } from "./Styles"

const Button = ({label, onClick}) => {
  return (

    <ButtonCalculator onClick={onClick}>
      {label}
    </ButtonCalculator>

    
  )
}

export default Button