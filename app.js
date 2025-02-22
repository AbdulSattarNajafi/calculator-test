const scs = {
  default: {
    utm: {
      name: 'utm',
      expiration: 'Mon, 17 Mar 2025 12:51:57 GMT',
      value: {
        utm_source: null,
        utm_medium: null,
        utm_campaign: null,
        utm_term: null,
        utm_content: null,
        utm_id: null,
        landing_url: null,
        gBraid: null,
        gclid: null,
        gdpr_checkbox: false,
      },
    },
  },
};
localStorage.setItem('_scs', JSON.stringify(scs));

const iframe = document.getElementById('calculator');

iframe.onload = function () {
  const data = localStorage.getItem('_scs');
  iframe.contentWindow.postMessage({ key: '_scs', value: data }, '*');
};
