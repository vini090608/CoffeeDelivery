import styled from "styled-components";

export const HeaderPage = styled.header`
  display: flex;
  width: 100%;
  justify-self: center;

  justify-content: space-between;
  padding: 1rem;
  padding-bottom: 3rem;

  div {
    display: flex;
    position: relative;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;

      border-radius: 8px;
      padding: 0.5rem;
      border: none;
    }

    .locate {
      background: var(--purple-light);
      color: var(--purple);
    }

    .buy {
      display: flex;
      align-items: center;
      border-radius: 8px;
      padding: 0.7rem;
      border: none;
      background: var(--yellow-light);
      color: var(--yellow);
      position: relative;
      transition: 0.2s background;

      &:hover {
        background: var(--yellow);
        color: var(--white);
      }
    }

    .buy::after {
      content: attr(data-count);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: -6px;
      right: -6px;

      width: 1rem;
      height: 1rem;
      background-color: var(--yellow-dark);
      border-radius: 50%;
      font-size: 0.7rem;
    }
  }
`;
