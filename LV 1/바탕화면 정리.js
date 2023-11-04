function solution(wallpaper) {
  const sites = [];
  wallpaper.forEach((a, i) => {
    // a 문자열에 "#"가 위치하는 idx 모두 찾아 sites배열에 담기
    let j = a.indexOf("#");
    while (j != -1) {
      sites.push([i, j]);
      j = a.indexOf("#", j + 1);
    }
  });

  const sitesX = sites.map((a) => a[0]);
  const sitesY = sites.map((a) => a[1]);
  let Sx = Math.min(...sitesX);
  let Sy = Math.min(...sitesY);
  let Ex = Math.max(...sitesX) + 1;
  let Ey = Math.max(...sitesY) + 1;
  return [Sx, Sy, Ex, Ey];
}
