export const URL_HOME = '/';
export const URL_LOGIN = '/login';
export const URL_ADMIN_HOME = '/admin';
export const URL_REGISTER = '/register';
export const URL_LIST = '/simple-list';
export const URL_PRODUCT_BY_ID = (id = null) => { return id === null ? '/product/:id' : `/product/${id}` };
export const URL_PICK = '/pick';
export const URL_CONNEXION = '/connexion';
export const URL_CREATEACCOUNT = '/create-account';
export const URL_CREATE_PRODUCT = '/create-product';

export const URL_404_PAGE = '/404'
export const URL_PRODUCTS_BY_CATEGORY = (id = null) =>{return id ===null?'/category/:id/products':`/category/${id}/products`}
export const URL_ACCOUNT = '/account'
export const URL_ACCOUNT_PURCHASE = (params) =>{ return `/account?purchase=${params}`} 
export const URL_CHECKOUT = '/checkout'
export const URL_ADDRESS = '/address'