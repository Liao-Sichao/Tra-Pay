#!/usr/bin/env python
# coding: utf-8

# In[24]:


import numpy as np
import cv2 as cv
 
# 顔検出対象の画像をロードし、白黒画像にしておく。
imgS = cv.imread('video.jpg')
imgG = cv.cvtColor(imgS, cv.COLOR_BGR2GRAY)
 
# 学習済みデータをロード
face_cascade = cv.CascadeClassifier('haarcascade_frontalface_default.xml')
eye_cascade  = cv.CascadeClassifier('haarcascade_eye.xml')
 
# 顔検出を実行
faces = face_cascade.detectMultiScale(imgG, 1.3, 5)
print(faces)
#print(faces[0][2])

"""
if faces[0][2]>=250:
    print('ok')
else:
    print('近づいてください')
"""

# 顔検出箇所を矩形で囲む。

for (x,y,w,h) in faces:
    cv.rectangle(imgS,(x,y),(x+w,y+h),(0,255,255),4)

# 表示
cv.imshow('image',imgS)
cv.waitKey(0)
cv.imwrite("face_detection.jpg",imgS) 
# 表示消去
cv.destroyAllWindows()


# In[ ]:




