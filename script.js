document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const impedance = parseFloat(document.getElementById("impedance").value);
    const loadCurrent = parseFloat(document.getElementById("load_current").value);

    // Send a POST request to the Flask server for voltage drop calculation
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ impedance, load_current: loadCurrent })
    })
    .then(response => response.json())
    .then(data => {
        // Show the result in the result div
        document.getElementById("result").innerHTML = 
            `<h4>Voltage Drop: ${data.voltage_drop.toFixed(2)} V</h4>`;
    })
    .catch(error => console.error('Error:', error));
});

// Power Loss Calculation
document.getElementById("power-loss-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const resistance = parseFloat(document.getElementById("resistance").value);
    const loadCurrentPower = parseFloat(document.getElementById("load_current_power").value);

    // Send a POST request to the Flask server for power loss calculation
    fetch('/calculate_power_loss', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ resistance, load_current: loadCurrentPower })
    })
    .then(response => response.json())
    .then(data => {
        // Show the result in the power loss result div
        document.getElementById("power-loss-result").innerHTML = 
            `<h4>Power Loss: ${data.power_loss.toFixed(2)} W</h4>`;
    })
    .catch(error => console.error('Error:', error));
});
