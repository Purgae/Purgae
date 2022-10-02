const RankingOrder = (rankNum: number) => {
  if (rankNum === 1) {
    const order = 1;
    return order;
  } else if (rankNum === 2) {
    const order = 3;
    return order;
  } else if (rankNum === 3) {
    const order = 5;
    return order;
  } else if (rankNum === 4) {
    const order = 7;
    return order;
  } else if (rankNum === 5) {
    const order = 9;
    return order;
  } else if (rankNum === 6) {
    const order = 2;
    return order;
  } else if (rankNum === 7) {
    const order = 4;
    return order;
  } else if (rankNum === 8) {
    const order = 6;
    return order;
  } else if (rankNum === 9) {
    const order = 8;
    return order;
  } else if (rankNum === 10) {
    const order = 10;
    return order;
  }
};

export default RankingOrder;
