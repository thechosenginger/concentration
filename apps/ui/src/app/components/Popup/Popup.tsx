import { PopupOverlay, PopupContent } from '../../app.styles';

interface PopupProps {
  prize: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ prize, onClose }) => {
  const isSpecialPrize = prize.toLowerCase() === 'cash';
  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <h3> Congratulations!</h3>
        <p>You have found a memory match!</p>
        <p>
          Your prize is a{' '}
          <strong>{isSpecialPrize ? prize : `a ${prize}`}</strong>!!!
        </p>
        <button onClick={onClose}>Close</button>
      </PopupContent>
    </PopupOverlay>
  );
};

export default Popup;
