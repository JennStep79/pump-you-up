from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(22), unique=True, nullable=False)
    password = db.Column(db.String(22), nullable=False)

class Workout(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    muscle_group = db.Column(db.String(50), nullable=True)
    weight_used = db.Column(db.Integer, nullable=True)
    reps_completed = db.Column(db.Integer, nullable=True)
    cardio = db.Column(db.String(50), nullable=True)
    note = db.Column(db.String(500), nullable=True)
    date = db.Column(db.Date, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('workouts', lazy=True))
