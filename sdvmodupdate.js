const input = `
[SMAPI]    Automate 2.3.2: https://www.nexusmods.com/stardewvalley/mods/1063 (you have 2.3.1)
[SMAPI]    CJB Cheats Menu 1.38.0: https://www.nexusmods.com/stardewvalley/mods/4 (you have 1.37.1)
[SMAPI]    CJB Item Spawner 2.5.2: https://www.nexusmods.com/stardewvalley/mods/93 (you have 2.5.1)
[SMAPI]    CJB Show Item Sell Price 1.10.2: https://www.nexusmods.com/stardewvalley/mods/5 (you have 1.10.1)
[SMAPI]    Content Patcher 2.5.1: https://www.nexusmods.com/stardewvalley/mods/1915 (you have 2.4.4)
[SMAPI]    Convenient Inventory 1.5.6: https://www.nexusmods.com/stardewvalley/mods/10384 (you have 1.5.2)
[SMAPI]    Destroyable Bushes 1.5.1: https://www.nexusmods.com/stardewvalley/mods/6304 (you have 1.4.5)
[SMAPI]    Farm Type Manager 1.24.0: https://www.nexusmods.com/stardewvalley/mods/3231 (you have 1.23.0)
[SMAPI]    Fast Animations 1.13.6: https://www.nexusmods.com/stardewvalley/mods/1089 (you have 1.13.5)
[SMAPI]    Generic Mod Config Menu 1.14.1: https://www.nexusmods.com/stardewvalley/mods/5098 (you have 1.14.0)
[SMAPI]    Lookup Anything 1.47.0: https://www.nexusmods.com/stardewvalley/mods/541 (you have 1.46.2)
[SMAPI]    NPC Map Locations 3.3.0: https://www.nexusmods.com/stardewvalley/mods/239 (you have 3.2.2)
[SMAPI]    Pony Weight Loss Program 1.0.0: https://www.nexusmods.com/stardewvalley/mods/1232 (you have 0.8.2)
[SMAPI]    Zoom Level 4.0.1: https://github.com/thespbgamer/ZoomLevel/releases (you have 3.2.1)
`;

const urls = input.match(/https?:\/\/[^\s)]+/g);

if (urls) {
	urls.forEach((url) => {
		const a = document.createElement("a");
		const br = document.createElement("br"); // Create a <br> for spacing
		a.href = url;
		a.target = "_blank"; // Open in a new tab
		a.textContent = url;

		document.body.appendChild(a);
		document.body.appendChild(br);

		// Add click event to remove the link and the <br> when clicked
		a.addEventListener("click", function () {
			a.remove(); // Remove the link
			br.remove(); // Remove the associated <br>
		});
	});
}

