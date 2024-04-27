//============================================================
//   a function to find the desired country object in the JSON array
function f1(countryName) {
    for (var i = 0; i < allCountriesArr.length; i++) {
        console.log(allCountriesArr[i]["name"]["common"]);
        if (allCountriesArr[i]["name"]["common"] === countryName) {
            return allCountriesArr[i];
        }
    }
}
//============================================================


console.log(f1("Israel"));


//============================================================
// Run our function to populate the screen with info
//      try to change Israel to something else,
//      for example : Switzerland, Cuba, Bahrain, Chaina, Taiwan
//      populateInfoOnScreen("Taiwan");
populateInfoOnScreen("Israel");

function populateInfoOnScreen(countryName) {
    // First of all, lets get the country object
    let theCountryObj = f1(countryName);
    let name = theCountryObj.name.official;
    if (name.length < 2) name = theCountryObj.name.common
    document.querySelector("#countryNameDiv").innerHTML = theCountryObj.name.common;
    // Adding the flag image on screen
    document.querySelector("#myFlagImg")
        .setAttribute("src", theCountryObj.flags.svg);

    //-------------- populate the languages element ---------
    let allLangsStr = "<ul>";
    //  get the languages from the countries JSON
    let theLangsObjFromTheJSON = theCountryObj.languages;
    //  go over all the languages, and add them to our string
    for (let [k, v] of Object.entries(theLangsObjFromTheJSON)) {
        allLangsStr += `<li> ${k} : ${v} </li>`;
    }
    allLangsStr += "</ul>";
    document.querySelector("#myLanguagesDiv").innerHTML = allLangsStr;
    //--------------------------------------------------------

    //-------------- populate the currencies element ---------
    let allCurrenciesStr = "<ul>";
    //  get the currencies from the countries JSON
    let theCurrenciesObjFromTheJSON = theCountryObj.currencies;
    //  go over all the currencies, and add them to our string
    for (let [k, v] of Object.entries(theCurrenciesObjFromTheJSON)) {
        allCurrenciesStr += `<li> ${k} : ${v.name}, ${v.symbol}</li>`;
    }
    allCurrenciesStr += "</ul>";
    document.querySelector("#myCurrenciesDiv").innerHTML = allCurrenciesStr;
    //--------------------------------------------------------


    //----------- Another design for the currencies element ---------
    let allCurrenciesStr_2 = "<ul>";
    //  get the currencies from the countries JSON
    let theCurrenciesObjFromTheJSON_2 = theCountryObj.currencies;
    //  go over all the currencies, and add them to our string
    for (let [k, v] of Object.entries(theCurrenciesObjFromTheJSON_2)) {
        allCurrenciesStr_2 += `<li> 
                                    <ul>
                                        <li> code: ${k} </li>
                                        <li> name: ${v.name} </li>
                                        <li> symbol: ${v.symbol} </li>
                                    </ul>
                                </li>`;
    }
    allCurrenciesStr_2 += "</ul>";
    document.querySelector("#myCurrenciesDiv_2").innerHTML = allCurrenciesStr_2;
    //--------------------------------------------------------

    //----------- populate the borders element ---------
    let allBordersStr = "<ul>";
    //  get the borders from the countries JSON
    let theBordersObjFromTheJSON = theCountryObj.borders;
    //  go over all the Borders, and add them to our string
    for (let curr of theBordersObjFromTheJSON) {
        allBordersStr += `<li> ${curr} </li>`;
    }
    allBordersStr += "</ul>";
    document.querySelector("#myBordersDiv").innerHTML = allBordersStr;
    //--------------------------------------------------------
}

//============================================================

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