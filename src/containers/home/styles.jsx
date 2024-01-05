import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  max-width: 342px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
`

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  padding: 1.25rem;
  margin-top: 0.3rem;
  border-radius: .87rem;
  border: none;
  outline: 0;
  width: 100%;
  &::placeholder {
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
  }
`
