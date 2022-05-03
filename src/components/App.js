import '../styles/App.scss';
import dataApi from '../services/api.js';
import { useState } from 'react';
import Card from './Card';

function App() {
  const [apiData, setApiData] = useState({});
  const [classTwitter, SetClassTwitter] = useState('hidden');
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  // Componente foto

  const updateAvatar = (avatar) => {
    setDataCard({ ...dataCard, photo: avatar });
  };

  const handleData = (event) => {
    const inputValue = event.value;
    const inputChanged = event.name;
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
      photo: '',
    });

    SetClassTwitter('hidden');
  };
  const handleClickCreateCard = () => {
    dataApi(dataCard).then((info) => {
      setApiData(info);
    });
    if (
      dataCard.palette !== '' &&
      dataCard.name !== '' &&
      dataCard.job !== '' &&
      dataCard.email !== '' &&
      dataCard.linkedin !== '' &&
      dataCard.github !== '' &&
      dataCard.photo !== ''
    ) {
      SetClassTwitter('');
    } else {
      alert('Debes rellenar todos los campos');
    }
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20con%20el%20Awesome%20profile%20cards%20del%20equipo%20Remake&url=${apiData.cardURL}`;
    window.open(url, '_blank');
  };
  return (
    <Card
      apiData={apiData}
      dataCard={dataCard}
      handleInput={handleData}
      handleReset={handleReset}
      handleCard={handleClickCreateCard}
      updateAvatar={updateAvatar}
      handleTwitterShare={handleTwitterShare}
      classTwitter={classTwitter}
    />
  );
}

export default App;
