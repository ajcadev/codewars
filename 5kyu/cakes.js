const cakes = (recipe, available) => {
    const quantity = []
    for (let key in recipe) {
        if (available[key] !== undefined) {
            quantity.push(Math.floor(available[key] / recipe[key]))
        } else {
            return 0
        }
    }
    return (Math.min(...quantity))
}