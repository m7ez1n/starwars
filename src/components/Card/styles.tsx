import styled from 'styled-components';

export const wrapper = styled.section`
  margin-top: 20px;
  margin-left: 40px;
  max-height: 250px;
  min-height: 200px;
  max-width: 400px;
  min-width: 200px;
  width: auto;
  height: auto;

  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const name = styled.h4`
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
`;

export const wrapperCharacteristic = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;

  span {
    font-size: 16px;
    color: #4e4e4e;
  }

  p {
    font-size: 20px;
    color: black;
  }
`;

/**
 *  ---> Pessoas <---
 *  - Nome
 *  - Altura
 *  - Genêro
 *  - Ano de nascimento
 *
 * ---> Filmes <---
 *   - titulo
 *   - diretor
 *   - data de lançamento
 *   - episodio id
 *
 * ---> Veiculos <---
 *   - Name
 *   - Model
 *   - manufacturer
 *   - vehicle_class
 *
 * ---> Species <---
 *   -Name
 *   - language
 *   -classification
 *   - average_lifespan
 * */
