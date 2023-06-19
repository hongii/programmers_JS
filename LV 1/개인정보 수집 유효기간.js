// 두번째 코드 -> 날짜 나눌때 slice()대신 split()사용, 날짜 계산의 코드 간결화
function solution(today, terms, privacies) {
  let [today_y, today_m ,today_d] = today.split(".");
  let curDays = +today_y*12*28 + +today_m*28 + +today_d;
  let map = new Map();
  terms.forEach((type)=>{
      let tmp = type.split(" ");
      map.set(tmp[0], +tmp[1]*28);
  })
  
  let res = []
  privacies.forEach((pri, i)=>{
      let tmp = pri.split(" ");
      let type = tmp[1];
      let [y, m, d] = tmp[0].split(".");
      let expiration = map.get(type);
      let priDays = +y*12*28 + +m*28 + +d;
      
      if (curDays >= priDays+expiration) res.push(i+1);
  })
  return res
}


/** 첫번째 코드 -> correct
 * function solution(today, terms, privacies) {
    function caculateDate(date) {
        let year = +date.slice(0, 4);
        let month = +date.slice(5, 7);
        let day = +date.slice(8, 10);
        return [year, month, day]
    }
    let [today_y, today_m, today_d] = caculateDate(today)
    
    let map = new Map();
    terms.forEach((type)=>{
        let tmp = type.split(" ")
        map.set(tmp[0], +tmp[1])
    })
    
    let res = []
    privacies.forEach((pri, i)=>{
        let [y, m, d] = caculateDate(pri);
        let type = pri.at(-1);
        let expiration = map.get(type) * 28;
        let tmp_y = today_y - y, tmp_m = today_m - m, tmp_d = today_d - d
        if (tmp_d < 0) {
            tmp_d += 28;
            tmp_m -= 1
        }
        if (tmp_m < 0) {
            tmp_m += 12;
            tmp_y -= 1
        }
        let totalDays = tmp_y*12*28 + tmp_m*28 + tmp_d + 1;
        if (totalDays > expiration) {
            res.push(i+1)
        }
    })
    return res
}
 */