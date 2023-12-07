export const URL_BACK_AUTHENTICATE = '/authenticate';
export const URL_BACK_PRODUCT_BACKOFFICE = '/products/backoffice';
export const URL_BACK_PRODUCT = '/products';
export const URL_PRODUCT_BY_ID = (id = null) => { return id === null ? '/products/:id' : `/products/${id}` };
export const URL_BACK_LOGIN_CHECK = "/login_check";
export const URL_BACK_CREATE_ACCOUNT = "/user/add";
export const URL_BACK_PRODUCTS_BY_TAGS = "/pick";
