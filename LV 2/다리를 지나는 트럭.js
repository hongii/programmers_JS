function solution(bridge_length, weight, truck_weights) {
  const onBridge = new Array(bridge_length).fill(0);
  let time = 0,
    weightSum = 0;
  let idxTruck = 0,
    idxOnBridge = 0;
  while (idxTruck < truck_weights.length) {
    time++;
    weightSum -= onBridge[idxOnBridge++];
    if (weightSum + truck_weights[idxTruck] <= weight) {
      weightSum += truck_weights[idxTruck];
      onBridge.push(truck_weights[idxTruck]);
      idxTruck++;
    } else onBridge.push(0);
  }
  return bridge_length + time;
}
