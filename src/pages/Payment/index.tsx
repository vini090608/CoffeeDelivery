import { PaymentMain } from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import Americano from "../../assets/coffee/Type=Americano.svg";
import { useNavigate } from "react-router-dom";

export function Payment() {
  const nav = useNavigate();

  return (
    <form action="">
      <PaymentMain>
        <section className="SectionDelivery">
          <h5>Complete seu pedido</h5>
          <div className="DeliveryInfo">
            <div className="Locate">
              <div>
                <MapPinLine size={32} className="IconMap" />
              </div>
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <div className="InputList">
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <div className="inputs1">
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>
              <div className="inputs2">
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" max={2} />
              </div>
            </div>
          </div>
          <div className="PaymentMethod">
            <div className="PaymentTitle">
              <CurrencyDollar size={32} className="purple" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>

            <div className="PaymentButton">
              <label>
                <input type="radio" name="payment" value="credit" />

                <CreditCard size={20} className="purple" />
                <p>Cartão de crédito</p>
              </label>

              <label>
                <input type="radio" name="payment" value="debit" />

                <Bank size={20} className="purple" />
                <p>Cartão de débito</p>
              </label>

              <label>
                <input type="radio" name="payment" value="money" />

                <Money size={20} className="purple" />
                <p>Dinheiro</p>
              </label>
            </div>
          </div>
        </section>
        <section className="SectionCoffee">
          <h5>Cafés selecionados</h5>
          <div className="CoffeeInfo">
            <div className="ProductInfo">
              <img src={Americano} alt="" />
              <div className="Name">
                <p>Expresso Tradicional</p>
                <div className="Action">
                  <div className="quantity">
                    <button>-</button>
                    <input type="number" placeholder="1" min={0} />
                    <button>+</button>
                  </div>
                  <button>
                    <Trash size={18} className="purple" />
                    Remover
                  </button>
                </div>
              </div>
              <p>R$9,90</p>
            </div>

            <div className="Price">
              <div className="Preview">
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </div>
              <div className="Preview">
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div className="True">
                <p>Total</p>
                <p>R$ 33,20</p>
              </div>
              <button onClick={() => nav("/conclusion")}>
                Confirmar Pedido
              </button>
            </div>
          </div>
        </section>
      </PaymentMain>
    </form>
  );
}
