import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem auto;
  width: 80%;
`;

export const Card = styled.div`
  perspective: 1000px;
  cursor: pointer;

  & div {
    position: relative;
    width: 100px;
    height: 140px;
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }

  &:hover div {
    transform: rotateY(180deg);
  }

  & .front,
  & .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  & .front {
    transform: rotateY(0deg);
  }

  & .back {
    transform: rotateY(180deg);
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;
