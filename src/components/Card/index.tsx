import React from 'react';
import * as S from './styles';

type CardItemProps = WithChildren<{
  title: string;
}>;

type WithChildren<T = {}> = T & { children?: React.ReactNode };

export const Card = ({ children }: WithChildren) => {
  return (
    <S.CardWrapper>
      <S.CardContent>
        {children}
      </S.CardContent>
    </S.CardWrapper>
  );
};

export const CardTitle = ({ children }: WithChildren) => (
  <S.CardTitle>{children}</S.CardTitle>
)

export const CardItem = ({ title, children }: CardItemProps) => (
  <S.CardItem>
    <span>{title}</span>
    <p>{children}</p>
  </S.CardItem>
)