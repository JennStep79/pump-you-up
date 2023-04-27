from dotenv import load_dotenv
load_dotenv()

import backend

app = backend.create_app()