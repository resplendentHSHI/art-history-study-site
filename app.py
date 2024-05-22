from flask import Flask, render_template, send_from_directory
import os
import random

app = Flask(__name__)

IMAGE_FOLDER = 'images'

@app.route('/')
def index():
    images = os.listdir(IMAGE_FOLDER)
    random.shuffle(images)
    if len(images) > 1:
        img1, img2 = images[:2]
    else:
        img1 = img2 = images[0]  # Handle case where there is only one image
    
    word = random.choice(["compare", "contrast", "similarities", "differences"])
    return render_template('index.html', img1=img1, img2=img2, word=word)

@app.route('/images/<filename>')
def image(filename):
    return send_from_directory(IMAGE_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
