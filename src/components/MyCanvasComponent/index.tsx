import { color } from '@mui/system';
import { useRef, useEffect } from 'react';

function MyCanvasComponent() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const element = document.getElementById('myElementId');
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(10, 10, 100, 100);
    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    let txt = 'abz190#$%^@£éú';
    ctx.textBaseline = "top";
    ctx.font = '17px "Arial 17"';
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "rgb(255,5,5)";
    ctx.rotate(.03);
    ctx.fillText(txt, 4, 17);
    ctx.fillStyle = "rgb(155,255,5)";
    ctx.shadowBlur = 8;
    ctx.shadowColor = "red";
    ctx.fillRect(20, 12, 100, 5);
    let src = canvas.toDataURL();
    let hash = 0;
    for (let i = 0; i < src.length; i++) {
        let char = src.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    if (element) {
      element.innerHTML = hash;
    }

  }, []); // Ensure this effect runs only once after initial render

  return (
    <>
      <p id='myElementId' style={{color:'white'}}></p>
      <canvas ref={canvasRef} width={400} height={400} />
    </>
  );
}



export default MyCanvasComponent;
