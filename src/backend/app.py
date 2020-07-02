from flask import Flask, escape, request
from flask_cors import CORS
import joblib

from model import get_age, get_shap

app = Flask(__name__)
cors = CORS(app, resources={
  r"/predict": {"origin": "*"},
})

known_keys = [
    'pneumonia',
    'hypertension',
    'chest_pain',
    'respiratory_disorder',
    'anemia',
    'diabetes',
    'hypoglycemia',
    'fever',
    'mace',
    'abdominal_pain',
    'pancreatitis',
    'married',
    'male'
]

desease = {
    "pneumonia": "폐 관련 질병이 ",
    "hypertension": "고혈압이 ",
    "chest_pain": "가슴 통증이 ",
    "respiratory_disorder": "호흡기 질환이 ",
    "anemia": "빈혈이 ",
    "diabetes": "당뇨병이 ",
    "hypoglycemia": "저혈당이 ",
    "fever": "열이 ",
    "mace": "심혈관 질환이 ",
    "abdominal_pain": "복부 통증이 ",
    "pancreatitis": "췌장염이 ",
}

@app.route('/predict', methods=['POST'])
def predict():
    req = request.get_json()
    if req is None or "answer" not in req:
        return {'error': "answer is missing"}, 400
    answer = req['answer']

    req_data = []
    for key in known_keys:
        if key not in answer:
            err = '%s is missing' % key
            return {'error': err}, 400
        req_data.append(answer[key])

    pred_age = get_age([req_data], model)
    shaps = get_shap([req_data], model)

    causes = []

    for shap in shaps:
        cause = ""

        if shap[0] in desease.keys():
            if shap[1] == 1 and shap[2] >= 0:
                continue
            if shap[1] == 0 and shap[2] <= 0:
                continue

            cause += desease[shap[0]]
            if shap[1] == 1:
                cause += "있어서 "
            else:
                cause += "없어서 "
        elif shap[0] == "married":
            if shap[1] == 1:
                cause += "결혼을 해서 "
            else:
                cause += "결혼을 하지 않아서 "
        else:
            if shap[1] == 1:
                cause += "성별이 남성이어서 "
            else:
                cause += "성별이 여성이어서 "
        if shap[2] > 0:
            cause += f"수명이 {round(abs(shap[2]), 1)}살 연장되었습니다."
        else:
            cause += f"수명이 {round(abs(shap[2]), 1)}살 단축되었습니다."

        causes.append(cause)

    return {'age': round(pred_age*100, 1), 'shap': causes}, 200

if __name__ == '__main__':
    model = joblib.load('/app/model.pkl')
#     model = joblib.load('./model.pkl')  # for local test
    app.run(debug=False, port=8080, host='0.0.0.0')
