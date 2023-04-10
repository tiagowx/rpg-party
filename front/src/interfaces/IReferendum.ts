interface IReferendum {
  id: number;
  ask: string;
  options: [
    {
      option: string;
      votes: number;
    }
  ];
}

export default IReferendum;
