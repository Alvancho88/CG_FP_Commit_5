//          ////////////////////////////
//         ////     SNAKE GAME     ////
//        ////    Created By      ////
//       ////   Jaya Jaya Team   ////
//      ////////////////////////////

//// ////
/**
 * Create a WebGLRenderer with shadows in the renderer
 */
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * This is the scene
 */
const scene = new THREE.Scene();
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * This is the camera
 */
const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10000
);
camera.position.z = 50;

// onWindowResize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    renderer.setSize(canvasWidth, canvasHeight);
    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();
}

// /* function to start the game */
// function startGame(x) {
//     // setting gameActive flag to true
//     gameActive = true;
//     document.getElementById("game-status").innerHTML = "<small>Game Started</small>";
//     //document.getElementById("game-score").innerHTML = "";
//     return setInterval(draw, 1000 / x);
// }

// function pauseGame() {
//     // setting gameActive flag to false
//     clearInterval(gameControl);
//     gameActive = false;
//     document.getElementById("game-status").innerHTML = "<small>Game Paused</small>";
// }

// function endGame(x) {
//     // setting gameActive flag to false
//     clearInterval(gameControl);
//     gameActive = false;
//     document.getElementById("game-status").innerHTML = "<small>Game Over</small>";
//     //document.getElementById("game-score").innerHTML = "<h1>Score: " + x + "</h1>";
// }