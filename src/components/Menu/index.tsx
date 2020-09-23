import { WiStars } from 'react-icons/wi';

import * as S from './styles';
import { options } from './options';

export const Menu = () => {
  return (
    <S.leftbar>
      <S.navbar>
        <S.logo>
          <S.navbarLink>
            <span>Star Wars</span>
            <WiStars />
          </S.navbarLink>
        </S.logo>

        {options.map((opt, idx) => (
          <S.navItem key={`${idx}-key`}>
            <S.navbarLink>
              {opt.icon}
              <S.linkText>{opt.title}</S.linkText>
            </S.navbarLink>
          </S.navItem>
        ))}
      </S.navbar>
    </S.leftbar>
  );
}