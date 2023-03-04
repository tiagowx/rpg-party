import ISkill from "./ISkill";
import IBaseStatus from "./IStatus";

interface IEnemy {
  name: string;
  avatar: string;
  title: string;
  gameClass: number;
  level: number;
  status: IBaseStatus;
  skills: number[];
}

export default IEnemy;
