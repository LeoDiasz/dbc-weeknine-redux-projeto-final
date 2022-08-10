import styled from "styled-components"

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: ${props => props.alignSelf && props.alignSelf};
  margin: ${props => props.margin && "0 40px"};
  width: ${props => props.width ? props.width : "200px"};
  height : ${props => props.height && props.height};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.colors.primary};
  color: ${props => props.color ? props.color : "#fff"};
  border-radius: ${props => props.radius ? props.radius : "8px"} ;
  min-height: 48px;
  border: none;
`

const ButtonWithIcon = styled(Button)`
  border-radius: 15px;
  min-height: 30px;
  width: ${props => props.width ? props.width : "50px"};
  font-size: ${props => props.size ? props.size : "20px"};
`

export {ButtonWithIcon, Button} 

