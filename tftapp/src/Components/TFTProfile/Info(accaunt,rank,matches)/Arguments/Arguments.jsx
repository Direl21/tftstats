import React from 'react';
import styleName from './Arguments.module.css'

const Arguments = (argument) => {
    let argumentsList = argument.argument.map((name, index) => {

        //tooltip's switch for arguments
        let tooltip = "";
        let description = "";
        switch (name) {
            //Tier 1
            case 'TFT6_Augment_CalculatedLoss':
                tooltip = "Calculated Loss";
                description = "After losing your combat, gain 2 gold and a free Shop refresh.";
                break;
            case 'TFT6_Augment_TomeOfTraits1':
                tooltip = "Ancient Archives";
                description = "Gain 1 Tome of Traits.";
                break;
            case 'TFT6_Augment_Dominance':
                tooltip = "Dominance";
                description = "After winning your player combat, gain 1 bonus gold for every 2 surviving units.";
                break;
            case 'TFT6_Augment_ItemGrabBag1':
                tooltip = "Item Grab Bag I";
                description = "Gain 1 random completed item.";
                break;
            case 'TFT6_Augment_TargetDummies':
                tooltip = "Phony Frontline";
                description = "Gain 2 Target Dummies.";
                break;
            case 'TFT6_Augment_HyperRoll':
                tooltip = "Hyper Roll";
                description = "If you have less than 10 gold at the end of a round, gain 2 gold.";
                break;
            case 'TFT6_Augment_PandorasItems':
                tooltip = "Pandora's Items";
                description = "Gain a random component. At the start of each round, items on your bench are randomized (excluding Tactician's Crown, Spatula, and consumables).";
                break;
            case 'TFT6_Augment_Ascension':
                tooltip = "Ascension";
                description = "After 15 seconds of combat, your units deal 50% more damage.";
                break;
            case 'TFT6_Augment_Traitless1':
                tooltip = "Built Different I";
                description = "Your units with no Traits active gain 300 Health and 60% Attack Speed.";
                break;
            case 'TFT6_Augment_CelestialBlessing1':
                tooltip = "Celestial Blessing I";
                description = "Your units heal for 12% of the damage dealt by attacks and Abilities. Excess healing is converted to a shield up to 300 Health.";
                break;
            case 'TFT6_Augment_MeleeStarBlade1':
                tooltip = "Knife's Edge I";
                description = "Your units that start combat in the front 2 rows gain 30 Attack Damage.";
                break;
            case 'TFT6_Augment_CyberneticImplants1':
                tooltip = "Cybernetic Implants I";
                description = "Your champions holding an item gain 150 Health and 10 Attack Damage.";
                break;
            case 'TFT6_Augment_Distancing':
                tooltip = "Exiles";
                description = "Your units that start combat with no adjacent allies gain a 30% maximum Health shield for 8 seconds.";
                break;
            case 'TFT6_Augment_Featherweights1':
                tooltip = "Featherweights I";
                description = "Your 1 and 2 cost champions gain 25% Attack Speed and Move Speed.";
                break;
            case 'TFT6_Augment_FirstAidKit':
                tooltip = "First Aid Kit";
                description = "All healing and shielding on your units is increased by 35%.";
                break;
            case 'TFT6_Augment_MakeshiftArmor1':
                tooltip = "Makeshift Armor I";
                description = "Your units without items equipped gain 35 Armor and Magic Resist.";
                break;
            case 'TFT6_Augment_Diversify1':
                tooltip = "Stand United I";
                description = "Your units gain 2 Attack Damage and Ability Power per Trait active across your army.";
                break;
            case 'TFT6_Augment_ThrillOfTheHunt1':
                tooltip = "Thrill of the Hunt I";
                description = "Your units heal 400 Health on kill.";
                break;
            case 'TFT6_Augment_Underdogs':
                tooltip = "Underdogs";
                description = "Whenever your team has fewer units alive than your opponent, your units regenerate 9% Health each second (maximum: 150).";
                break;
            case 'TFT6_Augment_Weakspot':
                tooltip = "Weakspot I";
                description = "Your units' attacks ignore 20% of the target's Armor and reduce healing received by 50% for 5 seconds.";
                break;
            case 'TFT6_Augment_ArcanistTrait':
                tooltip = "Arcanist Heart";
                description = "Your team counts as having 1 additional Arcanist. Gain a Swain.";
                break;
            case 'TFT6_Augment_ArcanistRunicShield1':
                tooltip = "Runic Shield I";
                description = "Arcanists start combat with a shield equal to 300% of their Ability Power for 8 seconds. Gain a Swain.";
                break;
            case 'TFT6_Augment_AssassinTrait':
                tooltip = "Assassin Heart";
                description = "Your team counts as having 1 additional Assassin. Gain a Talon.";
                break;
            case 'TFT6_Augment_AssassinCutthroat':
                tooltip = "Cutthroat";
                description = "Assassins Mana Reave the first unit they attack, increasing their maximum Mana by 50% until they cast. Gain a Talon.";
                break;
            case 'TFT6_Augment_HeroTrait':
                tooltip = "Bodyguard Heart";
                description = "Your team counts as having 1 additional Bodyguard. Gain a Blitzcrank.";
                break;
            case 'TFT6_Augment_HeroStandBehindMe':
                tooltip = "Stand Behind Me";
                description = "Bodyguards' Armor bonus is increased by 25%. At the start of combat, Bodyguards grant 100% of their Armor bonus to non-Bodyguard allies directly behind them (does not stack). Gain a Blitzcrank.";
                break;
            case 'TFT6_Augment_BruteTrait':
                tooltip = "Bruiser Heart";
                description = "Your team counts as having 1 additional Bruiser. Gain a Sejuani.";
                break;
            case 'TFT6_Augment_BrawlerHPRegen1':
                tooltip = "Shrug It Off";
                description = "Bruisers regenerate 2.50% of their maximum Health each second. Gain a Sejuani.";
                break;
            case 'TFT6_Augment_ChallengerTrait':
                tooltip = "Challenger Heart";
                description = "Your team counts as having 1 additional Challenger. Gain a Quinn.";
                break;
            case 'TFT6_Augment_ChallengerEnGarde':
                tooltip = "En Garde";
                description = "The first time an enemy is attacked by a Challenger, they are Disarmed for 2.50 seconds. Gain a Warwick.";
                break;
            case 'TFT6_Augment_ChemtechOverload1':
                tooltip = "Chemical Overload I";
                description = "Chemtechs explode on death, dealing 20% of their max Health as magic damage to enemies within 2 hexes. Gain a Warwick.";
                break;
            case 'TFT6_Augment_ChemtechTrait':
                tooltip = "Chemtech Heart";
                description = "Your team counts as having 1 additional Chemtech. Gain a Warwick.";
                break;
            case 'TFT6_Augment_ClockworkTrait':
                tooltip = "Clockwork Heart";
                description = "Your team counts as having 1 additional Clockwork. Gain a Zilean.";
                break;
            case 'TFT6_Augment_EnchanterTrait':
                tooltip = "Enchanter Heart";
                description = "Your team counts as having 1 additional Enchanter. Gain a Lulu.";
                break;
            case 'TFT6_Augment_EnchanterArdentCenser':
                tooltip = "Ardent Censer";
                description = "Allies healed or shielded by Enchanters gain 45% stacking Attack Speed for the rest of combat (maximum once every 3 seconds). Gain a Lulu.";
                break;
            case 'TFT6_Augment_EnforcerTrait':
                tooltip = "Enforcer Heart";
                description = "Your team counts as having 1 additional Enforcer. Gain a Sejuani.";
                break;
            case 'TFT6_Augment_InnovatorSelfRepair':
                tooltip = "Self Repair";
                description = "When the Innovation dies, it will become untargetable and repair itself if an Innovator is still alive. Gain a Zilean.";
                break;
            case 'TFT6_Augment_MercenaryTrait':
                tooltip = "Mercenary Heart";
                description = "Your team counts as having 1 additional Mercenary.";
                break;
            case 'TFT6_Augment_MercenaryPirates':
                tooltip = "Pirates";
                description = "Mercenary units have a 66% chance to drop 1 gold when they kill an enemy. Gain a Quinn.";
                break;
            case 'TFT6_Augment_ExperimentalTrait':
                tooltip = "Mutant Heart";
                description = "Your team counts as having 1 additional Mutant. Gain a Rek'Sai.";
                break;
            case 'TFT6_Augment_MutantUnstableEvolution':
                tooltip = "Unstable Evolution";
                description = "Mutants randomly gain one of the following when they reach 2 star: 500 Health, 30% Attack Speed, 30 Attack Damage, or 30 Ability Power. These bonuses stack. Gain a Rek'Sai.";
                break;
            case 'TFT6_Augment_ScholarTrait':
                tooltip = "Scholar Heart";
                description = "Your team counts as having 1 additional Scholar. Gain a Zyra.";
                break;
            case 'TFT6_Augment_ScholarLearning':
                tooltip = "Lifelong Learning";
                description = "Scholars permanently gain 2 Ability Power after each combat, and an additional 3 if they survived. Gain a Syndra.";
                break;
            case 'TFT6_Augment_ScrapTrait':
                tooltip = "Scrap Heart";
                description = "Your team counts as having 1 additional Scrap. Gain a Blitzcrank.";
                break;
            case 'TFT6_Augment_SniperTrait':
                tooltip = "Sniper Heart";
                description = "Your team counts as having 1 additional Sniper. Gain an Ashe.";
                break;
            case 'TFT6_Augment_SocialiteDuet':
                tooltip = "Duet";
                description = "Summon 1 additional Socialite spotlight. Spotlighted units gain 200 Health. Gain a Senna.";
                break;
            case 'TFT6_Augment_SocialiteTrait':
                tooltip = "Socialite Heart";
                description = "Your team counts as having 1 additional Socialite.";
                break;
            case 'TFT6_Augment_SyndicateTrait':
                tooltip = "Syndicate Heart";
                description = "Your team counts as having 1 additional Syndicate. Gain a Zyra.";
                break;
            case 'TFT6_Augment_SyndicateOneForAll':
                tooltip = "One For All";
                description = "When your Syndicates die, they grant your other Syndicates 15 Attack Damage and Ability Power. Gain an Ashe.";
                break;
            case 'TFT6_Augment_SyndicatePayday':
                tooltip = "Payday";
                description = "After winning your combat, gain 1 bonus gold for each surviving Syndicate. Gain an Ashe.";
                break;
            case 'TFT6_Augment_TwinshotTrait':
                tooltip = "Twinshot Heart";
                description = "Your team counts as having 1 additional Twinshot. Gain a Corki.";
                break;
            case 'TFT6_Augment_TreasureTrove1':
                tooltip = "Treasure Trove I";
                description = "Gain 1 blue and 1 gray loot orb(s).";
                break;
            case 'TFT6_Augment_Recombobulator':
                tooltip = "Recombobulator";
                description = "Champions on your board permanently transform into random champions that cost 1 more. Gain 2 Magnetic Removers.";
                break;
            case 'TFT6_Augment_Keepers1':
                tooltip = "Keepers I";
                description = "At the start of combat, your units grant adjacent allies a 160 health shield for 8 seconds.";
                break;
            case 'TFT6_Augment_Electrocharge1':
                tooltip = "Electrocharge I";
                description = "When your units receive critical strikes, they deal 60-105 (based on current Stage) magic damage to nearby enemies (1 second cooldown).";
                break;
            case 'TFT6_Augment_Disintegrator1':
                tooltip = "Disintegrator I";
                description = "Your units' attacks deal bonus magic damage equal to 1.50% of the target's maximum Health.";
                break;
            case 'TFT6_Augment_LudensEcho1':
                tooltip = "Luden's Echo I";
                description = "When your units cast and deal Ability damage, the first target hit and a nearby enemy take 70-130 (based on current Stage) magic damage.";
                break;
            case 'TFT6_Augment_Backfoot1':
                tooltip = "Backfoot I";
                description = "Your units that start combat in the back 2 rows gain 20% Attack Speed.";
                break;
            case 'TFT6_Augment_Phalanx1':
                tooltip = "Phalanx I";
                description = "Your units that start combat in the back 2 rows gain 25 Armor and Magic Resist.";
                break;
            case 'TFT6_Augment_Battlemage1':
                tooltip = "Battlemage I";
                description = "Your units that start combat in the front 2 rows gain 25 Ability Power.";
                break;
            case 'TFT6_Augment_Meditation1':
                tooltip = "Meditation I";
                description = "Your units without items equipped restore 5 Mana per second.";
                break;
            case 'TFT6_Augment_CyberneticUplink1':
                tooltip = "Cybernetic Uplink I";
                description = "Your champions holding an item gain 150 Health and restore 2 Mana per second.";
                break;
            case 'TFT6_Augment_CyberneticShell1':
                tooltip = "Cybernetic Shell I";
                description = "Your champions holding an item gain 150 Health and 25 Armor.";
                break;
            case 'TFT6_Augment_SecondWind1':
                tooltip = "Second Wind I";
                description = "After 10 seconds of combat, your units heal 50% of their missing Health.";
                break;
            case 'TFT6_Augment_Twins1':
                tooltip = "Double Trouble I";
                description = "If you have exactly 2 copies of a champion on your board, they both gain 25 Attack Damage, Ability Power, Armor, and Magic Resist. When you 3-star, gain a 2-star copy.";
                break;
            case 'TFT6_Augment_TriForce1':
                tooltip = "Tri Force I";
                description = "Your 3-cost units gain 133 Health, 13 starting Mana, and 13% Attack Speed.";
                break;
            case 'TFT6_Augment_BlueBattery1':
                tooltip = "Blue Battery I";
                description = "After casting their Ability, your units restore 10 Mana.";
                break;
            case 'TFT6_Augment_EnforcerSwiftJustice':
                tooltip = "True Justice";
                description = "Your Enforcers deal true damage to enemies below 80% Health. Gain a Sejuani.";
                break;
            case 'TFT6_Augment_DebonairTrait':
                tooltip = "Debonair Heart";
                description = "Your team counts as having 1 additional Debonair. Gain a Talon.";
                break;
            case 'TFT6_Augment_HextechStoredPower':
                tooltip = "Stored Power";
                description = "Your Hextech champions permanently gain 1 Ability Power each time they are hit by your Hexcore's pulses. Gain a Swain.";
                break;
            case 'TFT6_Augment_HextechHexnova':
                tooltip = "Hexnova";
                description = "The first time a Hextech champion drops below 60% Health, they increase nearby enemies' maximum Mana by 50% until they cast. Gain a Nocturne.";
                break;
            case 'TFT6_Augment_StrikerOverpower':
                tooltip = "Overpower";
                description = "After every 2 attacks, Strikers gain 75% Critical Strike Chance for their next attack. Gain a Rek'sai.";
                break;
            case 'TFT6_Augment_StrikerTrait':
                tooltip = "Striker Heart";
                description = "Your team counts as having 1 additional Striker. Gain a Rek'Sai.";
                break;
            case 'TFT6_Augment_ChallengerForAllUnits':
                tooltip = "Challenger Unity";
                description = "The Challenger trait grants its bonuses to all of your Champions.This does not increase your number of Challengers. Gain a Quinn.";
                break;
            case 'TFT6_Augment_TinyTitans':
                tooltip = "Tiny Titans";
                description = "Your Tactician heals 35 Health, grows larger, and has 135 maximum Health.";
                break;
            case 'TFT6_Augment_SniperNest':
                tooltip = "Sniper's Nest";
                description = "Snipers gain +8% damage for each round fought from the same starting hex (Maximum +32%). Gain an Ashe.";
                break;
            case 'TFT6_Augment_DebonairIrresistible':
                tooltip = "Irresistible Charm";
                description = "Debonair champions take 15% less damage. Gain a Leona.";
                break;
            //Tier 2
            case 'TFT6_Augment_ClockworkBrokenStopwatch':
                tooltip = "Broken Stopwatch";
                description = "5 seconds into combat, all enemies and non-Clockwork units are frozen in time for 4 seconds. Gain a Zilean.";
                break;
            case 'TFT6_Augment_Traitless2':
                tooltip = "Built Different II";
                description = "Your units with no Traits active gain 400 Health and 70% Attack Speed.";
                break;
            case 'TFT6_Augment_CyberneticUplink2':
                tooltip = "Cybernetic Uplink II";
                description = "Your champions holding an item gain 250 Health and restore 3 Mana per second.";
                break;
            case 'TFT6_Augment_ChemtechOverload2':
                tooltip = "Chemical Overload II";
                description = "Chemtechs explode on death, dealing 30% of their max Health as magic damage to enemies within 2 hexes. Gain a Zac.";
                break;
            case 'TFT6_Augment_ColossusArmorPlating':
                tooltip = "Armor Plating";
                description = "Colossus become invulnerable for 3 seconds when their Health drops to 50%. Gain a Cho'Gath.";
                break;
            case 'TFT6_Augment_Diversify2':
                tooltip = "Stand United II";
                description = "Your units gain 3 Attack Damage and Ability Power per Trait active across your army.";
                break;
            case 'TFT6_Augment_InnovatorTrait':
                tooltip = "Innovator Heart";
                description = "Your team counts as having 1 additional Innovator.";
                break;
            case 'TFT6_Augment_CyberneticImplants2':
                tooltip = "Cybernetic Implants II";
                description = "Your champions holding an item gain 250 Health and 20 Attack Damage.";
                break;
            case 'TFT6_Augment_ScrapEmblem':
                tooltip = "Scrap Crest";
                description = "Gain a Scrap Emblem and a Blitzcrank.";
                break;
            case 'TFT6_Augment_Archangel2':
                tooltip = "Archangel's Embrace";
                description = "Upon casting their Ability, your units gain Ability Power equal to 25% of their maximum Mana.";
                break;
            case 'TFT6_Augment_CyberneticShell2':
                tooltip = "Cybernetic Shell II";
                description = "Your champions holding an item gain 250 Health and 35 Armor.";
                break;
            case 'TFT6_Augment_TitanicForce':
                tooltip = "Titanic Force";
                description = "Your units with more than 1400 maximum Health gain Attack Damage equal to 3% of their maximum Health.";
                break;
            case 'TFT6_Augment_ClearMind':
                tooltip = "Clear Mind";
                description = "If you have no champions on your bench at the end of a round, gain 3 experience points.";
                break;
            case 'TFT6_Augment_BinaryAirdrop':
                tooltip = "Binary Airdrop";
                description = "Your champions equipped with 2 items temporarily gain a random completed item at the start of combat.";
                break;
            case 'TFT6_Augment_Electrocharge2':
                tooltip = "Electrocharge II";
                description = "When your units receive critical strikes, they deal 85-145 (based on current Stage) magic damage to nearby enemies (1 second cooldown).";
                break;
            case 'TFT6_Augment_Weakspot2':
                tooltip = "Weakspot II";
                description = "Your units' attacks ignore 40% of the target's Armor and reduce healing received by 50% for 5 seconds.";
                break;
            case 'TFT6_Augment_PortableForge':
                tooltip = "Portable Forge";
                description = "Open an Armory and choose 1 of 3 unique Artifacts crafted by Ornn.";
                break;
            case 'TFT6_Augment_TriForce2':
                tooltip = "Tri Force II";
                description = "Your 3-cost units gain 233 Health, 23 starting Mana, and 23% Attack Speed.";
                break;
            case 'TFT6_Augment_Distancing2':
                tooltip = "Exiles II";
                description = "Your units that start combat with no adjacent allies gain a 45% maximum Health shield for 8 seconds.";
                break;
            case 'TFT6_Augment_CelestialBlessing2':
                tooltip = "Celestial Blessing II";
                description = "Your units heal for 20% of the damage dealt by attacks and Abilities. Excess healing is converted to a shield up to 450 Health.";
                break;
            case 'TFT6_Augment_AssassinSmokeBomb':
                tooltip = "Smoke Bomb";
                description = "The first time an Assassin drops to 70% health, they briefly enter stealth, becoming untargetable and shedding all negative effects. Any excess damage is reduced by 60%. Gain a Talon.";
                break;
            case 'TFT6_Augment_Disintegrator2':
                tooltip = "Disintegrator II";
                description = "Your units' attacks deal bonus magic damage equal to 2.50% of the target's maximum Health.";
                break;
            case 'TFT6_Augment_ArcanistRunicShield2':
                tooltip = "Runic Shield II";
                description = "Arcanists start combat with a shield equal to 450% of their Ability Power for 8 seconds. Gain a Vex.";
                break;
            case 'TFT6_Augment_ArcanistSpellBlade':
                tooltip = "Spell Blade";
                description = "After casting their Ability, Arcanists' next attack deals bonus magic damage equal to 180% of their Ability Power. Gain a Swain.";
                break;
            case 'TFT6_Augment_Backfoot2':
                tooltip = "Backfoot II";
                description = "Your units that start combat in the back 2 rows gain 30% Attack Speed.";
                break;
            case 'TFT6_Augment_Phalanx2':
                tooltip = "Phalanx II";
                description = "Your units that start combat in the back 2 rows gain 35 Armor and Magic Resist.";
                break;
            case 'TFT6_Augment_DebonairEmblem':
                tooltip = "Debonair Crest";
                description = "Gain a Debonair Emblem and a Syndra.";
                break;
            case 'TFT6_Augment_SyndicateEmblem':
                tooltip = "Syndicate Crest";
                description = "Gain a Syndicate Emblem and a Zyra.";
                break;
            case 'TFT6_Augment_ScrapDumpsterDiving':
                tooltip = "Junkyard";
                description = "Gain a random component every 4 combat rounds with the Scrap Trait active. Gain an Ezreal.";
                break;
            case 'TFT6_Augment_SunfireBoard':
                tooltip = "Sunfire Board";
                description = "At the start of combat, burn all enemies for 20% of their maximum Health over 10 seconds and reduce healing received by 50%.";
                break;
            case 'TFT6_Augment_SecondWind2':
                tooltip = "Second Wind II";
                description = "After 10 seconds of combat, your units heal 75% of their missing Health.";
                break;
            case 'TFT6_Augment_MakeshiftArmor2':
                tooltip = "Makeshift Armor II";
                description = "Your units without items equipped gain 55 Armor and Magic Resist.";
                break;
            case 'TFT6_Augment_TreasureTrove2':
                tooltip = "Treasure Trove II";
                description = "Gain 1 blue and 2 gray loot orb(s).";
                break;
            case 'TFT6_Augment_ExperimentalEmblem':
                tooltip = "Mutant Crest";
                description = "Gain a Mutant Emblem and a Kassadin.";
                break;
            case 'TFT6_Augment_HeroEmblem':
                tooltip = "Bodyguard Crest";
                description = "Gain a Bodyguard Emblem and a Darius.";
                break;
            case 'TFT6_Augment_LudensEcho2':
                tooltip = "Luden's Echo II";
                description = "When your units cast and deal Ability damage, the first target hit and a nearby enemy take 100-175 (based on current Stage) magic damage.";
                break;
            case 'TFT6_Augment_Battlemage2':
                tooltip = "Battlemage II";
                description = "Your units that start combat in the front 2 rows gain 35 Ability Power.";
                break;
            case 'TFT6_Augment_ThreesCompany':
                tooltip = "Three's Company";
                description = "Gain 4% random 3-cost champions.";
                break;
            case 'TFT6_Augment_StrikerEmblem':
                tooltip = "Striker Crest";
                description = "Gain a Striker Emblem and a Rek'sai.";
                break;
            case 'TFT6_Augment_JeweledLotus':
                tooltip = "Jeweled Lotus";
                description = "Magic and true damage from your units' Abilities can critically strike. Your units gain 25% Critical Strike Chance.";
                break;
            case 'TFT6_Augment_StrikerConcussiveBlows':
                tooltip = "Concussive Blows";
                description = "Striker's critical strikes stun their target for 1.50 second(s). Each target can only be stunned once every 6 seconds. Gain a Rek'Sai.";
                break;
            case 'TFT6_Augment_ThievingRascals':
                tooltip = "Thieving Rascals";
                description = "Free Yordles from the portal have a 33% chance to arrive holding an item component. Gain a Lulu.";
                break;
            case 'TFT6_Augment_TrueTwos':
                tooltip = "True Twos";
                description = "Gain 2% random 2-star 2-cost units.";
                break;
            case 'TFT6_Augment_FourScore':
                tooltip = "Four Score";
                description = "Gain 4% random 4-cost champions.";
                break;
            case 'TFT6_Augment_AssassinEmblem':
                tooltip = "Assassin Crest";
                description = "Gain an Assassin Emblem and a Talon.";
                break;
            case 'TFT6_Augment_ComponentGrabBag':
                tooltip = "Component Grab Bag";
                description = "Gain 3 random item components.";
                break;
            case 'TFT6_Augment_YordleSoSmall':
                tooltip = "So Small";
                description = "Yordles gain 25% Dodge Chance. Gain a Corki.";
                break;
            case 'TFT6_Augment_FuturePeepers':
                tooltip = "Future Sight";
                description = "Know who you will fight next. Gain a Zephyr.";
                break;
            case 'TFT6_Augment_MeleeStarBlade2':
                tooltip = "Knife's Edge II";
                description = "Your units that start combat in the front 2 rows gain 40 Attack Damage.";
                break;
            case 'TFT6_Augment_RichGetRicher':
                tooltip = "Rich Get Richer";
                description = "Gain 14 gold. Your maximum interest is increased to 7.";
                break;
            case 'TFT6_Augment_DebonairVVIP':
                tooltip = "Very VIP";
                description = "When an ally dies, they grant the Debonair VIP 30% of their maximum Health for the rest of combat. Gain a Syndra.";
                break;
            case 'TFT6_Augment_Meditation2':
                tooltip = "Meditation II";
                description = "Your units without items equipped restore 7 Mana per second.";
                break;
            case 'TFT6_Augment_BruteEmblem':
                tooltip = "Bruiser Crest";
                description = "Gain a Bruiser Emblem and a Sejuani.";
                break;
            case 'TFT6_Augment_ChemtechInjection':
                tooltip = "Instant Injection";
                description = "Chemtechs now additionally trigger their bonuses at the start of combat. Gain a Warwick.";
                break;
            case 'TFT6_Augment_ArcanistEmblem':
                tooltip = "Arcane Crest";
                description = "Gain an Arcanist Emblem and a Swain.";
                break;
            case 'TFT6_Augment_GoldenGifts1':
                tooltip = "Golden Gifts I";
                description = "Gain 1 golden and 2 gray loot orb(s).";
                break;
            case 'TFT6_Augment_SniperSharpshooter':
                tooltip = "Sharpshooter";
                description = "Twinshot's ranged attacks and Abilities can bounce once, dealing 66% less damage. Gain a Corki.";
                break;
            case 'TFT6_Augment_ChemtechEmblem':
                tooltip = "Chemtech Crest";
                description = "Gain a Chemtech Emblem and a Warwick.";
                break;
            case 'TFT6_Augment_Twins2':
                tooltip = "Double Trouble II";
                description = "If you have exactly 2 copies of a champion on your board, they both gain 35 Attack Damage, Ability Power, Armor, and Magic Resist. When you 3-star, gain a 2-star copy.";
                break;
            case 'TFT6_Augment_SniperEmblem':
                tooltip = "Sniper Crest";
                description = "Gain a Sniper Emblem and an Ashe.";
                break;
            case 'TFT6_Augment_Keepers2':
                tooltip = "Keepers II";
                description = "At the start of combat, your units grant adjacent allies a 240 health shield for 8 seconds.";
                break;
            case 'TFT6_Augment_ThrillOfTheHunt2':
                tooltip = "Thrill of the Hunt II";
                description = "Your units heal 700 Health on kill.";
                break;
            case 'TFT6_Augment_SalvageBin':
                tooltip = "Salvage Bin";
                description = "Gain a random completed item. Selling champions breaks apart their full items into components (excluding Tactician's Crown).";
                break;
            case 'TFT6_Augment_MercenaryGoldReserves':
                tooltip = "Gold Reserves";
                description = "Mercenaries deal 2% more damage per 1 gold you have (Maximum +50%). Gain a Quinn.";
                break;
            case 'TFT6_Augment_TradeSector':
                tooltip = "Trade Sector";
                description = "Gain a free Shop refresh each round.";
                break;
            case 'TFT6_Augment_Featherweights2':
                tooltip = "Featherweights II";
                description = "Your 1 and 2 cost champions gain 35% Attack Speed and Move Speed.";
                break;
            case 'TFT6_Augment_ChallengerEmblem':
                tooltip = "Challenger Crest";
                description = "Gain a Challenger Emblem and a Quinn.";
                break;
            case 'TFT6_Augment_MetabolicAccelerator':
                tooltip = "Metabolic Accelerator";
                description = "Your Tactician moves faster and heals 2 Health after a PvP round.";
                break;
            case 'TFT6_Augment_MercenaryEmblem':
                tooltip = "Mercenary Crest";
                description = "Gain a Mercenary Emblem and 3 gold.";
                break;
            case 'TFT6_Augment_WoodlandTrinket':
                tooltip = "Woodland Trinket";
                description = "At the start of combat, your highest Attack Speed champion creates two 360 Health copies of themself (excluding items).";
                break;
            case 'TFT6_Augment_HighFive':
                tooltip = "High Five";
                description = "Gain 5% random 5-cost champions.";
                break;
            case 'TFT6_Augment_ScholarEmblem':
                tooltip = "Scholar Crest";
                description = "Gain a Scholar Emblem and a Zyra.";
                break;
            case 'TFT6_Augment_HextechTrait':
                tooltip = "Hextech Heart";
                description = "Your team counts as having 1 additional Hextech. Gain a Swain.";
                break;
            case 'TFT6_Augment_ChemtechForAllUnits':
                tooltip = "Chemtech Unity";
                description = "The Chemtech trait grants its bonuses to all of your Champions. This does not increase your number of Chemtech units. Gain a Warwick.";
                break;
            //Tier 3
            case 'TFT6_Augment_ExperimentalEmblem2':
                tooltip = "Mutant Crown";
                description = "Gain 2 Mutant Emblems.";
                break;
            case 'TFT6_Augment_DebonairEmblem2':
                tooltip = "Debonair Crown";
                description = "Gain 2 Debonair Emblems.";
                break;
            case 'TFT6_Augment_CyberneticImplants3':
                tooltip = "Cybernetic Implants III";
                description = "Your champions holding an item gain 350 Health and 30 Attack Damage.";
                break;
            case 'TFT6_Augment_StrikerEmblem2':
                tooltip = "Striker Crown";
                description = "Gain 2 Striker Emblems.";
                break;
            case 'TFT6_Augment_SlowAndSteady':
                tooltip = "March of Progress";
                description = "Gain 5 bonus experience points per round. You can no longer use gold to level up.";
                break;
            case 'TFT6_Augment_Distancing3':
                tooltip = "Exiles III";
                description = "Your units that start combat with no adjacent allies gain a 70% maximum Health shield for 8 seconds.";
                break;
            case 'TFT6_Augment_TheGoldenEgg':
                tooltip = "The Golden Egg";
                description = "Gain a massive golden egg that hatches in 7 turns.";
                break;
            case 'TFT6_Augment_Traitless3':
                tooltip = "Built Different III";
                description = "Your units with no Traits active gain 500 Health and 80% Attack Speed.";
                break;
            case 'TFT6_Augment_HeroEmblem2':
                tooltip = "Bodyguard Crown";
                description = "Gain 2 Bodyguard Emblems.";
                break;
            case 'TFT6_Augment_Battlemage3':
                tooltip = "Battlemage III";
                description = "Your units that start combat in the front 2 rows gain 50 Ability Power.";
                break;
            case 'TFT6_Augment_Weakspot3':
                tooltip = "Weakspot III";
                description = "Your units' attacks ignore 60% of the target's Armor and reduce healing received by 50% for 5 seconds.";
                break;
            case 'TFT6_Augment_CyberneticUplink3':
                tooltip = "Cybernetic Uplink III";
                description = "Your champions holding an item gain 350 Health and restore 4 Mana per second.";
                break;
            case 'TFT6_Augment_TreasureTrove3':
                tooltip = "Treasure Trove III";
                description = "Gain 3 blue and 2 gray loot orb(s).";
                break;
            case 'TFT6_Augment_ScrapTrait2':
                tooltip = "Scrap Soul";
                description = "Your team counts as having 2 additional Scraps. Gain 8 gold.";
                break;
            case 'TFT6_Augment_SniperEmblem2':
                tooltip = "Sniper Crown";
                description = "Gain 2 Sniper Emblems.";
                break;
            case 'TFT6_Augment_Diversify3':
                tooltip = "Stand United III";
                description = "Your units gain 5 Attack Damage and Ability Power per Trait active across your army.";
                break;
            case 'TFT6_Augment_Phalanx3':
                tooltip = "Phalanx III";
                description = "Your units that start combat in the back 2 rows gain 50 Armor and Magic Resist.";
                break;
            case 'TFT6_Augment_AssassinEmblem2':
                tooltip = "Assassin Crown";
                description = "Gain 2 Assassin Emblems.";
                break;
            case 'TFT6_Augment_CelestialBlessing3':
                tooltip = "Celestial Blessing III";
                description = "Your units heal for 35% of the damage dealt by attacks and Abilities. Excess healing is converted to a shield up to 600 Health.";
                break;
            case 'TFT6_Augment_WoodlandCharm':
                tooltip = "Woodland Charm";
                description = "At the start of combat, your highest Health Champion creates a 1800 Health copy of themself (excluding items).";
                break;
            case 'TFT6_Augment_TriForce3':
                tooltip = "Tri Force III";
                description = "Your 3-cost units gain 333 Health, 33 starting Mana, and 33% Attack Speed.";
                break;
            case 'TFT6_Augment_ForceOfNature':
                tooltip = "New Recruit";
                description = "Gain +1 maximum team size.";
                break;
            case 'TFT6_Augment_ArcanistEmblem2':
                tooltip = "Arcanist Crown";
                description = "Gain 2 Arcanist Emblems.";
                break;
            case 'TFT6_Augment_MeleeStarBlade3':
                tooltip = "Knife's Edge III";
                description = "Your units that start combat in the front 2 rows gain 55 Attack Damage.";
                break;
            case 'TFT6_Augment_MaxLevel10':
                tooltip = "Level Up!";
                description = "Your units that start combat in the front 2 rows gain 55 Attack Damage.";
                break;
            case 'TFT6_Augment_SyndicateEmblem2':
                tooltip = "Syndicate Crown";
                description = "Gain 2 Syndicate Emblems.";
                break;
            case 'TFT6_Augment_SocialiteShare':
                tooltip = "Share the Spotlight";
                description = "Allies adjacent to a spotlight at the start of combat gain 100% of its bonuses. Gain a Senna.";
                break;
            case 'TFT6_Augment_Disintegrator3':
                tooltip = "Disintegrator III";
                description = "Your units' attacks deal bonus magic damage equal to 4% of the target's maximum Health.";
                break;
            case 'TFT6_Augment_FuturePeepers2':
                tooltip = "Future Sight II";
                description = "Know who you will fight next. Gain a Radiant Zephyr.";
                break;
            case 'TFT6_Augment_HighEndShopping':
                tooltip = "High End Shopping";
                description = "Champions appear in your Shop as if you were 1 level higher. Gain 8 gold.";
                break;
            case 'TFT6_Augment_EnchanterTrait2':
                tooltip = "Enchanter Soul";
                description = "Your team counts as having 2 additional Enchanters. Gain 12 gold.";
                break;
            case 'TFT6_Augment_ClockworkTrait2':
                tooltip = "Clockwork Soul";
                description = "Your team counts as having 2 additional Clockworks. Gain 8 gold.";
                break;
            case 'TFT6_Augment_GrandGambler':
                tooltip = "High Roller";
                description = "Gain 3 Loaded Dice and 8 gold.";
                break;
            case 'TFT6_Augment_ScholarTrait2':
                tooltip = "Scholar Soul";
                description = "Your team counts as having 2 additional Scholars. Gain 8 gold.";
                break;
            case 'TFT6_Augment_SocialiteTrait2':
                tooltip = "Socialite Soul";
                description = "Your team counts as having 2 additional Socialites.";
                break;
            case 'TFT6_Augment_CyberneticShell3':
                tooltip = "Cybernetic Shell III";
                description = "Your champions holding an item gain 350 Health and 50 Armor.";
                break;
            case 'TFT6_Augment_Backfoot3':
                tooltip = "Backfoot III";
                description = "Your units that start combat in the back 2 rows gain 45% Attack Speed.";
                break;
            case 'TFT6_Augment_ThriftShop':
                tooltip = "Wise Spending";
                description = "Gain 4 gold. When you refresh your Shop, gain 2 experience point(s).";
                break;
            case 'TFT6_Augment_GachaAddict':
                tooltip = "Golden Ticket";
                description = "Each time your Shop is refreshed, you have a 50% chance to gain a free refresh.";
                break;
            case 'TFT6_Augment_Featherweights3':
                tooltip = "Featherweights III";
                description = "Your 1 and 2 cost champions gain 55% Attack Speed and Move Speed.";
                break;
            case 'TFT6_Augment_VerdantVeil':
                tooltip = "Verdant Veil";
                description = "Your units are immune to crowd control effects for the first 15 seconds of combat.";
                break;
            case 'TFT6_Augment_MakeshiftArmor3':
                tooltip = "Makeshift Armor III";
                description = "Your units without items equipped gain 75 Armor and Magic Resist.";
                break;
            case 'TFT6_Augment_Windfall':
                tooltip = "Windfall";
                description = "Gain gold based on the number of augments you have now.<br> 0 = 20g, 1 = 35g, 2 = 55g";
                break;
            case 'TFT6_Augment_Electrocharge3':
                tooltip = "Electrocharge III";
                description = "When your units receive critical strikes, they deal 105-200 (based on current Stage) magic damage to nearby enemies (1 second cooldown).";
                break;
            case 'TFT6_Augment_LudensEcho3':
                tooltip = "Luden's Echo III";
                description = "When your units cast and deal Ability damage, the first target hit and a nearby enemy take 140-260 (based on current Stage) magic damage.";
                break;
            case 'TFT6_Augment_BandOfThieves1':
                tooltip = "Band of Thieves";
                description = "Gain 2 Thief's Gloves.";
                break;
            case 'TFT6_Augment_ItemGrabBag2':
                tooltip = "Item Grab Bag II";
                description = "Gain 2 random completed items and a Reforger.";
                break;
            case 'TFT6_Augment_BruteEmblem2':
                tooltip = "Bruiser Crown";
                description = "Gain 2 Bruiser Emblems.";
                break;
            case 'TFT6_Augment_ChemtechEmblem2':
                tooltip = "Chemtech Crown";
                description = "Gain 2 Chemtech Emblems.";
                break;
            case 'TFT6_Augment_ChallengerEmblem2':
                tooltip = "Challenger Crown";
                description = "Gain 2 Challenger Emblems.";
                break;
            case 'TFT6_Augment_RadiantRelics':
                tooltip = "Radiant Relics";
                description = "Open an Armory and choose 1 of 4 unique Radiant items.";
                break;
            case 'TFT6_Augment_Twins3':
                tooltip = "Double Trouble III";
                description = "If you have exactly 2 copies of a champion on your board, they both gain 45 Attack Damage, Ability Power, Armor, and Magic Resist. When you 3-star, gain a 2-star copy.";
                break;
            case 'TFT6_Augment_TwinshotTrait2':
                tooltip = "Twinshot Soul";
                description = "Your team counts as having 2 additional Twinshots. Gain 4 gold.";
                break;
            case 'TFT6_Augment_Meditation3':
                tooltip = "Meditation III";
                description = "Your units without items equipped restore 10 Mana per second.";
                break;
            case 'TFT6_Augment_HextechEmblem2':
                tooltip = "Hextech Crown";
                description = "Gain 2 Hextech Emblems.";
                break;
            case 'TFT6_Augment_BlueBattery2':
                tooltip = "Blue Battery II";
                description = "After casting their Ability, your units restore 20 Mana.";
                break;
            case 'TFT6_Augment_MercenaryTrait2':
                tooltip = "Mercenary Soul";
                description = "Your team counts as having 2 additional Mercenaries.";
                break;
            case 'TFT6_Augment_GoldenGifts2':
                tooltip = "Golden Gifts II";
                description = "Gain 2 golden and 3 gray loot orb(s).";
                break;
            default:
                console.log("error")
                break
        }
        let argument_tooltip = `<span class="${styleName.tooltipName}">`+ tooltip + `</span>`;
        //doble class and item icon for tooltip
        argument_tooltip += `<span key=${index} class="${styleName.tooltipDescription}" >${description}</span>`
        
        return (
            <span key={index} data-tip={`${argument_tooltip}`} data-for='tooltipargumentname' className={styleName.argumentIcon} >
                <img alt='' src={`../../../../Assets/arguments/${name}.png`} />
            </span>
        )
    })
    return argumentsList;
};

export default Arguments