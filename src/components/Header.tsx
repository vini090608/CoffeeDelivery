import { Outlet } from "react-router-dom";
import LogoMarca from "../assets/LogoMarca.svg";
import "../global.css";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <main className="w-4/5 flex flex-col content-center">
      <header className="flex w-full justify-between">
        <img src={LogoMarca} alt="" />
        <div className="flex gap-4">
          <button className="flex text-purple bg-purple-light items-center rounded-lg p-4">
            <MapPin size={32} />
            <span>Porto Alegre, RS</span>
          </button>
          <button className="text-">
            <ShoppingCart size={32} />
          </button>
        </div>
      </header>
      <Outlet />
    </main>
  );
}
