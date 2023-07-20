
//===========================================================================
//
// Colleen
//
//===========================================================================
class Colleen : Cyberdemon
{
	Default
	{
		SeeSound "DSCOLSIT";
		PainSound "DSCOLPAIN";
		DeathSound "DSCOLDIE";
		ActiveSound "DSCOLACT";
		Obituary "%o rode the toxic gossip train.";
		Tag "Colleen";
	}
	States
	{
	Spawn:
		COLL A 10 A_Look;
		Loop;
	See:
		COLL A 3 A_Hoof;
		COLL A 3 A_Chase;
		COLL A 3 A_Metal;
		COLL A 3 A_Chase;
		Loop;
	Missile:
		COLL A 6 A_FaceTarget;
		COLL A 12 A_CyberAttack;
		COLL A 12 A_FaceTarget;
		COLL A 12 A_CyberAttack;
		COLL A 12 A_FaceTarget;
		COLL A 12 A_CyberAttack;
		Goto See;
	Pain:
		COLL A 10 A_Pain;
		Goto See;
	Death:
		COLL A 10;
		COLL A 10 A_Scream;
		COLL A 10;
		COLL A 10 A_NoBlocking;
		COLL A 10;
		COLL B 30;
		COLL B -1 A_BossDeath;
		Stop;
	}
}


//===========================================================================
//
// Code (must be attached to Actor)
//
//===========================================================================

extend class Actor
{
	void A_CyberAttack()
	{
		if (target)
		{
			A_FaceTarget();
			SpawnMissile (target, "Rocket");
		}
	}
	
	void A_Hoof()
	{
		A_StartSound("cyber/hoof", CHAN_BODY, CHANF_DEFAULT, 1, ATTN_IDLE);
		A_Chase();
	}
	
}
