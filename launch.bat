@echo off
(
    node sources\Dogfood_DevMain.js
    node sources\Dogfood_CC.js
    node sources\Dogfood_FRDC.js
    node sources\Dogfood_DCEXT.js
    echo:
    node sources\Microsoft_DevMain.js
    node sources\Microsoft_CC.js
    node sources\Microsoft_FRDC.js
    node sources\Microsoft_DC.js
    node sources\Microsoft_LTSC.js
    echo:
    node sources\Insiders_DevMain.js
    node sources\Insiders_CC.js
    node sources\Insiders_FRDC.js
    node sources\Insiders_LTSC.js
    echo:
    node sources\Production_CC.js
    node sources\Production_DC.js
    node sources\Production_LTSC.js
) > defconfig
