export const abbreviateNumber = (inputNumber) => {
  if (inputNumber < 1e3) return inputNumber
  if (inputNumber >= 1e3 && inputNumber < 1e6) return (Math.floor(inputNumber / 100)) / 10 + ' K'
  if (inputNumber >= 1e6 && inputNumber < 1e9) return (Math.floor(inputNumber / 1e5)) / 10 + ' M'
  if (inputNumber >= 1e9 && inputNumber < 1e12) return (Math.floor(inputNumber / 1e8)) / 10 + ' B'
  if (inputNumber >= 1e12) return (Math.floor(inputNumber / 1e11)) / 10 + ' T'
}