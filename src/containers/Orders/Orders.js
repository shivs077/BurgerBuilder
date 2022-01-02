import { useEffect, useState } from "react";

import Order from "components/Order/Order";
import axios from "axios-orders";
import withErrorHandler from "hoc/withErrorHandler/withErrorHandler";
import Spinner from "components/UI/Spinner/Spinner";
import Button from "components/UI/Button/Button";
import Modal from "components/UI/Modal/Modal";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        setOrders(fetchedOrders);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const deleteOrder = (id) => {
    axios
      .delete(`/orders/${id}.json`)
      .then((res) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
        // setLoading(false);
        setDeleting(false);
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
        setDeleting(false);
      });
  };

  const deletingOrder = (id) => {
    setDeleting(id);
  };

  const deleteCancelHandler = () => {
    setDeleting(false);
  };

  const deleteContinueHandler = () => {
    deleteOrder(deleting);
  };

  const deleteOrderConfirmation = (
    <OrderConfirmation deleteCancelled={deleteCancelHandler} deleteContinued={deleteContinueHandler} />
  );

  if (loading) return <Spinner />;

  return (
    <div>
      {orders.map((order) => (
        <Order
          key={order.id}
          id={order.id}
          ingredients={order.ingredients}
          price={order.price}
          deleteOrder={deletingOrder}
        />
      ))}
      <Modal show={deleting} modalClosed={() => setDeleting(false)}>
        {deleteOrderConfirmation}
      </Modal>
    </div>
  );
};

export default withErrorHandler(Orders, axios);

const OrderConfirmation = ({ deleteCancelled, deleteContinued }) => {
  return (
    <>
      <h3>Delete Order</h3>
      <p>Delete this order?</p>
      <Button btnType="Danger" clicked={deleteCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={deleteContinued}>
        CONTINUE
      </Button>
    </>
  );
};
