function OnTriggerEnter (other : Collider)
{
if (other.tag == "Player")
{
   Application.LoadLevel ("Level 1"); 
}
}