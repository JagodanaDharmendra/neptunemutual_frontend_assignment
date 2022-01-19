const RoundNumber = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export default RoundNumber;