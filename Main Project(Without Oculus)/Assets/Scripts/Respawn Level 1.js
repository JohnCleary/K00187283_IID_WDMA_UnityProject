﻿var splash : AudioClip;

function Update() {
 if(gameObject.transform.position.y <= -1) {
 gameObject.transform.position.x = 0;
 gameObject.transform.position.y = 2.27;
 gameObject.transform.position.z = -3.25;
 gameObject.transform.rotation.x = 0;
 gameObject.transform.rotation.y = 0;
 gameObject.transform.rotation.z = 0;
 audio.PlayOneShot(splash);
 }
}