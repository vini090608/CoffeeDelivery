import styled from "styled-components";

export const ConclusionDetails = styled.main`
  display: flex;
  gap: 6.25rem;

  h2 {
    color: var(--yellow-dark);
  }

  span {
    display: block;
    font: var(--text-l);
    color: var(--base-subtitle);
    padding-bottom: 2.5rem;
  }

  .Info {
    border: 2px solid transparent;
    border-radius: 4px 50px 4px 50px;

    background:
      linear-gradient(var(--white), var(--white)) padding-box,
      linear-gradient(90deg, var(--yellow), var(--purple)) border-box;

    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 2rem;

    p {
      color: var(--base-text);
      font: var(--text-m);
    }

    .tag {
      display: flex;
      align-items: center;
      gap: 1rem;

      .purple {
        background-color: var(--purple);
        color: var(--white);
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 20px;
      }

      .yellow {
        background-color: var(--yellow);
        color: var(--white);
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
      }

      .yellowDark {
        background-color: var(--yellow-dark);
        color: var(--white);
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
      }
    }
  }
`;
