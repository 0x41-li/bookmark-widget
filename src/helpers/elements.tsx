export function makeDraggable(el: HTMLElement, elDraggedBy: HTMLElement) {
  elDraggedBy.addEventListener("mousedown", function (event: MouseEvent) {
    const initialX = event.clientX - el.offsetLeft;
    const initialY = event.clientY - el.offsetTop;

    const onMouseMove = function (event: MouseEvent) {
      const currentX = event.clientX - initialX;
      const currentY = event.clientY - initialY;

      el.style.left = currentX + "px";
      el.style.top = currentY + "px";
    };

    const onMouseUp = function () {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      el.style.cursor = "default";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    el.style.cursor = "move";
  });
}
