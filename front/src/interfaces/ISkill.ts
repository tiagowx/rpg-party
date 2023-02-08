interface ISkill {
  id: number;
  name: string;
  description: string;
  cost: number;
  timer: number;
  reuse: number;
}

export default ISkill;