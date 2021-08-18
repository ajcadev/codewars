const isSquare = (n) => {
    if (n < 0) return false;
    const root = Number.parseInt(Math.sqrt(n))
    return n === root * root
}