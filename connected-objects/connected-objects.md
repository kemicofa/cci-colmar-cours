<!-- page_number: true -->


IoT and Connected Objects
===

![](https://media.giphy.com/media/xT9IgN8YKRhByRBzMI/giphy.gif)

[Kevin Faulhaber](https://stackoverflow.com/users/3589092/kemicofa)
CCI Colmar

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

What are connected objects?
===

* Also known as smart objects
* Are products with 
  * processors
  * sensors
  * software
  * connectivity 
* Capable of analyzing to make decisions
* Operational Efficiencies
* Continously imporve performance
* Interact with physical and virtual world
---

A bit of History
===

Internet was coined in 1972 by Robert E. Kahn during the first ICCC (International Conference on Computer Communications) in Washington

Internet of Things is what can be called the next step of Internet Connectivity where physical devices and everyday objects become connected

The idea to connect objects isn't something radically new, it was already happening back in 1982 when a group of professors wanted to connect their Coke Machine to the Internet so it would report when its inventory was empty

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

![](https://media.giphy.com/media/l4Epbw1WwlDQ6miu4/giphy.gif)

---

How do emitters know when to send data?
===

* **predetermined intervals**
* continuous signal, a type of **beacon**

![](https://media.giphy.com/media/U6esqNtMp2LQIfuQ6p/giphy.gif)

---

Object As Just A Receiver
===

1. Can display information that is received from network
2. Can move, run calculations, make sound light etc
3. Coordinate actions by connecting to each other
4. Not connected to a central point

![](https://media.giphy.com/media/13lHvo68aZChi0/giphy.gif)

---

Global Positioning System (GPS)
===

GPS Sattelites play the emitter role, GPS receptor the receiving role

Satellites that emit signals at **predetermined intervals**
* Originally belonged privately to the US by Richard Nixon late 1960
* Made public by Ronald Raegan after an air plane crash in 1983
* 31 GPS sattelites that continously orbit Earth
* Each signal sent has the time encoded
* Comparing the time the signal was sent and the time the GPS Receptor receives it, the distance from the sattelite can be determined
* The more sattelites visible to the recepter the more accurate the positioning is calculated
* Up to four sattelites can be visible

---

Object connected to another object
===


* An object that can connect to another/multiple object(s) is called a **swarm**
* Coordinate together to accomplish a specific task
* Send data to each other

![50%](https://media.giphy.com/media/hxVKwTn63kI9i/giphy.gif)


---

Object Can Receive And Send Data
===

* Objects can also have a both emitter and receiver properties

![50%](https://images-na.ssl-images-amazon.com/images/I/61qPJbu0POL._SL1000_.jpg)

---

Value of Connected Objects
===
 * New features to existing products
 	1. Products send feedback
 	2. Products receive software updates
 * New products
 	1. Objects that were simple objects have been adapted
 	   a. Electronic wrist bands, Electronic Salt Dispensor
       
---


How objects communicate
===
The preferred networking protocole

* Wi-Fi
* USB
* Bluetooth
* NFC

*etc*

---

Wi-Fi
===

Wireless communication protocole that uses radio signals to connect a wide variety of different devices

Pros:
* good solution for many applications
* almost every home has Wi-Fi


Cons:
* Expensive in power
* Complicated for battery powered devices
* Complicated for devices far from the grid

---

Low-Power Solutions
===

NFC and  Bluetooth


![](https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif)

---

NFC
===

Near Field Communication

* wireless
* short distance
* high frequency (max 10cm)
* Used frequently with smart phones
* Used frequently for
  a. sharing photos
  b. payments
  c. sharing videos
  
---

Bluetooth
===

Developed in 1984, intended to be wireless replacement for cables.
Operates at 2.4GHz frequencies (similar to other wireless frequencies i.e.: cordless phones, WiFi routers)

* Wireless
* Special radio frequency
* 10meter radius network
* connects between 2 and 8 devices
* Less energy and cheaper to implement than WiFi
* secure
---

What is GigaHertz (GHz) ?
===

*for processors, is the measurement of the rate at which a processor executes a task. Higher usually means **better***

For radio:

* unit of alternating current (AC) OR electromagnet  (EM) wave frequency
* 1 GHz = 1,000,000,000 Hz
* Higher frequencies can send more information but require more energy to travel further


---

Bluetooth, how does it work?
===

* [packet-based protocol](https://en.wikipedia.org/wiki/Packet_switching) (similar to a http request with a [header](https://en.wikipedia.org/wiki/Header_(computing)) and [payload](https://en.wikipedia.org/wiki/Payload_(computing)) (aka body))
* [master/slave architecture](https://en.wikipedia.org/wiki/Master/slave_(technology))
* master can communicate with up to 8 slaves in a [piconet](https://en.wikipedia.org/wiki/Piconet)
* All slave devices on time based interval of the master
* Data is transmitted at 312.5 [Âµs](https://en.wikipedia.org/wiki/%CE%9Cs) intervals

---

Bluetooth Pairing vs Bonding
===

What are the differences ?

![](https://media.giphy.com/media/3JUbquUn3UHaXLzdta/giphy.gif)

---

Bluetooth Pairing
===

* Exchange of security features
* Man in the middle protection
* Temporary security key exchange
* Encrypted Connection


---

Bluetooth Bonding
===

* Includes Pairing
* Devices **store** and **use** the security keys
* Upon a future connection the same keys are used

---

[Bluetooth SIG](https://www.bluetooth.com/specifications/gatt/services/)
===

* Service Discovery Protocol (SDP)
* Universally Unique Identifier (UUID) short forms
* Base Universally Unique Identifier (UUID)
![](https://media.giphy.com/media/de0JIZr4MBn5igrg4J/giphy.gif)

---

[Service Discovery Protocol (SDP)](https://www.bluetooth.com/specifications/assigned-numbers/service-discovery/)
===

* defines way to represent range of UUIDs
* 128bits long
* Reserved range 2^32 values can be represented with 32 bits
* Of the 2^32 values, 2^16 values can be represented with 16 bits

---

Base Universally Unique Identifier (UUID)
===

* used to calculate 128-bit UUIDs
* formula `128-bit value = 16-bit-value * 2^96 + BluetoothBaseUUID`




## BASE_UUID:	

**00000000-0000-1000-8000-00805F9B34FB**

For example, 16-bit value for batter service is `0x180F` thus the Battery Service UUID is:

 0000**180F**-0000-1000-8000-00805F9B34FB

---

[List of reserved UUID by Bluetooth SIG](https://www.bluetooth.com/specifications/gatt/services/)
===

*[These](https://www.bluetooth.com/specifications/gatt/services/) reserved UUIDs cannot be used for any custom services or characteristics, so you need to avoid using the same Service UUIDs.*

![](https://media.giphy.com/media/DkaZuJGcwwN32/giphy.gif)

---

SERVICE vs CHARACTERISTIC
===

[Generic Attribute Profile (GATT)](https://www.bluetooth.com/specifications/gatt/)
* determines how to exchange all profile and user data
* uses Attribute Protocol (ATT) as its transport protocol to exchange data between devices
* data is organized **hierarchically** in sections called **services** that group related pieces of user data called **characteristics**

---

[React Native Bluetooth Manager](https://github.com/innoveit/react-native-ble-manager)
===

*alternatively [this](https://github.com/Polidea/react-native-ble-plx) library can also be used*

* Scanning for peripherals
* Connecting to peripherals
* Discovering Services and Characteristics
* Sending and recieving data (byte arrays)
	1. Writing
	2. Reading
	3. Notifications


---

That's it, we're done
===


![](https://media.giphy.com/media/9PH9saRidMXIs/giphy.gif)

*any questions?*
