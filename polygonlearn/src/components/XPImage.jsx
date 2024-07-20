function findImageNumber(n) { 
    let offset = Math.max(Math.floor(n / 10) - 4, 0);
    let base = Math.floor(n / 10) * 10;
    console.log(`Base: ${base}  Offset: ${offset}`);
    return base + offset;
}


// export const XPImage = ({num}) => {
//     return (
//       <img src={`/images/xpImages/xpImage${findImageNumber(Number(num))}.png`} className="xpImage"></img>
//     )
// }
export const XPImage = ({num}) => {
    return (
      <img src={`/images/xpImages/xpImage${num}.png`} className="xpImage"></img>
    )
}