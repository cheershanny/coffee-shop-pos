import Menu from "./components/Menu";
import Order from "./components/Order";

export default function Home() {
  return (
    <main className="h-96 flex flex-row">
      <Menu />
      <Order />
    </main>
  );
}
