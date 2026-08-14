document.getElementById("button").onclick = function () {
  let age = document.getElementById("input").value;
  age = Number(age);

  if (age >= 100) {
    document.getElementById("ans").textContent = `You are too old`;
  } else if (age >= 18) {
    document.getElementById("ans").textContent = `You are eligible`;
  } else if (age < 0) {
    document.getElementById("ans").textContent = `Age cannot be below 0`;
  } else {
    document.getElementById("ans").textContent = `You are not eligible`;
  }
};
