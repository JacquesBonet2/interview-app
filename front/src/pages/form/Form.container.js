import { connect } from "react-redux";
import ListForm from "./Form.component";
import {createDoc} from "../../redux/state/docs";

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = { createDoc };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
