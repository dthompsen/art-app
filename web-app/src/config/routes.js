/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import UnauthorizedRoute from 'base-shell/lib/components/UnauthorizedRoute/UnauthorizedRoute'
import { Route } from 'react-router-dom'

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp/SignUp'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../pages/About'))
const Home = lazy(() => import('../pages/Home/Home'))
const ProductList = lazy(() => import('../pages/Product/ProductList'))
const Product = lazy(() => import('../pages/Product/Product'))
const ExhibitList = lazy(() => import('../pages/Exhibit/ExhibitList'))
const MyAccount = lazy(() => import('../pages/MyAccount/MyAccount'))

const routes = [
  <UnauthorizedRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <UnauthorizedRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <UnauthorizedRoute
    path="/password_reset"
    redirectTo="/"
    exact
    component={PasswordReset}
  />,
  <Route path="/about" exact component={About} />,
  <AuthorizedRoute path="/my_account" exact component={MyAccount} />,
  <AuthorizedRoute path="/home" exact component={Home} />,
  <AuthorizedRoute path="/products" exact component={ProductList} />,
  <AuthorizedRoute path="/products/:id" exact component={Product} />,
  <AuthorizedRoute path="/exhibits" exact component={ExhibitList} />,
]

export default routes
