import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useState } from "react";

import CoffeeImage from "../../assets/Imagem.svg";

import Americano from "../../assets/coffee/Type=Americano.svg";
import CafeGelado from "../../assets/coffee/Type=Café Gelado.svg";
import CafeComLeite from "../../assets/coffee/Type=Café com Leite.svg";
import Capuccino from "../../assets/coffee/Type=Capuccino.svg";
import ChocolateQuente from "../../assets/coffee/Type=Chocolate Quente.svg";
import Cubano from "../../assets/coffee/Type=Cubano.svg";
import ExpressoCremoso from "../../assets/coffee/Type=Expresso Cremoso.svg";
import Expresso from "../../assets/coffee/Type=Expresso.svg";
import Havaiano from "../../assets/coffee/Type=Havaiano.svg";
import Irlandes from "../../assets/coffee/Type=Irlandês.svg";
import Latte from "../../assets/coffee/Type=Latte.svg";
import Macchiato from "../../assets/coffee/Type=Macchiato.svg";
import Mochaccino from "../../assets/coffee/Type=Mochaccino.svg";
import Arabe from "../../assets/coffee/Type=Árabe.svg";

import "../../global.css";
import { Dashboard } from "./styles";

import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

enum CoffeeImages {
  Americano,
  CafeGelado,
  CafeComLeite,
  Capuccino,
  ChocolateQuente,
  Cubano,
  ExpressoCremoso,
  Expresso,
  Havaiano,
  Irlandes,
  Latte,
  Macchiato,
  Mochaccino,
  Arabe,
}

const CoffeeImageMap = {
  [CoffeeImages.Americano]: Americano,
  [CoffeeImages.CafeGelado]: CafeGelado,
  [CoffeeImages.CafeComLeite]: CafeComLeite,
  [CoffeeImages.Capuccino]: Capuccino,
  [CoffeeImages.ChocolateQuente]: ChocolateQuente,
  [CoffeeImages.Cubano]: Cubano,
  [CoffeeImages.ExpressoCremoso]: ExpressoCremoso,
  [CoffeeImages.Expresso]: Expresso,
  [CoffeeImages.Havaiano]: Havaiano,
  [CoffeeImages.Irlandes]: Irlandes,
  [CoffeeImages.Latte]: Latte,
  [CoffeeImages.Macchiato]: Macchiato,
  [CoffeeImages.Mochaccino]: Mochaccino,
  [CoffeeImages.Arabe]: Arabe,
};

type CoffeeType = {
  id: string;
  image: CoffeeImages;
  title: string;
  type: string[];
  descricao: string;
  preco: number;
};

const coffees: CoffeeType[] = [
  {
    id: "expresso",
    image: CoffeeImages.Expresso,
    title: "Expresso Tradicional",
    type: ["Tradicional"],
    descricao: "O tradicional café feito com água quente e grãos moídos",
    preco: 9.9,
  },
  {
    id: "americano",
    image: CoffeeImages.Americano,
    title: "Expresso Americano",
    type: ["Tradicional"],
    descricao: "Expresso diluído, menos intenso que o tradicional",
    preco: 9.9,
  },
  {
    id: "expresso-cremoso",
    image: CoffeeImages.ExpressoCremoso,
    title: "Expresso Cremoso",
    type: ["Tradicional"],
    descricao: "Café expresso tradicional com espuma cremosa",
    preco: 9.9,
  },
  {
    id: "gelado",
    image: CoffeeImages.CafeGelado,
    title: "Expresso Gelado",
    type: ["Tradicional", "Gelado"],
    descricao: "Bebida preparada com café expresso e cubos de gelo",
    preco: 9.9,
  },
  {
    id: "cafe-leite",
    image: CoffeeImages.CafeComLeite,
    title: "Café com Leite",
    type: ["Tradicional", "Com leite"],
    descricao: "Meio a meio de expresso tradicional com leite vaporizado",
    preco: 9.9,
  },
  {
    id: "latte",
    image: CoffeeImages.Latte,
    title: "Latte",
    type: ["Tradicional", "Com leite"],
    descricao: "Uma dose de café expresso com o dobro de leite",
    preco: 9.9,
  },
  {
    id: "capuccino",
    image: CoffeeImages.Capuccino,
    title: "Capuccino",
    type: ["Tradicional", "Com leite"],
    descricao: "Bebida com canela feita de café, leite e espuma",
    preco: 9.9,
  },
  {
    id: "macchiato",
    image: CoffeeImages.Macchiato,
    title: "Macchiato",
    type: ["Tradicional", "Com leite"],
    descricao: "Café expresso com um pouco de leite quente",
    preco: 9.9,
  },
  {
    id: "mocaccino",
    image: CoffeeImages.Mochaccino,
    title: "Mocaccino",
    type: ["Tradicional", "Com leite"],
    descricao: "Café expresso com chocolate, leite e espuma",
    preco: 9.9,
  },
  {
    id: "chocolate-quente",
    image: CoffeeImages.ChocolateQuente,
    title: "Chocolate Quente",
    type: ["Especial", "Com leite"],
    descricao: "Chocolate dissolvido no leite quente com café",
    preco: 9.9,
  },
  {
    id: "cubano",
    image: CoffeeImages.Cubano,
    title: "Cubano",
    type: ["Tradicional", "Alcoólico", "Gelado"],
    descricao: "Drink gelado de café com rum e creme",
    preco: 9.9,
  },
  {
    id: "havaiano",
    image: CoffeeImages.Havaiano,
    title: "Havaiano",
    type: ["Especial"],
    descricao: "Bebida adocicada com café e leite de coco",
    preco: 9.9,
  },
  {
    id: "arabe",
    image: CoffeeImages.Arabe,
    title: "Árabe",
    type: ["Especial"],
    descricao: "Café árabe preparado com especiarias",
    preco: 9.9,
  },
  {
    id: "irlandes",
    image: CoffeeImages.Irlandes,
    title: "Irlandês",
    type: ["Especial", "Alcoólico"],
    descricao: "Café com uísque irlandês, açúcar e chantilly",
    preco: 9.9,
  },
];

export function Home() {
  const [quantity, setQuantity] = useState<Record<string, number>>({});
  const { addCoffee } = useCart();
  const nav = useNavigate();

  function increase(id: string) {
    setQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }

  function decrease(id: string) {
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  }

  return (
    <Dashboard>
      <main>
        <section className="DashboardSection">
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="IconList">
            <div>
              <div className="ShoppingCart">
                <ShoppingCart size={20} weight="fill" />
              </div>
              Compra simples e segura
            </div>

            <div>
              <div className="Package">
                <Package size={20} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </div>

            <div>
              <div className="Timer">
                <Timer size={20} weight="fill" />
              </div>
              Entrega rápida e rastreada
            </div>

            <div>
              <div className="Coffee">
                <Coffee size={20} weight="fill" />
              </div>
              O café chega fresquinho até você
            </div>
          </div>
        </section>

        <img src={CoffeeImage} alt="" />
      </main>

      <div className="coffeeMain">
        <h3>Nossos cafés</h3>

        <section className="coffeeSection">
          {coffees.map((coffee) => (
            <div className="Card" key={coffee.id}>
              <img src={CoffeeImageMap[coffee.image]} />

              <div className="coffeeCategory">
                {coffee.type.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>

              <h3>{coffee.title}</h3>

              <span>{coffee.descricao}</span>

              <div className="cardFooter">
                <div>
                  <span>R$</span>
                  <span>{coffee.preco.toFixed(2)}</span>
                </div>

                <div className="quantity">
                  <button type="button" onClick={() => decrease(coffee.id)}>
                    -
                  </button>

                  <input
                    type="number"
                    value={quantity[coffee.id] || 0}
                    min={0}
                    readOnly
                  />

                  <button type="button" onClick={() => increase(coffee.id)}>
                    +
                  </button>
                </div>

                <button
                  className="buy"
                  onClick={() => {
                    const q = quantity[coffee.id] || 0;

                    if (q === 0) {
                      addCoffee({
                        id: coffee.id,
                        title: coffee.title,
                        price: coffee.preco,
                        image: CoffeeImageMap[coffee.image],
                        quantity: 1,
                      });
                    } else {
                      coffees.forEach((coffeeItem) => {
                        const q = quantity[coffeeItem.id] || 0;

                        if (q > 0) {
                          addCoffee({
                            id: coffeeItem.id,
                            title: coffeeItem.title,
                            price: coffeeItem.preco,
                            image: CoffeeImageMap[coffeeItem.image],
                            quantity: q,
                          });
                        }
                      });
                    }

                    nav("/payment");
                  }}
                >
                  <ShoppingCart size={20} weight="fill" />
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Dashboard>
  );
}
