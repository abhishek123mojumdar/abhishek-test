// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let button = document.getElementById('clickBtn');
let promiseBtn = document.getElementById('promiseAll');

button.addEventListener('click', callUsersApi);
promiseBtn.addEventListener('click', callPromiseAll);

function callUsersApi() {
  appDiv.innerHTML = `<h1>Loading</h1>`;
  //setTimeout(fetchData, 2000);
  fetchData();
  //fetchDataUsingAsyncAwait();
}

function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((resp) => {
      showDataOnHTML(resp);
    });
}

async function fetchDataUsingAsyncAwait() {
  let userPromise = await fetch('https://jsonplaceholder.typicode.com/users');
  let userResp = await userPromise.json();
  showDataOnHTML(userResp);
}

function showDataOnHTML(resp) {
  console.log(resp);
  let li = ``;
  let ul = ``;
  resp.forEach((respData) => {
    li = li + `<li>${respData.name}</li>`;
  });

  ul = ul + `<ul>${li}</ul>`;

  appDiv.innerHTML = ul;
}

let p1 = new Promise((res, rej) => {
  console.log('Promise 1 has run');
  setTimeout(() => {
    res(10);
  }, 1000);
});
let p2 = new Promise((res, rej) => {
  console.log('Promise 2 has run');
  setTimeout(() => {
    res(20);
  }, 2000);
});
let p3 = new Promise((res, rej) => {
  console.log('Promise 3 has run');
  setTimeout(() => {
    res(30);
  }, 3000);
});
let p4 = new Promise((res, rej) => {
  console.log('Promise 4 has run');
  setTimeout(() => {
    res(40);
    // rej('Error in promise 4');
  }, 4000);
});

function callPromiseAll() {
  Promise.all([p1, p2, p3, p4])
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
}
