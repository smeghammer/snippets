### Remote kill test

A test WAD showing a method of killing things via a global array of TIDs

The idea is I have a large mini-wad with (so far) 5 maps - one secret and four regular.

The secret map is supposed to be the same location as part of another, regular map (18) but with minimal accessible overlap.

There are three visible imps in this area on MAP18 and these are also visible in the correspondin area of MAP31. The secret map is reached form MAP15. So...

If you do the secret, you will 'kill' zero or more of the three imps that appear ot be the same map. Therefore, this code tracks the kills of these imps (by TID) and populates a global array with these TIDs on death.

Thus, when you reach the corresponding area in MAP18, from 'the other side' as it were, the imps there should also be dead. 

It's all smoke and mirrors but seems to work OK.

This demo WAD does not simulate the common areas, just the remote kill logic.