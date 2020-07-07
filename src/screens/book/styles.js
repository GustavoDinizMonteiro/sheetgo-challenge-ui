import styled from 'styled-components'

export const Back = styled.button`
  background: transparent;
  font-size: 1rem;
  font-weight: bold;
  color: #ec6611;
  border: none;
  cursor: pointer;
`

export const Title = styled.p`
  color: rgb(51, 51, 51);
  font-size: 3rem;
  font-weight: 600;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Label = styled.p`
  font-weight: bold;
  font-size: 14px;
`

export const Description = styled.p`
  color: rgba(0, 0, 0, .7);
`

export const CommentLabel = styled.p`
  text-align: center;
  color: rgba(0, 0, 0, .7);
  font-size: 2rem;
  font-weight: bold;
`

export const CommentAuthor = styled.span`
  font-weight: bold;
`

export const Comment = styled.p`
  margin-top: 0px;
`

export const CommentInput = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  width: 90vw;
  font-size: 1.2rem;
`