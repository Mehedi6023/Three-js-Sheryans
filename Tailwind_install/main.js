import * as THREE from 'three'
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
camera.position.z = 5

const cubeGeo = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})
const cube = new THREE.Mesh(cubeGeo, cubeMaterial)


// const sphereGeo = new THREE.SphereGeometry(1, 60, 60)
// const sphereMaterial = new THREE.MeshBasicMaterial({color: "red"})
// const sphere = new THREE.Mesh(sphereGeo, sphereMaterial)
// sphere.position.x = 1

// Creating group
// const group = new THREE.Group()
// group.add(cube)
// group.add(sphere)
// group.position.x = 0
// scene.add(group)


scene.add(cube)

const canvas = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight)


function animate () {
    window.requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    renderer.render(scene, camera)
}
animate()