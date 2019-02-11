var example = (function () {

	"use strict";

	var scene = new THREE.Scene();
	var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
	var light = new THREE.AmbientLight(0xffffff);
	var camera;
	var box;
	function initScene() {
		renderer.setSize(window.innerWidth, window.innerHeight-200),
			document.getElementById("webGL-Container").appendChild(renderer.domElement);

		scene.add(light);

		camera = new THREE.PerspectiveCamera(
			10,
			window.innerWidth / window.innerHeight,
			1,
			1000
		);
		camera.position.set(50, 50, 50);
		camera.lookAt(1, 0.275, 0);
		scene.add(camera);

		//box = new THREE.Mesh(
		//	new THREE.BoxGeometry(20, 20, 20),
		//	new THREE.MeshBasicMaterial({ color: 0xFF0000 })
		//);
		//box.name = "box";

		var geometry = new THREE.BufferGeometry();
		// create a simple square shape. We duplicate the top left and bottom right
		// vertices because each vertex needs to appear once per triangle.
		var vertices = new Float32Array([			

			-1.0, -1.0, 1.0,
			1.0, -1.0, 1.0,
			1.0, 1.0, 1.0,

			1.0, 1.0, 1.0,
			-1.0, 1.0, 1.0,
			-1.0, -1.0, 1.0

		]);
	
		geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
		var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		box = new THREE.Mesh(geometry, material);

		scene.add(box);

		render();
	};

	function render() {
		box.rotation.z += 0.01;
		box.position.x = 4.4;
		box.position.y = -0.417;
		box.position.z = 3.1;
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}

	window.onload = initScene;

	return {
		scene: scene
	}

})();