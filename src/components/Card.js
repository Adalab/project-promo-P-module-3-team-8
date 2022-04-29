import Header from './Header';
import Footer from './Footer';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function Card(props) {
    return (<>
        {/* header */}
        <Header />
        <main className="create">
          <CardPreview handleReset={props.handleReset} data={props.dataCard} />
  
          <div className="form">
            <form action="">
              <Design data={props.dataCard} handleInput={props.handleInput} />
              <Fill data={props.dataCard} handleInput={props.handleInput} updateAvatar={props.updateAvatar} avatar={props.avatar}/>
              <Share data={props.dataCard} apiData={props.apiData} handleCard={props.handleCard} />
            </form>
          </div>
        </main>
        <Footer />
      </>);
}

export default Card;