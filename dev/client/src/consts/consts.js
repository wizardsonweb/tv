import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4307';

export async function accio(url) {
  const res = await axios.get(url);
  console.log('\n status: ' + res.status);
  console.log('data: ' + res.data);
}

export async function accioTwo(){
  const res = await axios.get('/experience');
  const view = document.querySelector('.container');
  return view.innerHTML = `
    <p> response from server: </p>
    <pre><code>${JSON.stringify(res)}</code></pre>
    <br /> <br />
    company name: <br> ${res.data.name}
    <br> <br>
    from - to: <br> ${res.data.age}
    <br> <br>
    desc: <br> ${res.data.desc}
  `;
}