#pragma strict

function Start () {
		//var lt = GetComponent.<Light>();
		//lt.color = Color.blue;
}

function Update () {
		var lt = GetComponent.<Light>();
		//lt.color = Color.blue;
		if (Input.GetKeyDown (KeyCode.Tab)){
			print ("tab key was pressed");
			lt.enabled = !lt.enabled;
		}
		var player = gameObject.Find("FPC1");
		var dist = Vector3.Distance(player.transform.position, Vector3(0,0,0));
		lt.intensity = 7-dist;
		//print(dist);
}