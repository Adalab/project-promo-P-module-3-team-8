const dataApi = (data) => {
  const URL_SERVER = 'http://localhost:4000/card';

  return fetch(URL_SERVER, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};
export default dataApi;
