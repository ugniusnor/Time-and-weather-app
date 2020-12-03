async function getAPI (url) {

    const api_url = url;
    const responseIP= await fetch (api_url)
    const gotIP= await responseIP.json();
    return gotIP;
}
export default getAPI;