import styled from 'styled-components';

export const StyledSidenav = styled.ul`
  position: fixed;
  max-width: 17rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  background: #182139;
  height: 100%;
  top: 0;
  margin: 0;
  padding: 1rem;
  list-style: none;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.4s ease-in-out;

  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px transparent;
    -webkit-box-shadow: inset 0 0 6px transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f8f7ff;
    border-radius: 7px;
  }

  @media (max-width: 2000) {
    width: 100%;
  }
`;
