import { AiOutlineClose } from 'react-icons/ai';
import { WithChildren } from '../../common/ChildrenType';

import * as S from './styles';

type ModalProps = WithChildren<{
  title: string;
  isOpen: boolean,
  setIsOpen: (open: boolean) => void,
}>;

export const Modal = ({ isOpen, setIsOpen, title, children }: ModalProps) => {
  return (
    <>
      {isOpen && 
        <S.ModalWrapper>
          <S.ModalContent>
            <S.ModalTitle>
              <h1>{title}</h1>
              <button onClick={() => setIsOpen(false)}><AiOutlineClose size={20} /></button>
            </S.ModalTitle>
            <div>
              {children}
            </div>
          </S.ModalContent>
        </S.ModalWrapper>
      }
    </>
  );
}