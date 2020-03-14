function ptb2() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result = document.getElementById('kq1');

    if (a && a !== 0) {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            result.innerText = 'Phương trình vô nghiệm';
        } else if (delta == 0) {
            result.innerText = "x= " + ((-b) / (2 * a));
        } else {
            var x1 = ((-b + Math.sqrt(delta)) / (2 * a));
            var x2 = ((-b - Math.sqrt(delta)) / (2 * a));
            result.innerText = 'x1=' + x1 + 'và' + ' x2=' + x2;

        }
    } else {
        result.innerText = "x=" + (-c * 1 / b);
    }
}

function timNgay() {
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var result = document.getElementById('kq2');

    switch (month) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '12':
            result.innerText = 'Tháng ' + month + 'có 31 ngày';
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            result.innerText = 'Tháng ' + month + 'có 30 ngày';
            break;
        case '2':
            if (year % 4 === 0) {
                result.innerText = 'Tháng ' + month + ' năm' + year + ' có 29 ngày';
                break;
            } else {
                result.innerText = 'Tháng ' + month + ' năm' + year + ' có 28 ngày';
            }
            break;
        default:
            result.innerText = 'Nhập sai tháng rồi.';
            break;
    }
}

function checkSNT(n) {
    if (n < 2) {
        return false;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i === 0)
                return false;
        }
    }
    return true;
}

function xuat() {
    var n = document.getElementById('n').value;
    var result = document.getElementById('kq3');
    var mang = [];
    for (var i = 0; i <= n; i++) {
        if (checkSNT(i)) {
            mang.push(i);
        }
    }
    result.innerText = mang;
}