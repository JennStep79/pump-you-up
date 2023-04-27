from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
    app.config.from_object('backend.config')

    db.init_app(app)
    migrate.init_app(app, db)

    return app

# app = Flask(__name__)
# app.config.from_object('backend.config')
# db = SQLAlchemy(app)
# migrate = Migrate(app, db)

if __name__ == '__main__':
    app.run()
