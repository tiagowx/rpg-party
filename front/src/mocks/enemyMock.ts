import IEnemy from "interfaces/IEnemy";

const enemyMock: IEnemy = {
  avatar: "",
  gameClass: 0,
  level: 1,
  name: "Slime",
  skills: [],
  status: {
    CON: {
      currentHp: 60,
      determination: 3,
      maxHp: 60,
      pDefense: 15,
      value: 6,
    },
    DEX: {
      malice: 15,
      agility: 1,
      value: 3,
    },
    INT: {
      mAttack: 12,
      mDCritical: 18,
      value: 6,
    },
    MEN: {
      currentMp: 90,
      maxMp: 90,
      mDefense: 27,
      resilience: 3,
      value: 9,
    },
    STR: {
      pAttack: 6,
      pDCritical: 9,
      value: 3,
    },
    WIT: {
      value: 3,
      concentration: 1,
      vision: 15,
    },
  },
  title: "",
};

export default enemyMock;
