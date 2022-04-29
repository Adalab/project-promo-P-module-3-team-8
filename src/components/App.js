import '../styles/App.scss';
import dataApi from '../services/api.js';
import { useState } from 'react';
import Card from './Card';

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

  // Componente foto
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
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
    });
  };
  const handleClickCreateCard = (ev) => {
    dataApi(dataCard).then((info) => {
      setApiData(info);
    });
  };
  return (
    <Card apiData={apiData} dataCard={dataCard} handleInput={handleData} handleReset={handleReset} handleCard={handleClickCreateCard} updateAvatar={updateAvatar} avatar={avatar}/>
  );
}

export default App;
