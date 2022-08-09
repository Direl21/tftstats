import consoleTool from '../../../../utils/Tools/Console';

//this function takes props(name) from the Riot API.
//we pass data to props in a Arguments.jsx file.
//we receive such data in props - example: 'TFT6_Augment_ScholarTrait'(type: string).
//the function compares the value in props(on switch) with the walue we need(on case).
//argumentName - type: string
//argumentDescription - type: string
export const ArgumentsInfoSwitch = (name) => {
    //switch for arguments info
    let argumentName = "";
    let argumentDescription = "";

    switch (name) {
        //Set6
        //Tier 1 (silver)
        case 'TFT6_Augment_CalculatedLoss':
            argumentName = "Calculated Loss";
            argumentDescription = "After losing your combat, gain 2 gold and a free Shop refresh.";
            break;
        case 'TFT6_Augment_TomeOfTraits1':
            argumentName = "Ancient Archives";
            argumentDescription = "Gain 1 Tome of Traits.";
            break;
        case 'TFT6_Augment_Dominance':
            argumentName = "Dominance";
            argumentDescription = "After winning your player combat, gain 1 bonus gold for every 2 surviving units.";
            break;
        case 'TFT6_Augment_ItemGrabBag1':
            argumentName = "Item Grab Bag I";
            argumentDescription = "Gain 1 random completed item.";
            break;
        case 'TFT6_Augment_TargetDummies':
            argumentName = "Phony Frontline";
            argumentDescription = "Gain 2 Target Dummies.";
            break;
        case 'TFT6_Augment_HyperRoll':
            argumentName = "Hyper Roll";
            argumentDescription = "If you have less than 10 gold at the end of a round, gain 2 gold.";
            break;
        case 'TFT6_Augment_PandorasItems':
            argumentName = "Pandora's Items";
            argumentDescription = "Gain a random component. At the start of each round, items on your bench are randomized (excluding Tactician's Crown, Spatula, and consumables).";
            break;
        case 'TFT6_Augment_Ascension':
            argumentName = "Ascension";
            argumentDescription = "After 15 seconds of combat, your units deal 50% more damage.";
            break;
        case 'TFT6_Augment_Traitless1':
            argumentName = "Built Different I";
            argumentDescription = "Your units with no Traits active gain 300 Health and 60% Attack Speed.";
            break;
        case 'TFT6_Augment_CelestialBlessing1':
            argumentName = "Celestial Blessing I";
            argumentDescription = "Your units heal for 12% of the damage dealt by attacks and Abilities. Excess healing is converted to a shield up to 300 Health.";
            break;
        case 'TFT6_Augment_MeleeStarBlade1':
            argumentName = "Knife's Edge I";
            argumentDescription = "Your units that start combat in the front 2 rows gain 30 Attack Damage.";
            break;
        case 'TFT6_Augment_CyberneticImplants1':
            argumentName = "Cybernetic Implants I";
            argumentDescription = "Your champions holding an item gain 150 Health and 10 Attack Damage.";
            break;
        case 'TFT6_Augment_Distancing':
            argumentName = "Exiles";
            argumentDescription = "Your units that start combat with no adjacent allies gain a 30% maximum Health shield for 8 seconds.";
            break;
        case 'TFT6_Augment_Featherweights1':
            argumentName = "Featherweights I";
            argumentDescription = "Your 1 and 2 cost champions gain 25% Attack Speed and Move Speed.";
            break;
        case 'TFT6_Augment_FirstAidKit':
            argumentName = "First Aid Kit";
            argumentDescription = "All healing and shielding on your units is increased by 35%.";
            break;
        case 'TFT6_Augment_MakeshiftArmor1':
            argumentName = "Makeshift Armor I";
            argumentDescription = "Your units without items equipped gain 35 Armor and Magic Resist.";
            break;
        case 'TFT6_Augment_Diversify1':
            argumentName = "Stand United I";
            argumentDescription = "Your units gain 2 Attack Damage and Ability Power per Trait active across your army.";
            break;
        case 'TFT6_Augment_ThrillOfTheHunt1':
            argumentName = "Thrill of the Hunt I";
            argumentDescription = "Your units heal 400 Health on kill.";
            break;
        case 'TFT6_Augment_Underdogs':
            argumentName = "Underdogs";
            argumentDescription = "Whenever your team has fewer units alive than your opponent, your units regenerate 9% Health each second (maximum: 150).";
            break;
        case 'TFT6_Augment_Weakspot':
            argumentName = "Weakspot I";
            argumentDescription = "Your units' attacks ignore 20% of the target's Armor and reduce healing received by 50% for 5 seconds.";
            break;
        case 'TFT6_Augment_ArcanistTrait':
            argumentName = "Arcanist Heart";
            argumentDescription = "Your team counts as having 1 additional Arcanist. Gain a Swain.";
            break;
        case 'TFT6_Augment_ArcanistRunicShield1':
            argumentName = "Runic Shield I";
            argumentDescription = "Arcanists start combat with a shield equal to 300% of their Ability Power for 8 seconds. Gain a Swain.";
            break;
        case 'TFT6_Augment_AssassinTrait':
            argumentName = "Assassin Heart";
            argumentDescription = "Your team counts as having 1 additional Assassin. Gain a Talon.";
            break;
        case 'TFT6_Augment_AssassinCutthroat':
            argumentName = "Cutthroat";
            argumentDescription = "Assassins Mana Reave the first unit they attack, increasing their maximum Mana by 50% until they cast. Gain a Talon.";
            break;
        case 'TFT6_Augment_HeroTrait':
            argumentName = "Bodyguard Heart";
            argumentDescription = "Your team counts as having 1 additional Bodyguard. Gain a Blitzcrank.";
            break;
        case 'TFT6_Augment_HeroStandBehindMe':
            argumentName = "Stand Behind Me";
            argumentDescription = "Bodyguards' Armor bonus is increased by 25%. At the start of combat, Bodyguards grant 100% of their Armor bonus to non-Bodyguard allies directly behind them (does not stack). Gain a Blitzcrank.";
            break;
        case 'TFT6_Augment_BruteTrait':
            argumentName = "Bruiser Heart";
            argumentDescription = "Your team counts as having 1 additional Bruiser. Gain a Sejuani.";
            break;
        case 'TFT6_Augment_BrawlerHPRegen1':
            argumentName = "Shrug It Off";
            argumentDescription = "Bruisers regenerate 2.50% of their maximum Health each second. Gain a Sejuani.";
            break;
        case 'TFT6_Augment_ChallengerTrait':
            argumentName = "Challenger Heart";
            argumentDescription = "Your team counts as having 1 additional Challenger. Gain a Quinn.";
            break;
        case 'TFT6_Augment_ChallengerEnGarde':
            argumentName = "En Garde";
            argumentDescription = "The first time an enemy is attacked by a Challenger, they are Disarmed for 2.50 seconds. Gain a Warwick.";
            break;
        case 'TFT6_Augment_ChemtechOverload1':
            argumentName = "Chemical Overload I";
            argumentDescription = "Chemtechs explode on death, dealing 20% of their max Health as magic damage to enemies within 2 hexes. Gain a Warwick.";
            break;
        case 'TFT6_Augment_ChemtechTrait':
            argumentName = "Chemtech Heart";
            argumentDescription = "Your team counts as having 1 additional Chemtech. Gain a Warwick.";
            break;
        case 'TFT6_Augment_ClockworkTrait':
            argumentName = "Clockwork Heart";
            argumentDescription = "Your team counts as having 1 additional Clockwork. Gain a Zilean.";
            break;
        case 'TFT6_Augment_EnchanterTrait':
            argumentName = "Enchanter Heart";
            argumentDescription = "Your team counts as having 1 additional Enchanter. Gain a Lulu.";
            break;
        case 'TFT6_Augment_EnchanterArdentCenser':
            argumentName = "Ardent Censer";
            argumentDescription = "Allies healed or shielded by Enchanters gain 45% stacking Attack Speed for the rest of combat (maximum once every 3 seconds). Gain a Lulu.";
            break;
        case 'TFT6_Augment_EnforcerTrait':
            argumentName = "Enforcer Heart";
            argumentDescription = "Your team counts as having 1 additional Enforcer. Gain a Sejuani.";
            break;
        case 'TFT6_Augment_InnovatorSelfRepair':
            argumentName = "Self Repair";
            argumentDescription = "When the Innovation dies, it will become untargetable and repair itself if an Innovator is still alive. Gain a Zilean.";
            break;
        case 'TFT6_Augment_MercenaryTrait':
            argumentName = "Mercenary Heart";
            argumentDescription = "Your team counts as having 1 additional Mercenary.";
            break;
        case 'TFT6_Augment_MercenaryPirates':
            argumentName = "Pirates";
            argumentDescription = "Mercenary units have a 66% chance to drop 1 gold when they kill an enemy. Gain a Quinn.";
            break;
        case 'TFT6_Augment_ExperimentalTrait':
            argumentName = "Mutant Heart";
            argumentDescription = "Your team counts as having 1 additional Mutant. Gain a Rek'Sai.";
            break;
        case 'TFT6_Augment_MutantUnstableEvolution':
            argumentName = "Unstable Evolution";
            argumentDescription = "Mutants randomly gain one of the following when they reach 2 star: 500 Health, 30% Attack Speed, 30 Attack Damage, or 30 Ability Power. These bonuses stack. Gain a Rek'Sai.";
            break;
        case 'TFT6_Augment_ScholarTrait':
            argumentName = "Scholar Heart";
            argumentDescription = "Your team counts as having 1 additional Scholar. Gain a Zyra.";
            break;
        case 'TFT6_Augment_ScholarLearning':
            argumentName = "Lifelong Learning";
            argumentDescription = "Scholars permanently gain 2 Ability Power after each combat, and an additional 3 if they survived. Gain a Syndra.";
            break;
        case 'TFT6_Augment_ScrapTrait':
            argumentName = "Scrap Heart";
            argumentDescription = "Your team counts as having 1 additional Scrap. Gain a Blitzcrank.";
            break;
        case 'TFT6_Augment_SniperTrait':
            argumentName = "Sniper Heart";
            argumentDescription = "Your team counts as having 1 additional Sniper. Gain an Ashe.";
            break;
        case 'TFT6_Augment_SocialiteDuet':
            argumentName = "Duet";
            argumentDescription = "Summon 1 additional Socialite spotlight. Spotlighted units gain 200 Health. Gain a Senna.";
            break;
        case 'TFT6_Augment_SocialiteTrait':
            argumentName = "Socialite Heart";
            argumentDescription = "Your team counts as having 1 additional Socialite.";
            break;
        case 'TFT6_Augment_SyndicateTrait':
            argumentName = "Syndicate Heart";
            argumentDescription = "Your team counts as having 1 additional Syndicate. Gain a Zyra.";
            break;
        case 'TFT6_Augment_SyndicateOneForAll':
            argumentName = "One For All";
            argumentDescription = "When your Syndicates die, they grant your other Syndicates 15 Attack Damage and Ability Power. Gain an Ashe.";
            break;
        case 'TFT6_Augment_SyndicatePayday':
            argumentName = "Payday";
            argumentDescription = "After winning your combat, gain 1 bonus gold for each surviving Syndicate. Gain an Ashe.";
            break;
        case 'TFT6_Augment_TwinshotTrait':
            argumentName = "Twinshot Heart";
            argumentDescription = "Your team counts as having 1 additional Twinshot. Gain a Corki.";
            break;
        case 'TFT6_Augment_TreasureTrove1':
            argumentName = "Treasure Trove I";
            argumentDescription = "Gain 1 blue and 1 gray loot orb(s).";
            break;
        case 'TFT6_Augment_Recombobulator':
            argumentName = "Recombobulator";
            argumentDescription = "Champions on your board permanently transform into random champions that cost 1 more. Gain 2 Magnetic Removers.";
            break;
        case 'TFT6_Augment_Keepers1':
            argumentName = "Keepers I";
            argumentDescription = "At the start of combat, your units grant adjacent allies a 160 health shield for 8 seconds.";
            break;
        case 'TFT6_Augment_Electrocharge1':
            argumentName = "Electrocharge I";
            argumentDescription = "When your units receive critical strikes, they deal 60-105 (based on current Stage) magic damage to nearby enemies (1 second cooldown).";
            break;
        case 'TFT6_Augment_Disintegrator1':
            argumentName = "Disintegrator I";
            argumentDescription = "Your units' attacks deal bonus magic damage equal to 1.50% of the target's maximum Health.";
            break;
        case 'TFT6_Augment_LudensEcho1':
            argumentName = "Luden's Echo I";
            argumentDescription = "When your units cast and deal Ability damage, the first target hit and a nearby enemy take 70-130 (based on current Stage) magic damage.";
            break;
        case 'TFT6_Augment_Backfoot1':
            argumentName = "Backfoot I";
            argumentDescription = "Your units that start combat in the back 2 rows gain 20% Attack Speed.";
            break;
        case 'TFT6_Augment_Phalanx1':
            argumentName = "Phalanx I";
            argumentDescription = "Your units that start combat in the back 2 rows gain 25 Armor and Magic Resist.";
            break;
        case 'TFT6_Augment_Battlemage1':
            argumentName = "Battlemage I";
            argumentDescription = "Your units that start combat in the front 2 rows gain 25 Ability Power.";
            break;
        case 'TFT6_Augment_Meditation1':
            argumentName = "Meditation I";
            argumentDescription = "Your units without items equipped restore 5 Mana per second.";
            break;
        case 'TFT6_Augment_CyberneticUplink1':
            argumentName = "Cybernetic Uplink I";
            argumentDescription = "Your champions holding an item gain 150 Health and restore 2 Mana per second.";
            break;
        case 'TFT6_Augment_CyberneticShell1':
            argumentName = "Cybernetic Shell I";
            argumentDescription = "Your champions holding an item gain 150 Health and 25 Armor.";
            break;
        case 'TFT6_Augment_SecondWind1':
            argumentName = "Second Wind I";
            argumentDescription = "After 10 seconds of combat, your units heal 50% of their missing Health.";
            break;
        case 'TFT6_Augment_Twins1':
            argumentName = "Double Trouble I";
            argumentDescription = "If you have exactly 2 copies of a champion on your board, they both gain 25 Attack Damage, Ability Power, Armor, and Magic Resist. When you 3-star, gain a 2-star copy.";
            break;
        case 'TFT6_Augment_TriForce1':
            argumentName = "Tri Force I";
            argumentDescription = "Your 3-cost units gain 133 Health, 13 starting Mana, and 13% Attack Speed.";
            break;
        case 'TFT6_Augment_BlueBattery1':
            argumentName = "Blue Battery I";
            argumentDescription = "After casting their Ability, your units restore 10 Mana.";
            break;
        case 'TFT6_Augment_EnforcerSwiftJustice':
            argumentName = "True Justice";
            argumentDescription = "Your Enforcers deal true damage to enemies below 80% Health. Gain a Sejuani.";
            break;
        case 'TFT6_Augment_DebonairTrait':
            argumentName = "Debonair Heart";
            argumentDescription = "Your team counts as having 1 additional Debonair. Gain a Talon.";
            break;
        case 'TFT6_Augment_HextechStoredPower':
            argumentName = "Stored Power";
            argumentDescription = "Your Hextech champions permanently gain 1 Ability Power each time they are hit by your Hexcore's pulses. Gain a Swain.";
            break;
        case 'TFT6_Augment_HextechHexnova':
            argumentName = "Hexnova";
            argumentDescription = "The first time a Hextech champion drops below 60% Health, they increase nearby enemies' maximum Mana by 50% until they cast. Gain a Nocturne.";
            break;
        case 'TFT6_Augment_StrikerOverpower':
            argumentName = "Overpower";
            argumentDescription = "After every 2 attacks, Strikers gain 75% Critical Strike Chance for their next attack. Gain a Rek'sai.";
            break;
        case 'TFT6_Augment_StrikerTrait':
            argumentName = "Striker Heart";
            argumentDescription = "Your team counts as having 1 additional Striker. Gain a Rek'Sai.";
            break;
        case 'TFT6_Augment_ChallengerForAllUnits':
            argumentName = "Challenger Unity";
            argumentDescription = "The Challenger trait grants its bonuses to all of your Champions.This does not increase your number of Challengers. Gain a Quinn.";
            break;
        case 'TFT6_Augment_TinyTitans':
            argumentName = "Tiny Titans";
            argumentDescription = "Your Tactician heals 35 Health, grows larger, and has 135 maximum Health.";
            break;
        case 'TFT6_Augment_SniperNest':
            argumentName = "Sniper's Nest";
            argumentDescription = "Snipers gain +8% damage for each round fought from the same starting hex (Maximum +32%). Gain an Ashe.";
            break;
        case 'TFT6_Augment_DebonairIrresistible':
            argumentName = "Irresistible Charm";
            argumentDescription = "Debonair champions take 15% less damage. Gain a Leona.";
            break;
        //Tier 2 (gold)
        case 'TFT6_Augment_ClockworkBrokenStopwatch':
            argumentName = "Broken Stopwatch";
            argumentDescription = "5 seconds into combat, all enemies and non-Clockwork units are frozen in time for 4 seconds. Gain a Zilean.";
            break;
        case 'TFT6_Augment_Traitless2':
            argumentName = "Built Different II";
            argumentDescription = "Your units with no Traits active gain 400 Health and 70% Attack Speed.";
            break;
        case 'TFT6_Augment_CyberneticUplink2':
            argumentName = "Cybernetic Uplink II";
            argumentDescription = "Your champions holding an item gain 250 Health and restore 3 Mana per second.";
            break;
        case 'TFT6_Augment_ChemtechOverload2':
            argumentName = "Chemical Overload II";
            argumentDescription = "Chemtechs explode on death, dealing 30% of their max Health as magic damage to enemies within 2 hexes. Gain a Zac.";
            break;
        case 'TFT6_Augment_ColossusArmorPlating':
            argumentName = "Armor Plating";
            argumentDescription = "Colossus become invulnerable for 3 seconds when their Health drops to 50%. Gain a Cho'Gath.";
            break;
        case 'TFT6_Augment_Diversify2':
            argumentName = "Stand United II";
            argumentDescription = "Your units gain 3 Attack Damage and Ability Power per Trait active across your army.";
            break;
        case 'TFT6_Augment_InnovatorTrait':
            argumentName = "Innovator Heart";
            argumentDescription = "Your team counts as having 1 additional Innovator.";
            break;
        case 'TFT6_Augment_CyberneticImplants2':
            argumentName = "Cybernetic Implants II";
            argumentDescription = "Your champions holding an item gain 250 Health and 20 Attack Damage.";
            break;
        case 'TFT6_Augment_ScrapEmblem':
            argumentName = "Scrap Crest";
            argumentDescription = "Gain a Scrap Emblem and a Blitzcrank.";
            break;
        case 'TFT6_Augment_Archangel2':
            argumentName = "Archangel's Embrace";
            argumentDescription = "Upon casting their Ability, your units gain Ability Power equal to 25% of their maximum Mana.";
            break;
        case 'TFT6_Augment_CyberneticShell2':
            argumentName = "Cybernetic Shell II";
            argumentDescription = "Your champions holding an item gain 250 Health and 35 Armor.";
            break;
        case 'TFT6_Augment_TitanicForce':
            argumentName = "Titanic Force";
            argumentDescription = "Your units with more than 1400 maximum Health gain Attack Damage equal to 3% of their maximum Health.";
            break;
        case 'TFT6_Augment_ClearMind':
            argumentName = "Clear Mind";
            argumentDescription = "If you have no champions on your bench at the end of a round, gain 3 experience points.";
            break;
        case 'TFT6_Augment_BinaryAirdrop':
            argumentName = "Binary Airdrop";
            argumentDescription = "Your champions equipped with 2 items temporarily gain a random completed item at the start of combat.";
            break;
        case 'TFT6_Augment_Electrocharge2':
            argumentName = "Electrocharge II";
            argumentDescription = "When your units receive critical strikes, they deal 85-145 (based on current Stage) magic damage to nearby enemies (1 second cooldown).";
            break;
        case 'TFT6_Augment_Weakspot2':
            argumentName = "Weakspot II";
            argumentDescription = "Your units' attacks ignore 40% of the target's Armor and reduce healing received by 50% for 5 seconds.";
            break;
        case 'TFT6_Augment_PortableForge':
            argumentName = "Portable Forge";
            argumentDescription = "Open an Armory and choose 1 of 3 unique Artifacts crafted by Ornn.";
            break;
        case 'TFT6_Augment_TriForce2':
            argumentName = "Tri Force II";
            argumentDescription = "Your 3-cost units gain 233 Health, 23 starting Mana, and 23% Attack Speed.";
            break;
        case 'TFT6_Augment_Distancing2':
            argumentName = "Exiles II";
            argumentDescription = "Your units that start combat with no adjacent allies gain a 45% maximum Health shield for 8 seconds.";
            break;
        case 'TFT6_Augment_CelestialBlessing2':
            argumentName = "Celestial Blessing II";
            argumentDescription = "Your units heal for 20% of the damage dealt by attacks and Abilities. Excess healing is converted to a shield up to 450 Health.";
            break;
        case 'TFT6_Augment_AssassinSmokeBomb':
            argumentName = "Smoke Bomb";
            argumentDescription = "The first time an Assassin drops to 70% health, they briefly enter stealth, becoming untargetable and shedding all negative effects. Any excess damage is reduced by 60%. Gain a Talon.";
            break;
        case 'TFT6_Augment_Disintegrator2':
            argumentName = "Disintegrator II";
            argumentDescription = "Your units' attacks deal bonus magic damage equal to 2.50% of the target's maximum Health.";
            break;
        case 'TFT6_Augment_ArcanistRunicShield2':
            argumentName = "Runic Shield II";
            argumentDescription = "Arcanists start combat with a shield equal to 450% of their Ability Power for 8 seconds. Gain a Vex.";
            break;
        case 'TFT6_Augment_ArcanistSpellBlade':
            argumentName = "Spell Blade";
            argumentDescription = "After casting their Ability, Arcanists' next attack deals bonus magic damage equal to 180% of their Ability Power. Gain a Swain.";
            break;
        case 'TFT6_Augment_Backfoot2':
            argumentName = "Backfoot II";
            argumentDescription = "Your units that start combat in the back 2 rows gain 30% Attack Speed.";
            break;
        case 'TFT6_Augment_Phalanx2':
            argumentName = "Phalanx II";
            argumentDescription = "Your units that start combat in the back 2 rows gain 35 Armor and Magic Resist.";
            break;
        case 'TFT6_Augment_DebonairEmblem':
            argumentName = "Debonair Crest";
            argumentDescription = "Gain a Debonair Emblem and a Syndra.";
            break;
        case 'TFT6_Augment_SyndicateEmblem':
            argumentName = "Syndicate Crest";
            argumentDescription = "Gain a Syndicate Emblem and a Zyra.";
            break;
        case 'TFT6_Augment_ScrapDumpsterDiving':
            argumentName = "Junkyard";
            argumentDescription = "Gain a random component every 4 combat rounds with the Scrap Trait active. Gain an Ezreal.";
            break;
        case 'TFT6_Augment_SunfireBoard':
            argumentName = "Sunfire Board";
            argumentDescription = "At the start of combat, burn all enemies for 20% of their maximum Health over 10 seconds and reduce healing received by 50%.";
            break;
        case 'TFT6_Augment_SecondWind2':
            argumentName = "Second Wind II";
            argumentDescription = "After 10 seconds of combat, your units heal 75% of their missing Health.";
            break;
        case 'TFT6_Augment_MakeshiftArmor2':
            argumentName = "Makeshift Armor II";
            argumentDescription = "Your units without items equipped gain 55 Armor and Magic Resist.";
            break;
        case 'TFT6_Augment_TreasureTrove2':
            argumentName = "Treasure Trove II";
            argumentDescription = "Gain 1 blue and 2 gray loot orb(s).";
            break;
        case 'TFT6_Augment_ExperimentalEmblem':
            argumentName = "Mutant Crest";
            argumentDescription = "Gain a Mutant Emblem and a Kassadin.";
            break;
        case 'TFT6_Augment_HeroEmblem':
            argumentName = "Bodyguard Crest";
            argumentDescription = "Gain a Bodyguard Emblem and a Darius.";
            break;
        case 'TFT6_Augment_LudensEcho2':
            argumentName = "Luden's Echo II";
            argumentDescription = "When your units cast and deal Ability damage, the first target hit and a nearby enemy take 100-175 (based on current Stage) magic damage.";
            break;
        case 'TFT6_Augment_Battlemage2':
            argumentName = "Battlemage II";
            argumentDescription = "Your units that start combat in the front 2 rows gain 35 Ability Power.";
            break;
        case 'TFT6_Augment_ThreesCompany':
            argumentName = "Three's Company";
            argumentDescription = "Gain 4% random 3-cost champions.";
            break;
        case 'TFT6_Augment_StrikerEmblem':
            argumentName = "Striker Crest";
            argumentDescription = "Gain a Striker Emblem and a Rek'sai.";
            break;
        case 'TFT6_Augment_JeweledLotus':
            argumentName = "Jeweled Lotus";
            argumentDescription = "Magic and true damage from your units' Abilities can critically strike. Your units gain 25% Critical Strike Chance.";
            break;
        case 'TFT6_Augment_StrikerConcussiveBlows':
            argumentName = "Concussive Blows";
            argumentDescription = "Striker's critical strikes stun their target for 1.50 second(s). Each target can only be stunned once every 6 seconds. Gain a Rek'Sai.";
            break;
        case 'TFT6_Augment_ThievingRascals':
            argumentName = "Thieving Rascals";
            argumentDescription = "Free Yordles from the portal have a 33% chance to arrive holding an item component. Gain a Lulu.";
            break;
        case 'TFT6_Augment_TrueTwos':
            argumentName = "True Twos";
            argumentDescription = "Gain 2% random 2-star 2-cost units.";
            break;
        case 'TFT6_Augment_FourScore':
            argumentName = "Four Score";
            argumentDescription = "Gain 4% random 4-cost champions.";
            break;
        case 'TFT6_Augment_AssassinEmblem':
            argumentName = "Assassin Crest";
            argumentDescription = "Gain an Assassin Emblem and a Talon.";
            break;
        case 'TFT6_Augment_ComponentGrabBag':
            argumentName = "Component Grab Bag";
            argumentDescription = "Gain 3 random item components.";
            break;
        case 'TFT6_Augment_YordleSoSmall':
            argumentName = "So Small";
            argumentDescription = "Yordles gain 25% Dodge Chance. Gain a Corki.";
            break;
        case 'TFT6_Augment_FuturePeepers':
            argumentName = "Future Sight";
            argumentDescription = "Know who you will fight next. Gain a Zephyr.";
            break;
        case 'TFT6_Augment_MeleeStarBlade2':
            argumentName = "Knife's Edge II";
            argumentDescription = "Your units that start combat in the front 2 rows gain 40 Attack Damage.";
            break;
        case 'TFT6_Augment_RichGetRicher':
            argumentName = "Rich Get Richer";
            argumentDescription = "Gain 14 gold. Your maximum interest is increased to 7.";
            break;
        case 'TFT6_Augment_DebonairVVIP':
            argumentName = "Very VIP";
            argumentDescription = "When an ally dies, they grant the Debonair VIP 30% of their maximum Health for the rest of combat. Gain a Syndra.";
            break;
        case 'TFT6_Augment_Meditation2':
            argumentName = "Meditation II";
            argumentDescription = "Your units without items equipped restore 7 Mana per second.";
            break;
        case 'TFT6_Augment_BruteEmblem':
            argumentName = "Bruiser Crest";
            argumentDescription = "Gain a Bruiser Emblem and a Sejuani.";
            break;
        case 'TFT6_Augment_ChemtechInjection':
            argumentName = "Instant Injection";
            argumentDescription = "Chemtechs now additionally trigger their bonuses at the start of combat. Gain a Warwick.";
            break;
        case 'TFT6_Augment_ArcanistEmblem':
            argumentName = "Arcane Crest";
            argumentDescription = "Gain an Arcanist Emblem and a Swain.";
            break;
        case 'TFT6_Augment_GoldenGifts1':
            argumentName = "Golden Gifts I";
            argumentDescription = "Gain 1 golden and 2 gray loot orb(s).";
            break;
        case 'TFT6_Augment_SniperSharpshooter':
            argumentName = "Sharpshooter";
            argumentDescription = "Twinshot's ranged attacks and Abilities can bounce once, dealing 66% less damage. Gain a Corki.";
            break;
        case 'TFT6_Augment_ChemtechEmblem':
            argumentName = "Chemtech Crest";
            argumentDescription = "Gain a Chemtech Emblem and a Warwick.";
            break;
        case 'TFT6_Augment_Twins2':
            argumentName = "Double Trouble II";
            argumentDescription = "If you have exactly 2 copies of a champion on your board, they both gain 35 Attack Damage, Ability Power, Armor, and Magic Resist. When you 3-star, gain a 2-star copy.";
            break;
        case 'TFT6_Augment_SniperEmblem':
            argumentName = "Sniper Crest";
            argumentDescription = "Gain a Sniper Emblem and an Ashe.";
            break;
        case 'TFT6_Augment_Keepers2':
            argumentName = "Keepers II";
            argumentDescription = "At the start of combat, your units grant adjacent allies a 240 health shield for 8 seconds.";
            break;
        case 'TFT6_Augment_ThrillOfTheHunt2':
            argumentName = "Thrill of the Hunt II";
            argumentDescription = "Your units heal 700 Health on kill.";
            break;
        case 'TFT6_Augment_SalvageBin':
            argumentName = "Salvage Bin";
            argumentDescription = "Gain a random completed item. Selling champions breaks apart their full items into components (excluding Tactician's Crown).";
            break;
        case 'TFT6_Augment_MercenaryGoldReserves':
            argumentName = "Gold Reserves";
            argumentDescription = "Mercenaries deal 2% more damage per 1 gold you have (Maximum +50%). Gain a Quinn.";
            break;
        case 'TFT6_Augment_TradeSector':
            argumentName = "Trade Sector";
            argumentDescription = "Gain a free Shop refresh each round.";
            break;
        case 'TFT6_Augment_Featherweights2':
            argumentName = "Featherweights II";
            argumentDescription = "Your 1 and 2 cost champions gain 35% Attack Speed and Move Speed.";
            break;
        case 'TFT6_Augment_ChallengerEmblem':
            argumentName = "Challenger Crest";
            argumentDescription = "Gain a Challenger Emblem and a Quinn.";
            break;
        case 'TFT6_Augment_MetabolicAccelerator':
            argumentName = "Metabolic Accelerator";
            argumentDescription = "Your Tactician moves faster and heals 2 Health after a PvP round.";
            break;
        case 'TFT6_Augment_MercenaryEmblem':
            argumentName = "Mercenary Crest";
            argumentDescription = "Gain a Mercenary Emblem and 3 gold.";
            break;
        case 'TFT6_Augment_WoodlandTrinket':
            argumentName = "Woodland Trinket";
            argumentDescription = "At the start of combat, your highest Attack Speed champion creates two 360 Health copies of themself (excluding items).";
            break;
        case 'TFT6_Augment_HighFive':
            argumentName = "High Five";
            argumentDescription = "Gain 5% random 5-cost champions.";
            break;
        case 'TFT6_Augment_ScholarEmblem':
            argumentName = "Scholar Crest";
            argumentDescription = "Gain a Scholar Emblem and a Zyra.";
            break;
        case 'TFT6_Augment_HextechTrait':
            argumentName = "Hextech Heart";
            argumentDescription = "Your team counts as having 1 additional Hextech. Gain a Swain.";
            break;
        case 'TFT6_Augment_ChemtechForAllUnits':
            argumentName = "Chemtech Unity";
            argumentDescription = "The Chemtech trait grants its bonuses to all of your Champions. This does not increase your number of Chemtech units. Gain a Warwick.";
            break;
        //Tier 3 (chroma)
        case 'TFT6_Augment_ExperimentalEmblem2':
            argumentName = "Mutant Crown";
            argumentDescription = "Gain 2 Mutant Emblems.";
            break;
        case 'TFT6_Augment_DebonairEmblem2':
            argumentName = "Debonair Crown";
            argumentDescription = "Gain 2 Debonair Emblems.";
            break;
        case 'TFT6_Augment_CyberneticImplants3':
            argumentName = "Cybernetic Implants III";
            argumentDescription = "Your champions holding an item gain 350 Health and 30 Attack Damage.";
            break;
        case 'TFT6_Augment_StrikerEmblem2':
            argumentName = "Striker Crown";
            argumentDescription = "Gain 2 Striker Emblems.";
            break;
        case 'TFT6_Augment_SlowAndSteady':
            argumentName = "March of Progress";
            argumentDescription = "Gain 5 bonus experience points per round. You can no longer use gold to level up.";
            break;
        case 'TFT6_Augment_Distancing3':
            argumentName = "Exiles III";
            argumentDescription = "Your units that start combat with no adjacent allies gain a 70% maximum Health shield for 8 seconds.";
            break;
        case 'TFT6_Augment_TheGoldenEgg':
            argumentName = "The Golden Egg";
            argumentDescription = "Gain a massive golden egg that hatches in 7 turns.";
            break;
        case 'TFT6_Augment_Traitless3':
            argumentName = "Built Different III";
            argumentDescription = "Your units with no Traits active gain 500 Health and 80% Attack Speed.";
            break;
        case 'TFT6_Augment_HeroEmblem2':
            argumentName = "Bodyguard Crown";
            argumentDescription = "Gain 2 Bodyguard Emblems.";
            break;
        case 'TFT6_Augment_Battlemage3':
            argumentName = "Battlemage III";
            argumentDescription = "Your units that start combat in the front 2 rows gain 50 Ability Power.";
            break;
        case 'TFT6_Augment_Weakspot3':
            argumentName = "Weakspot III";
            argumentDescription = "Your units' attacks ignore 60% of the target's Armor and reduce healing received by 50% for 5 seconds.";
            break;
        case 'TFT6_Augment_CyberneticUplink3':
            argumentName = "Cybernetic Uplink III";
            argumentDescription = "Your champions holding an item gain 350 Health and restore 4 Mana per second.";
            break;
        case 'TFT6_Augment_TreasureTrove3':
            argumentName = "Treasure Trove III";
            argumentDescription = "Gain 3 blue and 2 gray loot orb(s).";
            break;
        case 'TFT6_Augment_ScrapTrait2':
            argumentName = "Scrap Soul";
            argumentDescription = "Your team counts as having 2 additional Scraps. Gain 8 gold.";
            break;
        case 'TFT6_Augment_SniperEmblem2':
            argumentName = "Sniper Crown";
            argumentDescription = "Gain 2 Sniper Emblems.";
            break;
        case 'TFT6_Augment_Diversify3':
            argumentName = "Stand United III";
            argumentDescription = "Your units gain 5 Attack Damage and Ability Power per Trait active across your army.";
            break;
        case 'TFT6_Augment_Phalanx3':
            argumentName = "Phalanx III";
            argumentDescription = "Your units that start combat in the back 2 rows gain 50 Armor and Magic Resist.";
            break;
        case 'TFT6_Augment_AssassinEmblem2':
            argumentName = "Assassin Crown";
            argumentDescription = "Gain 2 Assassin Emblems.";
            break;
        case 'TFT6_Augment_CelestialBlessing3':
            argumentName = "Celestial Blessing III";
            argumentDescription = "Your units heal for 35% of the damage dealt by attacks and Abilities. Excess healing is converted to a shield up to 600 Health.";
            break;
        case 'TFT6_Augment_WoodlandCharm':
            argumentName = "Woodland Charm";
            argumentDescription = "At the start of combat, your highest Health Champion creates a 1800 Health copy of themself (excluding items).";
            break;
        case 'TFT6_Augment_TriForce3':
            argumentName = "Tri Force III";
            argumentDescription = "Your 3-cost units gain 333 Health, 33 starting Mana, and 33% Attack Speed.";
            break;
        case 'TFT6_Augment_ForceOfNature':
            argumentName = "New Recruit";
            argumentDescription = "Gain +1 maximum team size.";
            break;
        case 'TFT6_Augment_ArcanistEmblem2':
            argumentName = "Arcanist Crown";
            argumentDescription = "Gain 2 Arcanist Emblems.";
            break;
        case 'TFT6_Augment_MeleeStarBlade3':
            argumentName = "Knife's Edge III";
            argumentDescription = "Your units that start combat in the front 2 rows gain 55 Attack Damage.";
            break;
        case 'TFT6_Augment_MaxLevel10':
            argumentName = "Level Up!";
            argumentDescription = "Your units that start combat in the front 2 rows gain 55 Attack Damage.";
            break;
        case 'TFT6_Augment_SyndicateEmblem2':
            argumentName = "Syndicate Crown";
            argumentDescription = "Gain 2 Syndicate Emblems.";
            break;
        case 'TFT6_Augment_SocialiteShare':
            argumentName = "Share the Spotlight";
            argumentDescription = "Allies adjacent to a spotlight at the start of combat gain 100% of its bonuses. Gain a Senna.";
            break;
        case 'TFT6_Augment_Disintegrator3':
            argumentName = "Disintegrator III";
            argumentDescription = "Your units' attacks deal bonus magic damage equal to 4% of the target's maximum Health.";
            break;
        case 'TFT6_Augment_FuturePeepers2':
            argumentName = "Future Sight II";
            argumentDescription = "Know who you will fight next. Gain a Radiant Zephyr.";
            break;
        case 'TFT6_Augment_HighEndShopping':
            argumentName = "High End Shopping";
            argumentDescription = "Champions appear in your Shop as if you were 1 level higher. Gain 8 gold.";
            break;
        case 'TFT6_Augment_EnchanterTrait2':
            argumentName = "Enchanter Soul";
            argumentDescription = "Your team counts as having 2 additional Enchanters. Gain 12 gold.";
            break;
        case 'TFT6_Augment_ClockworkTrait2':
            argumentName = "Clockwork Soul";
            argumentDescription = "Your team counts as having 2 additional Clockworks. Gain 8 gold.";
            break;
        case 'TFT6_Augment_GrandGambler':
            argumentName = "High Roller";
            argumentDescription = "Gain 3 Loaded Dice and 8 gold.";
            break;
        case 'TFT6_Augment_ScholarTrait2':
            argumentName = "Scholar Soul";
            argumentDescription = "Your team counts as having 2 additional Scholars. Gain 8 gold.";
            break;
        case 'TFT6_Augment_SocialiteTrait2':
            argumentName = "Socialite Soul";
            argumentDescription = "Your team counts as having 2 additional Socialites.";
            break;
        case 'TFT6_Augment_CyberneticShell3':
            argumentName = "Cybernetic Shell III";
            argumentDescription = "Your champions holding an item gain 350 Health and 50 Armor.";
            break;
        case 'TFT6_Augment_Backfoot3':
            argumentName = "Backfoot III";
            argumentDescription = "Your units that start combat in the back 2 rows gain 45% Attack Speed.";
            break;
        case 'TFT6_Augment_ThriftShop':
            argumentName = "Wise Spending";
            argumentDescription = "Gain 4 gold. When you refresh your Shop, gain 2 experience point(s).";
            break;
        case 'TFT6_Augment_GachaAddict':
            argumentName = "Golden Ticket";
            argumentDescription = "Each time your Shop is refreshed, you have a 50% chance to gain a free refresh.";
            break;
        case 'TFT6_Augment_Featherweights3':
            argumentName = "Featherweights III";
            argumentDescription = "Your 1 and 2 cost champions gain 55% Attack Speed and Move Speed.";
            break;
        case 'TFT6_Augment_VerdantVeil':
            argumentName = "Verdant Veil";
            argumentDescription = "Your units are immune to crowd control effects for the first 15 seconds of combat.";
            break;
        case 'TFT6_Augment_MakeshiftArmor3':
            argumentName = "Makeshift Armor III";
            argumentDescription = "Your units without items equipped gain 75 Armor and Magic Resist.";
            break;
        case 'TFT6_Augment_Windfall':
            argumentName = "Windfall";
            argumentDescription = "Gain gold based on the number of augments you have now.<br> 0 = 20g, 1 = 35g, 2 = 55g";
            break;
        case 'TFT6_Augment_Electrocharge3':
            argumentName = "Electrocharge III";
            argumentDescription = "When your units receive critical strikes, they deal 105-200 (based on current Stage) magic damage to nearby enemies (1 second cooldown).";
            break;
        case 'TFT6_Augment_LudensEcho3':
            argumentName = "Luden's Echo III";
            argumentDescription = "When your units cast and deal Ability damage, the first target hit and a nearby enemy take 140-260 (based on current Stage) magic damage.";
            break;
        case 'TFT6_Augment_BandOfThieves1':
            argumentName = "Band of Thieves";
            argumentDescription = "Gain 2 Thief's Gloves.";
            break;
        case 'TFT6_Augment_ItemGrabBag2':
            argumentName = "Item Grab Bag II";
            argumentDescription = "Gain 2 random completed items and a Reforger.";
            break;
        case 'TFT6_Augment_BruteEmblem2':
            argumentName = "Bruiser Crown";
            argumentDescription = "Gain 2 Bruiser Emblems.";
            break;
        case 'TFT6_Augment_ChemtechEmblem2':
            argumentName = "Chemtech Crown";
            argumentDescription = "Gain 2 Chemtech Emblems.";
            break;
        case 'TFT6_Augment_ChallengerEmblem2':
            argumentName = "Challenger Crown";
            argumentDescription = "Gain 2 Challenger Emblems.";
            break;
        case 'TFT6_Augment_RadiantRelics':
            argumentName = "Radiant Relics";
            argumentDescription = "Open an Armory and choose 1 of 4 unique Radiant items.";
            break;
        case 'TFT6_Augment_Twins3':
            argumentName = "Double Trouble III";
            argumentDescription = "If you have exactly 2 copies of a champion on your board, they both gain 45 Attack Damage, Ability Power, Armor, and Magic Resist. When you 3-star, gain a 2-star copy.";
            break;
        case 'TFT6_Augment_TwinshotTrait2':
            argumentName = "Twinshot Soul";
            argumentDescription = "Your team counts as having 2 additional Twinshots. Gain 4 gold.";
            break;
        case 'TFT6_Augment_Meditation3':
            argumentName = "Meditation III";
            argumentDescription = "Your units without items equipped restore 10 Mana per second.";
            break;
        case 'TFT6_Augment_HextechEmblem2':
            argumentName = "Hextech Crown";
            argumentDescription = "Gain 2 Hextech Emblems.";
            break;
        case 'TFT6_Augment_BlueBattery2':
            argumentName = "Blue Battery II";
            argumentDescription = "After casting their Ability, your units restore 20 Mana.";
            break;
        case 'TFT6_Augment_MercenaryTrait2':
            argumentName = "Mercenary Soul";
            argumentDescription = "Your team counts as having 2 additional Mercenaries.";
            break;
        case 'TFT6_Augment_GoldenGifts2':
            argumentName = "Golden Gifts II";
            argumentDescription = "Gain 2 golden and 3 gray loot orb(s).";
            break;
        //Set7
        //Tier 1 (silver)
        
        //Tier 2 (gold)
        case 'TFT7_Augment_GuildEmblem':
            argumentName = 'Guild Crest';
            argumentDescription = 'Gain a Guild Emblem and a Twitch.';
            break;
        case 'TFT6_Augment_TradeSectorPlus':
            argumentName = 'Trade Sector+';
            argumentDescription = 'Gain a free Shop refresh each round. Gain 5 golds.';
            break;
        case 'TFT7_Augment_TempestEmblem':
            argumentName = 'Tempest Crest';
            argumentDescription = 'Gain a Tempest Emblem and a Qiyana.';
            break;
        case 'TFT7_Augment_AxiomArc2':
            argumentName = 'Axiom Arc II';
            argumentDescription = 'Your units gain 30 Mana on kill.';
            break;
        case 'TFT7_Augment_FirstAidKit2':
            argumentName = 'First Aid Kit II';
            argumentDescription = 'All healing and shielding on your units is increased by 35%.';
            break;
        case 'TFT7_Augment_DragonmancerInspire':
            argumentName = 'Inspire';
            argumentDescription = 'When the Dragonmancer Hero gets a takedown, champions that share a trait with the Dragonmancer Hero gain 70% Attack Speed for 3 seconds. Gain a Ashe.';
            break;
        case 'TFT7_Augment_MikaelsGift':
            argumentName = 'Better Together';
            argumentDescription = 'Aura items that buff your team have their effects increased by 33%. Gain a Locket of the Iron Solari.';
            break;
        case 'TFT7_Augment_RagewingEmblem':
            argumentName = 'Ragewing Crest';
            argumentDescription = 'Gain a Ragewing Emblem and a Kayn.';
            break;
        case 'TFT7_Augment_GuildGearUpgrades':
            argumentName = 'Gear Upgrades';
            argumentDescription = 'Guild champions holding an item gain 25 Armor and another 200% of their Guild bonus. Gain a Twitch.';
            break;
        case 'TFT7_Augment_Bloodlust1':
            argumentName = 'Combat Training I';
            argumentDescription = 'Your Champions permanently gain 1 Attack Damage every time they kill an enemy unit. Champions start with 8 Attack Damage';
            break;
        case 'TFT7_Augment_ClutteredMind':
            argumentName = 'Cluttered Mind';
            argumentDescription = 'If your bench is full at the end of a round, gain 4 experience points.';
            break;
        case 'TFT7_Augment_UrfsGrabBag1':
            argumentName = "Urf's Grab Bag I";
            argumentDescription = 'Gain 1 Spatula and 1 random item component.';
            break;
        case 'TFT7_Augment_MageEmblem':
            argumentName = "Mage Crest";
            argumentDescription = 'Gain a Mage Emblem and a Vladimir.';
            break;
        //Tier 3 (chroma)
        case 'TFT7_Augment_LivingForge':
            argumentName = 'Living Forge';
            argumentDescription = 'Gain a random Ornn item now and after every 10 player combats.';
            break;
        case 'TFT7_Augment_TomeOfTraits2':
            argumentName = 'Ancient Archives II';
            argumentDescription = 'Gain 2 Tome of Traits.';
            break;
        case 'TFT7_Augment_BruiserEmblem2':
            argumentName = 'Bruiser Crown';
            argumentDescription = 'Gain a Bruiser Emblem, a Redemption, and an Sylas.';
            break;
        case 'TFT7_Augment_GuildEmblem2':
            argumentName = 'Guild Crown';
            argumentDescription = 'Gain a Guild Emblem, a Giant Slayer and a Ryze.';
            break;
        default:
            consoleTool("error")
            break;
    }

    return {argumentName: argumentName, argumentDescription: argumentDescription}
} 