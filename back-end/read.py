import requests

with open('palabras.txt', encoding='utf8') as f:
    lines = f.readlines()
    for line in lines:
        linea = line.replace('\n','').split('\t')
        requests.post('http://localhost:5000/insertarPalabra', json={"español": linea[0], "hiragana": linea[1], "romaji": linea[2], "categoria": linea[3]})