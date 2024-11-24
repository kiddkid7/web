const screenData = {
    screenWidth: 0,
    screenHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    updateScreenInfo: function () {
        this.screenWidth = screen.width;
        this.screenHeight = screen.height;
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    },
    formatScreenInfo: function () {
        return `屏幕实际宽度: ${this.screenWidth}px, 屏幕实际高度: ${this.screenHeight}px,` +
                ` 浏览器窗口宽度: ${this.windowWidth}px, 浏览器窗口高度: ${this.windowHeight}px`;
    }
};

function updateScreenInfo() {
    screenData.updateScreenInfo();
    document.getElementById("screen-info").textContent = screenData.formatScreenInfo();
}

updateScreenInfo();

setInterval(updateScreenInfo,1000);