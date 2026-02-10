function getFib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return getFib(n - 1) + getFib(n - 2);
}

function buildFibString(n, current = 0) {
  if (current >= n) return "";
  let val = getFib(current);
  let next = buildFibString(n, current + 1);
  return val + (next !== "" ? ", " + next : "");
}

function runBai1() {
  const n = parseInt(document.getElementById("n1").value);
  document.getElementById("res1").innerText = buildFibString(n);
}

function reverseNum(n, acc = 0) {
  if (n === 0) return acc;
  return reverseNum(Math.floor(n / 10), acc * 10 + (n % 10));
}

function runBai2() {
  const n = parseInt(document.getElementById("n2").value);
  document.getElementById("res2").innerText = reverseNum(Math.abs(n));
}

function layChu(d) {
  if (d === 0) return "không";
  if (d === 1) return "một";
  if (d === 2) return "hai";
  if (d === 3) return "ba";
  if (d === 4) return "bốn";
  if (d === 5) return "năm";
  if (d === 6) return "sáu";
  if (d === 7) return "bảy";
  if (d === 8) return "tám";
  if (d === 9) return "chín";
  return "";
}

function docSo(n) {
  if (n === 0) return "Không";

  let nghan = Math.floor(n / 1000);
  let tram = Math.floor((n % 1000) / 100);
  let chuc = Math.floor((n % 100) / 10);
  let donVi = n % 10;

  let s = "";

  if (nghan > 0) s += layChu(nghan) + " ngàn ";

  if (tram > 0 || nghan > 0) s += layChu(tram) + " trăm ";

  if (chuc > 1) {
    s += layChu(chuc) + " mươi ";
  } else if (chuc === 1) {
    s += "mười ";
  } else if ((tram > 0 || nghan > 0) && donVi > 0) {
    s += "lẻ ";
  }

  if (donVi > 0) {
    if (donVi === 1 && chuc > 1) s += "mốt";
    else if (donVi === 5 && chuc >= 1) s += "lăm";
    else s += layChu(donVi);
  }

  return s.trim();
}

function runBai3() {
  const n = parseInt(document.getElementById("n3").value);
  document.getElementById("res3").innerText = docSo(n);
}
