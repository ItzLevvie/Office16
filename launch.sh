node sources/Dogfood_DevMain.js > defconfig
node sources/Dogfood_CC.js >> defconfig
node sources/Dogfood_FRDC.js >> defconfig
node sources/Dogfood_DCEXT.js >> defconfig
echo >> defconfig
node sources/Microsoft_DevMain.js >> defconfig
node sources/Microsoft_CC.js >> defconfig
node sources/Microsoft_FRDC.js >> defconfig
node sources/Microsoft_DC.js >> defconfig
node sources/Microsoft_LTSC.js >> defconfig
echo >> defconfig
node sources/Insiders_DevMain.js >> defconfig
node sources/Insiders_CC.js >> defconfig
node sources/Insiders_FRDC.js >> defconfig
node sources/Insiders_LTSC.js >> defconfig
echo >> defconfig
node sources/Production_CC.js >> defconfig
node sources/Production_DC.js >> defconfig
node sources/Production_LTSC.js >> defconfig
