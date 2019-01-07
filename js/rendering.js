const THREE = require('three');
const OrbitControls = require('three-orbitcontrols');

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("webglviewer").appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    100000000
);
camera.position.set(0, 0, 0);
camera.lookAt(10, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.rotateSpeed = -0.1;
controls.enableDamping = true;

controls.target.set(camera.position.x + 0.1, camera.position.y, camera.position.z);

let mesh = null;

function createMeshWithMaterial(texturePath) {
    const loader = new THREE.TextureLoader();
    loader.load(
        texturePath,
        function(texture) {
            if (mesh !== null) {
                scene.remove(mesh);
            }
            const material = new THREE.MeshBasicMaterial({
                map: texture
            });

            const geo = new THREE.SphereBufferGeometry(3, 32, 32);
            geo.scale(-1, 1, 1);
            mesh = new THREE.Mesh(geo, material);
            mesh.position = camera.position;
            scene.add(mesh);
            renderer.render(scene, camera);
        },
    );
}