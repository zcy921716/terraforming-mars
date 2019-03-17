
import { expect } from "chai";
import { NoctisCity } from "../../src/cards/NoctisCity";
import { Color } from "../../src/Color";
import { Player } from "../../src/Player";
import { Game } from "../../src/Game";
import { SpaceName } from "../../src/SpaceName";
import { TileType } from "../../src/TileType";
import { SelectSpace } from "../../src/inputs/SelectSpace";

describe("NoctisCity", function () {
    it("Should throw", function () {
        const card = new NoctisCity();
        const player = new Player("test", Color.BLUE, false);
        const game = new Game("foobar", [player], player);
        expect(function () { card.play(player, game); }).to.throw("Must have energy production");
    });
    it("Should play", function () {
        const card = new NoctisCity();
        const player = new Player("test", Color.BLUE, false);
        const game = new Game("foobar", [player], player);
        player.energyProduction = 1;
        const action = card.play(player, game);
        expect(action).to.eq(undefined);
        expect(player.energyProduction).to.eq(0);
        expect(player.megaCreditProduction).to.eq(3);
        const noctis = game.getSpace(SpaceName.NOCTIS_CITY);
        expect(noctis.tile && noctis.tile.tileType).to.eq(TileType.CITY);
        noctis.tile = undefined;
        player.energyProduction = 1;
        card.play(player, game);
        expect(noctis.tile && noctis.tile!.tileType).to.eq(TileType.CITY);
        player.energyProduction = 1;
        const spaceAction = card.play(player, game) as SelectSpace;
        expect(spaceAction).not.to.eq(undefined);
        spaceAction.cb(spaceAction.availableSpaces[0]);
        expect(spaceAction.availableSpaces[0].tile && spaceAction.availableSpaces[0].tile.tileType).to.eq(TileType.CITY);
    });
});