import { CardModel } from "./CardModel";
import { ColonyModel } from "./ColonyModel";
import { Color } from "../Color";
// import { ClaimedMilestoneModel } from "./ClaimedMilestoneModel";
import { VictoryPointsBreakdown } from "../VictoryPointsBreakdown";
import { ITagCount } from "../ITagCount";
import { TurmoilModel } from "./TurmoilModel";
import { IProjectCard } from "../cards/IProjectCard";
import { CorporationCard } from '../cards/corporation/CorporationCard';
// import { LogMessage } from "../LogMessage";
import { Phase } from "../Phase";
import { PlayerInputModel } from "./PlayerInputModel";
// import { SpaceModel } from "./SpaceModel";

export interface PlayerModel {
    boardName: string;
    corporationCard: string;
    corporationCardResources: number;
    playedCards: Array<CardModel>;
    // cardsInHand: Array<CardModel>;
    cardsInHandNbr: number;
    colonies: Array<ColonyModel>;
    color: Color;
    // draftedCards: Array<CardModel>;
    energy: number;
    energyProduction: number;
    gameAge: number;
    // gameLog: Array<LogMessage>;
    // generation: number;
    heat: number;
    heatProduction: number;
    id: string;
    isActive: boolean;
    isSoloModeWin: boolean;
    megaCredits: number;
    megaCreditProduction: number;
    // milestones: Array<ClaimedMilestoneModel>;
    name: string;
    // oceans: number;
    // oxygenLevel: number;
    phase: Phase;
    plants: number;
    plantProduction: number;
    // spaces :Array<SpaceModel>;
    steel: number;
    steelProduction: number;
    steelValue: number;
    // temperature: number;
    terraformRating: number;
    titanium: number;
    titaniumProduction: number;
    titaniumValue: number;
    turmoil: TurmoilModel | undefined;
    venusNextExtension: boolean;
    venusScaleLevel: number;
    victoryPointsBreakdown: VictoryPointsBreakdown;
    tags: Array<ITagCount>;
    showOtherPlayersVP: boolean;
    actionsThisGeneration: Array<string>;
    fleetSize: number;
    tradesThisTurn: number;
    selfReplicatingRobotsCardCost: number;
    selfReplicatingRobotsCardTarget: IProjectCard | undefined;
    dealtCorporationCards: Array<CorporationCard>;
    dealtPreludeCards:  Array<IProjectCard>;
    initialDraft: boolean;
    undoing :boolean;
    waitingFor :PlayerInputModel;
}
