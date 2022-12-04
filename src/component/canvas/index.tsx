import { useRef, useEffect } from "react";
import { myImage } from "./myimage";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const draws = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    context.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    context.clearRect(0, 0, canvas.width, canvas.height);

    const particlesArray: any = [];
    const numberOfParticles = 5000;

    let mappedImage: any = [];
    for (let y = 0; y < canvas.height; y++) {
      let row = [];
      for (let x = 0; x < canvas.width; x++) {
        const red = pixels.data[y * 4 * pixels.width + x * 4];
        const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
        const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
        const brightness = calculateRelativeBrightness(red, green, blue);
        const cell = [brightness, `rgb(${red},${green},${blue})`];
        row.push(cell);
      }
      mappedImage.push(row);
    }

    function calculateRelativeBrightness(red: number, green: number, blue: number) {
      return Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) / 100;
    }

    class Particle {
      x: number;
      y: number;
      speed: number;
      velocity: number;
      size: number;
      position1: number;
      position2: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 100;
        this.velocity = Math.random() * 0.5;
        this.size = Math.random() * 1.5 + 1;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
      }

      update() {
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.speed = mappedImage[this.position1][this.position2][0];
        let movement = 2.5 - this.speed + this.velocity;

        this.y += movement;
        // this.x += movement;
        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        // if (this.x >= canvas.width) {
        //   this.x = 0;
        //   this.y = Math.random() * canvas.height;
        // }
      }

      draw() {
        context.beginPath();
        context.fillStyle = mappedImage[this.position1][this.position2][1];
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }

      clear() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    init();
    function animate() {
      // context.drawImage(myImage, 0, 0, canvas.width, canvas.height);
      // context.clearRect(0, 0, canvas.width, canvas.height);
      context.globalAlpha = 0.05;
      context.fillStyle = localStorage.theme === "dark" ? "rgb(12, 12, 12, 1)" : "rgb(255, 255, 255, 1)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.globalAlpha = 0.2;
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        context.globalAlpha = particlesArray[i].speed * 0.5;
        particlesArray[i].draw();
      }
      // console.log(particlesArray);

      requestAnimationFrame(animate);
    }
    animate();
  };

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");
      let context = canvasCtxRef.current;
      let canvas = canvasRef.current;
      canvas.width = 900;
      canvas.height = 900;
      console.log(context);
      // if (!context || !(context instanceof CanvasRenderingContext2D)) {
      //   throw new Error("failed to get 2d context");
      // }
      // const ctx: CanvasRenderingContext2D = context;
      draws(context!, canvas);
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <canvas style={{ width: "600px", height: "760px" }} ref={canvasRef}></canvas>
    </div>
  );
};

export default Canvas;
