import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import {beerItemsSelector, beerLoadingSelector} from "../../redux/state/beers";
import { List } from "./List.component";
import {fetchDocsIfNot} from "../../redux/state/docs";

const mapStateToProps = state => {
  return {
    loading: beerLoadingSelector(state),
    beers: beerItemsSelector(state)
  };
};

const mapDispatchToProps = { fetchDocsIfNot };

const connectList = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withDidMountList = lifecycle({
  componentDidMount() {
    this.props.fetchDocsIfNot("/beers");
  }
});

export default compose(
  connectList,
  withDidMountList
)(List);
