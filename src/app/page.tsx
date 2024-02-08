import Menu from "./Menu/MenuCard";
import Order from "./Order/OrderCard";

export default function Home() {
  return (
    <main className="h-96 flex flex-row">
      <Menu />
      <Order />
    </main>
  );
}
 