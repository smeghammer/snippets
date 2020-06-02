SLADE AND EUREKA BSP BUG
------------------------

As per this thread: https://www.doomworld.com/forum/topic/114715-eureka-keeps-corrupting-my-maps/#comment-2138069


Definitely a reproducible bug. 
Seems to be an incompatibility between slade when a nodebuilder is not used and loading that un-bsp'ed WAD in Eureka.

 - base.wad: Unmodified reference from which all others copied

#disabled BSP in Slade
----------------------
 - slade_vtxchange.wad: 
altered a vertex, saved, played from within Slade OK, ALSO played OK normally.

 - slade_vtxchange_eureka.wad: 
altered a vertex, saved, OPENED IN Eureka, got attached bug. BUT still played from within Slade OK, ALSO played OK normally!!. Also, (for this simple map, even with the attached corruption report, it PLAYED OK ON ctrl+t in Eureka., though the bug WAD yesterday did fuck up bigtime.)

#re-enabled BSP in Slade
------------------------
 - slade_bsp_ok.wad:
Same process, but now no sign of the corruption reported in Eureka.
