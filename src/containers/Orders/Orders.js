import { useEffect, useState } from "react";

import Order from "components/Order/Order";
import axios from "axios-orders";
import withErrorHandler from "hoc/withErrorHandler/withErrorHandler";
import Spinner from "components/UI/Spinner/Spinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  };

  if (loading) return <Spinner />;

  return (
    <div>
      {orders.map((order) => (
        <Order
          key={order.id}
          id={order.id}
          ingredients={order.ingredients}
          price={order.price}
          deleteOrder={deleteOrder}
        />
      ))}
    </div>
  );
};

export default withErrorHandler(Orders, axios);
