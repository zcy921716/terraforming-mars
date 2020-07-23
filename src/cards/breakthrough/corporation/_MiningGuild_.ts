import { Tags } from "../../Tags";
import { Player } from "../../../Player";
import { CorporationCard } from "../../corporation/CorporationCard";
import { ISpace } from "../../../ISpace";
import { SpaceBonus } from "../../../SpaceBonus";
import { Resources } from "../../../Resources";
import { CardName } from "../../../CardName";

export class _MiningGuild_ implements CorporationCard {
    public name: CardName = CardName._MINING_GUILD_;
    public tags: Array<Tags> = [Tags.STEEL, Tags.STEEL];
    public startingMegaCredits: number = 30;
    public onTilePlaced(player: Player, space: ISpace) {
        if (
            player.isCorporation(this.name)
            && space.player === player
            && (space.bonus.indexOf(SpaceBonus.STEEL) !== -1 || space.bonus.indexOf(SpaceBonus.TITANIUM) !== -1)) {
            player.setProduction(Resources.STEEL);
        }
    }
    public play(player: Player) {
        player.steel = 5;
        player.setProduction(Resources.STEEL);
        return undefined;
    }
}
