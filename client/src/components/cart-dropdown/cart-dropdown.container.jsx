import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { withRouter } from "react-router-dom";
import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleCartHidden()),
});

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CartDropdown);

export default CartDropdownContainer;
