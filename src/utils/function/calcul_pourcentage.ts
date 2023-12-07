const CalculPourcentageToNumber = (valeur: number, pourcentage: string) => {
  const pourcentageToNumber = parseInt(pourcentage.toString().replace('%', ''))
  return (valeur / 100) * pourcentageToNumber
}

export default CalculPourcentageToNumber

console.log(CalculPourcentageToNumber(1000, '47.12%'))
