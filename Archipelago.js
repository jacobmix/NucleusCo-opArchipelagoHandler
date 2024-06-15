Game.GUID = "Archipelago"; // Folder Nucleus will create
Game.GameName = "Archipelago"; // Name shown in Nucleus
//Game.SteamID = "368620"; //Timespinner Steam ID
Game.Description = "For Archipelago."
Game.MaxPlayers = 16;
Game.MaxPlayersOneMonitor = 16;
Game.ExecutableName = "ArchipelagoLauncher.exe"; // Main executable (Will be ChecksFinder but will do code magic to include others when needed)
Game.ExecutableToLaunch = "ArchipelagoLauncher.exe";
Game.BinariesFolder = ""; // In which folder the game exe is located? Relative path to where Nucleus should start the game's working folder to.
Game.DirSymlinkExclusions = [""]; // Array with the name of the folders you don't want Nucleus Co-op to symlink, only the folders placed here get hardcopied not the files.
Game.FileSymlinkCopyInstead  = ["DarkSoulsIII.exe", "Timespinner.exe", "TsRandomizer.exe"]; // Array with the name of the files you want Nucleus Co-op to make full copies of, in some cases games need certain files to be full copies or they won't run.
Game.UseNucleusEnvironment = true; // Use custom environment variables for games that use them, replaces some common paths (e.g. AppData) with C:\Users\<your username>\NucleusCoop.
Game.DocumentsConfigPathNoCopy = true; // When using DocumentsConfigPath, do not let Nucleus copy from original location to Nucleus Documents.
Game.DocumentsSavePathNoCopy = true;
//Game.UserProfileConfigPathNoCopy = true;
//Game.UserProfileSavePathNoCopy = true;
//Game.DocumentsConfigPath = "SavedGames\\Timespinner";
//Game.DocumentsConfigPath = "SavedGames\\Timespinner\\Timespinner\\AllPlayers\\Config.sav";
//Game.DocumentsSavePath = "SavedGames\\Timespinner\\Timespinner\\AllPlayers\\TSSave.sav";
//Game.UseGoldberg = true;
Game.NeedsSteamEmulation = true;

var AnswersTimespinnerCons = ["Yes", "No"];
Game.AddOption(
	"Don't ask to assign extra controllers for Timespinners", // Timespinner currently the only game that supports more than 1 player per instance.
	"Skip the 'Enter Number of Gamepads for This Player' for all Timespinner/TsRandomizer instances",
	"SelectTimespinnerCons",
	AnswersTimespinnerCons
);

var AnswersSplitScreen = ["No", "Yes"]; //Change this later. Hold over for copying proto controller input.
Game.AddOption(
	"Use native multiplayer",
	"No or Yes",
	"NativeSplitScreen",
	AnswersSplitScreen
);

var AnswersRefresh = ["No", "Yes"];
Game.AddOption(
	"Refresh save & configs",
	"WARNING! WILL DELETE NUCLEUS GAME SAVES/CONFIGS",
	"SelectRefresh",
	AnswersRefresh
);

var AnswersPlayerGame = ["None", "DarkSouls3!", "Timespinner!", "TsRandomizer!"]; // Adding selectable games for each player. Further down check if not selected/none to ignore.
Game.AddOption(
	"Pick starting game",
	"Timespinner or TsRandomizer",
	"SelectPlayer1Game",
	AnswersPlayerGame
);

Game.AddOption(
	"Pick starting game",
	"Timespinner or TsRandomizer",
	"SelectPlayer1Game",
	AnswersPlayerGame
);

Game.AddOption(
	"Pick starting game",
	"Timespinner or TsRandomizer",
	"SelectPlayer3Game",
	AnswersPlayerGame
);

Game.AddOption(
	"Pick starting game",
	"Timespinner or TsRandomizer",
	"SelectPlayer4Game",
	AnswersPlayerGame
);

Game.AddOption(
	"Pick starting game",
	"Timespinner or TsRandomizer",
	"SelectPlayer5Game",
	AnswersPlayerGame
);

Game.AddOption(
	"Pick starting game",
	"Timespinner or TsRandomizer",
	"SelectPlayer6Game",
	AnswersPlayerGame
);

Game.AddOption(
	"Pick starting game",
	"Timespinner or TsRandomizer",
	"SelectPlayer7Game",
	AnswersPlayerGame
);

Game.AddOption(
  "Pick starting game",
  "Timespinner or TsRandomizer",
  "SelectPlayer8Game",
  AnswersPlayerGame
);

Game.AddOption(
  "Pick starting game",
  "Timespinner or TsRandomizer",
  "SelectPlayer9Game",
  AnswersPlayerGame
);

Game.AddOption(
  "Pick starting game",
  "Timespinner or TsRandomizer",
  "SelectPlayer10Game",
  AnswersPlayerGame
);

Game.AddOption(
  "Pick starting game",
  "Timespinner or TsRandomizer",
  "SelectPlayer11Game",
  AnswersPlayerGame
);

Game.AddOption(
  "Pick starting game",
  "Timespinner or TsRandomizer",
  "SelectPlayer12Game",
  AnswersPlayerGame
);

Game.AddOption(
  "Pick starting game",
  "Timespinner or TsRandomizer",
  "SelectPlayer13Game",
  AnswersPlayerGame
);

Game.AddOption(
  "Pick starting game",
  "Timespinner or TsRandomizer",
  "SelectPlayer14Game",
  AnswersPlayerGame
);

Game.AddOption(
  "Pick starting game",
  "Timespinner or TsRandomizer",
  "SelectPlayer15Game",
  AnswersPlayerGame
);

Game.AddOption(
  "Pick starting game",
  "Timespinner or TsRandomizer",
  "SelectPlayer16Game",
  AnswersPlayerGame
);

//Game.AddOption("Title", "Description", "Option Name" , [leave empty]);
//var option = Context.Options["Option Name"];  to retrieve the typed text. It works like the regular one but with an empty string array.

Game.Play = function()
{
	var selectedGames = [
	Context.Options["SelectPlayer1Game"],
	Context.Options["SelectPlayer2Game"],
	Context.Options["SelectPlayer3Game"],
	Context.Options["SelectPlayer4Game"],
	Context.Options["SelectPlayer5Game"],
	Context.Options["SelectPlayer6Game"],
	Context.Options["SelectPlayer7Game"],
	Context.Options["SelectPlayer8Game"],
	Context.Options["SelectPlayer9Game"],
	Context.Options["SelectPlayer10Game"],
	Context.Options["SelectPlayer11Game"],
	Context.Options["SelectPlayer12Game"],
	Context.Options["SelectPlayer13Game"],
	Context.Options["SelectPlayer14Game"],
	Context.Options["SelectPlayer15Game"],
	Context.Options["SelectPlayer16Game"]
	];
	// Check if any selected game is "DarkSouls3!"
	var isDarkSouls3Selected = selectedGames.some(function(game) {
    		return game === "DarkSouls3!";
  	});
	if (isDarkSouls3Selected) {
		// Handle the case where DarkSouls3! is selected
		// Set exe and propper files + settings for each player somehow? Using bat file to symlink every game to root Archipelago launcher location.
		// Context.RootInstallFolder + "\\DarkSoulsIII" // C:\ProgramData\Archipelago\DarkSoulsIII
		//System.IO.File.Symlink(Context.Options["C:\Program Files (x86)\Steam\steamapps\common\DARK SOULS III\Game"].replace(/\\/g, '\\\\') + "\\DarkSoulsIII.exe", Context.EnvironmentPlayer +;
		//Game.ExecutableName = "DarkSouls3.exe";
		//Game.ExecutableToLaunch = "DarkSouls3.exe";
	}
	// Select an option for Timespinner GameModes (Old stuff. Redo this)
	var Player1GM = Context.Options["SelectPlayer1Game"];
	if (Player1GM === "Timespinner!") {
		Game.ExecutableName = "Timespinner.exe";
		Game.ExecutableToLaunch = "Timespinner.exe";
	}
	else if (Player1GM === "TsRandomizer!") {
		Game.ExecutableName = "TsRandomizer.exe";
		Game.ExecutableToLaunch = "TsRandomizer.exe";
	} else {
		//Nothing else
		console.error("Invalid game mode selected: " + GM);
	}
	// variable that stores the per-player environemnt config path
	var TimespinnerConfigPath = Context.DocumentsPlayer + Context.DocumentsConfigPath + "\\Timespinner\\AllPlayers";
	// Get the user profile path
	var UserTimespinnerConfigPath = Context.NucleusUserRoot + "\\" + "Documents\\SavedGames\\Timespinner\\Timespinner\\AllPlayers";
	// Do this if the "Config.sav" is not found in the path
	if (!System.IO.File.Exists(TimespinnerConfigPath + "\\Config.sav")) {
		// Create directoy for each Nucleus player
		System.IO.Directory.CreateDirectory(TimespinnerConfigPath)
		// Copy config .sav file over
		System.IO.File.Copy(UserTimespinnerConfigPath + "\\Config.sav", TimespinnerConfigPath + "\\Config.sav", true);
		// Edit config .sav for every player.
		Context.ChangeXmlAttributeValue(TimespinnerConfigPath + "\\Config.sav", "//GameConfig", "ScreenResolution", "0");
		Context.ChangeXmlAttributeValue(TimespinnerConfigPath + "\\Config.sav", "//GameConfig", "IsFullScreen", "False");
	}

	//Controller stuff
	if (Context.PlayerID == 0) { // So the code only runs once
		if (Context.Options["NativeSplitScreen"] == "No") {
		// Always explicitly set this option, in case the user stops split screen and changes the option
		Game.ProtoInput.MultipleProtoControllers = false;
		} else {
			Game.ProtoInput.MultipleProtoControllers = true;

			// The number of controller icons dragged onto the screens
			var numPlayers = 0;

			for (var i = 0; i < PlayerList.Count; i++) {
				var player = PlayerList[i];

				if (player.IsXInput && player.ScreenIndex !== -1) {
					numPlayers++;
				}

				// These might not be reset between runs, so let's reset them here
				// 0 means no controller, 1 means controller 1, etc
				player.ProtoController1 = 0;
				player.ProtoController2 = 0;
				player.ProtoController3 = 0;
				player.ProtoController4 = 0;
			}

			var controllerCounter = 1;
			while (controllerCounter < numPlayers * 4) {
				for (var i = 0; i < PlayerList.Count; i++) {
					var player = PlayerList[i];

					if (player.IsXInput && player.ScreenIndex !== -1) {
						if (player.ProtoController1 == 0) {
							player.ProtoController1 = controllerCounter;
							controllerCounter++;
						}
						else if (player.ProtoController2 == 0) {
							player.ProtoController2 = controllerCounter;
							controllerCounter++;
						}
						else if (player.ProtoController3 == 0) {
							player.ProtoController3 = controllerCounter;
							controllerCounter++;
						}
						else if (player.ProtoController4 == 0) {
							player.ProtoController4 = controllerCounter;
							controllerCounter++;
						} else {
              						// This instance has all its controllers set already
						}
					}
				}
			}
		}
	}
}

// Focus & proto input
Game.HookFocus = true;
Game.Hook.ForceFocus = true;
//Game.PreventGameFocus = true;
Game.PreventWindowDeactivation = true;
Game.ProtoInput.BlockedMessages = [ 0x0008 ];
Game.FakeFocus = true;
Game.FakeFocusInterval = 1000;
//Game.Hook.DInputEnabled = true;
//Game.UseDInputBlocker = true;
//Game.BlockRawInput = true;
//Game.Hook.XInputEnabled = true;
//Game.Hook.XInputReroute = false;
//Game.Hook.CustomDllEnabled = false;
//Game.Hook.XInputNames = ["xinput1_3.dll"];
//Game.XInputPlusDll = ["xinput1_4.dll", "Dinput8.dll"];
//Game.UseDevReorder = false;
//Game.Hook.XInputReroute = false;
Game.SupportsKeyboard = true;
Game.DontResize = false;
Game.DontRemoveBorders = false;
Game.NotTopMost = false;
//Game.HookInit = true;
Game.HandlerInterval = 100;
Game.PauseBetweenStarts = 25;
Game.PauseBetweenProcessGrab = 30;
Game.PauseBetweenContextAndLaunch = 0;
//Game.KillMutexType = "Mutant";
//Game.KillMutexTypeProcess = "Mutant";
//Game.KillMutexProcess = ["\Sessions\1\BaseNamedObjects\DBWinMutex"];

//Game.Hook.ResWidth = 1280;
//Game.KeepAspectRatio = true;
//Game.ProcessChangesAtEnd = false;
//Game.RefreshWindowAfterStart = true;

Game.SupportsMultipleKeyboardsAndMice = true;

// Deprecated options
Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;
Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.DrawFakeMouseCursor = false;

Game.LockInputAtStart = true;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = true;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = false;

// This hook should always be on, regardless of input lock
Game.ProtoInput.RegisterRawInputHook = true;

// This can always be enabled, since we are going to allow/disallow raw input with the bypass function
Game.ProtoInput.GetRawInputDataHook = true;

// We will be installing/uninstalling the filters manually so there's no need to
Game.ProtoInput.MessageFilterHook = true;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;

// These aren't problematic to leave on, since the external "freeze fake input input" when real input ISN'T locked will prevent these from interfering
Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;

// Handled on input lock/unlock, don't enable this by default
Game.ProtoInput.EnableFocusMessageLoop = false;
//Game.ProtoInput.FocusLoopIntervalMilliseconds = 5;
//Game.ProtoInput.FocusLoop_WM_ACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_ACTIVATEAPP = true;
//Game.ProtoInput.FocusLoop_WM_NCACTIVATE = true;
//Game.ProtoInput.FocusLoop_WM_SETFOCUS = true;
//Game.ProtoInput.FocusLoop_WM_MOUSEACTIVATE = true;

Game.ProtoInput.DrawFakeCursor = false; // This is set in the input locking

Game.ProtoInput.BlockedMessages = [ 0x0008 ]; // Blocks WM_KILLFOCUS

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

// We can leave these on and not worry about input lock. 
// It doesn't matter if controller input still works since it won't get in the way
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;
Game.ProtoInput.UseDinputRedirection = false;

// The old Nucleus options. Don't use these with the Xinput hook
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = false;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.Hook.CustomDllEnabled = false;


Game.ProtoInput.AutoHideTaskbar = true;

Game.ProtoInput.OnInputLocked = function() {
	for (var i = 0; i < PlayerList.Count; i++) {
		var player = PlayerList[i];

	ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
	ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
	ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
	ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
	ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
	ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

	ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

	ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);

	// Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move moessages
	//ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

	ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
	ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
	ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
	ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
	ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
	ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

	ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);

	ProtoInput.StartFocusMessageLoop(player.ProtoInputInstanceHandle, 5, true, true, true, true, true);

	// Disable the bypass: let the input be processed by Proto Input
	ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, false);
	}
}

Game.ProtoInput.OnInputUnlocked = function() {
	for (var i = 0; i < PlayerList.Count; i++) {
		var player = PlayerList[i];

	ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
	ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
	ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
	ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
	ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
	ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);

	// Intentionally disable focus so all the instances don't respond to input at the same time
	ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.FocusHooksHookID);

	ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
	ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
	ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
	ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
	ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
	ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
	ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
	ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

	ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);

	// Intentionally disable focus so all the instances don't respond to input at the same time
	ProtoInput.StopFocusMessageLoop(player.ProtoInputInstanceHandle);

	// Enable the bypass: allow any raw input to pass
	ProtoInput.SetRawInputBypass(player.ProtoInputInstanceHandle, true);
	}
}
