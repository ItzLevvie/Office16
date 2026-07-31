& "..\src\Get-Office16.ps1" -Audience Dogfood -Channel DevMain
& "..\src\Get-Office16.ps1" -Audience Dogfood -Channel CC
& "..\src\Get-Office16.ps1" -Audience Dogfood -Channel DCEXT
& "..\src\Get-Office16.ps1" -Audience Dogfood -Channel FRDC
Write-Output ""
& "..\src\Get-Office16.ps1" -Audience Microsoft -Channel CC
& "..\src\Get-Office16.ps1" -Audience Microsoft -Channel DC
& "..\src\Get-Office16.ps1" -Audience Microsoft -Channel DevMain
& "..\src\Get-Office16.ps1" -Audience Microsoft -Channel FRDC
& "..\src\Get-Office16.ps1" -Audience Microsoft -Channel LTSC2024
& "..\src\Get-Office16.ps1" -Audience Microsoft -Channel LTSC2021
& "..\src\Get-Office16.ps1" -Audience Microsoft -Channel LTSC
Write-Output ""
& "..\src\Get-Office16.ps1" -Audience Insiders -Channel DevMain
& "..\src\Get-Office16.ps1" -Audience Insiders -Channel CC
& "..\src\Get-Office16.ps1" -Audience Insiders -Channel FRDC
& "..\src\Get-Office16.ps1" -Audience Insiders -Channel LTSC
Write-Output ""
& "..\src\Get-Office16.ps1" -Audience Production -Channel CC
& "..\src\Get-Office16.ps1" -Audience Production -Channel MEC
& "..\src\Get-Office16.ps1" -Audience Production -Channel DC
& "..\src\Get-Office16.ps1" -Audience Production -Channel LTSC2024
& "..\src\Get-Office16.ps1" -Audience Production -Channel LTSC2021
& "..\src\Get-Office16.ps1" -Audience Production -Channel LTSC
