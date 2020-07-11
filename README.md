# Tra-Pay

![trapay](https://imgur.com/xRAo9eZ)

Tra-Pay stand for Trash and Pay.

This was created to decrease the city's garbage.

# DEMO

## Demo movie

## Service flow
1. Recognize garbage from the camera's photos.

2. Send the number of garbage and location information to the server.
3. The server reflects the received information on the map of the HP. The color of the markings on the map depends on the number of garbage.
4. The user looks at the map of HP and goes to pick up the garbage.
5. The user throws garbage into a specific trash can.
6. The camera in the trash can recognizes the user's face. The trash can has Raspberry Pi and a camera, a monitor. If the user has been in front of the trash can for a certain amount of time, a QR code is displayed on the trash can's monitor.
7. The user uses HP's QR code reader to scan the code. The user earns points.

# Features

* technology
     - It recognizes only garbage by machine learning from the city's photo.

     - You can see the location of garbage on a map.

* can achive SDGs
    * 3  Good Health and Well-Being : Picking up garbage to get points is promoting exercise.

    * 8  Decent Work and Economic Growth : The efficient picking up garbage increases productivity.
    * 9  Industry, Innovation and Infrastructure : Can pick up recyclable garbage.
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

* recognized garbage

    Run taco/detector/detector.py
    
        python detector.py test --dataset=../data --model=taco_10_0 --round 0 --class_map=./taco_config/map_10.csv

* Home Page

        URL : 

* Face recognition(on Raspberry Pi)

        1. Run video.py
        2. Run kaoninshiki.py

# Author

* Miwa Hiroyoshi
* Liao Sichao
* Ozaki Nanami
* Saito Masato
* Nishikawa Takahiro

Kwansei Gakuin Univercity Department of Informatics, School of Science and Technology Miwa Lab.(https://ist.ksc.kwansei.ac.jp/miwa/miwaLab/)

# License
Taco(https://github.com/pedropro/TACO)