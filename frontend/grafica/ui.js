// Gestione cards dinamiche da array locale (in futuro da API)
document.addEventListener('DOMContentLoaded', () => {
  // Consigli di esempio
  const consigli = [
    { tip: "1", sport: "Calcio", match: "Inter vs Milan", quota: "1.85" },
    { tip: "2", sport: "Tennis", match: "Nadal vs Djokovic", quota: "2.20" },
    { tip: "X", sport: "Basket", match: "Olimpia vs Virtus", quota: "1.95" },
    { tip: "2", sport: "Baseball", match: "Yankees vs Red Sox", quota: "2.30" }
    // ...aggiungi altri consigli qui...
  ];

  // Container per tutte le cards
  const cardsCont = document.querySelector('.row.g-3');
  
  if (cardsCont) {
    cardsCont.innerHTML = consigli.map(c =>
      `<div class="col-12 col-md-6 col-lg-3">
        <div class="card border-primary shadow-sm h-100">
          <div class="card-body">
            <h6 class="card-title fw-semibold">Tip: ${c.tip}</h6>
            <p class="mb-1"><span class="fw-bold">${c.sport}</span> <br> ${c.match}</p>
            <p class="mb-2">Quota: <span class="text-primary">${c.quota}</span></p>
            <button class="btn btn-outline-primary btn-sm">Schedina</button>
          </div>
        </div>
      </div>`
    ).join('');
  }
});