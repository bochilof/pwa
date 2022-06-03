if('serviceWorker' in navigator){
     window.addEventListener('load', () => {
          navigator.serviceWorker.register('pwa/sw.js')
          .then((reg) => {
               console.log('ServiceWorker registrado com sucesso.', reg);
          }).catch((erro) => {
               console.log('ServiceWorker não registrado. Erro: ', erro);
          });
     });
};