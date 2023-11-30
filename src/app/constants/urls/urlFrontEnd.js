export const URL_HOME = '/';
export const URL_LOGIN = '/login';
export const URL_ADMIN_HOME = '/admin';
export const URL_REGISTER = '/register';
export const URL_LIST = '/simple-list';
export const URL_PRODUCT_BY_ID = (id = null) => { return id === null ? '/product/:id' : `/product/${id}` }


