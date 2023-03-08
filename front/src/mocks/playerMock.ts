import IPlayer from "interfaces/IPlayer";

 const playerMock: IPlayer = {
  avatar: "",
  name: "Bot1",
  experience: 100,
  gameClass: "Drúida",
  level: 1,
  skills: [],
  status: {    
    STR: {
      value: 5,
      pAttack: 5 * 9,
      pDCritical: 5 * 15,
    }, 
    CON: {
      value: 5,
      currentHp: 5 * 18,
      maxHp: 5 * 18,
      pDefense: 5 * 6,
      determination: 5 * 3
    }, 
    DEX: {
      value: 5,
      agility: 5*3,
      malice: 5 * 3
    }, 
    INT: {
      value: 5,
      mAttack: 5 * 9,
      mDCritical: 5 * 15,
    }, 
    MEN: {
      value: 5,
      currentMp: 5 * 18,
      maxMp: 5 * 18,
      mDefense: 5 * 6,
      resilience: 5 * 3
    }, 
    WIT: {
      value: 5,
      concentration: 5 * 6,
      vision: 5 * 3
    }
  },
  title: "",
  uuid: ""

};

export default playerMock;