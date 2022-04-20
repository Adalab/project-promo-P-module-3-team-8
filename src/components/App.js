import logo from '../images/Codequetecode.png';
import tarjetasmolonas from '../images/tarjetas-molonas.png';
import logoadalab from '../images/logo-adalab.png';
import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Nombre apellido');
  const handleName = (event) => {
    if (event.currentTarget.value === '') {
      setName('Nombre apellido');
    } else {
      setName(event.currentTarget.value);
    }
  };
  return (
    <>
      <header className="header">
        <a href="./index.html#landing">
          <img
            className="header__logo"
            src={tarjetasmolonas}
            alt="Logo de tarjetas molonas"
          />
        </a>
        <p className="header_by">by</p>
        <img className="header__img" src={logo} alt="Logo de Codequetecode" />
      </header>

      <main className="create">
        <section className="profile">
          <button className="profile__button js-btn-cancel">
            <i className="fas fa-trash-alt"></i>
            <p className="profile__text">Reset</p>
          </button>
          <div className="rectangle js-preview">
            <div className="rectangle__titles">
              <h2 className="js-reset rectangle__titles-title js_name">
                {name}
              </h2>
              <h3 className="js-reset rectangle__titles-subtitle js_job">
                Front-end developer
              </h3>
            </div>
            <div className="rectangle__preview js__profile-image"></div>
            <ul className="rectangle__icons">
              <li>
                <a
                  target="_blank"
                  href="tel:"
                  className="rectangle__icons-item js_phone"
                >
                  <i className="rectangle__icons-item-size fas fa-mobile-alt"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="mailto:"
                  className="rectangle__icons-item js_email"
                >
                  <i className="rectangle__icons-item-size far fa-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href=""
                  className="rectangle__icons-item js_linkedin"
                >
                  <i className="rectangle__icons-item-size fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href=""
                  className="rectangle__icons-item js_github"
                >
                  <i className="rectangle__icons-item-size fab fa-github-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="form">
          <form action="">
            <fieldset className="design js__design-fieldset">
              <legend className="design__legend js__design-legend">
                <div className="design__legend__container">
                  <div>
                    <i className="design__legend__container__icon far fa-object-ungroup"></i>
                  </div>
                  <h2 className="design__legend__container__text">Diseña</h2>
                </div>
                <div>
                  <i className="js__arrowDown1 fas fa-chevron-down fill__legend--title--arrow"></i>
                </div>
              </legend>

              <div className="design__colors js__design-colors ">
                {' '}
                {/* collapsed */}
                <p className="design__text">Colores</p>
                <div>
                  <div className="design__container design__container--1">
                    <input
                      className="js-radio design__palette"
                      type="radio"
                      id="color1"
                      name="palette"
                      defaultValue="1"
                      defaultChecked
                    />
                    <div className="design__rectangle design__rectangle--1"></div>
                    <div className="design__rectangle design__rectangle--2"></div>
                    <div className="design__rectangle design__rectangle--3"></div>
                  </div>

                  <div className="design__container design__container--2">
                    <input
                      className="js-radio design__palette"
                      type="radio"
                      id="color2"
                      name="palette"
                      defaultValue="2"
                    />
                    <div className="design__rectangle design__rectangle--4"></div>
                    <div className="design__rectangle design__rectangle--5"></div>
                    <div className="design__rectangle design__rectangle--6"></div>
                  </div>

                  <div className="design__container design__container--3">
                    <input
                      className="js-radio design__palette"
                      type="radio"
                      id="color3"
                      name="palette"
                      defaultValue="3"
                    />
                    <div className="design__rectangle design__rectangle--7"></div>
                    <div className="design__rectangle design__rectangle--8"></div>
                    <div className="design__rectangle design__rectangle--9"></div>
                  </div>
                  <div className="design__container design__container--4">
                    <input
                      className="js-radio design__palette"
                      type="radio"
                      id="color4"
                      name="palette"
                      defaultValue="4"
                    />
                    <div className="design__rectangle design__rectangle--10"></div>
                    <div className="design__rectangle design__rectangle--11"></div>
                    <div className="design__rectangle design__rectangle--12"></div>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="fill">
              <legend className="fill__legend js__fill-legend">
                <div className="fill__legend--title">
                  <i className="fill__legend--title--icon fas fa-keyboard"></i>
                  <h2 className="fill__legend--title--name">Rellena</h2>
                </div>
                <div>
                  <i className="js__arrowDown2 fas fa-chevron-down fill__legend--title--arrow"></i>
                </div>
              </legend>
              <div className="js__field js__inputs field">
                {' '}
                {/* collapsed */}
                <div className="field__item">
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    className="field__item--placeholder js-reset js-input-name"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Ej: Paz Gimeno Lorente"
                    required
                    onChange={handleName}
                  />
                </div>
                <div className="field__item">
                  <label htmlFor="job">Puesto</label>
                  <input
                    className="field__item--placeholder js-reset js-input-job"
                    id="job"
                    type="text"
                    name="job"
                    placeholder="Ej: Front-end unicorn"
                    required
                  />
                </div>
                <div className="field__item image">
                  <div className="action action__upload-btn">
                    <label className="profile_label" htmlFor="profile_image">
                      Añadir imagen
                    </label>
                    <input
                      className="add_image__button action__hiddenField js__profile-upload-btn js-input-profile-image"
                      defaultValue="Añadir imagen"
                      id="profile_image"
                    />
                  </div>
                  <div className="add_image__photo-preview js__profile-preview"></div>
                </div>
                <div className="field__item">
                  <label htmlFor="email">Email</label>
                  <input
                    className="field__item--placeholder js-reset js-input-email"
                    id="email"
                    type="email"
                    name="email"
                    href=""
                    placeholder="Ej: paz-gimeno@gmail.com"
                    required
                  />
                </div>
                <div className="field__item">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    className="field__item--placeholder js-reset js-input-phone"
                    id="phone"
                    type="tel"
                    name="phone"
                    href=""
                    placeholder="Ej: 555 555 555"
                    required
                  />
                </div>
                <div className="field__item">
                  <label htmlFor="linkedin">Linkedin</label>
                  <input
                    className="field__item--placeholder js-reset js-input-linkedin"
                    id="linkedin"
                    type="text"
                    name="linkedin"
                    href=""
                    placeholder="Ej: paz-gimeno"
                    required
                  />
                </div>
                <p className="field__warning">
                  <span className="field__warning-star">*</span> Escribe
                  únicamente la parte de la URL que lleva a tu perfil de
                  LinkedIn
                </p>
                <div className="field__item">
                  <label htmlFor="github">Github</label>
                  <input
                    className="field__item--placeholder js_github js-reset js-input-github"
                    id="github"
                    type="text"
                    name="github"
                    placeholder="Ej: PazGimeno1937"
                  />
                </div>
                <p className="field__warning">
                  <span className="field__warning-star">*</span> Escribe
                  únicamente la parte de la URL que lleva a tu perfil de Github
                </p>
              </div>
            </fieldset>

            <fieldset className="share">
              <legend className="share__legend js__share-legend">
                <div className="share__legend__container">
                  <i className="share__legend__container__icon fa fa-share-alt"></i>
                  <h2 className="share__legend__container__text">Comparte</h2>
                </div>
                <div>
                  <i className="js__arrowDown3 fas fa-chevron-down fill__legend--title--arrow"></i>
                </div>
              </legend>
              <article className="js__share share__article">
                {' '}
                {/* collapsed */}
                <div className="share__container">
                  <button className="share__container--button js-share-btn">
                    <i className="share__container--button__icon far fa-address-card"></i>
                    <p className="share__container--button__text js_create">
                      Crear tarjeta
                    </p>
                  </button>
                </div>
                <div className="hidden share__card js-message">
                  <p className="share__card__title js-create">
                    La tarjeta ha sido creada:
                  </p>
                  <a
                    className="share__card__link js-url"
                    href="https://awesome-profile-card.com?id=A456DF0001"
                  >
                    https://awesome-profile-card.com?id=A456DF0001
                  </a>
                  <div className="share__card__twitter">
                    <button className="share__card__twitter--button js-twitter-button">
                      <i className="fab fa-twitter"></i>
                      <p className="hare__card__twitter--button--text">
                        Compartir en twitter
                      </p>
                    </button>
                  </div>
                </div>
              </article>
            </fieldset>
          </form>
        </div>
      </main>
      <footer className="footer">
        <p className="footer__copyright">
          Awesome profile-cards by Codequetecode © 2022
        </p>
        <a href="https://adalab.es/" target="_blank">
          <img
            className="footer__logo"
            src={logoadalab}
            alt="Logo de Adalab"
            title="Adalab"
          />
        </a>
      </footer>
    </>
  );
}

export default App;
