import * as React from 'react';
import 'react';

type FooProp = {
  // this object is fetched by parent from gql(`...`)
  language?: {
    id: number | string;
    name?: string;
    yaerCreation: number;
    category: string; // can be "good" or "bad"
    typing: string; // can be "none" or "weak" or "strong"
    relatedLanguages: any[]; // same object
  };
};

export const Foo: React.FC = (props: FooProp) => {
  const id = props.language.id as number;

  return (
    <span>
      <div>
        #{id}
        Language name: {props.language.name}
        Is good: {props.language.category == 'good' ? 'yes' : 'no'}
        Typing:{' '}
        {props.language.typing == 'none'
          ? 'no-typing'
          : props.language.typing == 'weak'
          ? 'quite low'
          : props.language.typing == 'strong'
          ? 'TypeScript :cool:'
          : 'never'}
        {props.language.relatedLanguages.forEach((l) => (
          <Foo language={l}></Foo>
        ))}
      </div>
    </span>
  );
};
