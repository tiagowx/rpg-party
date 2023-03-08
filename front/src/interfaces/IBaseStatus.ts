interface IBaseStatus {
  STR: {
    value: number;
    pAttack: number;
    pDCritical: number;
  };
  CON: {
    value: number;
    maxHp: number;
    currentHp: number;
    pDefense: number;
    determination: number;
  };
  DEX: {
    value: number;
    agility: number;
    malice: number;
  };
  INT: {
    value: number;
    mAttack: number;
    mDCritical: number;
  };
  MEN: {    
    value: number;
    maxMp: number;
    currentMp: number;
    mDefense: number;
    resilience: number;
  };
  WIT: {
    value: number;
    concentration: number;
    vision: number;    
  };
}

export default IBaseStatus;
