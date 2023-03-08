import ISkill from "./ISkill";
import IBaseStatus from "./IBaseStatus";

interface IEnemy {
  name: string;
  avatar: string;
  title: string;
  gameClass: "Guerreiro" | "Mago" | "Caçador" | "Clérigo" | "Paladino" | "Drúida";
  level: number;
  status: IBaseStatus;
  skills: number[];
}

export default IEnemy;
