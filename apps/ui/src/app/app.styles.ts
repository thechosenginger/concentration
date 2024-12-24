import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
  .container {
    margin: auto;

    width: 90%;
    height: 90%;
    max-width: 18rem;
    height: 18rem;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.3rem;
    justify-content: center;
  }

  .card {
    background-color: rgb(0, 140, 255);
    border-radius: 5px;

    animation: 2s hideCard linear;
  }
  img {
    width: 100px;
    height: 140px;
    border-radius: 5px;
    /* transform: scale(0); */
    opacity: 0;
    animation: 2s hideImage linear;
  }

  .card.active {
    transform: rotateY(0);
  }

  .card.active img {
    opacity: 1;
  }

  .card.removed {
    opacity: 0; /* Fade out */
    transform: scale(0); /* Shrink effect */
    pointer-events: none; /* Disable interactions */
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .unmatch {
    background-color: rgb(240, 28, 28);
    border-radius: 5px;
    animation: 2s hideCard linear;
  }

  @keyframes hideCard {
    0%,
    70% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(180deg);
    }
  }

  @keyframes hideImage {
    0%,
    84% {
      opacity: 1;
    }
    85% {
      opacity: 0;
    }
  }
`;
