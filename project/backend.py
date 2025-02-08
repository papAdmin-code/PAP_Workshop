from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from urllib.parse import quote_plus

app = Flask(__name__)
CORS(app) 

username = quote_plus("<username>")
password = quote_plus("<password>")
connection_string = f"mongodb+srv://{username}:{password}@mycluster.sbko1.mongodb.net/"

myclient = MongoClient(connection_string)

db = myclient["<your database name>"]

collection = db["<your collection name"]  

@app.route('/add-to-cart', methods=['POST'])
def add_to_cart():
    try:
        data = request.json 
        if not data:
            return jsonify({"error": "No data provided"}), 400

        result = collection.insert_one(data)
        return jsonify({"message": "Item added to cart", "id": str(result.inserted_id)}), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
