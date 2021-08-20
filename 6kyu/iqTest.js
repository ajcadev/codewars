const iqTest = (numbers) => {
    const odd = []
    const even = []
    numbers.split(" ").forEach((number, index) => {
        if (number % 2) {
            odd.push(index + 1)
        } else {
            even.push(index + 1)
        }
    })
    if (odd.length === 1) return odd[0]
    return even[0]
}