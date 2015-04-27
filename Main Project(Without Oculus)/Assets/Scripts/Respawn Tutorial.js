var splash : AudioClip;

function Update() {
 if(gameObject.transform.position.y <= -1) {
 gameObject.transform.position.x = -23.56;
 gameObject.transform.position.y = 21.21;
 gameObject.transform.position.z = 0;	
 audio.PlayOneShot(splash);
 }
}