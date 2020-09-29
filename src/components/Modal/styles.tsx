import styled from 'styled-components';

export const ModalWrapper = styled.section`
  display: block; 
  position: fixed;
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.2);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 40%;
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    background-color: transparent;

    &:hover {
      background-color: rgba(0,0,0,0.1);
    }
  }
`;