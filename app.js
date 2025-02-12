const user = { name: 'John Doe', age: 30 };
localStorage.setItem('_scs', JSON.stringify(user));

const iframe = document.getElementById('calculator');

iframe.onload = function () {
  const data = localStorage.getItem('_scs');
  iframe.contentWindow.postMessage({ key: '_scs', value: data }, '*');
};
