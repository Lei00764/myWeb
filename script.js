function cal() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    op = document.getElementById("op").value;
    // 此时 num1和num2 均为字符串而非数字

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    op = parseInt(op)

    // 定义变量
    let answer;

    switch (op) {
        case 1:
            answer = num1 + num2;
            break;
        case 2:
            answer = num1 - num2;
            break;
        case 3:
            answer = num1 * num2;
            break;
        case 4:
            answer = num1 / num2;
            break;
    }
    document.getElementById("ans").innerHTML = answer;
}