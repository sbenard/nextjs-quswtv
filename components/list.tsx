// Fix : Ajout de react
import React, { FC } from "react";
import { Foo } from "../utils/foo";
// Fix : Ajout de la dependances @apollo/clien
import { useQuery, gql } from "@apollo/client";

// Remarque bien que défini les props ne sont pas utilisés
interface ListProps {
  project: any; // Remarque : Si possible eviter les any
}
export const List: FC<ListProps> = () => {
  const { data } = useQuery(
    gql(`
      query {
        reparcarProject {
          id
          startDate
          nbrApps
          languages {
            name
            yaerCreation
            category
            typing
            parentLanguage
          }
        }
      }
    `)
    // Remarques :
    // - Typo sur yaerCreation
    // - Il faudrait penser a utiliser un system automatisant le types des données retournés par graphql
    //
  );

  return (
    <span>
      {/* Fix : ne par permettre d'afficher des resultats si data est undefined */}
      {!data
        ? "Loading..."
        : data.reparcar.languages.map((l) => (
            // Fix : Ajout de la clé
            <Foo key={`language-${l.name}`} {...l} />
          ))}
    </span>
  );
};
