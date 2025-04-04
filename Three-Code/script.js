// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;
// const canvas = document.querySelector("canvas")
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize(window.innerWidth, window.innerHeight);

// function animate() {
//   renderer.render(scene, camera);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
// }
// renderer.setAnimationLoop(animate);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10
);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

const canvas = document.querySelector("canvas");

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);




function animate() {
    window.requestAnimationFrame(animate)
    cube.rotation.z += 0.01
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera);
}
animate()