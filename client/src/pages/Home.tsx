// Page principale — Analyse du brief client
// Style académique sobre, typographie sérif, navigation par ancres

import { useEffect, useState } from "react";

// Sections du document
const sections = [
  { id: "reformulation", label: "Reformulation" },
  { id: "questions", label: "Questions au client" },
  { id: "ressources", label: "Profils & ressources" },
  { id: "cadrage", label: "Cadrage simplifié" },
  { id: "roadmap", label: "Roadmap" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("reformulation");

  // Met en évidence le lien actif selon la section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]">

      {/* En-tête */}
      <header className="bg-white border-b-2 border-[#3d5a80] px-6 py-10">
        <div className="max-w-[780px] mx-auto">
          <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#3d5a80] mb-3 font-sans">
            Cours_01 — Sprint cadrage projet
          </span>
          <h1 className="text-[28px] font-normal leading-tight mb-2" style={{ fontFamily: "Georgia, serif" }}>
            Analyse du brief client
          </h1>
          <p className="text-[13px] text-[#666] font-sans">
            Exercice pratique — F1 Projet Client · La Forge Promo 2028
          </p>
        </div>
      </header>

      {/* Navigation sticky */}
      <nav className="bg-white border-b border-[#ddd] sticky top-0 z-10">
        <div className="max-w-[780px] mx-auto px-6 flex overflow-x-auto">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-sans text-[13px] px-4 py-3 whitespace-nowrap border-b-2 transition-colors duration-200 no-underline ${
                activeSection === id
                  ? "text-[#3d5a80] border-[#3d5a80]"
                  : "text-[#666] border-transparent hover:text-[#3d5a80]"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Contenu */}
      <main className="max-w-[780px] mx-auto px-6 py-12 pb-20">

        {/* Section 01 — Reformulation */}
        <section id="reformulation" className="mb-16 pb-16 border-b border-[#ddd]">
          <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#3d5a80] mb-2 font-sans">01</div>
          <h2 className="text-[20px] font-normal mb-6 pb-3 border-b border-[#e8eef4]" style={{ fontFamily: "Georgia, serif" }}>
            Reformulation du brief
          </h2>
          <div className="space-y-4 text-[17px] leading-[1.75] text-justify" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              L'organisation se trouve aujourd'hui confrontée à un problème de lisibilité qui ne relève pas
              uniquement d'un manque de contenus, mais plutôt d'un défaut de structuration globale. Les informations
              existent, parfois même en quantité, mais leur dispersion entre différents supports empêche toute
              compréhension immédiate de l'offre. Cette fragmentation crée une expérience confuse, en particulier
              pour un public découvrant l'activité pour la première fois, qui ne dispose d'aucun repère clair pour
              naviguer, hiérarchiser ou interpréter les informations qui lui sont proposées.
            </p>
            <p>
              Ce constat est renforcé par l'absence de cadrage réel du projet, perceptible à travers les divergences
              internes sur la forme que devrait prendre la solution. Le fait que certains envisagent un mini-site,
              d'autres un parcours interactif ou encore un simple outil de consultation révèle moins une diversité
              d'idées qu'un manque de priorisation des besoins. Derrière ces propositions, il y a des intentions
              légitimes, mais elles ne sont pas encore articulées autour d'une vision commune. Dans ce contexte,
              chercher à trancher trop rapidement entre ces options serait probablement contre-productif. Il semble
              au contraire plus pertinent d'envisager une approche hybride, reposant sur une structure claire et
              stable, proche d'un mini-site, enrichie par des logiques de parcours progressifs permettant d'adapter
              la profondeur d'information au niveau d'engagement de l'utilisateur. Une telle direction permettrait
              de répondre simultanément à la nécessité de clarté immédiate et à l'exigence de richesse attendue
              par des interlocuteurs plus familiers.
            </p>
          </div>
        </section>

        {/* Section 02 — Questions au client */}
        <section id="questions" className="mb-16 pb-16 border-b border-[#ddd]">
          <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#3d5a80] mb-2 font-sans">02</div>
          <h2 className="text-[20px] font-normal mb-6 pb-3 border-b border-[#e8eef4]" style={{ fontFamily: "Georgia, serif" }}>
            Questions au client
          </h2>
          <div className="space-y-4 text-[17px] leading-[1.75] text-justify mb-7" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              Avant même de produire, il devient donc essentiel de clarifier un certain nombre de points qui
              conditionneront la pertinence de toute proposition. La question des objectifs doit être posée de
              manière explicite : s'agit-il principalement de mieux présenter une offre, de générer des contacts,
              de structurer un discours institutionnel ou de faciliter un usage interne ? La réponse à cette
              interrogation influencera directement les choix de conception.
            </p>
            <p>
              De la même manière, la hiérarchisation des contenus ne peut pas être traitée comme une simple
              organisation documentaire. Elle suppose de déterminer ce qui doit être compris immédiatement, ce qui
              peut être approfondi ensuite, et ce qui relève d'un second niveau de lecture. Enfin, le niveau
              d'interactivité attendu mérite d'être interrogé avec précision, non pas comme une ambition en soi,
              mais comme un levier au service de la compréhension. Trop d'interactivité risquerait de complexifier
              l'expérience, tandis qu'une approche trop statique ne répondrait pas à l'objectif d'engagement évoqué
              dans le brief.
            </p>
          </div>

          {/* Tableau des questions */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-sans text-[14px]">
              <thead>
                <tr>
                  <th className="bg-[#3d5a80] text-white text-left px-4 py-[10px] font-semibold tracking-wide">Priorité</th>
                  <th className="bg-[#3d5a80] text-white text-left px-4 py-[10px] font-semibold tracking-wide">Question</th>
                  <th className="bg-[#3d5a80] text-white text-left px-4 py-[10px] font-semibold tracking-wide">Enjeu sous-jacent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Haute", "Quel est l'objectif principal du projet ?", "Orienter toute la conception"],
                  ["Haute", "Quels contenus sont prioritaires ?", "Définir la hiérarchie de l'information"],
                  ["Moyenne", "Quel niveau d'interactivité est attendu ?", "Calibrer l'expérience utilisateur"],
                  ["Moyenne", "Qui valide en dehors de l'interlocutrice principale ?", "Anticiper les critères de la direction"],
                  ["Basse", "Existe-t-il une charte graphique formalisée ?", "Cadrer le travail du UI designer"],
                ].map(([priorite, question, enjeu], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-[#f2f2f0]" : "bg-white"}>
                    <td className="px-4 py-[10px] border-b border-[#ddd] align-top">{priorite}</td>
                    <td className="px-4 py-[10px] border-b border-[#ddd] align-top">{question}</td>
                    <td className="px-4 py-[10px] border-b border-[#ddd] align-top">{enjeu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 03 — Profils & ressources */}
        <section id="ressources" className="mb-16 pb-16 border-b border-[#ddd]">
          <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#3d5a80] mb-2 font-sans">03</div>
          <h2 className="text-[20px] font-normal mb-6 pb-3 border-b border-[#e8eef4]" style={{ fontFamily: "Georgia, serif" }}>
            Profils &amp; ressources
          </h2>
          <div className="space-y-4 text-[17px] leading-[1.75] text-justify mb-7" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              Pour répondre à ces enjeux, la mise en place d'une équipe resserrée mais complémentaire apparaît
              nécessaire. Le rôle du chef de projet sera central pour arbitrer les décisions et maintenir une
              cohérence globale dans un contexte où les attentes ne sont pas encore alignées. Le travail du UX
              designer consistera à transformer cette matière floue en une architecture lisible, en structurant les
              contenus et en définissant des parcours adaptés aux différents profils d'utilisateurs.
            </p>
            <p>
              Le UI designer interviendra dans un second temps pour donner une forme tangible à cette réflexion,
              en s'appuyant sur la base graphique existante tout en la rationalisant. Un développeur permettra de
              confronter rapidement les idées à leur faisabilité, même à un niveau exploratoire, tandis qu'un profil
              orienté contenu jouera un rôle clé dans la reformulation et l'adaptation des textes, souvent
              sous-estimée mais essentielle dans ce type de projet. L'ensemble de cette collaboration pourra
              s'appuyer sur des outils comme Notion pour centraliser la réflexion et Figma pour prototyper et
              itérer rapidement.
            </p>
          </div>

          {/* Tableau de l'équipe */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-sans text-[14px]">
              <thead>
                <tr>
                  <th className="bg-[#3d5a80] text-white text-left px-4 py-[10px] font-semibold tracking-wide">Profil</th>
                  <th className="bg-[#3d5a80] text-white text-left px-4 py-[10px] font-semibold tracking-wide">Rôle dans le projet</th>
                  <th className="bg-[#3d5a80] text-white text-left px-4 py-[10px] font-semibold tracking-wide">Outils principaux</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Chef de projet", "Coordination, arbitrage, relation client", "Notion, Google Meet"],
                  ["UX designer", "Architecture de l'information, parcours utilisateurs", "Figma, Whimsical"],
                  ["UI designer", "Identité visuelle, maquettes, composants", "Figma"],
                  ["Développeur", "Faisabilité technique, intégration", "VS Code, GitHub"],
                  ["Chargé de contenu", "Reformulation, hiérarchisation des textes", "Notion, Google Docs"],
                ].map(([profil, role, outils], i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-[#f2f2f0]" : "bg-white"}>
                    <td className="px-4 py-[10px] border-b border-[#ddd] align-top">{profil}</td>
                    <td className="px-4 py-[10px] border-b border-[#ddd] align-top">{role}</td>
                    <td className="px-4 py-[10px] border-b border-[#ddd] align-top">{outils}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 04 — Cadrage simplifié */}
        <section id="cadrage" className="mb-16 pb-16 border-b border-[#ddd]">
          <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#3d5a80] mb-2 font-sans">04</div>
          <h2 className="text-[20px] font-normal mb-6 pb-3 border-b border-[#e8eef4]" style={{ fontFamily: "Georgia, serif" }}>
            Cadrage simplifié
          </h2>
          <div className="space-y-4 text-[17px] leading-[1.75] text-justify mb-7" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              Compte tenu de la contrainte de temps particulièrement courte, l'enjeu n'est pas de produire une
              solution finalisée, mais de proposer un cadre suffisamment clair pour permettre aux parties prenantes
              de se projeter. Il s'agit en quelque sorte de réduire l'incertitude plutôt que de livrer un produit.
            </p>
            <p>
              Dans cette logique, la première version devra se concentrer sur l'essentiel : une structuration des
              contenus lisible, une proposition de navigation cohérente et quelques écrans clés permettant
              d'incarner cette direction. Le choix d'un prototype basse ou moyenne fidélité semble ici pertinent,
              car il permet de matérialiser les idées sans figer trop tôt des décisions graphiques ou techniques.
              À l'inverse, chercher à produire un rendu visuel final ou à développer des fonctionnalités avancées
              à ce stade risquerait de détourner l'attention des véritables enjeux.
            </p>
          </div>

          {/* Périmètre en deux colonnes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-[#e8eef4] text-[#3d5a80] rounded p-5 font-sans text-[14px]">
              <h3 className="text-[11px] font-bold tracking-[0.1em] uppercase mb-4">Dans le périmètre</h3>
              {[
                "Structuration des contenus et proposition de hiérarchie",
                "Logique de navigation et arborescence validée",
                "Prototype basse ou moyenne fidélité sur les écrans clés",
                "Support de présentation pour la réunion intermédiaire",
              ].map((item, i) => (
                <p key={i} className="mb-2 pl-3 border-l-2 border-[#3d5a80] leading-snug last:mb-0">{item}</p>
              ))}
            </div>
            <div className="bg-[#f5f5f5] text-[#888] rounded p-5 font-sans text-[14px]">
              <h3 className="text-[11px] font-bold tracking-[0.1em] uppercase mb-4 text-[#666]">Hors périmètre</h3>
              {[
                "Intégration graphique définitive",
                "Rédaction exhaustive de toutes les pages",
                "Développements techniques et fonctionnalités avancées",
                "Tests utilisateurs formels",
              ].map((item, i) => (
                <p key={i} className="mb-2 pl-3 border-l-2 border-[#ccc] leading-snug last:mb-0">{item}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Section 05 — Roadmap */}
        <section id="roadmap" className="mb-0">
          <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#3d5a80] mb-2 font-sans">05</div>
          <h2 className="text-[20px] font-normal mb-6 pb-3 border-b border-[#e8eef4]" style={{ fontFamily: "Georgia, serif" }}>
            Roadmap &amp; premières tâches
          </h2>
          <div className="space-y-4 text-[17px] leading-[1.75] text-justify mb-8" style={{ fontFamily: "Georgia, serif" }}>
            <p>
              La dynamique de travail devra donc être à la fois rapide et structurée, avec une première phase
              très courte d'alignement permettant de poser les bases du projet et de lever les principales zones
              d'ombre. Cette étape devra être suffisamment dense pour éviter les incompréhensions ultérieures,
              mais assez pragmatique pour ne pas consommer une part disproportionnée du temps disponible.
            </p>
            <p>
              Elle pourra être suivie d'un travail de structuration des contenus et de définition des parcours,
              qui constituera le cœur de la proposition. Enfin, la dernière partie du temps devra être consacrée
              à la traduction de cette réflexion en supports tangibles, pensés non pas comme une finalité, mais
              comme des outils de discussion. L'objectif, à l'issue de ces dix jours, sera moins de convaincre
              définitivement que de rendre possible une décision collective éclairée, en transformant un projet
              flou en une direction concrète et partageable.
            </p>
          </div>

          {/* Timeline */}
          <div className="pl-7 border-l-2 border-[#ddd] space-y-8">
            {[
              {
                jours: "J1 — J2",
                titre: "Alignement stratégique",
                desc: "Réunion de cadrage avec l'interlocutrice principale. Levée des zones d'ombre, inventaire des contenus disponibles, validation des objectifs.",
                final: false,
              },
              {
                jours: "J3 — J5",
                titre: "Architecture de l'information",
                desc: "Audit des contenus existants, proposition d'arborescence, définition des parcours selon les deux profils cibles.",
                final: false,
              },
              {
                jours: "J6 — J9",
                titre: "Prototypage et mise en forme",
                desc: "Réalisation des maquettes filaires sur Figma, préparation du support de présentation, itérations internes.",
                final: false,
              },
              {
                jours: "J10",
                titre: "Présentation intermédiaire",
                desc: "Restitution au client. Transformer un projet flou en une direction concrète et partageable, pour rendre possible une décision collective éclairée.",
                final: true,
              },
            ].map(({ jours, titre, desc, final: isFinal }, i) => (
              <div key={i} className="relative">
                {/* Pastille */}
                <span
                  className={`absolute -left-[35px] top-[5px] w-[10px] h-[10px] rounded-full border-2 border-white outline outline-2 ${
                    isFinal ? "bg-[#3d5a80] outline-[#3d5a80]" : "bg-[#ddd] outline-[#ddd]"
                  }`}
                />
                <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#3d5a80] mb-1 font-sans">
                  {jours}
                </div>
                <div className="text-[15px] font-semibold mb-1 font-sans">{titre}</div>
                <div className="text-[14px] text-[#666] leading-relaxed font-sans">{desc}</div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Pied de page */}
      <footer className="border-t border-[#ddd] bg-white py-6 text-center font-sans text-[12px] text-[#666]">
        F1 — Projet Client · Exercice pratique · La Forge Promo 2028
      </footer>

    </div>
  );
}
