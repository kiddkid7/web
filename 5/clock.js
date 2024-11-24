const data = {
    year: 0,
    month: 0,
    day: 0,
    weekday: '',
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    timeZoneOffset: '',
    updateTime: function () {
        const now = new Date(); // 获取当前时间
        this.year = now.getFullYear();
        this.month = now.getMonth() + 1;
        this.day = now.getDate();
        this.weekday = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()];
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
        this.milliseconds = now.getMilliseconds();

        const offset = now.getTimezoneOffset();
        const sign = offset > 0 ? "-" : "+";
        const hours = Math.floor(Math.abs(offset) / 60);
        const minutes = Math.abs(offset) % 60;

        this.timeZoneOffset = `UTC${sign}${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    },
    formatTime: function () {
        let timeString = `${this.year}年${this.month < 10 ? '0' + this.month : this.month}月${this.day < 10 ? '0' + this.day : this.day}日 ` +
            `${this.weekday} ` +
            `${this.hours < 10 ? '0' + this.hours : this.hours}:${this.minutes < 10 ? '0' + this.minutes : this.minutes}:${this.seconds < 10 ? '0' + this.seconds : this.seconds}.${this.milliseconds < 100 ? '0' + (this.milliseconds < 10 ? '0' + this.milliseconds : this.milliseconds) : this.milliseconds} ` +
            `时区: ${this.timeZoneOffset}`;

        // 每到分针指向20和50时，都输出“站起来活动一下吧！
        if (this.seconds === 20 || this.seconds === 50) {
            timeString += "\n站起来活动一下吧！";
        }

        return timeString;
    }
};

// 每毫秒更新一次时间并显示
function updateClock() {
    data.updateTime();
    document.getElementById('clock').textContent = data.formatTime();
}

updateClock();

setInterval(updateClock,1);