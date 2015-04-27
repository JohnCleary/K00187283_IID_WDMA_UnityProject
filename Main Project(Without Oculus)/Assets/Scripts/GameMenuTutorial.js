 var paused = false;
 
 var pauseMenu : Rect = Rect(10, 10, 200, 200);
  
 function Update () {
 
  if( Input.GetKeyDown(KeyCode.Escape)){
  
       paused = !paused;
       
       if(paused)
       
          Time.timeScale = 0;
          
       else
       
          Time.timeScale = 1;
          
    }
 }
 
  function OnGUI(){
  
    if(paused)
    
        GUI.Window(0, pauseMenu, menuButton, "Pause Menu");
        
 }
 
 function menuButton () {
 
 if(GUILayout.Button("Resume")){
 
 Time.timeScale = 1;
 
 paused = false; 
 
 }
 
 if(GUILayout.Button("Restart")){
 
 Time.timeScale = 1;
 
 Application.LoadLevel("Tutorial");
 
 }
 
 if(GUILayout.Button("Back to Main Menu")){
 
 Time.timeScale = 1;
  
 Application.LoadLevel("MainMenu");
 
 }
 
 if(GUILayout.Button("Quit")){
 
 Time.timeScale = 1;
 
 Application.Quit();
 
 }
 
 }