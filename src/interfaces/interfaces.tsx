interface IThumbnail {
  path: string;
  extension: string;
}

export interface ICharacters {
  name: string;
  description: string;
  thumbnail: IThumbnail;
  id: string;
}

export interface IItems {
  title: string;

  thumbnail: IThumbnail;
  id: string;
}

export interface ICharactersObject {
  character: ICharacters;
}

export interface ICharacterArray {
  charactersArray: [];
}

export interface IContextApp {
  charactersArray: Array<ICharactersObject>;
  setCharactersArray: Function;
  orderCharacters: boolean;
  setOrderCharacters: Function;
  nameCharacter: string;
  setNameCharacter: Function;

  offset: number;
  setOffset: Function;
}

export interface ICaracteristicsCharacter {
  name: string;
}

export interface IEventsCharacter {
  available: Number;
  items: [];
}

export type FormElement = React.FormEvent<HTMLFormElement>;
