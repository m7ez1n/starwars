import { WithChildren } from '../../common/ChildrenType';
import * as S from './styles';

type CardItemProps = WithChildren<{
  title: string;
}>;

type CardProps = WithChildren<{
  onClick?: () => void,
}>

export const Card = ({ children, onClick }: CardProps) => {
  return (
    <S.CardWrapper onClick={onClick}>
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