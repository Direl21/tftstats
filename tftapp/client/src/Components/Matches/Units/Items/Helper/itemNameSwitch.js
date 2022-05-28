import consoleTool from "../../../../../utils/Tools/Console";

//this function takes props(item) from the Riot API.
//we pass data to props in a Items.jsx file.
//we receive such data in props - example: item: 47(type: number).
//the function compares the value(on switch) with the value we need(on case).
//item_name - type: string

export const ItemNameSwitch = (item) => {

    let item_name = "";

        switch (item) {
            case 1:
                item_name = "B.F.Sword";
                break;
            case 2:
                item_name = "Recurve Bow";
                break;
            case 3:
                item_name = "Needlessly Large Rod";
                break;
            case 4:
                item_name = "Tear of the Goddess";
                break;
            case 5:
                item_name = "Chain Vest";
                break;
            case 6:
                item_name = "Negatron Cloak";
                break;
            case 7:
                item_name = "Giant's Belt";
                break;
            case 8:
                item_name = "Spatula";
                break;
            case 9:
                item_name = "Sparring Gloves";
                break;
            case 11:
                item_name = "Deathblade";
                break;
            case 12:
                item_name = "Giant Slayer";
                break;
            case 13:
                item_name = "Hextech Gunblade";
                break;
            case 14:
                item_name = "Spear of Shojin";
                break;
            case 94:
                item_name = "Edge of Night";
                break;
            case 16:
                item_name = "Bloodthirster";
                break;
            case 17:
                item_name = "Zeke's Herald";
                break;
            case 71:
                item_name = "Striker Emblem";
                break;
            case 19:
                item_name = "Infinity Edge";
                break;
            case 22:
                item_name = "Rapid Firecannon";
                break;
            case 23:
                item_name = "Guinsoo's Rageblade";
                break;
            case 24:
                item_name = "Statikk Shiv";
                break;
            case 25:
                item_name = "Titan's Resolve";
                break;
            case 26:
                item_name = "Runaan's Hurricane";
                break;
            case 27:
                item_name = "Zz'Rot Portal";
                break;
            case 28:
                item_name = "Challenger Emblem";
                break;
            case 29:
                item_name = "Last Whisper";
                break;
            case 33:
                item_name = "Rabadon's Deathcap";
                break;
            case 34:
                item_name = "Archangel's Staff";
                break;
            case 35:
                item_name = "Locket of the Iron Solari";
                break;
            case 36:
                item_name = "Ionic Spark";
                break;
            case 37:
                item_name = "Morellonomicon";
                break;
            case 38:
                item_name = "Arcanist Emblem";
                break;
            case 39:
                item_name = "Jeweled Gauntlet";
                break;
            case 44:
                item_name = "Blue Buff";
                break;
            case 45:
                item_name = "Frozen Heart";
                break;
            case 46:
                item_name = "Chalice of Power";
                break;
            case 47:
                item_name = "Redemption";
                break;
            case 72:
                item_name = "Hextech Emblem";
                break;
            case 49:
                item_name = "Hand Of Justice";
                break;
            case 55:
                item_name = "Bramble Vest";
                break;
            case 56:
                item_name = "Gargoyle Stoneplate";
                break;
            case 57:
                item_name = "Sunfire Cape";
                break;
            case 70:
                item_name = "Debonair Emblem";
                break;
            case 59:
                item_name = "Shroud of Stillness";
                break;
            case 66:
                item_name = "Dragon's Claw";
                break;
            case 67:
                item_name = "Zephyr";
                break;
            case 2190:
                item_name = "Mutant Emblem";
                break;
            case 69:
                item_name = "Quicksilver";
                break;
            case 77:
                item_name = "Warmog's Armor";
                break;
            case 78:
                item_name = "Chemtech Emblem";
                break;
            case 79:
                item_name = "Banshee's Claw";
                break;
            case 88:
                item_name = "Tactician's Crown";
                break;
            case 89:
                item_name = "Assassin Emblem";
                break;
            case 99:
                item_name = "Thief's Gloves";
                break;
            case 58:
                item_name = "Bodyguard Emblem";
                break;
            case 2197:
                item_name = "Bruiser Emblem";
                break;
            case 2191:
                item_name = "Clockwork Emblem";
                break;
            case 2194:
                item_name = "Enforcer Emblem";
                break;
            case 2198:
                item_name = "Innovator Emblem";
                break;
            case 2192:
                item_name = "Mercenary Emblem";
                break;
            case 68:
                item_name = "Syndicate Emblem";
                break;
            case 2200:
                item_name = "Scholar Emblem";
                break;
            case 2195:
                item_name = "Scrap Emblem";
                break;
            case 2199:
                item_name = "Sniper Emblem";
                break;
            case 2193:
                item_name = "Socialite Emblem";
                break;
            case 9001:
                item_name = "Anima Visage";
                break;
            case 9002:
                item_name = "Death's Defiance";
                break;
            case 9003:
                item_name = "Eternal Winter";
                break;
            case 9009:
                item_name = "Gold Collector";
                break;
            case 9004:
                item_name = "Infinity Force";
                break;
            case 9005:
                item_name = "Manazane";
                break;
            case 9006:
                item_name = "Obsidian Cleaver";
                break;
            case 9007:
                item_name = "Randuin's Sanctum";
                break;
            case 309:
                item_name = "Rocket-Propelled Fist";
                break;
            case 9010:
                item_name = "Zhonya's Paradox";
                break;
            case 2011:
                item_name = "Luminous Deathblade";
                break;
            case 2012:
                item_name = "Demonslayer";
                break;
            case 2013:
                item_name = "Hextech Lifeblade";
                break;
            case 2014:
                item_name = "Spear of Hirana";
                break;
            case 2015:
                item_name = "";
                break;
            case 2016:
                item_name = "Blessed Bloodthirster";
                break;
            case 2017:
                item_name = "Zeke's Harmony";
                break;
            case 2019:
                item_name = "Zenith Edge";
                break;
            case 2022:
                item_name = "Rapid Lightcannon";
                break;
            case 2023:
                item_name = "Guinsoo's Reckoning";
                break;
            case 2024:
                item_name = "Statikk's Favor";
                break;
            case 2025:
                item_name = "Titan's Vow";
                break;
            case 2026:
                item_name = "Runaan's Tempest";
                break;
            case 2027:
                item_name = "Zz'Rots Invitation";
                break;
            case 2029:
                item_name = "Eternal Whisper";
                break;
            case 2033:
                item_name = "Rabadon's Ascended Deathcap";
                break;
            case 2034:
                item_name = "Urf-Angel's Staff";
                break;
            case 2035:
                item_name = "Locket of Targon Prime";
                break;
            case 2036:
                item_name = "Covalent Spark";
                break;
            case 2037:
                item_name = "More More-ellonomicon";
                break;
            case 2039:
                item_name = "Glamorous Gauntlet";
                break;
            case 2044:
                item_name = "Blue Blessing";
                break;
            case 2045:
                item_name = "Frozen Heart Of Gold";
                break;
            case 2046:
                item_name = "Chalice of Charity";
                break;
            case 2047:
                item_name = "Radiant Redemption";
                break;
            case 2049:
                item_name = "Fist of Fairness";
                break;
            case 2055:
                item_name = "Rosethorn Vest";
                break;
            case 2056:
                item_name = "Dvarapala Stoneplate";
                break;
            case 2057:
                item_name = "Sunlight Cape";
                break;
            case 2059:
                item_name = "Shroud of Reverence";
                break;
            case 2066:
                item_name = "Dragon's Will";
                break;
            case 2067:
                item_name = "Mistral";
                break;
            case 2069:
                item_name = "Quickestsilver";
                break;
            case 2077:
                item_name = "Warmog's Pride";
                break;
            case 2079:
                item_name = "Banshee's Silence";
                break;
            case 2099:
                item_name = "Rascal's Gloves";
                break;
            default:
                consoleTool('error',1)
                break;
        }

        return {item_name: item_name}
}