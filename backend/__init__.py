from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from backend import app, db
from backend.models import User, Workout
from flask_jwt_extended import jwt_required, get_jwt_identity

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
    app.config.from_object('backend.config')

    db.init_app(app)
    migrate.init_app(app, db)

    bcrypt.init_app(app)
    jwt.init_app(app)

    return app

@app.route('/')
def home():
    return jsonify({'message': 'Welcome to Pump-U-Up!'})


@app.route('/activities')
def activities():
    return jsonify({'message': 'This is the activities page!'})

@app.route('/activitylist')
def activitylist():
    return jsonify({'message': 'This is the activity list page!'})

@app.route('/add-activity')
def add_activity():
    return jsonify({'message': 'This is the add activity page!'})

#SIGN UP FOR A NEW ACCOUNT
@app.route('/signup', methods=['POST'])
def signup():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']

#CHECK IF USERNAME ALREADY EXISTS
    user = User.query.filter_by(username=username).first()
    if user:
        return jsonify({'message': 'Username already exists! Please choose another username.'})
    
#CHECK IF EMAIL ALREADY EXISTS
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({'message': 'Email already in use! Please try another email or login to your existing account.'})
    
#CREATE HASHED PASSWORD
    hashed_password = generate_password_hash(password)
#CREATE NEW USER
    user = User(username=username, email=email, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User created successfully! Let\'s get ready to Pump-U-Up!'})

#LOGIN TO EXISTING ACCOUNT
@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']

#CHECK IF USERNAME EXISTS
    user = User.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return jsonify({'message': 'Incorrect username or password! Please try again.'})
    
    token = user.generate_token()

    return jsonify({'token': token})

@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = User.query.get(get_jwt_identity())

    return jsonify({'username': current_user.username})

if __name__ == '__main__':
    app.run()
