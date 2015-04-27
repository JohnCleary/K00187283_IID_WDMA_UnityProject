#pragma strict
var boing : AudioClip;
     var strength : int = 10; 
     
     function OnTriggerEnter(col : Collider){
     
         if(col.CompareTag("Player")){
             col.gameObject.GetComponent(CharacterMotor).SetVelocity(Vector3.up * strength);
            
            audio.PlayOneShot(boing);
   
         }
     }