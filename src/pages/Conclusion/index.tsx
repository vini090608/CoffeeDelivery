import { ConclusionDetails } from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import Guy from "../../assets/Illustration.svg";

import { useCart } from "../../contexts/CartContext";

export function Conclusion() {
  const { address, paymentMethod } = useCart();

  return (
    <ConclusionDetails>
      <section>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <div className="Info">
          <div className="tag">
            <div className="purple">
              <MapPin size={20} weight="fill" />
            </div>
            <div>
              <p>
                Entrega em{" "}
                <strong>
                  {address?.rua}, {address?.numero}
                </strong>
              </p>
              <p>
                {address?.bairro} - {address?.cidade}, {address?.uf}
              </p>
            </div>
          </div>
          <div className="tag">
            <div className="yellow">
              <Timer size={20} weight="fill" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>
          <div className="tag">
            <div className="yellowDark">
              <CurrencyDollar size={20} />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethod}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <img src={Guy} alt="" />
    </ConclusionDetails>
  );
}
