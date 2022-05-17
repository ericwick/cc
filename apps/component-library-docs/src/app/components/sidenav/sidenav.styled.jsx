import styled from 'styled-components';

export const StyledSidenav = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  background: lightgray;
  height: 100vh;
  top: 0;
  margin: 0;
  padding: 4rem 2rem 2rem 2rem;
  list-style: none;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  @media (max-width: 2000) {
    width: 100%;
  }
`;
