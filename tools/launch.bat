@echo off
(
    node src\Dogfood\DevMain.js
    node src\Dogfood\CC.js
    node src\Dogfood\DCEXT.js
    node src\Dogfood\FRDC.js
    echo:
    node src\Microsoft\DevMain.js
    node src\Microsoft\CC.js
    node src\Microsoft\LTSC2021.js
    node src\Microsoft\FRDC.js
    node src\Microsoft\DC.js
    node src\Microsoft\LTSC.js
    echo:
    node src\Insiders\DevMain.js
    node src\Insiders\CC.js
    node src\Insiders\FRDC.js
    node src\Insiders\LTSC.js
    echo:
    node src\Production\CC.js
    node src\Production\LTSC2021.js
    node src\Production\MEC.js
    node src\Production\DC.js
    node src\Production\LTSC.js
) > defconfig
