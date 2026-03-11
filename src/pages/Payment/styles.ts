import styled from "styled-components";

export const PaymentMain = styled.main`
  display: flex;
  /* justify-content: center; */
  gap: 2rem;

  h5 {
    color: var(--base-subtitle);
    padding-bottom: 1rem;
  }

  .purple {
    color: var(--purple);
  }

  .SectionDelivery {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 45%;

    .DeliveryInfo {
      background: var(--base-card);
      padding: 2.5rem;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .Locate {
        display: flex;
        gap: 1rem;
        align-items: center;

        div:nth-child(1) {
          color: var(--yellow-dark);
        }

        div:nth-child(2) {
          p {
            font: var(--text-m);
            color: var(--base-subtitle);
          }
          span {
            font: var(--text-s);
            color: var(--base-text);
          }
        }
      }

      .InputList {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
          background: var(--base-input);
          color: var(--base-label);
          border: 1px solid var(--base-button);
          border-radius: 8px;
          padding: 0.75rem;

          &:focus {
            outline: none;
          }
        }

        .inputs1 {
          display: flex;
          gap: 0.75rem;

          :nth-child(2) {
            width: 100%;
          }
        }

        .inputs2 {
          display: flex;
          gap: 0.75rem;

          :nth-child(1) {
            width: 45%;
          }

          :nth-child(2) {
            width: 45%;
          }

          :nth-child(3) {
            width: 8%;
          }
        }
      }
    }

    .PaymentMethod {
      display: flex;
      flex-direction: column;
      background: var(--base-card);
      padding: 2.5rem;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .PaymentTitle {
        display: flex;
        gap: 0.75rem;

        p {
          color: var(--base-title);
          font: var(--text-m);
        }

        span {
          color: var(--base-text);
          font: var(--text-s);
        }
      }

      .PaymentButton {
        display: flex;
        gap: 1rem;
      }

      .PaymentButton label {
        display: flex;
        align-items: center;
        background-color: var(--base-button);
        padding: 0.75rem;
        gap: 0.75rem;
        border-radius: 8px;
        width: 100%;
        cursor: pointer;
        border: 1px solid transparent;
        transition: 0.2s background;
      }

      .PaymentButton label p {
        color: var(--base-text);
        font: var(--button-m);
        text-transform: uppercase;
      }

      .PaymentButton label:hover {
        background-color: var(--purple-light);
        border: 1px solid var(--purple);
      }

      /* esconde radio */
      .PaymentButton input {
        display: none;
      }

      /* quando selecionado */
      .PaymentButton input:checked + svg,
      .PaymentButton input:checked + svg + p {
      }

      .PaymentButton input:checked ~ p {
      }

      .PaymentButton input:checked + svg,
      .PaymentButton input:checked ~ p {
      }

      /* estilo do botão selecionado */
      .PaymentButton input:checked + svg,
      .PaymentButton input:checked ~ p {
      }

      .PaymentButton input:checked + svg,
      .PaymentButton input:checked ~ p {
      }

      .PaymentButton input:checked {
      }

      .PaymentButton input:checked + svg,
      .PaymentButton input:checked ~ p {
      }

      .PaymentButton input:checked {
      }

      .PaymentButton label:has(input:checked) {
        background-color: var(--purple-light);
        border: 1px solid var(--purple);
      }
    }
  }

  .SectionCoffee {
    width: fit-content;

    .CoffeeInfo {
      background: var(--base-card);
      width: 100%;
      gap: 1.5rem;
      padding: 1.5rem;
      border-radius: 4px 50px 4px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .ProductInfo {
        display: flex;
        gap: 1.25rem;
        align-items: center;
        border-bottom: 1px solid var(--base-button);
        padding-bottom: 1.5rem;

        img {
          width: 4.5rem;
        }

        .Name {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          p {
            font: var(--text-m);
            color: var(--base-subtitle);
          }

          .Action {
            display: flex;
            gap: 0.5rem;

            .quantity {
              display: flex;
              width: fit-content;
              text-align: center;
              background: var(--base-button);
              border: none;
              border-radius: 8px;
              padding: 0rem 0.5rem;

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

            :nth-child(2) {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              padding: 0.5rem;
              background: var(--base-button);
              color: var(--base-text);
              border: none;
              border-radius: 8px;
              box-shadow: none;
            }
          }
        }

        p {
          font: var(--text-m);
          color: var(--base-text);
          font-weight: bold;
        }
      }

      .Price {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.75rem;

        .Preview {
          display: flex;
          justify-content: space-between;
          p {
            font: var(--text-s);
            color: var(--base-text);
          }
        }

        .True {
          display: flex;
          justify-content: space-between;
          p {
            color: var(--base-subtitle);
            font: var(--text-l);
            font-weight: bold;
          }
        }

        button {
          all: unset;
          background: var(--yellow);
          color: var(--white);
          font: var(--button-g);
          padding: 0.75rem;
          text-transform: uppercase;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          cursor: pointer;
          transition: 0.2s background;

          &:hover {
            background: var(--yellow-dark);
          }
        }
      }
    }
  }
`;
