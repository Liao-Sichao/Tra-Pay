# Tra-Pay

![Imgur](https://i.imgur.com/qgdVDv7.png)

Tra-Pay stand for Trash and Pay.

This was created to decrease the city's trash.

## System map
![Imgur](https://i.imgur.com/fIYSjKZ.png)

## Service flow

![Imgur](https://i.imgur.com/4FUHcw1.png)

1. Recognize trash from the camera's photos.

2. Send the amount of trash and location information to the server.
3. The server reflects the received information on the map of the HP. The color of the markings on the map depends on the number of trash.
4. The user looks at the map of HP and goes to pick up the trash.
5. The user throws the trash into a specific trash box.
6. The camera in the trash box recognizes the user's face. The trash box has Raspberry Pi and a camera, a monitor. If the user has been in front of the trash box for a certain amount of time, a QR code is displayed on the trash box's monitor.
7. The user uses HP's QR code reader to scan the code. The user earns points.

# Features

* technology
     - It recognizes only trash by machine learning from the city's photo.

     - You can see the location of trash on a map.

* can achive SDGs
    * 3  Good Health and Well-Being : Picking up trash to get points is promoting exercise.

    * 8  Decent Work and Economic Growth : The efficient picking up trash increases productivity.
    * 9  Industry, Innovation and Infrastructure : Can pick up recyclable trash.
    * 11 Sustainable Cities and Communites : More the city is clean, more we want to live in it.

# Requirement

* Raspberry Pi
     - Python 3

* Laptop
     - coco api

     - tensorflow 1.15.0

     - Keras 2.0.8
    
     - etc... here(https://github.com/pedropro/TACO)

# Installation

We used taco for machine learning.

For further usage instructions, here(https://github.com/pedropro/TACO)

# Usage

* recognized trash

    Run taco/detector/detector.py
    
      python detector.py test --dataset=../data --model=taco_10_0 --round 0 --class_map=./taco_config/map_10.csv

test data

<img src="https://i.imgur.com/EiguLhL.jpg" width=70%>

prediction data

<img src="https://i.imgur.com/wN7keKo.png" width=100%>

* Home Page

      URL : http://18.183.98.217/mypage.html?

* QR Code Reader

      URL : https://ist.ksc.kwansei.ac.jp/miwa/miwaLab/wwlc/garbage-map_demo(html2)/providingpoints.html

trash map
![Imgur](https://i.imgur.com/inM2dWd.jpg)

* Face recognition(on Raspberry Pi)

          1. Run video.py
          2. Run kaoninshiki.py

![Imgur](https://i.imgur.com/iPjKjNt.jpg)

# Demo movie

Coming soon...

# Author

* Miwa Hiroyoshi
* Liao Sichao
* Ozaki Nanami
* Saito Masato
* Nishikawa Takahiro

Kwansei Gakuin Univercity Department of Informatics, School of Science and Technology Miwa Lab.(https://ist.ksc.kwansei.ac.jp/miwa/miwaLab/)

# License
Taco(https://github.com/pedropro/TACO)
