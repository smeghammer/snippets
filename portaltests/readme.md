# Interactive portal example

See https://www.youtube.com/watch?v=jBXxVc1X8bE
and https://www.dfdoom.com/gzdoom-portal-tutorial/

The example I built here is following Darkstar and Dragonfly's tutorials above. I used Eureka rather than DB and Hexen format, not UDMF. 

A couple of gotcha's I came across:

 - for the sector portal, in Eureka, I needed to use control linedefs that were the inner sector edges of the inner sector, rather than floating lines *within* that sector (I think Eureka fucks about with/doesn't like the unconnected lines, because I kept getting mismatched sector error, and the floating lines were impassble depite being flagged as not. Oddly I also saw texture, though both front- and back sidedef wee un-textured)
 - Already documented [here](https://zdoom.org/wiki/Line_SetPortal), need to manually assign source line IDs.

