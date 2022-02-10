interface IThumbnail {
  path: string;
  extension: string;
}

export interface ICharcters {
  name: string;
  description: string;
  thumbnail: IThumbnail;
  id: string;
}

export interface ICharctersObject {
  character: ICharcters;
}

export interface IContextApp {
  characterArray: Array<ICharctersObject>;
  setCharacterArray: Function;
}
