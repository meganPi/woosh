import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';

function PlaceOrderScreen(props) {
  //access cart from the redux store.
  const cart = useSelector(state => state.cart);
  //access orderCreate from the redux store.
  const orderCreate = useSelector(state => state.orderCreate);
  //from orderCreate, access loading, error, success and order.
  const { loading, success, error, order } = orderCreate;

  //Get cartItems, shipping and payment from cart.
  const { cartItems, shipping, payment } = cart;
  //If shipping is not defined, then redirect user to shipping screen.
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
    //if paymentMethod is not defined, the redirect user to payment screen.
  }
  //itemPrice is the sum of accumulator price + the current item price multplied by the
  //current items quantity.
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  //If item price is greater than R100 then shipping fee is R0.
  //If item price is less than R100 then the shipping is R10
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  //Tax is item price multiplied by 15%
  const taxPrice = 0.15 * itemsPrice;
  //Total price is sum of the above.
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    dispatch(createOrder({
      orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
      taxPrice, totalPrice
    }));
  }
  useEffect(() => {
    if (success) {
      props.history.push("/order/" + order._id);
    }

  }, [success]);

  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>
            Shipping
          </h3>
          <div>
            {cart.shipping.address}, {cart.shipping.city},
          {cart.shipping.postalCode}, {cart.shipping.country},
          </div>
        </div>
        <div>
          <h3>Payment</h3>
          <div>
            Payment Method: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                Shopping Cart
          </h3>
              <div>
                Price
          </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>
                  <li>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>
                          {item.name}
                        </Link>

                      </div>
                      <div>
                        Qty: {item.qty}
                      </div>
                    </div>
                    <div className="cart-price">
                      R{item.price}
                    </div>
                  </li>
                )
            }
          </ul>
        </div>

      
      </div>
      <div className="placeorder-action">
        <ul>
          <li>
            <button className="button primary full-width" onClick={placeOrderHandler} >Place Order</button>
          </li>
          <li>
            <h3>Order Summary</h3>
          </li>
          <li>
            <div>Items</div>
            <div>R{itemsPrice}</div>
          </li>
          <li>
            <div>Shipping</div>
            <div>R{shippingPrice}</div>
          </li>
          <li>
            <div>Tax</div>
            <div>R{taxPrice}</div>
          </li>
          <li>
            <div>Order Total</div>
            <div>R{totalPrice}</div>
          </li>
        </ul>



      </div>

    </div>
  </div>

}

export default PlaceOrderScreen;