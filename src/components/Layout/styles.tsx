import styled from 'styled-components';

export const Main = styled.main`
  padding: 2rem 5rem 8rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: 20px;

  @media only screen and (max-width: 600px) {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 1950px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 1680px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
`;
