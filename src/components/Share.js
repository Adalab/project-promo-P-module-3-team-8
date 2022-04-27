function Share(props) {
  return (
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
        {/* collapsed */}
        <div className="share__container">
          <button
            className="share__container--button js-share-btn"
            onClick={handleClickCreateCard}
          >
            <i className="share__container--button__icon far fa-address-card"></i>
            <p className="share__container--button__text js_create">
              Crear tarjeta
            </p>
          </button>
        </div>
        <div className=" share__card js-message">
          {/* hidden */}
          <p className="share__card__title js-create">
            La tarjeta ha sido creada:
          </p>
          <a className="share__card__link js-url" href={props.apiData.cardUrl}>
            {props.apiData.cardUrl || 'url'}
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
  );
}
export default Share;