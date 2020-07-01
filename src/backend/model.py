import shap
import joblib
import numpy as np

def get_age(req_data, model):
    result = model.predict(req_data)
    return result[0]

def get_shap(req_data, model):
    explainer = shap.TreeExplainer(model)
    shap_values = explainer.shap_values(np.array(req_data))
    explainer = shap.TreeExplainer(model)
    cols = ['pneumonia', 'hypertension', 'chest_pain', 'respiratory_disorder',
       'anemia', 'diabetes', 'hypoglycemia', 'fever', 'mace', 'abdominal_pain',
       'pancreatitis', 'married', 'male']
    cols = list(zip(cols, req_data[0]))
    shap_dict = dict(zip(cols, shap_values[0])) 
    top_keys = sorted(shap_dict, key=lambda dict_key: abs(shap_dict[dict_key]), reverse=True)
    result = []
    for key in top_keys[:4]:
        result.append(list(key) + [shap_dict[key] * 100])
    return result