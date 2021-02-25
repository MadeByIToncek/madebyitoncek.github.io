var APP_DATA = {
  "scenes": [
    {
      "id": "0-navcam-panorama",
      "name": "Navcam panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 0.11022215926429624,
          "pitch": 0.594181916547809,
          "title": "Kalibrační terčíky",
          "text": "Kalibrační terčíky pro Navigační kamery"
        },
        {
          "yaw": 0.15632335133055086,
          "pitch": 0.5204782030952195,
          "title": "\"Uplook\" kamera",
          "text": "Kamera, která při přistání snímala SkyCrane"
        },
        {
          "yaw": 1.8061739683420663,
          "pitch": 1.0462172350809595,
          "title": "Sběrač vzorků",
          "text": "Zde se sbírají a ukládají vzorky kamenů."
        },
        {
          "yaw": 0.0753514904921424,
          "pitch": 0.23103194643152491,
          "title": "UHF antenna",
          "text": "Anténa pro přenos dat na zem pomocí marsových družic"
        },
        {
          "yaw": 0.6555029901708416,
          "pitch": 0.4468494606250566,
          "title": "High - Gain Antenna",
          "text": "Přenáší data pčímo na zemi"
        },
        {
          "yaw": 0.5838100058360993,
          "pitch": 0.2717512215487723,
          "title": "Low-Gain Antenna",
          "text": "Tato anténa primárně získává data ze země."
        },
        {
          "yaw": 0.36264350845215,
          "pitch": 0.34166460078078487,
          "title": "Name Chips",
          "text": "Tři malé silikonové čipy, které nesou 10,9 milionu jmen."
        }
      ]
    }
  ],
  "name": "Mars 2020 panorama",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
