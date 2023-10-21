function solution(bandage, health, attacks) {
  let hp = health,
    healTime = 0,
    attackTime = attacks[0][0],
    k = 0;
  let time = attacks[attacks.length - 1][0];
  for (let i = 1; i <= time; i++) {
    if (i === attackTime) {
      hp -= attacks[k][1];
      if (k < attacks.length - 1) {
        attackTime = attacks[++k][0];
        healTime = 0;
      }
    } else {
      healTime += 1;
      if (hp < health) {
        hp = hp + bandage[1] > health ? health : hp + bandage[1];
      }
      if (healTime === bandage[0]) {
        hp = hp + bandage[2] > health ? health : hp + bandage[2];
        healTime = 0;
      }
    }

    if (hp <= 0) return -1;
  }
  return hp;
}
