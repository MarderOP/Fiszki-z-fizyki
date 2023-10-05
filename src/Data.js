export const Data = [
  {
    id: 1,
    type: "movement",
    name: "Ruch Jednostajny Prostoliniowy",
    data: {
      formula: ["Prędkość: V = s/t", "Droga: s = V*t", "Czas: t = s/V"],
      content:
        "Ruch jednostajny prostoliniowy to rodzaj ruchu, w którym obiekt porusza się wzdłuż prostej linii ze stałą prędkością. W tym rodzaju ruchu zarówno wartość, jak i kierunek prędkości pozostają niezmienne w czasie. Prędkość średnia jest równa prędkości chwilowej, a przemieszczenie jest proporcjonalne do czasu.",
    },
  },
  {
    id: 2,
    type: "movement",
    name: "Ruch Jednostajny Przyśpieszony",
    data: {
      formula: ["Końcowa prędkość: Vk = Vp + at", "Droga: s = Vt + (1/2)at^2"],
      content:
        "Ruch jednostajny przyśpieszony to rodzaj ruchu, w którym ciało porusza się po torze prostoliniowym, a jego prędkość zmienia się w czasie ze stałym przyśpieszeniem. Przyśpieszenie oznacza zmianę prędkości w jednostce czasu. Wzory opisujące ten rodzaj ruchu to v = u + at (gdzie v to końcowa prędkość, u to początkowa prędkość, a to przyśpieszenie, t to czas) oraz s = ut + (1/2)at^2 (gdzie s to droga przebyta przez ciało).",
    },
  },
  {
    id: 3,
    type: "movement",
    name: "Ruch Jednostajny Opóźniony",
    data: {
      formula: ["Końcowa prędkość: Vk = Vp - at", "Droga: s = Vt - (1/2)at^2"],
      content:
        "Ruch jednostajny opóźniony to rodzaj ruchu, w którym ciało porusza się po torze prostoliniowym, a jego prędkość zmienia się w czasie ze stałym opóźnieniem. Opóźnienie oznacza zmianę prędkości w jednostce czasu. Wzory opisujące ten rodzaj ruchu to v = u - at (gdzie v to końcowa prędkość, u to początkowa prędkość, a to opóźnienie, t to czas) oraz s = ut - (1/2)at^2 (gdzie s to droga przebyta przez ciało).",
    },
  },
  {
    id: 4,
    type: "drop",
    name: "Prawo Archimedesa",
    data: {
      formula: ["Siła wyporu: F = ρ * V * g"],
      content:
        "Prawo Archimedesa opisuje siłę wyporu działającą na ciało zanurzone w płynie. Siła ta jest równa ciężarowi wypartego płynu i jest skierowana w górę. Prawo to ma fundamentalne znaczenie w hydrostatyce i jest kluczowe dla zrozumienia unoszenia się ciał w cieczach.",
    },
  },
  {
    id: 5,
    type: "electricity",
    name: "Prawo Ohma",
    data: {
      formula: ["Napięcie: U = R * I", "Moc: P = U * I"],
      content:
        "Prawo Ohma opisuje związek między napięciem (U), prądem (I) a opornością (R) w obwodzie elektrycznym. Jest to jedno z podstawowych praw elektryczności. Prawo to jest kluczowe w analizie i projektowaniu obwodów elektrycznych oraz urządzeń elektronicznych.",
    },
  },
  {
    id: 6,
    type: "electricity",
    name: "Prawo Coulomba",
    data: {
      formula: ["Siła elektrostatyczna: F = k * (q1 * q2) / r^2"],
      content:
        "Prawo Coulomba opisuje siłę elektrostatycznego oddziaływania między dwiema naładowanymi cząstkami. Siła ta jest odwrotnie proporcjonalna do kwadratu odległości między nimi. To prawo jest fundamentalne w elektrostatyce i wyjaśnia zachowanie naładowanych ciał.",
    },
  },
  {
    id: 7,
    type: "electricity",
    name: "Prawo Gaussa",
    data: {
      formula: ["Dywergencja pola elektrycznego: ∮E * dA = (1 / ε₀) * ∮ρ * dV"],
      content:
        "Prawo Gaussa jest jednym z podstawowych praw elektrostatyki i opisuje dywergencję pola elektrycznego wokół naładowanych ciał. To narzędzie matematyczne jest używane do analizy rozkładu ładunków i pól elektrycznych.",
    },
  },
  {
    id: 8,
    type: "spring",
    name: "Prawo Hooke'a",
    data: {
      formula: ["Siła sprężystości: F = -k * x"],
      content:
        "Prawo Hooke'a opisuje zachowanie sprężyn i materiałów sprężystych. Siła sprężystości jest proporcjonalna do odkształcenia sprężyny. To prawo jest używane w fizyce do analizy sprężystości i deformacji ciał.",
    },
  },
  {
    id: 9,
    type: "bend",
    name: "Prawo Snelliusa",
    data: {
      formula: ["Prawo załamania światła: n1 * sin(θ1) = n2 * sin(θ2)"],
      content:
        "Prawo Snelliusa, znane również jako prawo załamania światła, opisuje związek między kątem padania światła a kątem załamania w dwóch różnych ośrodkach o różnych współczynnikach załamania. Jest kluczowe w optyce i wyjaśnia, jak światło zmienia kierunek przechodząc z jednego medium do drugiego.",
    },
  },
  {
    id: 10,
    type: "electricity",
    name: "Równania Maxwella",
    data: {
      formula: [
        "Pierwsze równanie Maxwella: ∮E * dA = (1 / ε₀) * ∮ρ * dV",
        "Drugie równanie Maxwella: ∮B * dA = 0",
        "Trzecie równanie Maxwella: ∮E * dl = -d/dt ∮B * dA",
        "Czwarte równanie Maxwella: ∮B * dl = (μ₀ * ε₀) * d/dt ∮E * dA",
      ],
      content:
        "Równania Maxwella to zestaw czterech równań różniczkowych opisujących elektromagnetyzm i zachowanie pól elektrycznych (E) i magnetycznych (B). Te równania są fundamentem elektromagnetyki i wyjaśniają zależności między polami, ładunkami elektrycznymi i prądami elektrycznymi. Równania Maxwella są niezwykle istotne w fizyce teoretycznej i inżynierii elektrycznej oraz znajdują zastosowanie w dziedzinach takich jak telekomunikacja, optyka, i elektrodynamika.",
    },
  },
];
export function EditData(Elem) {
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].id === Elem.id) {
      Data[i] = Elem;
    }
  }
}
export function NewData(Elem) {
  Data.push(Elem);
}
export function DeleteData(Elem) {
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].id === Elem.id) {
      Data.splice(i, 1);
    }
  }
}
