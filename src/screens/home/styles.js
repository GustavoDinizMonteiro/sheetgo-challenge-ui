import styled from 'styled-components'

export const Back = styled.button`
  background: transparent;
  font-size: 1rem;
  font-weight: bold;
  color: #ec6611;
  border: none;
`

export const Button = styled.button`
  border-radius: 5px;
  border: gray 1px solid;
  background-color: white;
  color: black;
  padding: 5px 15px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 40vw;
  text-align: center;
  border-radius: 15px;
  border: 1px solid gray;
  padding: 5px 0px;
`

export const Select = styled.select`
  border-radius: 15px;
  padding: 0px 15px;
  background-color: white;
  color: gray;
  margin-right: 2vw;
`

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2vw;
  ${props => props.center && `
    justify-content: center;
    margin-right: 0px;
  `}
`