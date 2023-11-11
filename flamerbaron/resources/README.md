# Editor Resources

## Eureka edit-mode
When adding custom monsters, Eureka does not know how to display custom thing icons. Therefore, you need to explicitly define these. Two files are needed as extra resource for the project:

### custom.ugh file
This file adds definitions for each custom thing. Here, 'custom_monsters.ugh'

Add this as a resource via "file/manage project" menu option

This will enable the thing entries in the thing list and in the details panel for a selected thing. 

### graphics .wad
Load also the file 'cust_thing_icons.wad'. If you examine the .ugh file above, you will see that the graphics referred to are in this resource WAD.

