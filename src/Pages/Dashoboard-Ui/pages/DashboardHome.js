import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchOrders } from "../../../features/orderSlice";
import { fetchProducts } from "../../../features/productSlice";
import { fetchUsers } from "../../../features/userRoleSlice";
import { useDispatch, useSelector } from "react-redux";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderlist.items);
  const product = useSelector((state) => state.products.items);
  const user = useSelector((state) => state.userlist.items);
  
  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  }, [dispatch]);
  

  const totalOrderQty = order?.reduce((sum, item) => sum + (item.totalQuantity || 0), 0);
  const totalProductQty = product?.reduce((sum, item) =>  sum + parseInt(item.product_qty || 0), 0);

  // console.log(user);


  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div class="col-12 col-lg-4 mt-4">
              <div className="">
                <div className="card overflow-hidden">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <div className="avatar-md bg-soft-primary rounded">
                          <iconify-icon
                            icon="solar:cart-5-bold-duotone"
                            className="avatar-title fs-32 text-primary"
                          ></iconify-icon>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <p className="text-muted mb-0 text-truncate">
                          Total Orders
                        </p>
                        <h3 className="text-dark mt-1 mb-0">
                 
                          {totalOrderQty}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer py-2 bg-light bg-opacity-50">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span className="text-success">
                          <i className="bx bxs-up-arrow fs-12"></i> 2.3%
                        </span>
                        <span className="text-muted ms-1 fs-12">Last Week</span>
                      </div>
                      <Link
                        to="/dashboard/oderlist"
                        className="text-reset fw-semibold fs-12"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 mt-4">
              <div className="">
                <div className="card overflow-hidden">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <div className="avatar-md bg-soft-primary rounded">
                          <iconify-icon
                            icon="solar:cart-5-bold-duotone"
                            className="avatar-title fs-32 text-primary"
                          ></iconify-icon>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <p className="text-muted mb-0 text-truncate">
                          Total Product
                        </p>
                        <h3 className="text-dark mt-1 mb-0">
                     
                          {totalProductQty}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer py-2 bg-light bg-opacity-50">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span className="text-success">
                          <i className="bx bxs-up-arrow fs-12"></i> 2.3%
                        </span>
                        <span className="text-muted ms-1 fs-12">Last Week</span>
                      </div>
                      <Link
                        to="/dashboard/productlist"
                        className="text-reset fw-semibold fs-12"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div class="col-12 col-lg-4 mt-4">
              <div className="">
                <div className="card overflow-hidden">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <div className="avatar-md bg-soft-primary rounded">
                          <iconify-icon
                            icon="solar:cart-5-bold-duotone"
                            className="avatar-title fs-32 text-primary"
                          ></iconify-icon>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <p className="text-muted mb-0 text-truncate">
                          Total User SignIn
                        </p>
                        <h3 className="text-dark mt-1 mb-0">
                     
                          {user.length}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer py-2 bg-light bg-opacity-50">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span className="text-success">
                          <i className="bx bxs-up-arrow fs-12"></i> 2.3%
                        </span>
                        <span className="text-muted ms-1 fs-12">Last Week</span>
                      </div>
                      <Link
                        to="/dashboard/userrole"
                        className="text-reset fw-semibold fs-12"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
