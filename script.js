const players = [
  {
    name: "Virat Kohli",
    role: "Batsman",
    image: "assets/virat.jpg",
    strikeRate: 138.1,
    matches: 250,
    jersey: 18,
    performance: "183 vs PAK"
  },
  {
    name: "Jasprit Bumrah",
    role: "Bowler",
    image: "assets/bumrah.jpg",
    strikeRate: 12.5,
    matches: 180,
    jersey: 93,
    performance: "6/19 vs ENG"
  },
  {
    name: "Hardik Pandya",
    role: "All-rounder",
    image: "assets/pandya.jpg",
    strikeRate: 145.8,
    matches: 140,
    jersey: 33,
    performance: "91(34) vs AUS"
  },
  {
    name: "Rohit Sharma",
    role: "Batsman",
    image: "assets/rohit.jpg",
    strikeRate: 134.6,
    matches: 290,
    jersey: 45,
    performance: "264 vs SL"
  },
  {
    name: "MS Dhoni",
    role: "Wicketkeeper",
    image: "assets/dhoni.png",
    strikeRate: 126.4,
    matches: 300,
    jersey: 7,
    performance: "91*(79) in WC Final"
  }
];
const grid = document.getElementById("playerGrid");
const modal = document.getElementById("playerModal");
const closeBtn = document.getElementById("closeModal");
const modalName = document.getElementById("modalName");
const modalJersey = document.getElementById("modalJersey");
const modalMatches = document.getElementById("modalMatches");
const modalStrikeRate = document.getElementById("modalStrikeRate");
const modalPerformance = document.getElementById("modalPerformance");
players.forEach(player => {
  const card = document.createElement("div");
  card.className = "player-card";
  card.innerHTML = `
    <img src="${player.image}" alt="${player.name}" class="player-img" />
    <h3>${player.name}</h3>
    <p>${player.role}</p>
  `;
  card.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalName.textContent = player.name;
    modalJersey.textContent = player.jersey;
    modalMatches.textContent = player.matches;
    modalStrikeRate.textContent = player.strikeRate;
    modalPerformance.textContent = player.performance;
  });
  grid.appendChild(card);
});
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});