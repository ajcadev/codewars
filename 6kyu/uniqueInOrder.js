const uniqueInOrder = (iterable) => {
    let elementCompare = ""
    return [...iterable].filter(element => {
        if (element !== elementCompare) {
            elementCompare = element
            return true
        }
        return false
    })
}