function findImageNumber(n){
  let total = 40
  let baseIncrease = 11
  if (n <= 50){ 
      console.log(Math.min(Math.floor(n/10) * 10, 40))
      return Math.min(Math.floor(n/10) * 10, 40)

  }
  while (n >= total + baseIncrease ){
      total += baseIncrease
      baseIncrease ++;
  }
  console.log(total)
  return total;
 
}


export const XPImage = ({num}) => {
    return (
      <img src={`/images/xpImages/xpImage${findImageNumber(Number(num))}.png`} className="xpImage"></img>
    )
}
