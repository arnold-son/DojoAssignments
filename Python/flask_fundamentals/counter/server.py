#pair: Arnold Son & James Ye
from flask import Flask, session, redirect, request, render_template
app = Flask(__name__)
app.secret_key = "asdflkj"

@app.route('/')
def count():
    if 'count' not in session:
        session['count']=1
    else:
        session['count']+=1
    return render_template("index.html")

@app.route('/addtwo')
def addtwo():
    session['count']+=1
    return redirect('/')

@app.route('/reset')
def reset():
    session.pop('count')
    return redirect('/')

app.run(debug=True)
