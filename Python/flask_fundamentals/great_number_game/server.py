#pair: Arnold Son & James Ye
import random
from flask import Flask, session, redirect, request, render_template,url_for
app = Flask(__name__)
app.secret_key = "asdflkj"

@app.route('/')
def index():
    session['low']="none"
    session['high']="none"
    session['rng']=random.randrange(1,101)
    print session['rng']
    return redirect('/guess')

@app.route('/guess')
def guess():
    return render_template("guess.html")

@app.route('/check',methods=["POST"])

def check():
    print "it submitted"
    if int(request.form['guess']) > session['rng']:
        session['high']="inline"
        session['low']="none"
    if int(request.form['guess']) < session['rng']:
        session['low']="inline"
        session['high']="none"
    if int(request.form['guess']) == session['rng']:
        session['guess']= request.form['guess']
        return redirect('/win')

    return redirect('/guess')

@app.route('/win')
def win():
    return render_template("win.html")

app.run(debug=True)
