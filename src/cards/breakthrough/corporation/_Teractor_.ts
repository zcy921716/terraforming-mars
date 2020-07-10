import { Tags } from "../../Tags";
import { Player } from "../../../Player";
import { Game } from "../../../Game";
import { IProjectCard } from "../../IProjectCard";
import { CorporationCard } from "../../corporation/CorporationCard";
import { CardName } from "../../../CardName";
import { LogMessageType } from "../../../LogMessageType";
import { LogMessageData } from "../../../LogMessageData";
import { LogMessageDataType } from "../../../LogMessageDataType";

export class _Teractor_ implements CorporationCard {
    public name: CardName = CardName._TERACTOR_;
    public tags: Array<Tags> = [Tags.EARTH];
    public startingMegaCredits: number = 55;

    /* Start with 55 MC and draw 1 earth card as first sction*/
    public initialAction(player: Player, game: Game) {
        const drawnCard = game.drawCardsByTag(Tags.EARTH, 1)[0]
        player.cardsInHand.push(drawnCard);

        game.log(
            LogMessageType.DEFAULT,
            "${0} drew ${1}",
            new LogMessageData(LogMessageDataType.PLAYER, player.id),
            new LogMessageData(LogMessageDataType.CARD, drawnCard.name)
        );
        
        return undefined;
    }

    public getCardDiscount(_player: Player, _game: Game, card: IProjectCard) {
        if (card.tags.indexOf(Tags.EARTH) !== -1) {
            return 3;
        }
        return 0;
    }
    public play() {
        return undefined;
    }
}
