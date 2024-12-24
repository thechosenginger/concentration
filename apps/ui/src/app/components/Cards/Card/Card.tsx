interface ICardProps {
  card: {
    id: number;
    img: string;
    status: string;
  };
  index: number;
  clickHandler: (index: number) => void;
}

const Card: React.FC<ICardProps> = ({ card, index, clickHandler }) => {
  return (
    <div className={`card ${card.status}`} onClick={() => clickHandler(index)}>
      <img src={card.img} alt={card.id.toString()} />
    </div>
  );
};

export default Card;
