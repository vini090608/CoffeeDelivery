import styled from "styled-components";

export const Dashboard = styled.main`
  main {
    display: flex;
    width: 100%;
    align-items: center;
    /* justify-self: center; */
    justify-content: space-between;

    .DashboardSection {
      h2 {
        font-size: 3rem;
        width: 37rem;
        padding-bottom: 1rem;
      }

      p {
        padding-bottom: 2rem;
      }

      .IconList {
        width: 40rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        div {
          display: flex;
          width: 17rem;
          align-items: center;
          gap: 1rem;

          .ShoppingCart {
            background-color: var(--yellow-dark);
            color: var(--white);
            width: fit-content;
            padding: 0.5rem;
            border-radius: 20px;
          }
          .Timer {
            background-color: var(--yellow);
            color: var(--white);
            width: fit-content;
            padding: 0.5rem;
            border-radius: 20px;
          }
          .Package {
            background-color: var(--base-text);
            color: var(--white);
            width: fit-content;
            padding: 0.5rem;
            border-radius: 20px;
          }
          .Coffee {
            background-color: var(--purple);
            color: var(--white);
            width: fit-content;
            padding: 0.5rem;
            border-radius: 20px;
          }
        }
      }
    }

    img {
      width: 40rem;
    }
  }

  .coffeeMain {
    justify-self: center;
    align-content: center;

    h3 {
      padding-bottom: 3rem;
      color: var(--base-subtitle);
    }

    .coffeeSection {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      padding-bottom: 5rem;

      .Card {
        background-color: var(--base-card);
        width: 16rem;
        height: 17.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem;
        margin-bottom: 2rem;
        border-radius: 4px 50px 4px 50px;

        img {
          position: relative;
          top: -2rem;
        }

        .coffeeCategory {
          display: flex;
          gap: 0.2rem;

          p {
            position: relative;
            top: -1rem;
            background: var(--yellow-light);
            color: var(--yellow-dark);
            padding: 0.3rem;
            font: var(--tag);
            text-transform: uppercase;
            border-radius: 8px;
          }
        }

        h3 {
          font: var(--title-s);
          padding: 0.2rem;
        }

        span {
          font: var(--text-s);
          color: var(--base-label);
          text-align: center;
        }

        .cardFooter {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: auto;

          div span:nth-child(1) {
            color: var(--base-text);
            padding: 0.15rem;
          }

          div span:nth-child(2) {
            font: var(--title-m);
            color: var(--base-text);

            font-weight: bold;
          }

          .quantity {
            display: flex;
            width: fit-content;
            text-align: center;
            background: var(--base-button);
            border: none;
            border-radius: 8px;
            padding: 0 0.5rem;

            button {
              all: unset;
              font-size: 1.5rem;
              color: var(--purple);
            }

            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            input[type="number"] {
              background: none;
              border: none;
              width: 2rem;
              text-align: center;

              &:focus {
                outline: none;
              }
            }
          }

          button {
            all: unset;
            display: flex;
            background: var(--purple);
            justify-items: center;
            color: white;
            padding: 0.5rem;
            border-radius: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
