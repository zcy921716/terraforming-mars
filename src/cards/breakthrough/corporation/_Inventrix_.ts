import { CorporationCard } from "../../corporation/CorporationCard";
import { Player } from "../../../Player";
import { Tags } from "../../Tags";
import { Game } from "../../../Game";
import { SelectOption } from "../../../inputs/SelectOption";
import { CardName } from "../../../CardName";


export class _Inventrix_ implements CorporationCard {
    public name: CardName = CardName._INVENTRIX_;
    public tags: Array<Tags> = [Tags.SCIENCE, Tags.SCIENCE];
    public startingMegaCredits: number = 45;
    public initialAction(player: Player, game: Game) {
        return new SelectOption("Draw 3 cards", () => {
            player.cardsInHand.push(
                game.dealer.dealCard(),
                game.dealer.dealCard(),
                game.dealer.dealCard()
            );
            return undefined;
        });
    }
    public getRequirementBonus(_player: Player, _game: Game): number {
        return 3;
    }
    public play() {
        return undefined;
    }
}
