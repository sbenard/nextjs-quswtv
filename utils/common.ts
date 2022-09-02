/**
 * Fonction prenant en parametre un tableau de pour en retirer les doublons
 */
export const foo = <I>(z: I[]) => [...new Set(z)];

/**
 * Fonction prennant en parametre un objet et une succession de propriétés de cet objet.
 * Retourne une copie de l'objet disposant uniquement des propriétés souhaité.
 */
export const bar = <O, K extends keyof O>(a: O, ...b: K[]) =>
  Object.fromEntries(b.map((c) => [c, a[c]])) as Pick<O, K>;

/**
 * Fonction prenant en parametre une valeur K (propritété de l'objet O) et un objet O.
 * Retourne la valeur de l'objets associé à la propriété.
 */
export const boo = <
  K extends string | number,
  O extends { [Key in K]: unknown }
>(
  a: K,
  b: O
): O[K] => b[a];

/**
 * Type typescript reprenant les propriétés tu Type T passé en generic
 */
export type Azerty<T> = {
  [P in keyof T]-?: T[P];
};

/*
 * Type typescript ayant 2 types generic T et K.
 * Retourne un type reprenant les propriétés de T n'apparaissent pas dans K
 */
export type Ytreza<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Type typescript prenant en generic un ensemble de propriétés de Atribute ("id"|"type"|"toto") nommé K.
 * Permet de typer un objet pour qu'il ai une propriété "attribute",
 * elle même constituée de le la propriété "type" et des autres propriétés présentes dans K (aucune autre si K n'est pas fourni)
 */
export type AttributeLike<K extends keyof Attribute = never> = {
  attribute: Pick<Attribute, "type" | K>;
};
type Attribute = {
  id: string;
  type: "foo" | "bar";
  toto: number;
};
