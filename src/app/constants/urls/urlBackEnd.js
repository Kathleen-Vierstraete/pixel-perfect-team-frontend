export const URL_BACK_AUTHENTICATE = '/authenticate';
export const URL_BACK_PRODUCT_BACKOFFICE = '/products/backoffice';
export const URL_BACK_PRODUCT = '/products';
export const URL_PRODUCT_BY_ID = (id = null) => { return id === null ? '/products/:id' : `/products/${id}` };
export const URL_BACK_PRODUCT_BY_CATEGORY = (id = null) => { return id === null ? '/categories/:id/products' : `/categories/${id}/products` };
export const URL_BACK_COMMENTS = "comments";
export const URL_BACK_PRODUCTS_BY_TAGS = '/products/tags'
export const URL_BACK_LOGIN_CHECK = "/login_check"
export const URL_BACK_CREATE_ACCOUNT = "/users"
export const URL_BACK_PERSON = (id = null) => { return id === null ? "/persons/:id" : `/persons/${id}` };
export const URL_BACK_PURCHASE = (id) => { return `/persons/${id}/purchases` };
export const URL_BACK_ADD_ADDRESSE = (id) => { return `/persons/${id}/addresses` };
export const URL_BACK_UPDATE_ADDRESSE = (id) => { return `/addresses/${id}` };
export const URL_BACK_ADMINISTRATORS = "/administrators"
export const URL_BACK_PRODUCT_CREATE = "/products"
export const URL_BACK_STRIPE = "/stripe/create"
export const URL_BACK_PICK_BY_USER = (id) => { return `/persons/${id}/picks` }
export const URL_BACK_GET_PICK = (id) => { return `/picks/${id}` }
export const URL_BACK_SET_PURCHASE_STATUS = (id) => { return `/purchases/${id}/status` }
export const URL_BACK_GET_ADDRESS = (id)=>{return `/persons/${id}/addresses`}
export const URL_BACK_SET_PURCHASE_ADDRESS = (idPurchase,idAddress) =>{ return `/purchases/${idPurchase}/addresses/${idAddress}`}
export const URL_BACK_CREATE_COMMENT = (id) => {return `/products/${id}/comments`}
