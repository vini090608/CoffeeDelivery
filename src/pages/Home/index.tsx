import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
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

export function Home() {
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
            <div className="Coffee">
              <div className="Coffee">
                <Coffee size={20} weight="fill" />
              </div>
              O café chega fresquinho até você
            </div>
          </div>
        </section>
        <img
          src={CoffeeImage}
          alt="Imagem de um copo de café com grãos ao redor"
        />
      </main>
      <div className="coffeeMain">
        <h3>Nossos cafés</h3>
        <section className="coffeeSection">
          <div className="Card">
            <img src={Expresso} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
            </div>
            <h3>Expresso Tradicional</h3>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={Americano} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
            </div>
            <h3>Expresso Americano</h3>
            <span>Expresso diluído, menos intenso que o tradicional</span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={ExpressoCremoso} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
            </div>
            <h3>Expresso Cremoso</h3>
            <span>Café expresso tradicional com espuma cremosa</span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={CafeGelado} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
              <p>Gelado</p>
            </div>
            <h3>Expresso Gelado</h3>
            <span>Bebida preparada com café expresso e cubos de gelo</span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={CafeComLeite} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
              <p>Com Leite</p>
            </div>
            <h3>Café com Leite</h3>
            <span>
              Meio a meio de expresso tradicional com leite vaporizado
            </span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={Latte} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
              <p>Com leite</p>
            </div>
            <h3>Latte</h3>
            <span>
              Uma dose de café expresso com o dobro de leite e espuma cremosa
            </span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={Capuccino} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
              <p>Com leite</p>
            </div>
            <h3>Capuccino</h3>
            <span>
              Bebida com canela feita de doses iguais de café, leite e espuma
            </span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={Macchiato} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
              <p>Com leite</p>
            </div>
            <h3>Macchiato</h3>
            <span>
              Café expresso misturado com um pouco de leite quente e espuma
            </span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={Mochaccino} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
              <p>Com leite</p>
            </div>
            <h3>Mocaccino</h3>
            <span>
              Café expresso com calda de chocolate, pouco leite e espuma
            </span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={ChocolateQuente} alt="" />
            <div className="coffeeCategory">
              <p>Especial</p>
              <p>Com leite</p>
            </div>
            <h3>Chocolate Quente</h3>
            <span>
              Bebida feita com chocolate dissolvido no leite quente e café
            </span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={Cubano} alt="" />
            <div className="coffeeCategory">
              <p>Tradicional</p>
              <p>Alcólico</p>
              <p>Gelado</p>
            </div>
            <h3>Cubano</h3>
            <span>
              Drink gelado de café expresso com rum, creme de leite e hortelã
            </span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={Havaiano} alt="" />
            <div className="coffeeCategory">
              <p>Especial</p>
            </div>
            <h3>Havaiano</h3>
            <span>Bebida adocicada preparada com café e leite de coco</span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={Arabe} alt="" />
            <div className="coffeeCategory">
              <p>Especial</p>
            </div>
            <h3>Árabe</h3>
            <span>Bebida preparada com grãos de café árabe e especiarias</span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
          <div className="Card">
            <img src={Irlandes} alt="" />
            <div className="coffeeCategory">
              <p>Especial</p>
              <p>Alcólico</p>
            </div>
            <h3>Irlandês</h3>
            <span>
              Bebida a base de café, uísque irlandês, açúcar e chantilly
            </span>
            <div className="cardFooter">
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
              <div className="quantity">
                <button>-</button>
                <input type="number" placeholder="1" min={0} />
                <button>+</button>
              </div>
              <button className="buy">
                <ShoppingCart size={20} weight="fill" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </Dashboard>
  );
}
