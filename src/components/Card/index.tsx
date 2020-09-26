import * as S from './styles';

export type CardProps = {
  name?: string;
  height?: string;
  gender?: string;
  birth_year?: string;
};

export const Card = ({ name, height, gender, birth_year }: CardProps) => {
  return (
    <S.wrapper>
      <S.content>
        <S.name>{name}</S.name>
        <S.wrapperCharacteristic>
          <span>Height</span>
          <p>{height}</p>
        </S.wrapperCharacteristic>

        <S.wrapperCharacteristic>
          <span>Gender</span>
          <p>{gender}</p>
        </S.wrapperCharacteristic>

        <S.wrapperCharacteristic>
          <span>Birth year</span>
          <p>{birth_year}</p>
        </S.wrapperCharacteristic>
      </S.content>
    </S.wrapper>
  );
};
