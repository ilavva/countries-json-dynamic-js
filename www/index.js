//============================================================
//   a function to find the desired country object in the JSON array
function f1(countryName) {
    for (var i = 0; i < allCountriesArr.length; i++) {
        // console.log(allCountriesArr[i]["name"]["common"]);
        if (allCountriesArr[i]["name"]["common"] === countryName) {
            return allCountriesArr[i];
        }
    }
}
//============================================================


//console.log(f1("Israel"));


//============================================================
// Run our function to populate the screen with info
//      try to change Israel to something else,
//      for example : Switzerland, Cuba, Bahrain, Chaina, Taiwan, South Africa
//      populateInfoOnScreen("Taiwan");
populateInfoOnScreen("South Africa");

function li_list_object_values(data_array, preffix = "") {
    let li_list = "";
    for (let i of Object.values(data_array)) {
        li_list += `<li>${preffix}${i} </li>`;
    }
    return `<ul>${li_list}</ul>`;
}

function li_list_object_entries_values(data_array) {
    let li_list = "";
    for (let [_, i] of Object.entries(data_array)) {
        li_list += `<li>${i} </li>`;
    }
    return `<ul>${li_list}</ul>`;;
}

function populateInfoOnScreen(countryName) {
    // First of all, lets get the country object
    let theCountryObj = f1(countryName);
    let name = theCountryObj["name"]["official"];

    if (name.length < 2) name = theCountryObj.name.common

    document.querySelector("#countryNameDiv").innerHTML =
        theCountryObj.name.common;

    // Adding the flag image on screen
    document.querySelector("#myFlagImg")
        .setAttribute("src", theCountryObj.flags.svg);

    //-------------- populate the languages element ---------
    document.querySelector("#myLanguagesDiv").innerHTML = //allLangsStr;
        li_list_object_entries_values(theCountryObj["languages"]);

    //----------------Population------------------------------
    document.querySelector("#myPopulationDiv").innerText =
        theCountryObj["population"].toLocaleString("en");

    //----------------Calling Codes ---------------------------------
    document.querySelector("#myCallingCodesDiv").innerHTML =
        li_list_object_values(theCountryObj["idd"]["suffixes"], theCountryObj["idd"]["root"]);


    //-------------- Capital ---------------------------------
    document.querySelector("#myCapitalsDiv").innerHTML =
        li_list_object_values(theCountryObj["capital"]);


    //---------------alternative Spellings--------------------
    document.querySelector("#myAlternativeSpellngsDiv").innerHTML =
        li_list_object_values(theCountryObj["altSpellings"]);

    //-------------Region:------------------------------
    document.querySelector("#myRegionDiv").innerHTML =
        theCountryObj["region"];

    //-------------Subregion:------------------------------
    document.querySelector("#mySubregionDiv").innerHTML =
        theCountryObj["subregion"];

    //-------------latitude::------------------------------
    document.querySelector("#myLatitudeDiv").innerText =
        theCountryObj["latlng"][0];

    //-------------longitude:------------------------------
    document.querySelector("#myLongitudeDiv").innerHTML =
        theCountryObj["latlng"][1];

    //-------------timezones------------------------
    document.querySelector("#myTimeZonesDiv").innerHTML =
        li_list_object_values(theCountryObj["timezones"]);

    //-----------  borders  ---------

    document.querySelector("#myBordersDiv").innerHTML =
        li_list_object_values(theCountryObj["borders"]);

    // --------------- native name -----------------------
    document.querySelector("#myNativeNameDiv").innerHTML =
        "myNativeNameDiv";

    //--------------currencies  ---------
    let allCurrenciesStr = "<ul>";
    //  get the currencies from the countries JSON
    const theCurrenciesObjFromTheJSON = theCountryObj.currencies;
    //  go over all the currencies, and add them to our string
    for (let [k, v] of Object.entries(theCurrenciesObjFromTheJSON)) {
        allCurrenciesStr += `<li> ${k} : ${v.name}, ${v.symbol}</li> `;
    }
    allCurrenciesStr += "</ul>";
    document.querySelector("#myCurrenciesDiv").innerHTML = allCurrenciesStr;

    //---------------code--------------------------------
    document.querySelector("#myCodeDiv").innerHTML =
        "myCodeDiv";

    //--------------name-------------------------------------
    document.querySelector("#myNameDiv").innerHTML =
        "myNameDiv";
    //--------------symbol-------------------------------------

    document.querySelector("#mySymbolDiv").innerHTML =
        "mySymbolDiv";
}

//============================================================



function fillSelectCountry() {
    var dataHTML = "";
    for (var i = 0; i < allCountriesArr.length; i++) {
        // console.log(allCountriesArr[i]["name"]["common"]);
        let name = allCountriesArr[i]["name"]["common"];
        let displayName = allCountriesArr[i]["name"]["official"];
        dataHTML += `<option value="${name}">${displayName}</option>`;
    }
    document.querySelector("#dl_selectCountry").innerHTML = dataHTML;
}
fillSelectCountry();