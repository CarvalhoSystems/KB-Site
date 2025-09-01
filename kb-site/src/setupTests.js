// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import DarkVeil from "./components/DarkVeil";

const renderer = new Renderer({
  dpr: Math.min(window.devicePixelRatio, 2),
  canvas,
});

const gl = renderer.gl;
const geometry = new Triangle(gl);

const program = new Program(gl, {
  vertex,
  fragment,
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new Vec2() },
    uHueShift: { value: hueShift },
    uNoise: { value: noiseIntensity },
    uScan: { value: scanlineIntensity },
    uScanFreq: { value: scanlineFrequency },
    uWarp: { value: warpAmount },
  },
});

const mesh = new Mesh(gl, { geometry, program });

const resize = () => {
  const w = parent.clientWidth,
    h = parent.clientHeight;
  renderer.setSize(w * resolutionScale, h * resolutionScale);
  program.uniforms.uResolution.value.set(w, h);
};

window.addEventListener("resize", resize);
resize();

const start = performance.now();
let frame = 0;

const loop = () => {
  program.uniforms.uTime.value =
    ((performance.now() - start) / 1000) * speed;
  program.uniforms.uHueShift.value = hueShift;
  program.uniforms.uNoise.value = noiseIntensity;
  program.uniforms.uScan.value = scanlineIntensity;
  program.uniforms.uScanFreq.value = scanlineFrequency;
  program.uniforms.uWarp.value = warpAmount;
  renderer.render({ scene: mesh });
  frame = requestAnimationFrame(loop);
};

loop();

return () => {
  cancelAnimationFrame(frame);
  window.removeEventListener("resize", resize);
};

function App() {
  return (
    <div>
      <DarkVeil />
      {/* ...outros componentes... */}
    </div>
  );
}

export default App;
