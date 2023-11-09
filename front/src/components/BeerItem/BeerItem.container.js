import { connect } from "react-redux";
import { compose } from "recompose";
import { updateBeerRate } from "../../redux/state/beers";
import { BeerItemComponent } from "./BeerItem.component";

const mapStateToProps = () => {
  return {};
};

const handleRate = (uuid, score) => updateBeerRate(uuid, score)

const mapDispatchToProps = {
  onRate: handleRate
};

const connectList = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  connectList
)(BeerItemComponent);
