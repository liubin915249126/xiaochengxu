function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/**
 * deepclone
 */
export function deepClone (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  for (const keys in source) {
    if (Object.prototype.hasOwnProperty.call(source, keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}
export function clone (item) {
  if (!item) { return item } // null, undefined values check
  const types = [Number, String, Boolean]
  let result

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach((type) => {
    if (item instanceof type) {
      result = type(item)
    }
  })

  if (typeof result === 'undefined') {
    if (Object.prototype.toString.call(item) === '[object Array]') {
      result = []
      item.forEach((child, index) => {
        result[index] = clone(child)
      })
    } else if (typeof item === 'object') {
      // testing that this is DOM
      if (item.nodeType && typeof item.cloneNode === 'function') {
        result = item.cloneNode(true)
      } else if (!item.prototype) { // check that this is a literal
        if (item instanceof Date) {
          result = new Date(item)
        } else {
          // it is an object literal
          result = {}
          for (const i in item) {
            if (item[i]) {
              result[i] = clone(item[i])
            }
          }
        }
      // } else if (false && item.constructor) {
      } else {
        // depending what you would like here,
        // just keep the reference, or create new object
        // would not advice to do that, reason? Read below
        // result = new item.constructor()
        result = item
      }
    } else {
      result = item
    }
  }

  return result
}
export function isObjectValueEqual (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a === b
  }
  if (a && b) {
    const aProps = Object.getOwnPropertyNames(a)
    const bProps = Object.getOwnPropertyNames(b)
    if (aProps.length !== bProps.length) {
      return false
    }
    for (let i = 0; i < aProps.length; i += 1) {
      const propName = aProps[i]
      if (Object.prototype.toString(a[propName]) === '[Object Object]' || Object.prototype.toString(b[propName]) === '[Object Object]') {
        isObjectValueEqual(a[propName], b[propName])
      }
      if (a[propName] !== b[propName]) {
        return false
      }
    }
  } else {
    return false
  }
  return true
}
