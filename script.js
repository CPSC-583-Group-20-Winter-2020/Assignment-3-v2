function mercator(x, y) {
    return [x, Math.log(Math.tan(Math.PI / 4 + y / 2))];
}