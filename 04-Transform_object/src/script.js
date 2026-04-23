import * as THREE from 'three'
import { modifyShader, ThreeMFLoader } from 'three/examples/jsm/Addons.js'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// Objects

const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
group.add(cube2)
cube2.position.x = -2

const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
group.add(cube3)
cube3.position.x = 2

// Position

// mesh.position.x = 0.7
// mesh.position.y = 0.6
// mesh.position.z = 1
// mesh.position.set(1, 1, 1) 3 changement d'un coup

// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// mesh.scale.set(1, 1, 1) 3 changement d'un coup

// Rotation

// mesh.rotation.reorder('yxz') change l'ordre de base qui est xyz
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)



// Sizes

const sizes = {
    width: 800,
    height: 600
}


// Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
scene.add(camera)
// camera.lookAt(mesh.position)



// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)