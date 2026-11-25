# Extracted Shaders

Verification scan of `lumascreative.com` HTML, CSS (`index-DYSJbPYe.css`), and JavaScript (`index-DX3tdZ4I.js`, `motion-BkiIO92n.js`) confirmed:

- **WebGL / GLSL / WGSL Shaders**: **None** (`0` `<canvas>` WebGL contexts, no `three`, `ogl`, `pixi.js`, `regl`, or `twgl` imports).
- All visual depth, sheen, and atmospheric lighting effects on `lumascreative.com` are achieved via CSS radial gradients, `backdrop-filter: blur(...)`, `background-clip: text`, `@keyframes card-breathe`, and Motion spring/scroll transforms (see `../styles/components.css`).
