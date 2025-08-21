import styled from 'styled-components';

interface AppContainerProps {
  $backgroundImage: string;
}

/**
 * AppContainer is a styled <div> wrapper for the app layout.
 *
 * ⚠️ Important:
 * React does not allow unknown props (like `backgroundImage`)
 * to be passed directly onto DOM elements. If we used:
 *
 *   <AppContainer backgroundImage="..." />
 *
 * React would try to render it as:
 *
 *   <div backgroundImage="..."></div>
 *
 * which is invalid HTML and triggers the warning:
 * "React does not recognize the `backgroundImage` prop on a DOM element."
 *
 * ✅ To fix this, we use a "transient prop" in styled-components
 * (prefixing the prop with `$`, e.g. `$backgroundImage`).
 * Transient props are consumed only inside styled-components
 * and are not forwarded to the DOM, so the warning goes away.
 *
 * Usage:
 *   <AppContainer $backgroundImage="/path/to/image.png" />
 */
export const AppContainer = styled.div<AppContainerProps>`
  text-align: center;
  .container {
    position: relative;
    margin: auto;
    width: 600px;
    height: 700px; /* Fixed the incorrect percentage */
    max-width: 100%; /* Ensure it scales for smaller screens */
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.1rem;
    justify-content: center;

    /* Background settings */
    background-image: url(${(props) => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  // .container {
  //   position: relative;
  //   margin: auto;
  //   width: 600px;
  //   height: 700%;
  //   max-width: 30rem;
  //   height: 30rem;
  //   display: grid;
  //   grid-template-columns: repeat(6, 1fr);
  //   gap: 0.1rem;
  //   justify-content: center;
  //   background-image: url(${(props) => props.$backgroundImage});
  //   background-size: cover;
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   width: 100%;
  //   height: 100%;
  // }

  .card {
    position: relative;
    width: 100%;
    height: 100%
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center
    transition: all 0.3s ease-in-out;
    background-color: rgb(0, 140, 255);
    border-radius: 5px;
    animation: 1.5s hideImage linear;
  }
  img {
    width: 100px;
    height: 140px;
    border-radius: 5px;
    /* transform: scale(0); */
    opacity: 0;
    // animation: 1.5s hideImage linear;
  }

  .card.active {
    transform: rotateY(0);
  }

  .card-number {
    position: absolute;
    font-size: 1.2rem;
    font-weight: bold;
    font-color: #000;
    z-index: 1;
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
    animation: hideCard linear;
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

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
