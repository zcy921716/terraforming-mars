
import { IProjectCard } from "./IProjectCard";
import { Game } from "../Game";
import { Player } from "../Player";
import { CardType } from "./CardType";
import { Tags } from "./Tags";

export class CorporateStronghold implements IProjectCard {
    public cost: number = 11;
    public cardType: CardType = CardType.AUTOMATED;
    public tags: Array<Tags> = [Tags.CITY, Tags.STEEL];
    public name: string = "Corporate Stronghold";
    public text: string = "Decrease your energy production 1 step and increase your mega credit production 3 steps. Place a city tile.";
    public description: string = "A city exclusively devoted to your corporation.";
    public play(player: Player, game: Game): Promise<void> {
        if (player.energyProduction < 1) {
            throw "Must have energy to decrease";
        }
        return new Promise((resolve, reject) => {
            player.setWaitingFor({
                initiator: "card",
                card: this,
                type: "SelectASpace"
            }, (input: string) => {
                try {
                    game.addCityTile(player, input);
                } catch (err) {
                    reject(err);
                    return;
                }
                player.energyProduction--;
                player.megaCreditProduction += 3;
                player.victoryPoints -= 2;
                resolve();
            })
        });
    }
}