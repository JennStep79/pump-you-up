FLASK_APP=backend:create_app()
FLASK_ENV=development
SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:4425@localhost:5432/Pump-U-Up'
SQLALCHEMY_TRACK_MODIFICATIONS = False