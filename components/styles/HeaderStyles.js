import styled from 'styled-components'

const HeaderStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 4rem 0 2rem;
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 444px;
  }
  span {
    color: ${props => props.theme.teal};
    line-height: 1;
    font-size: 2rem;
  }
`;

export default HeaderStyles
