from . import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(22), unique=True, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(22), nullable=False)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)
    
    def generate_token(self):
        return jwt.encode({'id': self.id}, app.config['SECRET_KEY'], algorithm='HS256')
    
    @staticmethod
    def check_token(token):
        try:
            id = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])['id']
            return User.query.get(id)
        except:
            return None

class Workout(db.Model):
    __tablename__ = 'workouts'

    id = db.Column(db.Integer, primary_key=True)
    muscle_group = db.Column(db.String(50), nullable=True)
    weight_used = db.Column(db.Integer, nullable=True)
    reps_completed = db.Column(db.Integer, nullable=True)
    cardio = db.Column(db.String(50), nullable=True)
    note = db.Column(db.String(500), nullable=True)
    date = db.Column(db.Date, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('workouts', lazy=True))
