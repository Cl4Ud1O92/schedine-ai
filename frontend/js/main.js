// Esempio di chiamata API backend Express per test connessione
document.addEventListener('DOMContentLoaded', () => {
  const testBtn = document.getElementById('testBtn');
  const responseDiv = document.getElementById('response');
  if (testBtn && responseDiv) {
    testBtn.onclick = () => {
      fetch('https://schedine-ai.onrender.com/test')
        .then(res => res.json())
        .then(data => {
          responseDiv.textContent = JSON.stringify(data);
        })
        .catch(err => {
          responseDiv.textContent = 'Errore: ' + err.message;
        });
    };
  }
  
  // Puoi aggiungere qui eventuali logiche per altre pagine o backend!
});