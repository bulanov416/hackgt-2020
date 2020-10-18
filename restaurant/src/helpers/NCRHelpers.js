function createCategoryItem(category) {

    catIdx = ["","Appetizers", "Entrees", "Sides", "Deserts", "Beverages"].indexOf(category);

    var raw = "{\"version\": {{version-num}},\"packageIdentifiers\":" +
        " [{\"type\": \"1\",\"value\": \"1\"},\"longDescription\": {\"values\":" +
        " [{\"locale\": \"en-US\",\"value\": \"Endless Breadsticks\"}]},\"shortDescription\":" +
        " {\"values\": [{\"locale\": \"en-US\",\"value\": \"Breadsticks\"}]},\"merchandiseCategory\":" +
        " {\"nodeId\": \"Appetizers\"},\"status\": \"ACTIVE\",\"departmentId\":" +
        " \"01\",\"nonMerchandise\": true}";

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "{{bsp-access-key}}");
    myHeaders.append("nep-organization", "{{bsp-organization}}");
    myHeaders.append("nep-enterprise-unit", "{{bsp-site-id}}");
    myHeaders.append("Date", "{{date}}");

}
