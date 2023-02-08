import ISkill from "./ISkill";
import IBaseStatus from "./IStatus";

interface IPlayer {
  uuid: string;
  name: string;
  tittle: string;
  gameClass: number;
  level: number;
  experience: number;
  status: IBaseStatus;
  skills: number [];
}

export default IPlayer;