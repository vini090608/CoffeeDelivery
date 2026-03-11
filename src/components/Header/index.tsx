import { HeaderPage } from "./styles";
import { Outlet, NavLink } from "react-router-dom";
import LogoMarca from "../../assets/LogoMarca.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <main>
      <HeaderPage>
        <NavLink to={"/"} title="Home">
          <img src={LogoMarca} alt="" />
        </NavLink>
        <div>
          <button className="locate">
            <MapPin size={20} weight="fill" />
            <span>Porto Alegre, RS</span>
          </button>
          <NavLink to={"/payment"} title="ShoppingCart" className="buy">
            <ShoppingCart size={20} weight="fill" />
          </NavLink>
        </div>
      </HeaderPage>
      <Outlet />
    </main>
  );
}
