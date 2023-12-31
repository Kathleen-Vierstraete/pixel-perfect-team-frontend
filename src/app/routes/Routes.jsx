import React from "react";
import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ROLE_ADMIN } from "../constants/rolesConstant";
import * as URL from "../constants/urls/urlFrontEnd";
import AdminHomeView from "../views/AdminHomeView";
import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import Connexion from "../views/ConnexionView";
import CreateAccount from "../views/CreateAccountView";

import { PrivateRoute } from "./PrivateRoute";
import ProductSingleView from './../views/ProductSingleView';
import PickView from "../views/PickView";
import Page404 from "../views/404View";
import CategoryView from "../views/CategoryView";
import MyAccount from "../views/MyAccountView";
import CheckoutView from "../views/CheckoutView";
import FormProductView from './../views/FormProductView';
import { AddressView } from "../views/AddressView";

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
  return (
    <RoutesContainer>
      <Route
        path={URL.URL_HOME}
        element={
          <HomeView />
        }
      />
      <Route
        path={URL.URL_ADMIN_HOME}
        element={
          <PrivateRoute roles={[ROLE_ADMIN]}>
            <AdminHomeView />
          </PrivateRoute>
        }
      />
      <Route
        path={URL.URL_PRODUCT_BY_ID()}
        element={
          <ProductSingleView />
        }
      />
      <Route path={URL.URL_LOGIN} element={<LoginView />} />
      <Route path={URL.URL_PICK} element={<PickView />} />
      <Route path={URL.URL_CONNEXION} element={<Connexion />} />
      <Route path={URL.URL_CREATEACCOUNT} element={<CreateAccount />} />
      <Route path={URL.URL_PRODUCTS_BY_CATEGORY()} element={<CategoryView />} />
      <Route path={URL.URL_ACCOUNT} element={<MyAccount />} />
      <Route path={URL.URL_CREATE_PRODUCT} element={
        <PrivateRoute roles={[ROLE_ADMIN]}>
          <FormProductView />
        </PrivateRoute>
      } />
      <Route path="*" element={<Page404 />} />
      <Route path={URL.URL_CHECKOUT} element={<CheckoutView />} />
      <Route path={URL.URL_ADDRESS} element={<AddressView />} />
    </RoutesContainer>
  );
};

export default Routes;
