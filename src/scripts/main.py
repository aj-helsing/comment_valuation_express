from transformers import AutoModelForSequenceClassification
from transformers import TFAutoModelForSequenceClassification
from transformers import AutoTokenizer
import numpy as np
from scipy.special import softmax

print("hello")

MODEL = "cardiffnlp/twitter-roberta-base-offensive"

tokenizer = AutoTokenizer.from_pretrained(MODEL)

model = AutoModelForSequenceClassification.from_pretrained(MODEL)

text = "comment"
encoded_input = tokenizer(text, return_tensors='pt')
output = model(**encoded_input)
scores = output[0][0].detach().numpy()
scores = softmax(scores)

labels = {
    0: "offensive",
    1: "not offensive"
}

if scores[0] > 0.5:
  print(f"{labels[0]}\nConfidence:{scores[0]}")
else:
  print(f"{labels[1]}\nConfidence:{scores[1]}")

print("end...")


# print("hello")