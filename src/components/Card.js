import CardPreview from './CardPreview';
import Header from './Header';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Footer from './Footer';
// import '../styles/components/Create.scss';
// import '../styles/components/Fieldsets.scss';

function Card(props) {
  return (
    <>
      {/* header */}
      <Header />
      <main className="create">
        <CardPreview handleReset={props.handleReset} data={props.dataCard} />

        <div className="form">
          <form action="">
            <Design data={props.dataCard} handleInput={props.handleInput} />
            <Fill
              data={props.dataCard}
              handleInput={props.handleInput}
              updateAvatar={props.updateAvatar}
            />
            <Share
              data={props.dataCard}
              apiData={props.apiData}
              handleCard={props.handleCard}
              handleTwitterShare={props.handleTwitterShare}
              classTwitter={props.classTwitter}
            />
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Card;
