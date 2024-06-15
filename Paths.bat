@ECHO ON
SETLOCAL ENABLEDELAYEDEXPANSION
:: Archipelago location
SET ArchipelagoPath=C:\ProgramData\Archipelago
:: File with paths
SET filename=PathsFile.ini
:: cd to same location as bat file
CD %~dp0
:: delims== split lines by = character
:: tokens=1,* put first token (name) into %%i and the rest (value) into %%j
:: eol=# skip lines starting with # (comments)
:: %%~j remove surrounding quotes from value
FOR /F "delims== tokens=1,* eol=#" %%i in (%filename%) do set %%i=%%~j
:: if not empty make symbolic link to x from y
::IF NOT "%DS3Path%" == "" (mklink "%ArchipelagoPath%\%DS3EXE%" "%DS3Path%\%DS3EXE%")
:: mklink "C:\ProgramData\Archipelago\DarkSoulsIII.exe" "E:\SteamLibrary\steamapps\common\DARK SOULS III\Game\DarkSoulsIII.exe"

::ChecksFinder
IF NOT "%ChecksFinderPath%" == "" (mklink "%ArchipelagoPath%\ChecksFinder" "%ChecksFinderPath%")
:: mklink "C:\ProgramData\Archipelago\ChecksFinder" "C:\Users\JacobMIX\Desktop\ChecksFinder"

::DarkSouls3
IF NOT "%DS3Path%" == "" (mklink "%ArchipelagoPath%\DarkSoulsIII" "%DS3Path%")
:: mklink "C:\ProgramData\Archipelago\DarkSoulsIII.exe" "E:\SteamLibrary\steamapps\common\DARK SOULS III\Game\DarkSoulsIII.exe"

::Hollow Knight

::tModLoader (Terraria)

::Timespinner
IF NOT "%TimespinnerPath%" == "" (mklink "%ArchipelagoPath%\Timespinner" "%TimespinnerPath%")
:: mklink "C:\ProgramData\Archipelago\Timespinner" "E:\SteamLibrary\steamapps\common\Timespinner"
::IF NOT "%TsRandomizerPath%" == "" (mklink "%ArchipelagoPath%\Timespinner" "%TimespinnerPath%")
:: mklink "C:\ProgramData\Archipelago\Timespinner" "E:\SteamLibrary\steamapps\common\Timespinner"

::TUNIC

::Clique?


:: Game.FileSymlinkCopyInstead  = ["DarkSoulsIII\\DarkSoulsIII.exe", "Timespinner.exe", "TsRandomizer.exe"];

ENDLOCAL
