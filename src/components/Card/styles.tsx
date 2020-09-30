import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardWrapper = styled(motion.section)`
  margin-top: 20px;
  margin-left: 40px;
  max-height: 250px;
  min-height: 200px;
  max-width: 300px;
  width: 100%;
  height: auto;
  cursor: pointer;

  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0;

    &:last-child {
      margin-bottom: 100px;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CardTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
`;

export const CardItem = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  text-align: right;

  span {
    font-size: 16px;
    color: #4e4e4e;
    margin-right: 20px;
  }

  p {
    font-size: 20px;
    color: black;
  }
`;
