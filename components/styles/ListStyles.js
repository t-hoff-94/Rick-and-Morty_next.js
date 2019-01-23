import styled from 'styled-components'

 const ListStyles = styled.div`
  border-radius: 10px;
  background: #f3f3f3;
  padding: 5px;
  border: 2px solid orange;
  box-shadow: 5px 5px 9px 1px rgba(0,0,0,0.3);
  align-items: center;
  border-bottom: 1px solid orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  max-width: 777px;
  margin: 0 auto;
  transition: all .5s;
  &:hover {
    transform: scale(1.0125);
  }
  a {
    color: ${props => props.theme.teal};
  }
  .info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 444px;
    p {
      align-items: center;
      display: flex;
      flex-direction: column;
      span {
        color: ${props => props.theme.teal};
        line-height: 1;
      }
    }
  }
`;

export default ListStyles
