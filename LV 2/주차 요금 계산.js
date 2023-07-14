function solution(fees, records) {
  const res = [];
  const info = {}; // 각 차량의 누적 주차시간
  const inCars = {}; // 현재 주차되어 있는 차량번호
  records.forEach((record) => {
    let [h, m, carNum, state] = sliceStr(record);
    if (!(carNum in inCars)) {
      inCars[carNum] = h * 60 + m;
      info[carNum] = carNum in info ? info[carNum] : 0;
    } else {
      let stayTime = h * 60 + m - inCars[carNum];
      info[carNum] += stayTime;
      delete inCars[carNum];
    }
  });

  if (Object.keys(inCars).length !== 0) {
    for (let k of Object.keys(inCars)) {
      info[k] += 23 * 60 + 59 - inCars[k];
      delete inCars[k];
    }
  }
  // console.log(info, inCars);
  Object.keys(info).forEach((key) => {
    let totalFees = calTotalFees(info[key], fees);
    res.push([key, totalFees]);
  });

  // console.log(res);
  return res.sort((a, b) => +a[0] - +b[0]).map((a) => +a[1]);
}

function sliceStr(r) {
  return [+r.slice(0, 2), +r.slice(3, 5), r.slice(6, 10), r.slice(11)];
}

function calTotalFees(times, fees) {
  let totalFees = fees[1];
  let surcharge =
    times > fees[0] ? Math.ceil((times - fees[0]) / fees[2]) * fees[3] : 0;
  totalFees += surcharge;
  return totalFees;
}
