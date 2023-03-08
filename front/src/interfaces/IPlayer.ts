import ISkill from "./ISkill";
import IBaseStatus from "./IBaseStatus";

interface IPlayer {
  uuid: string;
  name: string;
  avatar: string;
  title: string;
  gameClass: "Guerreiro" | "Mago" | "Caçador" | "Clérigo" | "Paladino" | "Drúida";
  level: number;
  experience: number;
  status: IBaseStatus;
  skills: number[];
}

export default IPlayer;
