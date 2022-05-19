import styled from 'styled-components';

export const StyledSidenav = styled.ul`
  position: fixed;
  width: 30%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  background: #182139;
  height: 100vh;
  top: 0;
  margin: 0;
  padding: 0.74rem;
  list-style: none;
  line-height: 1.7rem;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  ::-webkit-scrollbar {
    width: 0.1em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px transparent;
    -webkit-box-shadow: inset 0 0 6px transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c1c4dd;
    outline: 1px solid #c1c4dd;
    border-radius: 7px;
  }

  @media (max-width: 2000) {
    width: 100%;
  }
`;
