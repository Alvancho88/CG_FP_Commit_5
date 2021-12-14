//          ////////////////////////////
//         ////     SNAKE GAME     ////
//        ////    Created By      ////
//       ////   Jaya Jaya Team   ////
//      ////////////////////////////

//// ////
let raycaster;
let mouse;

let world = {
    width: 60,
    height: 60
}

/**
 * backgroundPlane
 */
let backgroundPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(world.width, world.height, 1, 1),
    new THREE.MeshPhongMaterial({
        color: 0xFFFFFF
    })
);
backgroundPlane.position.z = -1;
backgroundPlane.receiveShadow = true;
scene.add(backgroundPlane);
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * ambientLight
 */
let ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight); //
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * directionalLight 
 */
var directionalLight = new THREE.PointLight(0xffffff, 1, 500, 0.01);
directionalLight.castShadow = true; // default false

//Set up shadow properties for the light
// directionalLight.shadow.mapSize.width = 5120; // default 512
// directionalLight.shadow.mapSize.height = 5120; // default 512
// directionalLight.shadow.camera.near = 0; // default
// directionalLight.shadow.camera.far = 1000
// default
scene.add(directionalLight);

// // create an AudioListener and add it to the camera
// const listener = new THREE.AudioListener();
// camera.add( listener );

// // create a global audio source
// const sound = new THREE.Audio( listener );

// // load a sound and set it as the Audio object's buffer
// const audioLoader = new THREE.AudioLoader();
// audioLoader.load( 'sounds/snakebgm.ogg', function( buffer ) {
// 	sound.setBuffer( buffer );
// 	sound.setLoop( true );
// 	sound.setVolume( 0.5 );
// 	sound.play();
// });

	//var stream = "https://cdn.rawgit.com/ellenprobst/web-audio-api-with-Threejs/57582104/lib/TheWarOnDrugs.m4a";
	//var stream = "https://cdn.jsdelivr.net/gh/ellenprobst/web-audio-api-with-Threejs@57582104/lib/TheWarOnDrugs.m4a";
	var stream = "https://gitcdn.link/cdn/Alvancho88/CG_FP_Commit_5/master/js/sounds/snakebgm.mp3";
    //var stream = "https://cdngit.com/Alvancho88/CG_FP_Commit_5/raw/master/js/sounds/snakebgm.ogg";

    // AUDIO
    var audioLoader = new THREE.AudioLoader();
    var listener = new THREE.AudioListener();
    var audio = new THREE.Audio(listener);
    audioLoader.load(stream, function(buffer) {
        audio.setBuffer(buffer);
        audio.setLoop(true);
        audio.play();
    });

/**
 * player
 */
let player = new Player();
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * Game controller for all user input
 */
let controller = new Controller();
controller.setup();
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * Time Keeper
 */
let clock = new THREE.Clock(true);
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * Food
 */
 let food = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshLambertMaterial({
        color: 0xff0000
    })
);
scene.add(food);
food.castShadow = true;

let foodLight = new THREE.PointLight(0xff0000, 1, 20);
scene.add(foodLight);

////    ////    ////
///    ////    ////
//    ////    ////
function setup() {
    spawnfood();
}

function spawnfood() {
    food.position.x = Math.round(Math.random() * world.width - world.width / 2);
    food.position.y = Math.round(Math.random() * world.height - world.height / 2);

    foodLight.position.set(food.position.x, food.position.y, 3);

}


let deltaTime;
let then = 0;
let frameCount = 0;
/**
 * @description Master Function for running the game   
 * requestAnimationFrame(gameLoop);  
 * update();  
 * render();  
 */
function gameLoop(now) {

    now *= 0.001; // make it seconds

    deltaTime = now - then;
    then = now;

    requestAnimationFrame(gameLoop);
    frameCount++;

    if (frameCount > 10) {
        update();
        render();
    }

}
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * update
 */
function update() {

    controller.update();

    if (controller.uparrow) {
        if (player.direction == "down") {
            player.direction = "down";
        } else {
            player.direction = "up";
        }
    }
    if (controller.downarrow) {
        if (player.direction == "up") {
            player.direction = "up";
        } else {
            player.direction = "down";
        }
    }
    if (controller.leftarrow) {
        if (player.direction == "right") {
            player.direction = "right";
        } else {
            player.direction = "left";
        }
    }
    if (controller.rightarrow) {
        if (player.direction == "left") {
            player.direction = "left";
        } else {
            player.direction = "right";
        }
    }

    if (clock.getElapsedTime() > 0.09) {
        if (controller.keyCodes[32]) {
        }
        player.update();
        clock.start();
    }

}
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * render
 */
function render() {
    renderer.render(scene, camera);
}
////    ////    ////
///    ////    ////
//    ////    ////

setup();
gameLoop();

////////////////////////////////////