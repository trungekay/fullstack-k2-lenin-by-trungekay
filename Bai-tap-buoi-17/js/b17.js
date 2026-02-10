// --- BÀI 1 ---
function bai1() {
  let a = Number(document.getElementById("b1_a").value);
  let b = Number(document.getElementById("b1_b").value);
  a = a + b;
  b = a - b;
  a = a - b;
  document.getElementById("res1").innerText = `Sau hoán vị: a = ${a}, b = ${b}`;
}

// --- BÀI 2 ---
function bai2() {
  let a = +document.getElementById("b2_a").value;
  let b = +document.getElementById("b2_b").value;
  let c = +document.getElementById("b2_c").value;
  let max = Math.max(a, b, c);
  document.getElementById("res2").innerText = `Số lớn nhất: ${max}`;
}

// --- BÀI 3 ---
function bai3() {
  let a = +document.getElementById("b3_a").value;
  let b = +document.getElementById("b3_b").value;
  var msg = a * b > 0 ? "Cùng dấu" : a * b < 0 ? "Khác dấu" : "Bằng 0";
  document.getElementById("res3").innerText = msg;
}

// --- BÀI 4 ---
function bai4() {
  let arr = [
    +document.getElementById("b4_a").value,
    +document.getElementById("b4_b").value,
    +document.getElementById("b4_c").value,
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let term = arr[i];
        arr[i] = arr[j];
        arr[j] = term;
      }
    }
  }
  document.getElementById("res4").innerText = `Tăng dần: ${arr.join(", ")}`;
}

// --- BÀI 5 ---
function bai5() {
  let km = +document.getElementById("b5_km").value;
  let total = 0;
  if (km <= 1) total = km * 15000;
  else if (km <= 5) total = 15000 + (km - 1) * 13500;
  else total = 15000 + 4 * 13500 + (km - 5) * 11000;
  if (km > 120) total *= 0.9;
  document.getElementById("res5").innerText =
    `Tiền cước: ${total.toLocaleString()} đ`;
}

// --- BÀI 6 ---
function bai6() {
  let kwh = +document.getElementById("b6_kwh").value;
  let money = 0;
  if (kwh <= 50) money = kwh * 1678;
  else if (kwh <= 100) money = 50 * 1678 + (kwh - 50) * 1734;
  else money = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
  document.getElementById("res6").innerText =
    `Tiền điện: ${money.toLocaleString()} đ`;
}

// --- BÀI 7 ---
function bai7() {
  let n = +document.getElementById("b7_n").value;
  let s = 0;
  for (let i = 1; i <= n; i++) s += i * (i + 1);
  document.getElementById("res7").innerText = `S = ${s}`;
}

// --- BÀI 8 ---
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function handleBai8() {
  let n = +document.getElementById("b8_n").value;
  let res = isPrime(n) ? "Là số nguyên tố" : "Không phải số nguyên tố";
  document.getElementById("res8").innerText = res;
}

// --- BÀI 9 ---
function bai9() {
  const box = document.getElementById("multiTable");
  box.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    let item = document.createElement("div");
    item.className = "table-item";
    let html = `<b>Bảng ${i}</b><br>`;
    for (let j = 1; j <= 10; j++) {
      html += `${i} x ${j} = ${i * j}<br>`;
    }
    item.innerHTML = html;
    box.appendChild(item);
  }
}
