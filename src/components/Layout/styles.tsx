import styled from 'styled-components';

export const Main = styled.main`
  margin-left: 5rem;
  margin-right: 5rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media only screen and (max-width: 600px) {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;