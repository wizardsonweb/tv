import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4307';

async function getTest() {
  const res = await axios.get("/test");
  document.body.append('____Server response:___')
  document.body.append(JSON.stringify(res))
}

function App() {
  getTest();
  return (
    <h1>This is app</h1>
    
  );
}

export default App;