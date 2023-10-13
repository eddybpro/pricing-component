import { data } from "../data";
import Card from "./Card";
import "./MainCard.css";

function MainCard() {
  return (
    <main>
      {data.map((el, i) => (
        <Card key={i} {...el} />
      ))}
    </main>
  );
}
export default MainCard;
