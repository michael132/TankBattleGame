var camera_one   : GameObject
var camera_two   : GameObject
var camera_three : GameObject

// Use this for initialization
function Start () {
camera_one.GetComponent("Camera").active = true;
camera_two.GetComponent("Camera").active = false;
camera_three.GetComponent("Camera").active = false;
}

// Update is called once per frame
function Update () {
	if (Input.GetKey (KeyCode.F1))
	{
		camera_one.GetComponent("Camera").active = true;
		camera_two.GetComponent("Camera").active = false;
		camera_three.GetComponent("Camera").active = false;
	}
	if (Input.GetKey (KeyCode.F2))
	{
		camera_one.GetComponent("Camera").active = false;
		camera_two.GetComponent("Camera").active = true;
		camera_three.GetComponent("Camera").active = false;
	}
	if (Input.GetKey (KeyCode.F3))
	{
		camera_one.GetComponent("Camera").active = false;
		camera_two.GetComponent("Camera").active = false;
		camera_three.GetComponent("Camera").active = true;
	}
}

