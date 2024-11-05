function checkIfCanCut() {
    const D = parseFloat(document.getElementById("diameter").value);
    const A = parseFloat(document.getElementById("width").value);


    if (D < 0 || A < 0) {
        document.getElementById("result").innerText = "Ошибка: отрицательные значения";
        return;
    }


    if (A * Math.sqrt(2) <= D) {
        document.getElementById("result").innerText = "Да, можно выпилить квадратный брус шириной " + A + ".";
    } else {
        document.getElementById("result").innerText = "Нет, невозможно выпилить квадратный брус шириной " + A + ".";
    }
}
