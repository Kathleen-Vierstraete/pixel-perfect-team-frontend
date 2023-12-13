export const URL_BACK_AUTHENTICATE = '/authenticate';
export const URL_BACK_PRODUCT_BACKOFFICE = '/products/backoffice';
export const URL_BACK_PRODUCT = '/products';
export const URL_PRODUCT_BY_ID = (id = null) => { return id === null ? '/products/:id' : `/products/${id}` };
export const URL_BACK_PRODUCTS_BY_TAGS = '/products/tags'
export const URL_BACK_LOGIN_CHECK = "/login_check"
export const URL_BACK_CREATE_ACCOUNT = "/users"
export const URL_BACK_PERSON = (id = null) => { return id === null ? "/persons/:id" : `/persons/${id}` };
export const URL_BACK_PURCHASE = (id) => { return `/persons/${id}/purchases`};
export const URL_BACK_ADD_ADDRESSE = (id) => {return `/persons/${id}/addresses`};
