from flask import Flask, render_template, request, flash, redirect, url_for
from flask_mail import Mail, Message
import secrets
import os

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.environ.get("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.environ.get("MAIL_PASSWORD")
app.config["MAIL_DEFAULT_SENDER"] = ("Nose Ghost", os.environ.get("MAIL_USERNAME"))

mail = Mail(app)

@app.route("/", methods=["POST", "GET"])
def index():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        message = request.form["message"]

        msg = Message(
            subject=f"New contact form submission from {name}",
            recipients=[os.environ.get("MAIL_USERNAME")],  # where you want to receive
            body=f"From: {name} <{email}>\n\nMessage:\n{message}"
        )

        try:
            mail.send(msg)
            flash("Your message has been sent successfully!", "success")
            return render_template("message-sent.html")
        except Exception as e:
            flash(f"Error sending message: {e}", "danger")
    
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/videos")
def videos():
    return render_template("videos.html")

@app.route("/gallery")
def gallery():
    return render_template("gallery.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="4999", debug=True)