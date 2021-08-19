const solution = (number) => {
    if (number <= 3) return 0
    const multiplesOfThreeOrFive = []
    for (let i = 3; i < number; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            multiplesOfThreeOrFive.push(i)
        }
    }
    return multiplesOfThreeOrFive.reduce((total, current) => total + current, 0)
}