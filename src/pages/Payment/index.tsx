import { PaymentMain } from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../contexts/CartContext";
import { useState } from "react";

export function Payment() {
  const [form, setForm] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const [error, setError] = useState("");

  const nav = useNavigate();
  const {
    cart,
    removeCoffee,
    increase,
    decrease,
    setAddress,
    setPaymentMethod,
    paymentMethod,
  } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const delivery = 3.5;
  const total = totalItems + delivery;

  function validateForm() {
    if (
      !form.cep ||
      !form.rua ||
      !form.numero ||
      !form.bairro ||
      !form.cidade ||
      !form.uf
    ) {
      setError("Preencha todos os campos obrigatórios.");
      return false;
    }

    if (!paymentMethod) {
      setError("Selecione um método de pagamento.");
      return false;
    }

    if (cart.length === 0) {
      setError("Adicione ao menos um café ao carrinho.");
      return false;
    }

    setError("");
    return true;
  }

  function handleConfirm() {
    if (!validateForm()) return;

    setAddress(form);
    nav("/conclusion");
  }

  return (
    <form>
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
              <input
                type="text"
                placeholder="CEP *"
                onChange={(e) => setForm({ ...form, cep: e.target.value })}
              />

              <input
                type="text"
                placeholder="Rua *"
                onChange={(e) => setForm({ ...form, rua: e.target.value })}
              />

              <div className="inputs1">
                <input
                  type="text"
                  placeholder="Número *"
                  onChange={(e) => setForm({ ...form, numero: e.target.value })}
                />

                <input
                  type="text"
                  placeholder="Complemento"
                  onChange={(e) =>
                    setForm({ ...form, complemento: e.target.value })
                  }
                />
              </div>

              <div className="inputs2">
                <input
                  type="text"
                  placeholder="Bairro *"
                  onChange={(e) => setForm({ ...form, bairro: e.target.value })}
                />

                <input
                  type="text"
                  placeholder="Cidade *"
                  onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                />

                <input
                  type="text"
                  placeholder="UF *"
                  maxLength={2}
                  onChange={(e) => setForm({ ...form, uf: e.target.value })}
                />
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
                  pagar *
                </span>
              </div>
            </div>

            <div className="PaymentButton">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Cartão de crédito"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <CreditCard size={20} className="purple" />
                <p>Cartão de crédito</p>
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Cartão de débito"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Bank size={20} className="purple" />
                <p>Cartão de débito</p>
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Dinheiro"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Money size={20} className="purple" />
                <p>Dinheiro</p>
              </label>
            </div>
          </div>
        </section>

        <section className="SectionCoffee">
          <h5>Cafés selecionados</h5>

          <div className="CoffeeInfo">
            {cart.map((coffee) => (
              <div className="ProductInfo" key={coffee.id}>
                <img src={coffee.image} />

                <div className="Name">
                  <p>{coffee.title}</p>

                  <div className="Action">
                    <div className="quantity">
                      <button type="button" onClick={() => decrease(coffee.id)}>
                        -
                      </button>

                      <input type="number" value={coffee.quantity} readOnly />

                      <button type="button" onClick={() => increase(coffee.id)}>
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeCoffee(coffee.id)}
                    >
                      <Trash size={18} className="purple" />
                      Remover
                    </button>
                  </div>
                </div>

                <p>R${(coffee.price * coffee.quantity).toFixed(2)}</p>
              </div>
            ))}

            <div className="Price">
              <div className="Preview">
                <p>Total de itens</p>
                <p>R$ {totalItems.toFixed(2)}</p>
              </div>

              <div className="Preview">
                <p>Entrega</p>
                <p>R$ {delivery.toFixed(2)}</p>
              </div>

              <div className="True">
                <p>Total</p>
                <p>R$ {total.toFixed(2)}</p>
              </div>

              {error && <span style={{ color: "red" }}>{error}</span>}

              <button type="button" onClick={handleConfirm}>
                Confirmar Pedido
              </button>
            </div>
          </div>
        </section>
      </PaymentMain>
    </form>
  );
}
