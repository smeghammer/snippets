OTEX by Ola Björling
version 1.1
Released 2020-07-03

contact: ukiro@ukiro.com
web: doom.ukiro.com
OTEX discord: https://discord.gg/6keMwZR

Don't browse the patches, instead open TEXTURE2 if you want to look at textures.

Thanks to Bauul for the PK3 conversion (this version) and to
Simpletonium for the Doom Builder config for categorization.



===CHANGELOG===
As of this version I’ve decided to include the Doom 2 texture definitions so
that you can more easily combine vanilla textures with OTEX in engines other
than GZDoom. 

New textures:
* OBRCKX*
* OCONCW*
* OFENCN*
* OFLSHG02
* OHELLC02
* OICE_E1*
* OLGHTQ*
* OSPRTN*
* OSTCCC*
* OTECHG02

New pattern variants for stuff from v1.0:
* OBNKRE44 & 49
* OBRCKW22
* OCONCA15
* OCONCE50, 58, 59
* OCONCI01
* OCONCV46
* ODOORB04
* OFENCM02, 11, 12
* OMETLH24, 34, 37, 43, 95, 96, 97
* OMRBLB15, 18, 19, 39, 44, 46, 50, 59, 90
* OMRBLE40
* OROCKL02
* OSWTCHM is an OMRBLB switch set.

Updated or tweaked textures:
* OBNKRL40 had two stray orange pixels that were removed.
* OCNDRC set had a slight vertical tiling issue that was fixed.
* OFENCE01 was adjusted to make its brightness the same as on OWOODD01.
* OFENCM01 got tweaked to remove the unconnected “pegs”.
* OIRONN18 and 19 has a horizontal tiling issue that was fixed. 
* OMETLH got updated with slightly more prominent rivets (all variants).
* OMRBLA43 now has the same fat beveling as the other variants in the material.
* OMRBLB got updated patterns for its carved variants.
* OMRBLE got a new material, all old variants are updated.
* OSTAR are all redone with slightly adjusted heights per segment to better
  align with 8 px increments. If you’ve manually aligned the old version; Sorry!
* OSTONB is updated with nicer shading.

New FLATs:
* O3DMDA07
* OBSKTB*
* OGRVLD01
* OHEXAB*
* OHEXAF05
* OHEXAM*
* OHEXAN*
* OLAVAF* (animated)
* OMRBLB00
* OQSLPB*
* OQSLPC*
* OQSLPD*
* OSANDC*
* OSLNTB*
* OSLNTC*
* OSPRTN*
* OTL16C*
* OTL32B*
* OTLMXA*
* OTRHXE*
* OVINED00

Updated or tweaked FLATs:
* O3DMDA*
* O5DMDB02
* OCHRMA00
* OCHRMB00
* OCHRMC00
* OCONCG33
* OTMPLB02
* OHEXAF*
* OHEXAL*
* OPENTA*



===REDISTRIBUTION===

You are free to redistribute these textures with your levels. This means you
can bundle them with your level and make custom texture sets that combine OTEX
with other resources. I ask that you do not change the names of patches or
textures in this process, and mention me in the credits.

I also ask that you make sure your project contains the latest versions of
everything, so re-import the latest OTEX to your project.



===MAKING MODIFICATIONS TO TEXTURES===

For best results, consider these key tips:

* A lot of OTEX is chopped into patches, meaning you can combine stuff in the
  TEXTURE definitions without adding any more lumps. 
* Pick a naming convention different from that in OTEX, so that original
  textures are separate from the modified ones. Perhaps names start with O_xxx
  where xxx is a unique identifier for you or your project. Doing this makes it
  easier for me to keep track of new uses that I can choose to incorporate to
  OTEX proper.
* Recoloring and other alterations to textures that are already in 8 bit color
  is likely to give you worse results than if I were to do it with the source
  Photoshop files. So if you are making changes you think can benefit others,
  please reach out and I can help you make it look as good as possible.