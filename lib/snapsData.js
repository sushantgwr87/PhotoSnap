export const getSnapData = async (id) => {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    let response;
    // request posts from api
    if(id && typeof id !== 'undefined')
        response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/snaps/${id}`);
    else
        response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/snaps`);
        
    // extract the data
    let data = await response.json();

    return data;
}