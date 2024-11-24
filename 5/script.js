document.addEventListener("DOMContentLoaded",function () {
    // 选择所有书籍项
    const employeeCard = document.querySelectorAll(".employee-card");

    // 添加点击事件(onclick)
    employeeCard.forEach(function (item) {
        item.onclick = function () {
            alert("你点击了: " + this.textContent);
        }
    });

   // 添加鼠标悬停事件
    employeeCard.forEach(function (item) {
        item.onmouseover = function () {
            this.style.backgroundColor = "#b2ebf2";
        }
    })

    // 添加鼠标按下事件
    employeeCard.forEach(function (item) {
        item.onmousedown = function () {
            this.style.backgroundColor = "#d1c4e9";
        }
    })

    // 添加鼠标移出事件
    employeeCard.forEach(function (item) {
        item.onmouseout = function () {
            this.style.backgroundColor = "";
        }
    })


    // 添加鼠标松开事件（onmouseup）
    employeeCard.forEach(function(item) {
        item.onmouseup = function() {
            this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
        };
    });
})