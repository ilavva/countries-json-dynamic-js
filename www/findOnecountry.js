
function fillSelectCountry() {
    var dataHTML = "";
    for (var i = 0; i < allCountriesArr.length; i++) {
        console.log(allCountriesArr[i]["name"]["common"]);
        let name = allCountriesArr[i]["name"]["common"];
        let displayName = allCountriesArr[i]["name"]["official"];
        dataHTML += `<option value="${name}">${displayName}</option>`;
    }
    document.querySelector("#dl_selectCountry").innerHTML = dataHTML;
}
fillSelectCountry();

function findCountryManual() {
    const countryName = document.querySelector("#selectCountryManualInput").value;
    findCountry_by_name(countryName);
}


function findCountry() {
    const countryName = document.querySelector("#selectCountry").value;
    findCountry_by_name(countryName);
}
function findCountry_by_name(countryName) {

    var theCountryObj;
    // let countryObj = 
    for (var i = 0; i < allCountriesArr.length; i++) {
        if (allCountriesArr[i].name.common.toLowerCase() === countryName.toLowerCase()) {
            theCountryObj = allCountriesArr[i];
        }
    }

    document.querySelector("#ALL_DATA").value = JSON.stringify(theCountryObj);
    let name = theCountryObj.name.official;
    if (name.length < 2) name = theCountryObj.name.common
    document.querySelector("#countryNameDiv").innerHTML = theCountryObj.name.common;
    // Adding the flag image on screen
    document.querySelector("#myFlagImg")
        .setAttribute("src", theCountryObj.flags.svg);
}
