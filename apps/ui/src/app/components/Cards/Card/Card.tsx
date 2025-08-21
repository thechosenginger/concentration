import { ICard } from '../Cards';

interface ICardProps {
  card: ICard;
  index: number;
  clickHandler: (index: number) => void;
}

const Card: React.FC<ICardProps> = ({ card, index, clickHandler }) => {
  return (
    <div className={`card ${card.status}`} onClick={() => clickHandler(index)}>
      <span className="card-number">{card.number}</span>
      <img src={card.img} alt={card.id.toString()} />
    </div>
  );
};

export default Card;
