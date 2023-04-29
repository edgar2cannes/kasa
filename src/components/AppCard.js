import cardItems from "../assets/logements";
import { Link } from "react-router-dom";


export default function AppCard (){
    return (
    <div className="listCard">
      {cardItems.map((item) => {
        return (
          <Link key={item.id} to={`/logement/${item.id}`}>
            <div className="card">
              <img src={item.cover} alt={item.title} />
              <b>{item.title}</b>
            </div>
          </Link>
        );
      })}
    </div>)
};