import * as React from "react";
import "react";

type Category = "good" | "bad";
type Typing = "none" | "weak" | "strong";

type Language = {
  id: number | string;
  name?: string;
  yaerCreation: number;
  category: Category; // Fix => Passage au type literal
  typing: Typing; // Fix => Passage au type literal
  relatedLanguages: Language[]; // Fix : Fix => passer any à Language
};
type FooProp = {
  // this object is fetched by parent from gql(`...`)
  language?: Language;
};

// Remarque : Je me permet d'ajout cette fonction utilitaire, j'espere que vous m'en reparlerai par la suite
function unreachableCode(_nvr: never) {
  console.error(`Unexpected status type: ${_nvr}`);
}

// Remarque : Retirer la logiques de l'affichage quand ca devient complexe
const getTypingTrad = (typing: Typing) => {
  switch (typing) {
    case "none":
      return "no-typing";
    case "strong":
      return "quite low";
    case "weak":
      return "TypeScript :cool:";
    default:
      unreachableCode(typing);
      return "never";
  }
};

// Remarque : Destructuration de language pour eviter une repetition de props.language
export const Foo: React.FC<FooProp> = ({ language }) => {
  // Fix : Gerer les cas ou language est undefined
  if (!language) return null;

  // Remarque : Si on part du principe qu'il faut forcer le typage de id en number,
  // il faudrait plutot faire la modification dans Language
  const id = language.id as number;

  return (
    <span>
      <div>
        #{id}
        {/* Fix : Ne pas afficher le name si il est undefined */}
        {language?.name && <>Language name: {language.name}</>}
        Is good: {language.category == "good" ? "yes" : "no"}
        Typing: {getTypingTrad(language.typing)}
        {/* Remarque :
         - Attention possibilité de boucle infini (il faudrait fouiller la structure graphql pour en etre certain mais c'est la limite de cet exercice), coté client mais aussi au niveau de l'api
         Fix :
         - Passage au map
         - aAjout de la clé
        */}
        {language.relatedLanguages.map((l) => (
          <Foo key={`language-${l.name}`} language={l}></Foo>
        ))}
      </div>
    </span>
  );
};
