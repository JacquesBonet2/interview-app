import { connect } from "react-redux";
import ListForm from "./Form.component";
import { createDoc } from "../../redux/state/docs";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { createDoc };

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
