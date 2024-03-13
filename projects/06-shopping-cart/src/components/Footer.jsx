import { useCart } from "../hooks/useCart";
import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();
  return (
    <footer className="footer">
      <h4>Prueba tecnica de React ⚛️</h4>
      <span>@Franegeaa</span>
    </footer>
  );
}
