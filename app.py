from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Define your calculation functions here
def voltage_drop(impedance, load_current):
    return impedance * load_current


def power_loss(resistance, current):
    return resistance * pow(current, 2)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    # Get the data from the client-side
    data = request.json
    impedance = data.get('impedance')
    load_current = data.get('load_current')

    # Perform calculations
    drop = voltage_drop(impedance, load_current)

    # Return the results
    return jsonify({'voltage_drop': drop})

@app.route('/calculate_power_loss', methods=['POST'])
def calculate_power_loss():
    data = request.json
    resistance = data.get('resistance')
    load_current = data.get('load_current')

    loss = power_loss(resistance, load_current)
    return jsonify({'power_loss': loss})

if __name__ == "__main__":
    app.run()