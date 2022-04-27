import '../styles/App.scss';
import dataApi from '../services/api.js';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CardPreview from './CardPreview';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function App() {
  const [apiData, setApiData] = useState({});
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  });

  const handleData = (event) => {
    const inputValue = event.target.value;
    const inputChanged = event.target.name;
    setDataCard({
      ...dataCard,
      [inputChanged]: inputValue,
    });
  };
  const handleReset = () => {
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((info) => {
      setApiData(info);
    });
  };
  return (
    <>
      {/* header */}
      <Header />
      <main className="create">
        <CardPreview data={dataCard} />

        <div className="form">
          <form action="">
            <Design data={dataCard} />
            <Fill data={dataCard} />
            <Share data={dataCard} apiData={apiData} />
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
