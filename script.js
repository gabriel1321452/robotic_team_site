// Dados dos Membros (Facilita adicionar novos nomes no futuro)
const teamData = {
    lideranca: [
        { name: "CARLOS AVILA", role: "HARDWARE DESIGN" },
        { name: "JILLIAN ROBBINS", role: "HARDWARE ELECTRICAL" },
        { name: "ADAM KERMALLY", role: "HARDWARE FABRICATION" },
        { name: "KYLE L.", role: "BUSINESS & MEDIA" },
        { name: "SARAH J.", role: "SOFTWARE LEAD" },
        { name: "MARCUS V.", role: "STRATEGY" }
    ],
    cocapitaes: [
        { name: "TASEER BADAR", role: "CO-CAPTAIN" },
        { name: "MOHSIN MALIK", role: "CO-CAPTAIN" }
    ],
    mentores: [
        { name: "PROF. RICARDO", role: "FACULTY ADVISOR" },
        { name: "ENG. HELENA", role: "TECHNICAL MENTOR" }
    ]
};

// Função para filtrar e renderizar a equipe
function filterTeam(category) {
    const grid = document.getElementById("team-grid");
    const title = document.getElementById("team-title");
    const tabs = document.querySelectorAll(".team-tab");

    // 1. Atualiza a aba ativa
    tabs.forEach(tab => {
        tab.classList.remove("active");
        // Verifica se o texto do botão contém parte da categoria
        if (tab.innerText.toLowerCase().includes(category.substring(0, 3))) {
            tab.classList.add("active");
        }
    });

    // 2. Atualiza o título da seção
    const titles = { 
        lideranca: "LIDERANÇA PRIMÁRIA", 
        cocapitaes: "CO-CAPITÃES", 
        mentores: "MENTORES DA EQUIPE" 
    };
    title.innerText = titles[category];

    // 3. Limpa e reconstrói o Grid
    grid.innerHTML = "";
    teamData[category].forEach(member => {
        grid.innerHTML += `
          <div class="team-card">
            <div class="team-photo">
              <img src="img/perfil.png" alt="${member.name}">
            </div>
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <a href="#"><i class="fa-brands fa-instagram"></i> INSTAGRAM</a>
          </div>
        `;
    });
}

// Inicia com Liderança ao carregar
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("team-grid")) {
        filterTeam('lideranca');
    }
});