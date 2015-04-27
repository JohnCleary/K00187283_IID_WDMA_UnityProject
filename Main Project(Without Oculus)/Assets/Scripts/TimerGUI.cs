using UnityEngine;
using System.Collections;

public class TimerGUI : MonoBehaviour {

	public float startTime;
	private string currentTime;
	public Rect timerRect;

	public GUISkin skin;

	void Start () {
	
	}
	

	void Update () {
	
		startTime += Time.deltaTime;

		currentTime = string.Format ("{0:0.0}", startTime);

	}

	void OnGUI()
	{
		GUI.skin = skin;
		GUI.Label (timerRect, currentTime);
	}
}
