/* Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo

Se è un numero: moltiplicalo per due e stampalo

Se è un booleano: stampa “Sì” o “No” in base al suo valore

In tutti gli altri casi: stampa “Tipo non supportato”

🎯 BONUS
Se è null: stampa “Il dato è vuoto”
Se è un array: stampa la sua lunghezza
Se è una Promise: attendi che si risolva e stampa il valore del resolve. */

let dato: unknown;

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else if (typeof dato === "number") {
  console.log(dato * 2);
} else if (typeof dato === "boolean") {
  console.log(dato + "e' un booleano");
} else if (dato === null) {
  console.log("il dato e", null);
} else if (Array.isArray(dato)) {
  console.log(dato.length);
} else if (dato instanceof Promise) {
  dato
    .then((msg) => console.log(msg))
    .catch((err) => {
      console.error("e' una promise, ma va in errore", err);
    });
} else {
  console.log("nessun dato");
}

/* 

Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

nome → stringa
cognome → stringa
annoNascita → numero
sesso → Può essere solo "m" o "f".
anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
🎯 BONUS
Il type alias Dipendente, ha anche i seguenti dati:

emailAziendale → Email assegnata al dipendente (non si può modificare)
contratto → Specifica il tipo di contratto del dipendente, con valori limitati a
 “indeterminato”, “determinato” o “freelance”. */

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[]; // <-- così si dichiara un array di numeri
  readonly emailAziendale: string;
  contratto: "indeterminato" | "determinato" | "freelance";
};

type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[]
  certificazioni: string[]
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budget?: number,
  collaboratori: string[]
}

type Team = {
nome: string,
progettoAttuale: string | null,
budget: number,
membri: [ProjectManager,Developer, ...Developer[]]
}


const team: Team = {
  nome: "Team Alpha",
  progettoAttuale: "Nuovo gestionale",
  budget: 50000,
  membri: [
    {
      nome: "Luca",
      cognome: "Bianchi",
      annoNascita: 1980,
      sesso: "m",
      anniDiServizio: [2010, 2012, 2015],
      emailAziendale: "luca.bianchi@azienda.com",
      contratto: "indeterminato",
      teamSize: 5,
      budget: 20000,
      collaboratori: ["Marco", "Giulia"]
    },
    {
      nome: "Marco",
      cognome: "Verdi",
      annoNascita: 1992,
      sesso: "m",
      anniDiServizio: [2018, 2019],
      emailAziendale: "marco.verdi@azienda.com",
      contratto: "determinato",
      livelloEsperienza: "Mid",
      certificazioni: ["AWS"],
      linguaggi: ["TypeScript", "JavaScript"]
    }
  ]
};

console.log(team);


