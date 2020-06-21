import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: flex-start;
  max-width: 80rem;
  margin: auto;
  margin-bottom: 30px;
  @media (max-width: 860px) {
    max-width: 40rem;
  }
  @media (max-width: 680px) {
    justify-content: center;
  }
`

export const Category = styled.p`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.7);
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #ec6611;
  height: 250px;
  padding: 10px; 
  width: 200px;
  margin: 0px 30px 20px 0px;
`

export const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1.7rem;
`

export const Author = styled.p`
  color: white;
  font-size: .8rem;
`