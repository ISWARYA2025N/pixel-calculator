from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/convert')
def convert():
    px_str = request.args.get('px', '0')
    try:
        px = float(px_str)
    except (ValueError, TypeError):
        return jsonify({"error": "invalid px value"}), 400

    rem = round(px / 16, 4)
    em = round(px / 16, 4)
    cm = round(px * 0.02646, 4)
    inch = round(px * 0.0104167, 4)  # 1 px ≈ 1/96 inch -> 1 px ≈ 0.0104167 in

    return jsonify({
        "rem": rem,
        "em": em,
        "cm": cm,
        "inch": inch
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
