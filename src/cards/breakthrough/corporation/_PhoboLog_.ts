import { Tags } from "../../Tags";
import { Player } from "../../../Player";
import { Game } from "../../../Game";
import { CorporationCard } from "../../corporation/CorporationCard";
import { CardName } from "../../../CardName";
import { LogMessageType } from "../../../LogMessageType";
import { LogMessageData } from "../../../LogMessageData";
import { LogMessageDataType } from "../../../LogMessageDataType";

export class _PhoboLog_ implements CorporationCard {
    public name: CardName = CardName._PHOBOLOG_;
    public tags: Array<Tags> = [Tags.SPACE];
    public startingMegaCredits: number = 23;
    public play(player: Player, _game: Game) {
        player.titanium = 10;
        player.increaseTitaniumValue();
        return undefined;
    }
    public initialAction(player: Player, game: Game) {
        const drawnCards = game.drawCardsByTag(Tags.SPACE, 2);
        for (let foundCard of drawnCards) {
            player.cardsInHand.push(foundCard);
        }

        game.log(
             LogMessageType.DEFAULT,
            "${0} drew ${1} and ${2}",
            new LogMessageData(LogMessageDataType.PLAYER, player.id),
            new LogMessageData(LogMessageDataType.CARD, drawnCards[0].name),
            new LogMessageData(LogMessageDataType.CARD, drawnCards[1].name)
        );
        return undefined;
    }
}
