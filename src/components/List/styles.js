import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 3rem;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.2rem;

    h2 {
      font-weight: 500;
      font-size: 1.6rem;
      padding: 0 1rem;
    }

    button {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 2.1rem;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 2rem;
  }
`;
