import { connect } from "react-redux";
import { compose } from "recompose";
import { BeerItemComponent } from "./BeerItem.component";
import { updateBeerRate } from "../../redux/state/beers";

const mapStateToProps = () => {
  return {};
};

const handleRate = (beer, score) => updateBeerRate("/beers", beer, score);

const mapDispatchToProps = {
  onRate: handleRate
};

const connectList = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectList)(BeerItemComponent);
