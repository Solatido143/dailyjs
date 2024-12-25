const input = `
[SMAPI]    Automate 2.3.1: https://www.nexusmods.com/stardewvalley/mods/1063 (you have 2.2.3)
[SMAPI]    Better Friendship 1.1.3: https://www.nexusmods.com/stardewvalley/mods/10287 (you have 1.1.2)
[SMAPI]    CJB Cheats Menu 1.37.1: https://www.nexusmods.com/stardewvalley/mods/4 (you have 1.36.2)
[SMAPI]    CJB Item Spawner 2.5.1: https://www.nexusmods.com/stardewvalley/mods/93 (you have 2.4.1)
[SMAPI]    CJB Show Item Sell Price 1.10.1: https://www.nexusmods.com/stardewvalley/mods/5 (you have 1.9.18)
[SMAPI]    Content Patcher 2.4.4: https://www.nexusmods.com/stardewvalley/mods/1915 (you have 2.2.0)
[SMAPI]    Convenient Inventory 1.5.2: https://www.nexusmods.com/stardewvalley/mods/10384 (you have 1.4.1)
[SMAPI]    Destroyable Bushes 1.4.5: https://www.nexusmods.com/stardewvalley/mods/6304 (you have 1.4.0)
[SMAPI]    Dynamic Reflections 3.0.0: https://www.nexusmods.com/stardewvalley/mods/12831 (you have 2.0.2)
[SMAPI]    Farm Type Manager 1.23.0: https://www.nexusmods.com/stardewvalley/mods/3231 (you have 1.22.0)
[SMAPI]    Fast Animations 1.13.5: https://www.nexusmods.com/stardewvalley/mods/1089 (you have 1.13.1)
[SMAPI]    Generic Mod Config Menu 1.14.0: https://www.nexusmods.com/stardewvalley/mods/5098 (you have 1.12.0)
[SMAPI]    Gift Taste Helper Continued x2 1.2.3: https://www.nexusmods.com/stardewvalley/mods/21001 (you have 1.2.1)
[SMAPI]    Heart Event Helper 1.1.0: https://www.nexusmods.com/stardewvalley/mods/21924 (you have 1.0.6)
[SMAPI]    Heart Event Helper - Icons (CP) 1.1.0: https://www.nexusmods.com/stardewvalley/mods/21924 (you have 1.0.6)
[SMAPI]    Lookup Anything 1.46.2: https://www.nexusmods.com/stardewvalley/mods/541 (you have 1.44.1)
[SMAPI]    Noclip Mode 1.3.16: https://www.nexusmods.com/stardewvalley/mods/3900 (you have 1.3.13)
[SMAPI]    NPC Location Compass 1.4.2: https://www.nexusmods.com/stardewvalley/mods/3045 (you have 1.4.0)
[SMAPI]    NPC Map Locations 3.2.2: https://www.nexusmods.com/stardewvalley/mods/239 (you have 3.1.0)
[SMAPI]    StardewHack 7.4.0: https://www.nexusmods.com/stardewvalley/mods/3213 (you have 7.3.0)
[SMAPI]    UI Info Suite 2 2.3.7: https://github.com/Annosz/UIInfoSuite2/releases (you have 2.3.4)
[SMAPI]    Wear More Rings 7.7.0: https://www.nexusmods.com/stardewvalley/mods/3214 (you have 7.5.0)
[SMAPI]    Zoom Level 3.2.1: https://github.com/thespbgamer/ZoomLevel/releases (you have 3.2.0)
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

