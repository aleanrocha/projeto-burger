import styled from 'styled-components'

export const Image = styled.img`
  width: 100%;
  max-width: 246px;
`
export const ContainerOrders = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.12rem;
`

export const Order = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-radius: 0.87rem;
  background: rgba(255, 255, 255, 0.25);
  padding: 1rem 1.68rem;
  min-height: 101px;

  & > div {
    width: 100%;
    min-height: 69px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .3rem;
  }

  & > svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
`

export const Text = styled.p`
  font-weight: 300;
  font-size: .9rem;
  &.clientName {
    font-weight: 700;
  }
`
