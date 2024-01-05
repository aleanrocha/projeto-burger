import styled from 'styled-components'

const Btn = styled.button`
  width: 100%;
  max-width: 342px;
  height: 68px;
  text-align: center;

  background-color: ${props => props.$isBack ? '#ffffff23' : '#d93856'};
  color: #fff;
  border: none;
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin-top: 2.75rem;
  opacity: .9;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`

export default Btn
