CciPH

Connecting to a receiver via bluetooth and get PH values for a duration of 10 minutes.


Prerequisites
2 - 3 per group
1 project shared via Git
Nodes/Npm
Yarn for module dependency
React-Navigation
React-Native-Ble-Manager
Mobx/Mobx-react

Installation
React-native init CciPH
Yarn add react-navigation mobx mobx-react react-native-ble-manager —save
React native link the projects that require linking
Manual steps required for react-native-ble-manager and react-navigation

Tasks
Create a BleStore
Try to discover and connect to the device
Find out which services and characteristics it has
Create a comprehensible architecture for handling ONE device


Introduction
Le module bluetooth RN2040 sera utilisé dans l’appareil relais (que l’on va nommer FLUX-R dans ce document).

Dans ce composant, on peut créer des services privés et 10 caractéristiques privées (avec option R,W,RW) qui ne peuvent contenir que 20 octets.
On va pouvoir se servir de ces caractéristiques pour récupérer les informations en binaire.
De même on peut écrire dans une des caractéristique pour transmettre des messages vers le FLUX-R.
Il est à noter qu’il semble y avoir une configuration spéciale pour Iphone. 
Identifiants
Les caractéristiques et services utilisent un UID qui devrait être unique.
on peut utiliser le générateur suivant : 
https://uuidonline.com/

Pour le service : ihu.alphabot.fr : be0576ce61365890ba607fa75b1c86a3
Pour les caractéristiques
data.ihu.alphabot.fr : dafc2372b7e6546b93096d490ca4f60d
ack.ihu.alphabot.fr : b5a7b89e0d615bbc827cc4f19abc881c
cmd.ihu.alphabot.fr : 43e443e49f5a5f6ba2f3-bcd4cd537b45

Informations à transmettre 
Vers le smartphone
Caractéristique DATA
Cette caractéristique contient les données en mode read ou notify
timestamp (en pas de 10s, 2 octets) (BUG : aurai dû être de 4) 
mesure brute du PH, (2 fois un octet) 
mesure de l’accélération (3 fois un octet) x,y,z en complément à 2 si négatif (FE = -2) 
nombre d’information en attente en mémoire (1 octet)  
CheckSum des informations précédentes (1 octet) 
Caractéristique standard : Etat de la batterie
Il s’agit ici d’une caractéristique standard du RN2040 qui donne le pourcentage de batterie sur 1 octet.
Il s’agit d’un service standard (0x180F ou 00002A19-...)

Depuis le smartphone
Caractéristique ACK
Cette caractéristique contient les données en mode read, write ou notify cette caractéristique est sur deux octets.

ACK (1 octet) 
Complément (1 octet) 
Si ACK vaut 0 c’est que le module est prêt à envoyer une donnée.
En écrivant 1 dans l’octet ACK le client précise qu’il a reçu l’information, cette valeur est ensuite remise à 0 dès qu’une information est disponible.
Lorsque le client envoi une commande, le complément est mis à la valeur de la commande une fois celle ci exécutée. Le client pourra remettre cette valeur à 0 si il veux.
Caractéristique CMD
ordres (1 octets)  
Paramètres pour l’ordre (1octet). 

Voici la liste des ordres : 
0x01 CA : Reset de la mémoire 
0x02 CA : Retransmission de toute la mémoire. 
0x10 <val>: Faire vibrer pendant quelques centaine de ms. 
0x11 <val>: Faire vibrer pendant quelques dizaine de ms. 
0x20 <val>: Déconnecter le BT pendant quelques secondes 
0x30  : Mettre à jour le niveau de batterie. (service standard 0x180F) 
0x80 <val> : fixer la valeur du timestamp courant (partie haute).  
0x81 <val> : fixer la valeur du timestamp courant (partie basse) 
(plus à définir) 
 
Exemple de commande : 
resetter le timestamp : 0x80 0x00, attendre que le complément du ACK vaille 0x80 puis envoyer 0x81 0x00 et attendre que le complément du ACK vaille 0x81

