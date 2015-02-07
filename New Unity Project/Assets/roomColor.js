#pragma strict

function Start () {
	for (var child : Transform in transform) {
		child.renderer.material.color = Color(1,0,0);
	}
}

function Update () {
}