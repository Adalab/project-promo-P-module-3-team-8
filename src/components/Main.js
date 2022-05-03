import '../styles/layout/main.scss';
import { Link } from 'react-router-dom';
import logo from '../images/Codequetecode.png';
import logoAwesome from '../images/tarjetas-molonas.png';
function Main() {
  return (
    <main className="main">
      <img
        src={logoAwesome}
        class="main__logo"
        alt="Logo de tarjetas molonas"
        width="250px"
        height="63px"
      />
      <div class="group-logo">
        <p class="group-logo_by">by</p>
        <img class="group-logo_img" src={logo} alt="Logo de Codequetecode" />
      </div>
      <h1 class="main__title">Crea tu tarjeta de visita</h1>
      <div class="main__text--box">
        <p class="main__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
      </div>
      <div class="main__container">
        <ul class="main__box">
          <li class="main__box--icon">
            <i class="main__icon fa-solid fa-object-ungroup"></i>
            <span class="main__box--words">Diseña</span>
          </li>
          <li class="main__box--icon">
            <i class="main__icon fa-regular fa-keyboard"></i>
            <span class="main__box--words">Rellena</span>
          </li>
          <li class="main__box--icon">
            <i class="fa fa-share-alt"></i>
            <span class="main__box--words">Comparte</span>
          </li>
        </ul>
      </div>
      <Link
        to="/Card"
        className="main__button"
        title="Go create card"
        alt="Go create card"
      >
        Comenzar
      </Link>
    </main>
  );
}
export default Main;
