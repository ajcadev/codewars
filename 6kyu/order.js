const order = (words) => {
    if (words === "") return ""
    const re = /\d/
    const result = []
    words.split(" ").forEach(word => {
        console.log(word)
        const index = Number.parseInt(word.match(re)[0], 10)
        result[index - 1] = word
    });
    return result.join(" ")
}