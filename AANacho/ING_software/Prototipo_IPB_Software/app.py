from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/create-quote")
def create_quote():
    return render_template("create_quote.html")


@app.route("/quote-history")
def quote_history():
    return render_template("quote_history.html")


@app.route("/data-management")
def data_management():
    return render_template("data_management.html")

@app.route("/create-data")
def create_data():
    return render_template("create_data.html")

@app.route("/support")
def support():
    return render_template("support.html")


if __name__ == "__main__":
    app.run(debug=True)
