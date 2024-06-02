import CardProjectVerticalModel from "../vertical/card-project-vertical.model";


export default interface CardProjectHorizontalModel extends CardProjectVerticalModel {
    paragraph: string,
    isReverse: boolean,
    isInfoBg: boolean
}