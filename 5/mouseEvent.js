const mouseData = {
    mouseX: 0,
    mouseY: 0,
    updateMousePosition: function (event) {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
    },
    formatMousePosition: function () {
        return `鼠标按下时的坐标: (${this.mouseX}, ${this.mouseY})`;
    }
};

document.addEventListener('mousedown',function (event) {
    mouseData.updateMousePosition(event);
    document.getElementById('mouse-coordinates').textContent = mouseData.formatMousePosition();
})