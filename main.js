var scene, camera, renderer,player,inputController;
function onLoad()
{
    initWorld()
}

function initWorld()
{
    scene = new THREE.Scene();

    // Create a basic perspective camera
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
    // Create a renderer with Antialiasing
    renderer = new THREE.WebGLRenderer({antialias:true});
    
    // Configure renderer clear color
    renderer.setClearColor("#000000");
    
    // Configure renderer size
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    // Append Renderer to DOM
    document.body.appendChild( renderer.domElement );

    var light = new  THREE.HemisphereLight( 0xffffff, 0x000000,1);
        light.position.set(-10,10,15);
    scene.add(light);


    inputController = new inputController();
    
    initPlayer()
    update();
}

function initPlayer()
{
    //Create player object
    player = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 1 ), new THREE.MeshLambertMaterial( { color: 0x9797CE } ) );
    player.position.y = 0.5;
    player.position.needsUpdate = true; 
	// add the object to the scene
    scene.add( player );


    //CREATE GROUND
    var geometry = new THREE.PlaneGeometry( 50, 50, 1 );
    var material = new THREE.MeshLambertMaterial( {color: 0xffffbb, side: THREE.DoubleSide,shininess:0} );
    var plane = new THREE.Mesh( geometry, material );
        plane.rotation.x = Math.PI / 2;
    //ADD GROUND TO SCENE
    scene.add( plane );

}

function followCamera()
{
    //Offset from camera to player
    var relativeCameraOffset = new THREE.Vector3(0,5,10);

    //UPDATE PLAYER WORLD MATRIX FOR PERFECT CAMERA FOLLOW
    player.updateMatrixWorld()
    //Apply offset to player matrix
	var cameraOffset = relativeCameraOffset.applyMatrix4( player.matrixWorld );

    //Apply position offset to camera DIRECTLY -> NOT SMOOTH
	// camera.position.x = cameraOffset.x;
	// camera.position.y = cameraOffset.y;
    // camera.position.z = cameraOffset.z;

    //SMOOTH CAMERA POSITION TO TARGET POSITION
    camera.position.lerp(cameraOffset, 0.1);
    camera.lookAt( player.position );
}

function update(time) 
{
    //UPDATE PLAYER POSITION
    player.translateZ( -inputController.input.y/2 );
    player.rotateOnAxis( new THREE.Vector3(0,1,0), inputController.input.x/10);
    
    //UPDATE CAMERA POSITION
    followCamera();

    //UPDATE RENDER
    renderer.render( scene, camera);
    requestAnimationFrame( update );
}