const util = {
  filter: (array, predicate) => {
    if (array === null) return []
    const newArray = []
    let index = 0
    while (index < array.length) {
      const current = array[index]
      if (predicate(current)) newArray.push(current)
      index += 1
    }
    return newArray
  },

  indexOf: (array, element) => {
    if (!Array.isArray(array)) return -1
    if (array.length === 0) return -1
    let index = 0
    while (index < array.length) {
      if (element === array[index]) return index
      index += 1
    }
    return -1
  },

  reduce: (array, callback, accumulator, currentValue = array[0], currentIndex = 0) => {
    if (array.length === currentIndex) return accumulator
    accumulator = callback(accumulator, currentValue)
    currentIndex += 1
    return util.reduce(array, callback, accumulator, array[currentIndex], currentIndex)
  },

  map: (array, callback) => {
    if (array === null) return []
    const newArray = []
    let index = 0
    while (index < array.length) {
      const newValue = callback(array[index])
      newArray.push(newValue)
      index += 1
    }
    return newArray
  },

  slice: (string, startIndex, endIndex = string.length) => {
    if (typeof string !== 'string') return ''
    if (string.length === 0) return ''
    let index = startIndex
    let newString = ''
    while (index < endIndex) {
      newString += string[index]
      index += 1
    }
    return newString
  },

  reverse: (array) => {
    if (!Array.isArray(array)) return []
    if (array.length === 0) return []
    let index = array.length - 1
    const newArray = []
    while (index > -1) {
      newArray.push(array[index])
      index -= 1
    }
    return newArray
  },

  flip: (...a) => util.reverse(...a),

  concat: (array1, array2) => {
    const newArray = array1
    let index = 0
    while (index < array2.length) {
      newArray.push(array2[index])
      index += 1
    }
    return newArray
  },

  flatten: (array) => {
    const newArray = []
    let index = 0
    while (index < array.length - 1) {
      if (!Array.isArray(array[index])) {
        newArray.push(array[index])
      } else {
        let subIndex = 0
        while (subIndex < array[index].length) {
          newArray.push(array[index][subIndex])
          subIndex += 1
        }
      }
      index += 1
    }
    return newArray
  },
}

exports.util = util