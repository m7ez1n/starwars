import styled from 'styled-components';

export const leftbar = styled.nav`
  position: fixed;
  background-color: var(--background);
  transition: width 600ms ease;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.25rem;
  } 

  &::-webkit-scrollbar-track {
    background: var(--background);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--background);
  }

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  @media only screen and (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;

    &:hover {
      width: 16rem;
    }
  }
`;

export const navbar = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

export const navItem = styled.li`
  width: 100%;

  &:last-child {
    margin-top: auto;    
  }

  @media only screen and (max-width: 600px) {
    &:last-child {
      margin-top: 0;
    }
  }
`;

export const navbarLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--texts);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: 600ms;

  svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }

  &:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--hoverEffect);
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const linkText = styled.span`
  display: inline;
  margin-left: 1rem;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const logo = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--texts);
  background: var(--background);
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;

  svg {
    transform: rotate(0deg);
    transition: 600ms;
  }

  span {
    display: inline;
    position: absolute;
    left: -999px;
    transition: 600ms;
  }

  &:hover {
    svg {
      transform: rotate(360deg);
      transition: 600ms;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    &:hover {
      svg {
        margin-left: 12rem;
      }

      span {
        left: 15px;
      }
    }
  }
`;