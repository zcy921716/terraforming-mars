
import { IActionCard } from "../../ICard";
import { Tags } from "../../Tags";
import { Player } from "../../../Player";
import { CorporationCard } from "../../corporation/CorporationCard";
import { OrOptions } from "../../../inputs/OrOptions";
import { SelectOption } from "../../../inputs/SelectOption";
import { Resources } from "../../../Resources";
import { CardName } from "../../../CardName";

export class _RobinsonIndustries_ implements IActionCard, CorporationCard {
    public name: CardName = CardName._ROBINSON_INDUSTRIES_;
    public tags: Array<Tags> = [];
    public startingMegaCredits: number = 47;
    public play() {
        return undefined;
    }
    public canAct(player: Player): boolean {
        return player.canAfford(2); 
    }
    public action(player: Player) {
        let minimum = player.getProduction(Resources.MEGACREDITS);
        let lowest: Array<SelectOption> = [new SelectOption("Increase MC production 1 step", () => {
            player.setProduction(Resources.MEGACREDITS);
            player.megaCredits -= 2;
            return undefined;
        })];
        if (player.getProduction(Resources.STEEL) < minimum) {
            lowest = [];
            minimum = player.getProduction(Resources.STEEL);
        }
        if (player.getProduction(Resources.STEEL) === minimum) {
            lowest.push(new SelectOption("Increase steel production 1 step", () => {
                player.setProduction(Resources.STEEL);
                player.megaCredits -= 2;
                return undefined;
            }));
        }
        if (player.getProduction(Resources.TITANIUM) < minimum) {
            lowest = [];
            minimum = player.getProduction(Resources.TITANIUM);
        }
        if (player.getProduction(Resources.TITANIUM) === minimum) {
            lowest.push(new SelectOption("Increase titanium production 1 step", () => {
                player.setProduction(Resources.TITANIUM);
                player.megaCredits -= 2;
                return undefined;
            }));
        }
        if (player.getProduction(Resources.PLANTS) < minimum) {
            lowest = [];
            minimum = player.getProduction(Resources.PLANTS);
        }
        if (player.getProduction(Resources.PLANTS) === minimum) {
            lowest.push(new SelectOption("Increase plant production 1 step", () => {
                player.setProduction(Resources.PLANTS);
                player.megaCredits -= 2;
                return undefined;
            }));
        }
        if (player.getProduction(Resources.ENERGY) < minimum) {
            lowest = [];
            minimum = player.getProduction(Resources.ENERGY);
        }
        if (player.getProduction(Resources.ENERGY) === minimum) {
            lowest.push(new SelectOption("Increase energy production 1 step", () => {
                player.setProduction(Resources.ENERGY);
                player.megaCredits -= 2;
                return undefined;
            }));
        }
        if (player.getProduction(Resources.HEAT) < minimum) {
            lowest = [];
            minimum = player.getProduction(Resources.HEAT);
        }
        if (player.getProduction(Resources.HEAT) === minimum) {
            lowest.push(new SelectOption("Increase heat production 1 step", () => {
                player.setProduction(Resources.HEAT);
                player.megaCredits -= 2;
                return undefined;
            }));
        }
        const result = new OrOptions();
        result.options = lowest;
        return result;
    }
}
