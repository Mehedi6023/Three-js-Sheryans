const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
const cube = new THREE.Mesh(geometry, material);
cube.scale.x = 2
cube.scale.y = 2
scene.add(cube);

const canvas = document.querySelector("canvas");

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// function animate() {
//   window.requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
// }
// animate()