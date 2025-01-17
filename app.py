import pandas as pd
from flask import Flask, request, render_template, url_for

class MyApp:
    def __init__(self):
        self.app = Flask(__name__, template_folder='templates', static_folder='static', static_url_path='/')
        self.setup_routes()

    def setup_routes(self):
        self.app.add_url_rule('/', 'index', self.index, methods=['GET'])
        self.app.add_url_rule('/signup=r', 'signup_renters', self.signup_renters, methods=['POST', 'GET'])
        self.app.add_url_rule('/signup=d', 'signup_driver', self.signup_driver, methods=['POST', 'GET'])
        self.app.add_url_rule('/forgot=p', 'forgot', self.forgot, methods=['POST', 'GET', 'PUT'])

    def index(self):
        return render_template('index.html')

    def signup_renters(self):
        return render_template('signup_rentors.html')

    def signup_driver(self):
        return render_template('signup_driver.html')

    def forgot(self):
        return render_template('forgot.html')

    def run(self):
        self.app.run(host='0.0.0.0', port=5555, debug=True)


if __name__ == '__main__':
    app_instance = MyApp()
    app_instance.run()
