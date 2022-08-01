from flask import Flask, jsonify, render_template, request, url_for, redirect, session, send_file
from html.parser import HTMLParser
from werkzeug.utils import secure_filename
import os, os.path
from datetime import date
app = Flask(__name__)
app.config['UPLOAD_EXTENSIONS'] = ['.pdf','.xls','.xlsx','.csv']
app.config['UPLOAD_PATH'] = 'uploads'
app.secret_key = 'esto-es-una-clave-muy-secreta'
#app.register_blueprint(base,url_prefix='/excel',template_folder='templates',static_folder='static')
#app.register_blueprint(proyectos,url_prefix='-proyectos',template_folder='templates',static_folder='static')
#app.register_blueprint(unidades,url_prefix='-unidades',template_folder='templates',static_folder='static')
#app.register_blueprint(rooms,url_prefix='-rooms',template_folder='templates',static_folder='static')
#app.register_blueprint(despl,url_prefix='-despl',template_folder='templates',static_folder='static')

@app.route("/")
def index():
    return render_template("index.html")

if __name__=='__main__':
    app.run(debug=True, threaded=True,host="0.0.0.0", port=5000)
