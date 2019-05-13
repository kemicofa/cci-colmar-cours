<!-- page_number: true -->


IoT and Connected Objects
===

![](https://media.giphy.com/media/xT9IgN8YKRhByRBzMI/giphy.gif)

[Kevin Faulhaber](https://stackoverflow.com/users/3589092/kemicofa)
CCI Colmar

---


What is IoT and connected object?
===

> The Internet of things (IoT) is the inter-networking of physical devices, vehicles (also referred to as "connected devices" and "smart devices"), buildings, and other items embedded with electronics, software, sensors, actuators, and network connectivity which enable these objects to collect and exchange data.

![](https://media.giphy.com/media/l0MYvqais2XElWrOU/giphy.gif)

---

The goal of this lesson
===

* Understanding how connected objects communicate
* Different technologies used for communicating
* Hardware used for this communication to work
* API Libraries to control a connected object
* Adapted architecture for connected objects
* Build a react-native mobile application that can communicate with such device

---

A bit of History
===

Internet was coined in 1972 by Robert E. Kahn during the first ICCC (International Conference on Computer Communications) in Washington

Internet of Things is what can be called the next step of Internet Connectivity where physical devices and everyday objects become connected

The idea to connect objects isn't something radically new, it was already happening back in 1982 when a group of professors wanted to connect their Coke Machine to the Internet so it would report when its inventory was empty

---

Connected Object
===

Also known as "Smart Objects", are devices with more advanced functions thanks to being connected to the internet with capabilities of improving.

---

Anatomy And Hardware
===

Three types of objects

* Send data (emitter/broadcaster)
* Recieve data (receiver)
* Receive and send data

---

Object As Just An Emitter
===

* broadcast information
* does not receive information
* usually uses a **sensor** to measure data

---

Some sensors
===

![](https://seinecle.github.io/IoT4Entrepreneurs/images/sensors.jpg)

---

How to send data?
===

* **predetermined intervals**
* continuous signal, a type of **beacon**

---

Object As Just A Receiver
===

* An object that can connect to another object is called a **swarm**
	1. Coordinate actions by connecting to each other
	2. Not connected to a central point

---

Object Can Receive And Send Data
===

TODO EXAMPLES

---

Value of IoT
===

1. Customers
	a. New features to **existing** products
    b. New connected products
2. 

---

Communication Technologies
===
* USB
* Bluetooth
* wifi

---

---

React Native Bluetooth Manager
===

* Scanning for peripherals
* Connecting to peripherals
* Discovering Services and Characteristics
* Sending and recieving data (byte arrays)
	1. Writing
	2. Reading
	3. Notifications


---

Scanning for perpherals
===

