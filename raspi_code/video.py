import sys
import cv2
import time
import datetime

while True:

    now = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")

    cc = cv2.VideoCapture(0)

    rr, img = cc.read()
    #cv2.imwrite( now + '.jpg',img)
    cv2.imwrite( 'video' + '.jpg',img)
    cc.release()
    time.sleep(5)
    