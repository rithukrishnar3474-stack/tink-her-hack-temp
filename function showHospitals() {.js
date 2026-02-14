function showHospitals() {
    // STEP 1: Get the value the user selected
    let selectedPlace = document.getElementById('location').value;
    
    // STEP 2: Create variables to hold our new info
    let hospitalName = "";
    let hospitalPlace = selectedPlace; // Use the place they picked

    // STEP 3: The Decision (If/Else)
    if (selectedPlace === "Palakkad") {
        hospitalName = "District Hospital Palakkad";
    } else if (selectedPlace === "Kozhikode") {
        hospitalName = "Malabar Medical Centre";
    } else {
        hospitalName = "City General Thrissur";
    }

    // STEP 4: Write the new info into the HTML
    document.getElementById('res-name').innerText = hospitalName;
    document.getElementById('res-place').innerText = hospitalPlace;

    // STEP 5: Switch the screens (as before)
    document.getElementById('screen-search').classList.add('hidden');
    document.getElementById('screen-results').classList.remove('hidden');
}