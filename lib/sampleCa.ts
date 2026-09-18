import { CvData } from "./types";
import { sampleEs } from "./sampleData";

export const sampleCa: CvData = {
  ...sampleEs,
  language: "ca",
  personal: {
    ...sampleEs.personal,
    role: "Enginyer frontend / Especialista en interfícies",
  },
  sections: [
    {
      ...sampleEs.sections[0],
      title: "Tecnologies principals",
      chipGroups: [
        { ...sampleEs.sections[0].chipGroups![0] },
        {
          label: "Estat i API",
          chips: ["Redux", "Zustand", "Context API", "REST APIs"],
        },
        {
          label: "Backend i dades",
          chips: ["Node.js", "Express", "Prisma", "PostgreSQL"],
        },
        {
          label: "Proves i qualitat",
          chips: ["Jest", "Testing Library", "Revisió de codi", "Depuració"],
        },
        {
          label: "Eines i lliurament",
          chips: [
            "Git",
            "Docker",
            "CI/CD",
            "Storybook",
            "Vercel",
            "Jira",
            "Agile / Scrum",
          ],
        },
      ],
    },
    {
      ...sampleEs.sections[1],
      title: "Punts forts",
      cards: [
        {
          title: "Arquitectura frontend",
          text: "Estructures escalables, components reutilitzables i patrons fàcils de mantenir.",
        },
        {
          title: "Lideratge i mentoria",
          text: "Coordinació d'equips, alineament tècnic, planificació i suport en els lliuraments.",
        },
        {
          title: "Compromís amb la qualitat",
          text: "Proves, revisions de codi, depuració i decisions pragmàtiques per reduir regressions.",
        },
        {
          title: "Orientació al producte",
          text: "Capacitat per definir fluxos, validar comportaments i resoldre necessitats de les persones usuàries.",
        },
      ],
    },
    {
      ...sampleEs.sections[2],
      title: "Formació",
      cards: [
        {
          title: "Grau en Enginyeria del Programari",
          text: "Universitat Metropolitana · 2016 - 2020",
        },
        {
          title: "Desenvolupament d'Aplicacions Web",
          text: "Centre Tecnològic del Mediterrani · Finalitzat",
        },
        {
          title: "Especialització en Disseny d'Interfícies",
          text: "Escola Digital Oberta · Finalitzat",
        },
      ],
    },
    {
      ...sampleEs.sections[3],
      title: "Idiomes",
      body: ["Català · Nadiu", "Castellà · Nadiu", "Anglès · Professional"],
    },
    {
      ...sampleEs.sections[4],
      title: "Perfil",
      body: [
        "Enginyer frontend amb experiència en la creació de productes web accessibles i escalables amb React, Next.js i TypeScript. Combino desenvolupament d'interfícies, disseny de components, qualitat del codi i col·laboració amb equips de producte.",
        "M'especialitzo a convertir les necessitats de negoci en experiències clares, fàcils de mantenir i coherents, treballant estretament amb disseny, backend i altres àrees.",
      ],
    },
    {
      ...sampleEs.sections[5],
      title: "Experiència",
      items: [
        {
          title: "Northstar Digital",
          subtitle: "Enginyer frontend",
          date: "Març 2023 - Actualitat\nMadrid, Espanya",
          description:
            "Desenvolupo productes digitals per a clients internacionals i participo en l'arquitectura frontend, la planificació i la millora contínua de l'experiència d'usuari.",
          bullets: [
            "Desenvolupo aplicacions amb React i TypeScript, Material UI, REST APIs i patrons reutilitzables, amb atenció a la mantenibilitat.",
            "Col·laboro en l'evolució del sistema de disseny, les revisions de codi i la definició d'estàndards tècnics.",
            "Treballo amb backend i les parts interessades per convertir requisits en experiències d'usuari fiables.",
          ],
        },
        {
          title: "Pixel Harbor Studio",
          subtitle: "Desenvolupador full stack",
          date: "Gen. 2021 - Feb. 2023\nRemot",
          description:
            "Vaig participar en la creació d'una plataforma SaaS per a petits comerços, desenvolupant funcionalitats completes i millorant-ne els processos operatius.",
          bullets: [
            "Vaig implementar funcionalitats full stack amb Node.js, React, JavaScript, HTML, CSS i REST APIs.",
            "Vaig participar en sessions de requisits, disseny i validació per perfeccionar les funcionalitats amb l'equip de producte.",
            "Vaig automatitzar processos interns i vaig contribuir a reduir el temps de publicació de noves versions.",
          ],
        },
        {
          title: "Bright Apps Lab",
          subtitle: "Desenvolupador web júnior",
          date: "Jul. 2020 - Des. 2020\nValència, Espanya",
          description:
            "Desenvolupament i suport d'aplicacions web internes, amb tasques de millora d'interfícies, gestió d'incidències i anàlisi funcional.",
          bullets: [
            "Vaig analitzar errors de l'aplicació, lògica de negoci, consultes SQL i dades per identificar causes i proposar solucions.",
            "Vaig consolidar coneixements de depuració, suport d'aplicacions, comunicació amb usuaris i resolució estructurada de problemes.",
          ],
        },
      ],
    },
    {
      ...sampleEs.sections[6],
      title: "Projectes seleccionats",
      cards: [
        {
          title: "Aurora UI Kit",
          text: "Biblioteca fictícia de components accessibles per a projectes React: estructures, formularis, targetes, avisos i taules de dades.",
        },
        {
          title: "Book Nook",
          text: "Aplicació fictícia de recomanacions de lectura amb autenticació i llistes personalitzades.",
        },
        {
          title: "Local Market",
          text: "Mercat de demostració desenvolupat amb Next.js, centrat en el comerç local i la navegació accessible.",
        },
        {
          title: "Next CV Builder",
          text: "Aplicació de creació de CV desenvolupada amb Next.js, TypeScript i Material UI per crear, editar i previsualitzar currículums professionals.",
        },
      ],
    },
  ],
};
