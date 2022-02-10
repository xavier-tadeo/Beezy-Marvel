interface IThumbnail {
  path: string;
  extension: string;
}

interface ICharcters {
  name: string;
  description: string;
  thumbnail: IThumbnail;
}

export interface ICharctersObject {
  character: ICharcters;
}

export interface IContextApp {
  characterArray: Array<ICharctersObject>;
  setCharacterArray: Function;
}
