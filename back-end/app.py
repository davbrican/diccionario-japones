from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_cors.core import try_match
from flask_mysqldb import MySQL
import os

app = Flask(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})


try:
    app.config['MYSQL_HOST'] = os.environ['MYSQL_HOST']
    app.config['MYSQL_USER'] = os.environ['MYSQL_USER']
    app.config['MYSQL_PASSWORD'] = os.environ['MYSQL_PASSWORD']
    app.config['MYSQL_DB'] = os.environ['MYSQL_DB']
except:
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = ''
    app.config['MYSQL_DB'] = 'japones'


mysql = MySQL(app)


#Testing Route
@app.route('/', methods=['GET'])
def getDefault():
    return jsonify({'response': 'Bienvenido/a a mi API de estudios japoneses!'})


@app.route('/insertarPalabra', methods=['POST'])
def insertarPalabra():
    #mysql data
    español = request.json['español']
    hiragana = request.json['hiragana']
    romaji = request.json['romaji']
    categoria = request.json['categoria']
    
    cur = mysql.connection.cursor()

    cur.execute('INSERT INTO palabras (español, hiragana, romaji, categoria) VALUES (%s, %s, %s, %s)', (español, hiragana, romaji, categoria))
    mysql.connection.commit()
    return jsonify({'message': "Insertado correctamente"})

@app.route('/palabras', methods=['GET'])
def getPalabras():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM palabras')
    data = cur.fetchall()
    res = []
    for i in data:
        res.append({"español": i[1], "hiragana": i[2], "romaji": i[3], "categoria": i[4]})
    return res

@app.route('/palabrasPorCategoria/<string:categoria>', methods=['GET'])
def getPalabrasCategoria(categoria):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM palabras WHERE categoria = '{categoria}'")
    data = cur.fetchall()
    res = []
    for i in data:
        res.append({"español": i[1], "hiragana": i[2], "romaji": i[3], "categoria": i[4]})
    return res

@app.route('/buscarPalabra/<string:palabra>', methods=['GET'])
def buscarPalabra(palabra):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM palabras WHERE español LIKE '%{palabra}%' OR hiragana LIKE '%{palabra}%' OR romaji LIKE '%{palabra}%'")
    data = cur.fetchall()
    res = []
    for i in data:
        res.append({"español": i[1], "hiragana": i[2], "romaji": i[3], "categoria": i[4]})
    return res

@app.route('/categorias', methods=['GET'])
def categorias():
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT categoria FROM palabras")
    data = cur.fetchall()
    res = []
    for i in data:
        res.append(i[0])
    return list(set(res))



if __name__ == '__main__':
    app.run(debug=True)