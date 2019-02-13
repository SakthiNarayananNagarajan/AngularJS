var example = (function () {

	"use strict";

	var scene = new THREE.Scene();
	var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
	var light = new THREE.AmbientLight(0xffffff);
	var camera;
	var plane;
	var cube;
	function initScene() {
		renderer.setClearColorHex=0xEEEEEE;
		renderer.setSize(window.innerWidth, window.innerHeight),
		document.getElementById("webGL-Container").appendChild(renderer.domElement);

		scene.add(light);

		camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.set(50, 50, 50);
		camera.lookAt(1, 0.275, 0);
		scene.add(camera);

		var axes = new THREE.AxisHelper(20);
		scene.add(axes);

		scene.add(plane());
		scene.add(cube());
		scene.add(sphere());

		renderer.render(scene, camera);
		requestAnimationFrame(render);
		//render();
	};

	function plane() {
		var planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
		var planeMaterials = new THREE.MeshBasicMaterial({color: 0xcccccc});
		var plane=new THREE.Mesh(planeGeometry,planeMaterials);

		plane.rotation.x= -0.5*Math.PI;
		plane.position.x=15;
		plane.position.y=0;
		plane.position.z=0;

		// create a simple square shape. We duplicate the top left and bottom right
		// vertices because each vertex needs to appear once per triangle.
			
		return plane;
	}

	function cube() {
		var cubeGeometry = new THREE.BoxGeometry(4,4,4);
		var cubeMaterials=new THREE.MeshBasicMaterial({color: 0xff0000,wireframe:true});
		var cube = new THREE.Mesh(cubeGeometry,cubeMaterials);
		
		cube.rotation.z += 0.01;
		
		cube.position.x=-4;
		cube.position.y=3;
		cube.position.z=0;

		return cube;
	}

	function sphere() {
		var sphereGeometry = new THREE.SphereGeometry(4,20,20);
		var sphereMaterials = new THREE.MeshBasicMaterial({color: 0x77ffff,wireframe: true});
		var sphere= new THREE.Mesh(sphereGeometry,sphereMaterials);
		sphere.position.x=20;
		sphere.position.y=4;
		sphere.position.z=2;

		return sphere;
	}
	
	function render() {
				
		renderer.render(scene, camera);
	}

	window.onload = initScene;

	return {
		scene: scene
	}

})();