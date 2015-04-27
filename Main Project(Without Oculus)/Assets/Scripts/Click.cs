using UnityEngine;
using System.Collections;

public class Click : MonoBehaviour {

	public void Start(string change)
	{
				Application.LoadLevel(change);
		}
}