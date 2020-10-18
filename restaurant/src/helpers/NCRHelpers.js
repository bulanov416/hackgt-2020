import NCRRequest from "./NCRRequest";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function createCategoryItem(name, category, description) {

    const catIdx = ["","Appetizer", "Entree", "Side", "Desert", "Beverage"].indexOf(category);
    const categories = ["","Appetizers", "Entrees", "Sides", "Deserts", "Beverages"];

    const body = "{\"version\": {{version-num}},\"packageIdentifiers\":" +
        " [{\"type\": \"1\",\"value\": \"" + catIdx + "\"},\"longDescription\": {\"values\":" +
        " [{\"locale\": \"en-US\",\"value\": \"" + description + "\"}]},\"shortDescription\":" +
        " {\"values\": [{\"locale\": \"en-US\",\"value\": \"" + name + "\"}]},\"merchandiseCategory\":" +
        " {\"nodeId\": \"" + categories[catIdx] + "\"},\"status\": \"ACTIVE\",\"departmentId\":" +
        " \"01\",\"nonMerchandise\": true}";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("nep-organization", "f67a5f37952346ed8f72995919b687e3");
    myHeaders.append("nep-enterprise-unit", "766adbd7a7e549938e28c6ac5ac66565");

    const id = getRandomInt(100000);

    return new Promise((resolve, reject) => {
        NCRRequest("{{catalog-service}}/items/3/" + id, body, myHeaders, "PUT").then((response) => {
            resolve({res: response, id: id});
        }).catch((err) => {
            reject(err);
        });
    });
};
