import { REST_CARD_IMG_URL } from "../utils/constants";

const RestCardComponent = (props)=>{
    const { restData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating } = restData?.card.card.info;
    const { deliveryTime } = restData?.card.card.info.sla;
    return <div className="rest-cards">
        <img className="card-img" src={REST_CARD_IMG_URL + cloudinaryImageId}></img>
        <h2>{restData.card.card.info.name}</h2>
        <h4 id="header4">{cuisines.join(",")}</h4>
        <h4 id="header4">{avgRating}  stars</h4>
        <h4 id="header4">{deliveryTime}</h4>
    </div>
}
export default RestCardComponent;