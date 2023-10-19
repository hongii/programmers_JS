function solution(command) {
  const clockDir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 시계방향으로 12시, 3시, 6시, 9시 순
  let robot = [0, 0, 0]; // [x좌표, y좌표, clockDir방향 index] -> 처음엔 12시방향을 가리킴

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "R") {
      robot[2] = (robot[2] + 1) % 4;
    } else if (command[i] === "L") {
      robot[2] = (robot[2] + 3) % 4;
    } else if (command[i] === "G") {
      let [dx, dy] = clockDir[robot[2]];
      robot[0] += dx;
      robot[1] += dy;
    } else if (command[i] === "B") {
      let [dx, dy] = clockDir[robot[2]];
      robot[0] -= dx;
      robot[1] -= dy;
    }
  }
  return [robot[0], robot[1]];
}
