function spr(x, y) {
    let sum = x + y;
    if (x == 20 || y == 20) {
        return true;
    } else if (sum <= 20) {
        return true;
    }
    return false;
}
spr(x, y);