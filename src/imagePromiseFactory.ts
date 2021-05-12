// returns a Promisized version of Image() api
export default ({decode = true, crossOrigin = '', referrerPolicy}) =>
  (src): Promise<void> => {
    return new Promise((resolve, reject) => {
      const i = new Image()
      if (referrerPolicy) i.referrerPolicy = referrerPolicy
      if (crossOrigin) i.crossOrigin = crossOrigin
      i.onload = () => {
        decode && i.decode ? i.decode().then(resolve).catch(reject) : resolve()
      }
      i.onerror = reject
      i.src = src
    })
  }
