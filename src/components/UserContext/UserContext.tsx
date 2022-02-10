import { createContext } from "react";
import { IContextApp } from "../../interfaces/interfaces";

export const UserContext = createContext<IContextApp | null>(null);
