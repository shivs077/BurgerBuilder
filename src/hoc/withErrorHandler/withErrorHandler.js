import { useEffect, useState } from "react";
import Modal from "components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    useEffect(() => {
      let reqInterceptor = axios.interceptors.request.use((req) => {
        setError(null);
        return req;
      });
      let resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          setError(error);
        }
      );
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, []);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return (
      <>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
