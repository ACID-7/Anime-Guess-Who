const ANIMES = [
  {
    "id": "naruto",
    "name": "Naruto & Shippuden",
    "emoji": "🍥",
    "color": "#f97316",
    "tags": [
      "Shonen",
      "Action"
    ],
    "chars": [
      {
        "name": "Naruto Uzumaki",
        "emoji": "🍥",
        "anilist": 17,
        "mal": 17
      },
      {
        "name": "Sasuke Uchiha",
        "emoji": "🍥",
        "anilist": 13,
        "mal": 13
      },
      {
        "name": "Sakura Haruno",
        "emoji": "🍥",
        "anilist": 145,
        "mal": 22
      },
      {
        "name": "Kakashi Hatake",
        "emoji": "🍥",
        "anilist": 85,
        "mal": 85
      },
      {
        "name": "Sai",
        "emoji": "🍥",
        "anilist": 1901,
        "mal": 123
      },
      {
        "name": "Yamato",
        "emoji": "🍥",
        "anilist": 2006,
        "mal": 124,
        "displayName": "Yamato / Tenzo"
      },
      {
        "name": "Iruka Umino",
        "emoji": "🍥",
        "anilist": 2011,
        "mal": 135
      },
      {
        "name": "Konohamaru Sarutobi",
        "emoji": "🍥",
        "anilist": 3889,
        "mal": 132
      },
      {
        "name": "Moegi Kazamatsuri",
        "emoji": "🍥",
        "anilist": 13454,
        "mal": 164
      },
      {
        "name": "Udon Ise",
        "emoji": "🍥",
        "anilist": 165,
        "mal": 165
      },
      {
        "name": "Hinata Hyuuga",
        "emoji": "🍥",
        "anilist": 1555,
        "mal": 87,
        "displayName": "Hinata Hyuga"
      },
      {
        "name": "Kiba Inuzuka",
        "emoji": "🍥",
        "anilist": 3495,
        "mal": 105
      },
      {
        "name": "Shino Aburame",
        "emoji": "🍥",
        "anilist": 3428,
        "mal": 106
      },
      {
        "name": "Akamaru",
        "emoji": "🍥",
        "anilist": 4799,
        "mal": null
      },
      {
        "name": "Kurenai Yuuhi",
        "emoji": "🍥",
        "anilist": 4773,
        "mal": 108,
        "displayName": "Kurenai Yuhi"
      },
      {
        "name": "Shikamaru Nara",
        "emoji": "🍥",
        "anilist": 2007,
        "mal": 93
      },
      {
        "name": "Ino Yamanaka",
        "emoji": "🍥",
        "anilist": 2009,
        "mal": 103
      },
      {
        "name": "Chouji Akimichi",
        "emoji": "🍥",
        "anilist": 2008,
        "mal": 104,
        "displayName": "Choji Akimichi"
      },
      {
        "name": "Asuma Sarutobi",
        "emoji": "🍥",
        "anilist": 4775,
        "mal": 109
      },
      {
        "name": "Rock Lee",
        "emoji": "🍥",
        "anilist": 306,
        "mal": 89
      },
      {
        "name": "Neji Hyuuga",
        "emoji": "🍥",
        "anilist": 1694,
        "mal": 90,
        "displayName": "Neji Hyuga"
      },
      {
        "name": "Tenten",
        "emoji": "🍥",
        "anilist": 3710,
        "mal": 102
      },
      {
        "name": "Might Guy",
        "emoji": "🍥",
        "anilist": 307,
        "mal": 110
      },
      {
        "name": "Tsunade",
        "emoji": "🍥",
        "anilist": 155934,
        "mal": 83
      },
      {
        "name": "Jiraiya",
        "emoji": "🍥",
        "anilist": 2423,
        "mal": 88
      },
      {
        "name": "Orochimaru",
        "emoji": "🍥",
        "anilist": 2455,
        "mal": 86
      },
      {
        "name": "Kabuto Yakushi",
        "emoji": "🍥",
        "anilist": 2405,
        "mal": 99
      },
      {
        "name": "Shizune",
        "emoji": "🍥",
        "anilist": 4643,
        "mal": null
      },
      {
        "name": "Tonton",
        "emoji": "🍥",
        "anilist": 192707,
        "mal": null,
        "displayName": "TonTon"
      },
      {
        "name": "Anko Mitarashi",
        "emoji": "🍥",
        "anilist": 809,
        "mal": 107
      },
      {
        "name": "Hiruzen Sarutobi",
        "emoji": "🍥",
        "anilist": 7571,
        "mal": 111
      },
      {
        "name": "Danzou Shimura",
        "emoji": "🍥",
        "anilist": 23424,
        "mal": null,
        "displayName": "Danzo Shimura"
      },
      {
        "name": "Homura Mitokado",
        "emoji": "🍥",
        "anilist": 22648,
        "mal": null
      },
      {
        "name": "Koharu Utatane",
        "emoji": "🍥",
        "anilist": 22649,
        "mal": null
      },
      {
        "name": "Ebisu",
        "emoji": "🍥",
        "anilist": 10791,
        "mal": 166
      },
      {
        "name": "Ibiki Morino",
        "emoji": "🍥",
        "anilist": 22923,
        "mal": 139
      },
      {
        "name": "Genma Shiranui",
        "emoji": "🍥",
        "anilist": 3735,
        "mal": 138
      },
      {
        "name": "Aoba Yamashiro",
        "emoji": "🍥",
        "anilist": 17553,
        "mal": null
      },
      {
        "name": "Hayate Gekkou",
        "emoji": "🍥",
        "anilist": 7738,
        "mal": null
      },
      {
        "name": "Yugao Uzuki",
        "emoji": "🍥",
        "anilist": 15045,
        "mal": null
      },
      {
        "name": "Kotetsu Hagane",
        "emoji": "🍥",
        "anilist": 16304,
        "mal": null
      },
      {
        "name": "Izumo Kamizuki",
        "emoji": "🍥",
        "anilist": 14032,
        "mal": 136
      },
      {
        "name": "Hashirama Senju",
        "emoji": "🍥",
        "anilist": 12464,
        "mal": 112
      },
      {
        "name": "Tobirama Senju",
        "emoji": "🍥",
        "anilist": 12465,
        "mal": 113
      },
      {
        "name": "Minato Namikaze",
        "emoji": "🍥",
        "anilist": 2535,
        "mal": 94
      },
      {
        "name": "Kushina Uzumaki",
        "emoji": "🍥",
        "anilist": 7302,
        "mal": 140
      },
      {
        "name": "Mito Uzumaki",
        "emoji": "🍥",
        "anilist": 56691,
        "mal": null
      },
      {
        "name": "Dan Katou",
        "emoji": "🍥",
        "anilist": 22876,
        "mal": 143
      },
      {
        "name": "Nawaki",
        "emoji": "🍥",
        "anilist": 22884,
        "mal": 144
      },
      {
        "name": "Rin Nohara",
        "emoji": "🍥",
        "anilist": 14082,
        "mal": null
      },
      {
        "name": "Tobi",
        "emoji": "🍥",
        "anilist": 3149,
        "mal": 91,
        "displayName": "Obito Uchiha / Tobi"
      },
      {
        "name": "Itachi Uchiha",
        "emoji": "🍥",
        "anilist": 14,
        "mal": 84
      },
      {
        "name": "Madara Uchiha",
        "emoji": "🍥",
        "anilist": 53901,
        "mal": 114
      },
      {
        "name": "Shisui Uchiha",
        "emoji": "🍥",
        "anilist": 22893,
        "mal": 145
      },
      {
        "name": "Fugaku Uchiha",
        "emoji": "🍥",
        "anilist": 16973,
        "mal": 142
      },
      {
        "name": "Mikoto Uchiha",
        "emoji": "🍥",
        "anilist": 21122,
        "mal": 141
      },
      {
        "name": "Izuna Uchiha",
        "emoji": "🍥",
        "anilist": 16406,
        "mal": 146
      },
      {
        "name": "Gaara",
        "emoji": "🍥",
        "anilist": 1662,
        "mal": 82
      },
      {
        "name": "Temari",
        "emoji": "🍥",
        "anilist": 2174,
        "mal": 100
      },
      {
        "name": "Kankuro",
        "emoji": "🍥",
        "anilist": 4694,
        "mal": 101
      },
      {
        "name": "Chiyo",
        "emoji": "🍥",
        "anilist": 124091,
        "mal": 2119
      },
      {
        "name": "Ebizo",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Rasa",
        "emoji": "🍥",
        "anilist": 22920,
        "mal": null
      },
      {
        "name": "Baki",
        "emoji": "🍥",
        "anilist": 15081,
        "mal": null
      },
      {
        "name": "Yashamaru",
        "emoji": "🍥",
        "anilist": 13017,
        "mal": null
      },
      {
        "name": "Pakura",
        "emoji": "🍥",
        "anilist": 63791,
        "mal": 168
      },
      {
        "name": "Mei Terumi",
        "emoji": "🍥",
        "anilist": 23478,
        "mal": 117
      },
      {
        "name": "Ao",
        "emoji": "🍥",
        "anilist": 23420,
        "mal": 159
      },
      {
        "name": "Chojuro",
        "emoji": "🍥",
        "anilist": 23418,
        "mal": 158
      },
      {
        "name": "Zabuza Momochi",
        "emoji": "🍥",
        "anilist": 728,
        "mal": 1675
      },
      {
        "name": "Haku",
        "emoji": "🍥",
        "anilist": 2039,
        "mal": 1676
      },
      {
        "name": "Kisame Hoshigaki",
        "emoji": "🍥",
        "anilist": 2672,
        "mal": 130
      },
      {
        "name": "Suigetsu Hozuki",
        "emoji": "🍥",
        "anilist": 121,
        "mal": 121
      },
      {
        "name": "Mangetsu Hozuki",
        "emoji": "🍥",
        "anilist": 62775,
        "mal": null
      },
      {
        "name": "Gengetsu Hozuki",
        "emoji": "🍥",
        "anilist": 2153,
        "mal": 2153
      },
      {
        "name": "Ameyuri Ringo",
        "emoji": "🍥",
        "anilist": 64459,
        "mal": null
      },
      {
        "name": "Jinin Akebino",
        "emoji": "🍥",
        "anilist": 64461,
        "mal": null
      },
      {
        "name": "Jinpachi Munashi",
        "emoji": "🍥",
        "anilist": 64457,
        "mal": null
      },
      {
        "name": "Kushimaru Kuriarare",
        "emoji": "🍥",
        "anilist": 64455,
        "mal": null
      },
      {
        "name": "Fuguki Suikazan",
        "emoji": "🍥",
        "anilist": 40785,
        "mal": null
      },
      {
        "name": "A",
        "emoji": "🍥",
        "anilist": 22894,
        "mal": 118,
        "displayName": "Third Raikage / A"
      },
      {
        "name": "Killer Bee",
        "emoji": "🍥",
        "anilist": 18473,
        "mal": 116,
        "displayName": "Killer B / Killer Bee"
      },
      {
        "name": "Darui",
        "emoji": "🍥",
        "anilist": 23476,
        "mal": 119
      },
      {
        "name": "Omoi",
        "emoji": "🍥",
        "anilist": 22872,
        "mal": 160
      },
      {
        "name": "Karui",
        "emoji": "🍥",
        "anilist": 22874,
        "mal": 161
      },
      {
        "name": "Samui",
        "emoji": "🍥",
        "anilist": 22873,
        "mal": 162
      },
      {
        "name": "Mabui",
        "emoji": "🍥",
        "anilist": 33736,
        "mal": null
      },
      {
        "name": "Dodai",
        "emoji": "🍥",
        "anilist": 77437,
        "mal": null
      },
      {
        "name": "Cee",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Yugito Nii",
        "emoji": "🍥",
        "anilist": 15362,
        "mal": 155
      },
      {
        "name": "Third Raikage",
        "emoji": "🍥",
        "anilist": 65133,
        "mal": 2154,
        "displayName": "Third Raikage / A"
      },
      {
        "name": "Oonoki",
        "emoji": "🍥",
        "anilist": 23475,
        "mal": 176,
        "displayName": "Oonoki / Onoki"
      },
      {
        "name": "Kurotsuchi",
        "emoji": "🍥",
        "anilist": 23474,
        "mal": 175
      },
      {
        "name": "Akatsuchi",
        "emoji": "🍥",
        "anilist": 23473,
        "mal": 177
      },
      {
        "name": "Deidara",
        "emoji": "🍥",
        "anilist": 1902,
        "mal": 126
      },
      {
        "name": "Muu",
        "emoji": "🍥",
        "anilist": 64453,
        "mal": 2152,
        "displayName": "Mu / Muu"
      },
      {
        "name": "Han",
        "emoji": "🍥",
        "anilist": 23223,
        "mal": 153
      },
      {
        "name": "Roshi",
        "emoji": "🍥",
        "anilist": 154,
        "mal": 154
      },
      {
        "name": "Kitsuchi",
        "emoji": "🍥",
        "anilist": 62641,
        "mal": null
      },
      {
        "name": "Hanzo",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Pain",
        "emoji": "🍥",
        "anilist": 3180,
        "mal": 92,
        "displayName": "Nagato / Pain"
      },
      {
        "name": "Konan",
        "emoji": "🍥",
        "anilist": 3179,
        "mal": 95
      },
      {
        "name": "Yahiko",
        "emoji": "🍥",
        "anilist": 23050,
        "mal": 29829
      },
      {
        "name": "Sasori",
        "emoji": "🍥",
        "anilist": 1900,
        "mal": 127
      },
      {
        "name": "Hidan",
        "emoji": "🍥",
        "anilist": 2792,
        "mal": 128
      },
      {
        "name": "Kakuzu",
        "emoji": "🍥",
        "anilist": 3178,
        "mal": 129
      },
      {
        "name": "Zetsu",
        "emoji": "🍥",
        "anilist": 3150,
        "mal": 131
      },
      {
        "name": "Black Zetsu",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "White Zetsu",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Juugo",
        "emoji": "🍥",
        "anilist": 3152,
        "mal": 122,
        "displayName": "Jugo"
      },
      {
        "name": "Karin",
        "emoji": "🍥",
        "anilist": 3151,
        "mal": 120
      },
      {
        "name": "Kimimaro",
        "emoji": "🍥",
        "anilist": 53649,
        "mal": 2013
      },
      {
        "name": "Tayuya",
        "emoji": "🍥",
        "anilist": 3052,
        "mal": 2016
      },
      {
        "name": "Sakon",
        "emoji": "🍥",
        "anilist": 8760,
        "mal": null
      },
      {
        "name": "Ukon",
        "emoji": "🍥",
        "anilist": 41366,
        "mal": null
      },
      {
        "name": "Kidomaru",
        "emoji": "🍥",
        "anilist": 28928,
        "mal": 2015
      },
      {
        "name": "Jirobo",
        "emoji": "🍥",
        "anilist": 2014,
        "mal": 2014
      },
      {
        "name": "Dosu Kinuta",
        "emoji": "🍥",
        "anilist": 9244,
        "mal": null
      },
      {
        "name": "Zaku Abumi",
        "emoji": "🍥",
        "anilist": 8997,
        "mal": null
      },
      {
        "name": "Kin Tsuchi",
        "emoji": "🍥",
        "anilist": 9680,
        "mal": null
      },
      {
        "name": "Guren",
        "emoji": "🍥",
        "anilist": 20013,
        "mal": null
      },
      {
        "name": "Yukimaru",
        "emoji": "🍥",
        "anilist": 20621,
        "mal": null
      },
      {
        "name": "Mifune",
        "emoji": "🍥",
        "anilist": 12982,
        "mal": 172
      },
      {
        "name": "Hagoromo Otsutsuki",
        "emoji": "🍥",
        "anilist": 148,
        "mal": 148
      },
      {
        "name": "Hamura Otsutsuki",
        "emoji": "🍥",
        "anilist": 149,
        "mal": 149
      },
      {
        "name": "Kaguya Otsutsuki",
        "emoji": "🍥",
        "anilist": 147,
        "mal": 147
      },
      {
        "name": "Indra Otsutsuki",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Asura Otsutsuki",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Toneri Otsutsuki",
        "emoji": "🍥",
        "anilist": 150,
        "mal": 150
      },
      {
        "name": "Fuu",
        "emoji": "🍥",
        "anilist": 23220,
        "mal": 2143
      },
      {
        "name": "Yagura Karatachi",
        "emoji": "🍥",
        "anilist": 156,
        "mal": 156
      },
      {
        "name": "Utakata",
        "emoji": "🍥",
        "anilist": 23219,
        "mal": 152
      },
      {
        "name": "Hiashi Hyuuga",
        "emoji": "🍥",
        "anilist": 15039,
        "mal": null,
        "displayName": "Hiashi Hyuga"
      },
      {
        "name": "Hizashi Hyuuga",
        "emoji": "🍥",
        "anilist": 22880,
        "mal": null,
        "displayName": "Hizashi Hyuga"
      },
      {
        "name": "Hanabi Hyuuga",
        "emoji": "🍥",
        "anilist": 12563,
        "mal": 163,
        "displayName": "Hanabi Hyuga"
      },
      {
        "name": "Shikaku Nara",
        "emoji": "🍥",
        "anilist": 18056,
        "mal": 2151
      },
      {
        "name": "Inoichi Yamanaka",
        "emoji": "🍥",
        "anilist": 15072,
        "mal": 2150
      },
      {
        "name": "Choza Akimichi",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Tsume Inuzuka",
        "emoji": "🍥",
        "anilist": 15074,
        "mal": null
      },
      {
        "name": "Hana Inuzuka",
        "emoji": "🍥",
        "anilist": 15073,
        "mal": null
      },
      {
        "name": "Shibi Aburame",
        "emoji": "🍥",
        "anilist": 10697,
        "mal": null
      },
      {
        "name": "Torune Aburame",
        "emoji": "🍥",
        "anilist": 23647,
        "mal": 170
      },
      {
        "name": "Fu Yamanaka",
        "emoji": "🍥",
        "anilist": 40403,
        "mal": 171
      },
      {
        "name": "Gamabunta",
        "emoji": "🍥",
        "anilist": 4223,
        "mal": null
      },
      {
        "name": "Gamakichi",
        "emoji": "🍥",
        "anilist": 16999,
        "mal": null
      },
      {
        "name": "Gamatatsu",
        "emoji": "🍥",
        "anilist": 16952,
        "mal": null
      },
      {
        "name": "Gamaken",
        "emoji": "🍥",
        "anilist": 26933,
        "mal": null
      },
      {
        "name": "Fukasaku",
        "emoji": "🍥",
        "anilist": 24486,
        "mal": null
      },
      {
        "name": "Shima",
        "emoji": "🍥",
        "anilist": 24487,
        "mal": null
      },
      {
        "name": "Katsuyu",
        "emoji": "🍥",
        "anilist": 7608,
        "mal": null
      },
      {
        "name": "Manda",
        "emoji": "🍥",
        "anilist": 37929,
        "mal": null
      },
      {
        "name": "Aoda",
        "emoji": "🍥",
        "anilist": 80581,
        "mal": null
      },
      {
        "name": "Enma",
        "emoji": "🍥",
        "anilist": 15757,
        "mal": null
      },
      {
        "name": "Pakkun",
        "emoji": "🍥",
        "anilist": 2766,
        "mal": null
      },
      {
        "name": "Kurama",
        "emoji": "🍥",
        "anilist": 7407,
        "mal": null
      },
      {
        "name": "Shukaku",
        "emoji": "🍥",
        "anilist": 11813,
        "mal": null
      },
      {
        "name": "Matatabi",
        "emoji": "🍥",
        "anilist": 57871,
        "mal": null
      },
      {
        "name": "Isobu",
        "emoji": "🍥",
        "anilist": 57873,
        "mal": null
      },
      {
        "name": "Son Goku",
        "emoji": "🍥",
        "anilist": 57877,
        "mal": null
      },
      {
        "name": "Kokuo",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Saiken",
        "emoji": "🍥",
        "anilist": 57875,
        "mal": null
      },
      {
        "name": "Chomei",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Gyuki",
        "emoji": "🍥",
        "anilist": 16601,
        "mal": null
      },
      {
        "name": "Ten-Tails",
        "emoji": "🍥",
        "anilist": null,
        "mal": null
      }
    ]
  },
  {
    "id": "onepiece",
    "name": "One Piece",
    "emoji": "🏴‍☠️",
    "color": "#facc15",
    "tags": [
      "Shonen",
      "Adventure"
    ],
    "chars": [
      {
        "name": "Luffy Monkey",
        "emoji": "🏴‍☠️",
        "anilist": 40,
        "mal": 37
      },
      {
        "name": "Zoro Roronoa",
        "emoji": "🏴‍☠️",
        "anilist": 62,
        "mal": 38,
        "displayName": "Roronoa Zoro"
      },
      {
        "name": "Nami",
        "emoji": "🏴‍☠️",
        "anilist": 723,
        "mal": 39
      },
      {
        "name": "Usopp",
        "emoji": "🏴‍☠️",
        "anilist": 724,
        "mal": 40
      },
      {
        "name": "Sanji",
        "emoji": "🏴‍☠️",
        "anilist": 305,
        "mal": null
      },
      {
        "name": "Chopper Tony Tony",
        "emoji": "🏴‍☠️",
        "anilist": 309,
        "mal": 42,
        "displayName": "Tony Tony Chopper"
      },
      {
        "name": "Robin Nico",
        "emoji": "🏴‍☠️",
        "anilist": 61,
        "mal": 43,
        "displayName": "Nico Robin"
      },
      {
        "name": "Franky",
        "emoji": "🏴‍☠️",
        "anilist": 64,
        "mal": 44
      },
      {
        "name": "Brook",
        "emoji": "🏴‍☠️",
        "anilist": 5627,
        "mal": 45
      },
      {
        "name": "Jinbe",
        "emoji": "🏴‍☠️",
        "anilist": 18938,
        "mal": 46
      },
      {
        "name": "Going Merry",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Thousand Sunny",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Monkey D. Garp",
        "emoji": "🏴‍☠️",
        "anilist": 56,
        "mal": 56
      },
      {
        "name": "Monkey D. Dragon",
        "emoji": "🏴‍☠️",
        "anilist": 163834,
        "mal": 163834
      },
      {
        "name": "Ace Portgas",
        "emoji": "🏴‍☠️",
        "anilist": 2072,
        "mal": 51
      },
      {
        "name": "Sabo",
        "emoji": "🏴‍☠️",
        "anilist": 32893,
        "mal": 52
      },
      {
        "name": "Shanks",
        "emoji": "🏴‍☠️",
        "anilist": 727,
        "mal": 53
      },
      {
        "name": "Benn Beckman",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Yasopp",
        "emoji": "🏴‍☠️",
        "anilist": 9562,
        "mal": null
      },
      {
        "name": "Lucky Roux",
        "emoji": "🏴‍☠️",
        "anilist": 4885,
        "mal": null
      },
      {
        "name": "Buggy",
        "emoji": "🏴‍☠️",
        "anilist": 725,
        "mal": 73
      },
      {
        "name": "Alvida",
        "emoji": "🏴‍☠️",
        "anilist": 4899,
        "mal": null
      },
      {
        "name": "Koby",
        "emoji": "🏴‍☠️",
        "anilist": 12361,
        "mal": null
      },
      {
        "name": "Helmeppo",
        "emoji": "🏴‍☠️",
        "anilist": 12362,
        "mal": 163871
      },
      {
        "name": "Dracule Mihawk",
        "emoji": "🏴‍☠️",
        "anilist": 2064,
        "mal": 54
      },
      {
        "name": "Smoker",
        "emoji": "🏴‍☠️",
        "anilist": 2753,
        "mal": 59
      },
      {
        "name": "Tashigi",
        "emoji": "🏴‍☠️",
        "anilist": 2750,
        "mal": 60
      },
      {
        "name": "Arlong",
        "emoji": "🏴‍☠️",
        "anilist": 4887,
        "mal": 74
      },
      {
        "name": "Hatchan / Hachi",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Nojiko",
        "emoji": "🏴‍☠️",
        "anilist": 4888,
        "mal": null
      },
      {
        "name": "Genzo",
        "emoji": "🏴‍☠️",
        "anilist": 4892,
        "mal": null
      },
      {
        "name": "Vivi Nefertari",
        "emoji": "🏴‍☠️",
        "anilist": 726,
        "mal": 76,
        "displayName": "Nefertari Vivi"
      },
      {
        "name": "Karoo",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Igaram",
        "emoji": "🏴‍☠️",
        "anilist": 5415,
        "mal": 163881
      },
      {
        "name": "Pell",
        "emoji": "🏴‍☠️",
        "anilist": 9098,
        "mal": 163882
      },
      {
        "name": "Chaka",
        "emoji": "🏴‍☠️",
        "anilist": 21220,
        "mal": 163883
      },
      {
        "name": "Crocodile / Sir Crocodile",
        "emoji": "🏴‍☠️",
        "anilist": 61,
        "mal": 61
      },
      {
        "name": "Bentham / Bon Clay / Mr. 2",
        "emoji": "🏴‍☠️",
        "anilist": 163884,
        "mal": 163884
      },
      {
        "name": "Ivankov Emporio",
        "emoji": "🏴‍☠️",
        "anilist": 22646,
        "mal": 163833,
        "displayName": "Emporio Ivankov"
      },
      {
        "name": "Inazuma",
        "emoji": "🏴‍☠️",
        "anilist": 22647,
        "mal": null
      },
      {
        "name": "Moria Gecko",
        "emoji": "🏴‍☠️",
        "anilist": 7454,
        "mal": 163831,
        "displayName": "Gecko Moria"
      },
      {
        "name": "Perona",
        "emoji": "🏴‍☠️",
        "anilist": 7467,
        "mal": 75
      },
      {
        "name": "Kuma Bartholomew",
        "emoji": "🏴‍☠️",
        "anilist": 7453,
        "mal": 163832,
        "displayName": "Bartholomew Kuma"
      },
      {
        "name": "Jewelry Bonney",
        "emoji": "🏴‍☠️",
        "anilist": 20295,
        "mal": 163829
      },
      {
        "name": "Rayleigh Silvers",
        "emoji": "🏴‍☠️",
        "anilist": 17142,
        "mal": 57,
        "displayName": "Silvers Rayleigh"
      },
      {
        "name": "Hancock Boa",
        "emoji": "🏴‍☠️",
        "anilist": 16342,
        "mal": 55,
        "displayName": "Boa Hancock"
      },
      {
        "name": "Sengoku",
        "emoji": "🏴‍☠️",
        "anilist": 13018,
        "mal": null
      },
      {
        "name": "Sakazuki / Akainu",
        "emoji": "🏴‍☠️",
        "anilist": 72,
        "mal": 72
      },
      {
        "name": "Kuzan / Aokiji",
        "emoji": "🏴‍☠️",
        "anilist": 71,
        "mal": 71
      },
      {
        "name": "Borsalino",
        "emoji": "🏴‍☠️",
        "anilist": 21093,
        "mal": 70,
        "displayName": "Borsalino / Kizaru"
      },
      {
        "name": "Issho / Fujitora",
        "emoji": "🏴‍☠️",
        "anilist": 163877,
        "mal": 163877
      },
      {
        "name": "Aramaki",
        "emoji": "🏴‍☠️",
        "anilist": 271788,
        "mal": 163876,
        "displayName": "Aramaki / Ryokugyu"
      },
      {
        "name": "Lucci Rob",
        "emoji": "🏴‍☠️",
        "anilist": 5677,
        "mal": 69,
        "displayName": "Rob Lucci"
      },
      {
        "name": "Kaku",
        "emoji": "🏴‍☠️",
        "anilist": 131431,
        "mal": null
      },
      {
        "name": "Kalifa",
        "emoji": "🏴‍☠️",
        "anilist": 5910,
        "mal": null
      },
      {
        "name": "Blueno",
        "emoji": "🏴‍☠️",
        "anilist": 11394,
        "mal": null
      },
      {
        "name": "Spandam",
        "emoji": "🏴‍☠️",
        "anilist": 6551,
        "mal": null
      },
      {
        "name": "Law Trafalgar",
        "emoji": "🏴‍☠️",
        "anilist": 13767,
        "mal": 50,
        "displayName": "Trafalgar Law"
      },
      {
        "name": "Bepo",
        "emoji": "🏴‍☠️",
        "anilist": 17492,
        "mal": null
      },
      {
        "name": "Kid Eustass",
        "emoji": "🏴‍☠️",
        "anilist": 14989,
        "mal": 163825,
        "displayName": "Eustass Kid"
      },
      {
        "name": "Killer",
        "emoji": "🏴‍☠️",
        "anilist": 163824,
        "mal": 163824
      },
      {
        "name": "Basil Hawkins",
        "emoji": "🏴‍☠️",
        "anilist": 20293,
        "mal": 163826
      },
      {
        "name": "Apoo Scratchmen",
        "emoji": "🏴‍☠️",
        "anilist": 20288,
        "mal": 163827,
        "displayName": "Scratchmen Apoo"
      },
      {
        "name": "Drake X.",
        "emoji": "🏴‍☠️",
        "anilist": 20289,
        "mal": 163823,
        "displayName": "X Drake"
      },
      {
        "name": "Bege Capone",
        "emoji": "🏴‍☠️",
        "anilist": 20292,
        "mal": 163828,
        "displayName": "Capone Bege"
      },
      {
        "name": "Urouge",
        "emoji": "🏴‍☠️",
        "anilist": 20294,
        "mal": null
      },
      {
        "name": "Charlotte Linlin / Big Mom",
        "emoji": "🏴‍☠️",
        "anilist": 65,
        "mal": 65
      },
      {
        "name": "Katakuri Charlotte",
        "emoji": "🏴‍☠️",
        "anilist": 124077,
        "mal": 63,
        "displayName": "Charlotte Katakuri"
      },
      {
        "name": "Smoothie Charlotte",
        "emoji": "🏴‍☠️",
        "anilist": 136036,
        "mal": 163852,
        "displayName": "Charlotte Smoothie"
      },
      {
        "name": "Cracker Charlotte",
        "emoji": "🏴‍☠️",
        "anilist": 136035,
        "mal": 163853,
        "displayName": "Charlotte Cracker"
      },
      {
        "name": "Perospero Charlotte",
        "emoji": "🏴‍☠️",
        "anilist": 181760,
        "mal": 163854,
        "displayName": "Charlotte Perospero"
      },
      {
        "name": "Zeus",
        "emoji": "🏴‍☠️",
        "anilist": 233909,
        "mal": null
      },
      {
        "name": "Prometheus",
        "emoji": "🏴‍☠️",
        "anilist": 233910,
        "mal": null
      },
      {
        "name": "Napoleon",
        "emoji": "🏴‍☠️",
        "anilist": 332667,
        "mal": null
      },
      {
        "name": "Kaido",
        "emoji": "🏴‍☠️",
        "anilist": 64,
        "mal": 64
      },
      {
        "name": "King",
        "emoji": "🏴‍☠️",
        "anilist": 130416,
        "mal": 163860
      },
      {
        "name": "Queen",
        "emoji": "🏴‍☠️",
        "anilist": 131427,
        "mal": 163859
      },
      {
        "name": "Jack",
        "emoji": "🏴‍☠️",
        "anilist": 135949,
        "mal": 163858
      },
      {
        "name": "Yamato",
        "emoji": "🏴‍☠️",
        "anilist": 176840,
        "mal": 163820
      },
      {
        "name": "Ulti",
        "emoji": "🏴‍☠️",
        "anilist": 172135,
        "mal": 163821
      },
      {
        "name": "Page One",
        "emoji": "🏴‍☠️",
        "anilist": 172132,
        "mal": null
      },
      {
        "name": "Black Maria",
        "emoji": "🏴‍☠️",
        "anilist": 172136,
        "mal": 163862
      },
      {
        "name": "Who's-Who",
        "emoji": "🏴‍☠️",
        "anilist": 172133,
        "mal": null
      },
      {
        "name": "Sasaki",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kozuki Oden",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kin'emon",
        "emoji": "🏴‍☠️",
        "anilist": 163865,
        "mal": 163865
      },
      {
        "name": "Momonosuke",
        "emoji": "🏴‍☠️",
        "anilist": 163866,
        "mal": 163866
      },
      {
        "name": "Kikunojo / Kiku",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Raizo",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Shinobu",
        "emoji": "🏴‍☠️",
        "anilist": 128126,
        "mal": null
      },
      {
        "name": "Komurasaki",
        "emoji": "🏴‍☠️",
        "anilist": 131435,
        "mal": null,
        "displayName": "Kozuki Hiyori / Komurasaki"
      },
      {
        "name": "Tama",
        "emoji": "🏴‍☠️",
        "anilist": 127908,
        "mal": 163867
      },
      {
        "name": "Marco",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Edward Newgate / Whitebeard",
        "emoji": "🏴‍☠️",
        "anilist": 67,
        "mal": 67
      },
      {
        "name": "Jozu",
        "emoji": "🏴‍☠️",
        "anilist": 21559,
        "mal": null
      },
      {
        "name": "Vista",
        "emoji": "🏴‍☠️",
        "anilist": 27202,
        "mal": null
      },
      {
        "name": "Marshall D. Teach / Blackbeard",
        "emoji": "🏴‍☠️",
        "anilist": 66,
        "mal": 66
      },
      {
        "name": "Shiryu",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Augur Van",
        "emoji": "🏴‍☠️",
        "anilist": 9325,
        "mal": null,
        "displayName": "Van Augur"
      },
      {
        "name": "Jesus Burgess",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Avalo Pizarro",
        "emoji": "🏴‍☠️",
        "anilist": 31182,
        "mal": null
      },
      {
        "name": "Catarina Devon",
        "emoji": "🏴‍☠️",
        "anilist": 31181,
        "mal": null
      },
      {
        "name": "Lafitte",
        "emoji": "🏴‍☠️",
        "anilist": 9327,
        "mal": null
      },
      {
        "name": "Q Doc",
        "emoji": "🏴‍☠️",
        "anilist": 9326,
        "mal": null,
        "displayName": "Doc Q"
      },
      {
        "name": "Stronger",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Caesar Clown",
        "emoji": "🏴‍☠️",
        "anilist": 163836,
        "mal": 163836
      },
      {
        "name": "Donquixote Doflamingo",
        "emoji": "🏴‍☠️",
        "anilist": 62,
        "mal": 62
      },
      {
        "name": "Rosinante Donquixote",
        "emoji": "🏴‍☠️",
        "anilist": 120536,
        "mal": null,
        "displayName": "Donquixote Rosinante / Corazon"
      },
      {
        "name": "Trebol",
        "emoji": "🏴‍☠️",
        "anilist": 189714,
        "mal": null
      },
      {
        "name": "Pica",
        "emoji": "🏴‍☠️",
        "anilist": 191779,
        "mal": null
      },
      {
        "name": "Diamante",
        "emoji": "🏴‍☠️",
        "anilist": 228731,
        "mal": null
      },
      {
        "name": "Vergo",
        "emoji": "🏴‍☠️",
        "anilist": 67347,
        "mal": null
      },
      {
        "name": "Monet",
        "emoji": "🏴‍☠️",
        "anilist": 59641,
        "mal": 163838
      },
      {
        "name": "Sugar",
        "emoji": "🏴‍☠️",
        "anilist": 88957,
        "mal": 163839
      },
      {
        "name": "Rebecca",
        "emoji": "🏴‍☠️",
        "anilist": 85651,
        "mal": 163844
      },
      {
        "name": "Kyros",
        "emoji": "🏴‍☠️",
        "anilist": 126109,
        "mal": 163848
      },
      {
        "name": "Viola",
        "emoji": "🏴‍☠️",
        "anilist": 132922,
        "mal": 163843
      },
      {
        "name": "Bartolomeo",
        "emoji": "🏴‍☠️",
        "anilist": 85647,
        "mal": 163846
      },
      {
        "name": "Cavendish",
        "emoji": "🏴‍☠️",
        "anilist": 85649,
        "mal": 163845
      },
      {
        "name": "Koala",
        "emoji": "🏴‍☠️",
        "anilist": 43093,
        "mal": null
      },
      {
        "name": "Stussy",
        "emoji": "🏴‍☠️",
        "anilist": 135948,
        "mal": 163894
      },
      {
        "name": "Dr. Vegapunk / Stella",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Shaka",
        "emoji": "🏴‍☠️",
        "anilist": 326792,
        "mal": null
      },
      {
        "name": "Lilith",
        "emoji": "🏴‍☠️",
        "anilist": 181690,
        "mal": null
      },
      {
        "name": "Edison",
        "emoji": "🏴‍☠️",
        "anilist": 326793,
        "mal": null
      },
      {
        "name": "Pythagoras",
        "emoji": "🏴‍☠️",
        "anilist": 326794,
        "mal": null
      },
      {
        "name": "Atlas",
        "emoji": "🏴‍☠️",
        "anilist": 290689,
        "mal": null
      },
      {
        "name": "York",
        "emoji": "🏴‍☠️",
        "anilist": 326791,
        "mal": null
      },
      {
        "name": "Sentomaru",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Jaygarcia Saturn Sei",
        "emoji": "🏴‍☠️",
        "anilist": 299038,
        "mal": 163893
      },
      {
        "name": "Imu",
        "emoji": "🏴‍☠️",
        "anilist": 128130,
        "mal": 163874
      },
      {
        "name": "Cobra Nefertari",
        "emoji": "🏴‍☠️",
        "anilist": 9344,
        "mal": 163880,
        "displayName": "Nefertari Cobra"
      },
      {
        "name": "Laboon",
        "emoji": "🏴‍☠️",
        "anilist": 5413,
        "mal": null
      },
      {
        "name": "Crocus",
        "emoji": "🏴‍☠️",
        "anilist": 21366,
        "mal": null
      },
      {
        "name": "Duval",
        "emoji": "🏴‍☠️",
        "anilist": 19168,
        "mal": null
      },
      {
        "name": "Camie",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Shirahoshi",
        "emoji": "🏴‍☠️",
        "anilist": 40273,
        "mal": null
      },
      {
        "name": "Enel",
        "emoji": "🏴‍☠️",
        "anilist": 1541,
        "mal": 68
      },
      {
        "name": "Wyper",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Carrot",
        "emoji": "🏴‍☠️",
        "anilist": 126179,
        "mal": 77
      },
      {
        "name": "Pedro",
        "emoji": "🏴‍☠️",
        "anilist": 126180,
        "mal": null
      },
      {
        "name": "Inuarashi",
        "emoji": "🏴‍☠️",
        "anilist": 126182,
        "mal": null
      },
      {
        "name": "Nekomamushi",
        "emoji": "🏴‍☠️",
        "anilist": 126181,
        "mal": null
      },
      {
        "name": "Kawamatsu",
        "emoji": "🏴‍☠️",
        "anilist": 128125,
        "mal": null
      },
      {
        "name": "S-Snake",
        "emoji": "🏴‍☠️",
        "anilist": 340682,
        "mal": null
      },
      {
        "name": "S-Hawk",
        "emoji": "🏴‍☠️",
        "anilist": 365031,
        "mal": null
      },
      {
        "name": "S-Shark",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "S-Bear",
        "emoji": "🏴‍☠️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Zunesha",
        "emoji": "🏴‍☠️",
        "anilist": 318197,
        "mal": null
      },
      {
        "name": "Gol D. Roger / Gold Roger",
        "emoji": "🏴‍☠️",
        "anilist": 163872,
        "mal": 163872
      }
    ]
  },
  {
    "id": "haikyuu",
    "name": "Haikyuu!!",
    "emoji": "🏐",
    "color": "#fb923c",
    "tags": [
      "Sports"
    ],
    "chars": [
      {
        "name": "Shoyo Hinata",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Tobio Kageyama",
        "emoji": "🏐",
        "anilist": 64771,
        "mal": null
      },
      {
        "name": "Daichi Sawamura",
        "emoji": "🏐",
        "anilist": 67323,
        "mal": null
      },
      {
        "name": "Koshi Sugawara",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Asahi Azumane",
        "emoji": "🏐",
        "anilist": 67333,
        "mal": null
      },
      {
        "name": "Yu Nishinoya",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Ryunosuke Tanaka",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kei Tsukishima",
        "emoji": "🏐",
        "anilist": 67329,
        "mal": null
      },
      {
        "name": "Tadashi Yamaguchi",
        "emoji": "🏐",
        "anilist": 71609,
        "mal": null
      },
      {
        "name": "Chikara Ennoshita",
        "emoji": "🏐",
        "anilist": 67331,
        "mal": null
      },
      {
        "name": "Kiyoko Shimizu",
        "emoji": "🏐",
        "anilist": 67689,
        "mal": null
      },
      {
        "name": "Hitoka Yachi",
        "emoji": "🏐",
        "anilist": 89124,
        "mal": null
      },
      {
        "name": "Ittetsu Takeda",
        "emoji": "🏐",
        "anilist": 73679,
        "mal": null
      },
      {
        "name": "Keishin Ukai",
        "emoji": "🏐",
        "anilist": 70861,
        "mal": null
      },
      {
        "name": "Toru Oikawa",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Hajime Iwaizumi",
        "emoji": "🏐",
        "anilist": 75636,
        "mal": null
      },
      {
        "name": "Issei Matsukawa",
        "emoji": "🏐",
        "anilist": 137468,
        "mal": null
      },
      {
        "name": "Takahiro Hanamaki",
        "emoji": "🏐",
        "anilist": 137470,
        "mal": null
      },
      {
        "name": "Kentaro Kyotani",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Yutaro Kindaichi",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Akira Kunimi",
        "emoji": "🏐",
        "anilist": 89508,
        "mal": null
      },
      {
        "name": "Shinji Watari",
        "emoji": "🏐",
        "anilist": 137469,
        "mal": null
      },
      {
        "name": "Tetsuro Kuroo",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kenma Kozume",
        "emoji": "🏐",
        "anilist": 71267,
        "mal": null
      },
      {
        "name": "Morisuke Yaku",
        "emoji": "🏐",
        "anilist": 74033,
        "mal": null
      },
      {
        "name": "Lev Haiba",
        "emoji": "🏐",
        "anilist": 89517,
        "mal": null
      },
      {
        "name": "Nobuyuki Kai",
        "emoji": "🏐",
        "anilist": 74029,
        "mal": null
      },
      {
        "name": "Shohei Fukunaga",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Taketora Yamamoto",
        "emoji": "🏐",
        "anilist": 73673,
        "mal": null
      },
      {
        "name": "So Inuoka",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Yuki Shibayama",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kotaro Bokuto",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Keiji Akaashi",
        "emoji": "🏐",
        "anilist": 88938,
        "mal": null
      },
      {
        "name": "Akinori Konoha",
        "emoji": "🏐",
        "anilist": 137480,
        "mal": null
      },
      {
        "name": "Haruki Komi",
        "emoji": "🏐",
        "anilist": 137477,
        "mal": null
      },
      {
        "name": "Wataru Onaga",
        "emoji": "🏐",
        "anilist": 137479,
        "mal": null
      },
      {
        "name": "Tatsuki Washio",
        "emoji": "🏐",
        "anilist": 137474,
        "mal": null
      },
      {
        "name": "Yamato Sarukui",
        "emoji": "🏐",
        "anilist": 137475,
        "mal": null
      },
      {
        "name": "Wakatoshi Ushijima",
        "emoji": "🏐",
        "anilist": 76816,
        "mal": null
      },
      {
        "name": "Satori Tendou",
        "emoji": "🏐",
        "anilist": 126073,
        "mal": null
      },
      {
        "name": "Tsutomu Goshiki",
        "emoji": "🏐",
        "anilist": 137534,
        "mal": null
      },
      {
        "name": "Hayato Yamagata",
        "emoji": "🏐",
        "anilist": 137540,
        "mal": null
      },
      {
        "name": "Eita Semi",
        "emoji": "🏐",
        "anilist": 137535,
        "mal": null
      },
      {
        "name": "Reon Ohira",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Taichi Kawanishi",
        "emoji": "🏐",
        "anilist": 137538,
        "mal": null
      },
      {
        "name": "Kenji Shirabu",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Tanji Washijou",
        "emoji": "🏐",
        "anilist": 137539,
        "mal": null
      },
      {
        "name": "Atsumu Miya",
        "emoji": "🏐",
        "anilist": 139486,
        "mal": null
      },
      {
        "name": "Osamu Miya",
        "emoji": "🏐",
        "anilist": 139492,
        "mal": null
      },
      {
        "name": "Shinsuke Kita",
        "emoji": "🏐",
        "anilist": 167515,
        "mal": null
      },
      {
        "name": "Rintaro Suna",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Aran Ojiro",
        "emoji": "🏐",
        "anilist": 139485,
        "mal": null
      },
      {
        "name": "Michinari Akagi",
        "emoji": "🏐",
        "anilist": 139491,
        "mal": null
      },
      {
        "name": "Ren Omimi",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kiyoomi Sakusa",
        "emoji": "🏐",
        "anilist": 139475,
        "mal": null,
        "displayName": "Sakusa Kiyoomi"
      },
      {
        "name": "Korai Hoshiumi",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Motoya Komori",
        "emoji": "🏐",
        "anilist": 139476,
        "mal": null
      },
      {
        "name": "Wakatsu Kiryuu",
        "emoji": "🏐",
        "anilist": 139506,
        "mal": null
      },
      {
        "name": "Sachiro Hirugami",
        "emoji": "🏐",
        "anilist": null,
        "mal": null
      }
    ]
  },
  {
    "id": "mha",
    "name": "My Hero Academia",
    "emoji": "🦸",
    "color": "#22c55e",
    "tags": [
      "Shonen",
      "Superhero"
    ],
    "chars": [
      {
        "name": "Izuku Midoriya",
        "emoji": "🦸",
        "anilist": 89028,
        "mal": 152222,
        "displayName": "Izuku Midoriya / Deku"
      },
      {
        "name": "Katsuki Bakugou",
        "emoji": "🦸",
        "anilist": 88892,
        "mal": 152223
      },
      {
        "name": "Shoto Todoroki",
        "emoji": "🦸",
        "anilist": 93883,
        "mal": 152224
      },
      {
        "name": "Ochaco Uraraka",
        "emoji": "🦸",
        "anilist": 93885,
        "mal": 152226
      },
      {
        "name": "Tenya Iida",
        "emoji": "🦸",
        "anilist": 89222,
        "mal": 152227
      },
      {
        "name": "Tsuyu Asui",
        "emoji": "🦸",
        "anilist": 89223,
        "mal": 152248
      },
      {
        "name": "Momo Yaoyorozu",
        "emoji": "🦸",
        "anilist": 89241,
        "mal": 152230
      },
      {
        "name": "Eijiro Kirishima",
        "emoji": "🦸",
        "anilist": 93888,
        "mal": 152229
      },
      {
        "name": "Denki Kaminari",
        "emoji": "🦸",
        "anilist": 89249,
        "mal": 152231
      },
      {
        "name": "Kyoka Jiro",
        "emoji": "🦸",
        "anilist": 93906,
        "mal": 152247
      },
      {
        "name": "Fumikage Tokoyami",
        "emoji": "🦸",
        "anilist": 89898,
        "mal": 152246
      },
      {
        "name": "Mashirao Ojiro",
        "emoji": "🦸",
        "anilist": 89896,
        "mal": 152250
      },
      {
        "name": "Mezo Shoji",
        "emoji": "🦸",
        "anilist": 93908,
        "mal": 152249
      },
      {
        "name": "Minoru Mineta",
        "emoji": "🦸",
        "anilist": 89244,
        "mal": 152251
      },
      {
        "name": "Yuga Aoyama",
        "emoji": "🦸",
        "anilist": 93911,
        "mal": 152252
      },
      {
        "name": "Hanta Sero",
        "emoji": "🦸",
        "anilist": 89895,
        "mal": 152253
      },
      {
        "name": "Rikido Sato",
        "emoji": "🦸",
        "anilist": 93913,
        "mal": 152254
      },
      {
        "name": "Koji Koda",
        "emoji": "🦸",
        "anilist": 93914,
        "mal": 152255
      },
      {
        "name": "Toru Hagakure",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Mina Ashido",
        "emoji": "🦸",
        "anilist": 89247,
        "mal": null
      },
      {
        "name": "Toshinori Yagi",
        "emoji": "🦸",
        "anilist": 89224,
        "mal": 152225,
        "displayName": "All Might / Toshinori Yagi"
      },
      {
        "name": "Shota Aizawa / Eraser Head",
        "emoji": "🦸",
        "anilist": 93893,
        "mal": 152234
      },
      {
        "name": "Hizashi Yamada",
        "emoji": "🦸",
        "anilist": 127425,
        "mal": 152235,
        "displayName": "Present Mic / Hizashi Yamada"
      },
      {
        "name": "Nemuri Kayama",
        "emoji": "🦸",
        "anilist": 127427,
        "mal": 152244,
        "displayName": "Midnight / Nemuri Kayama"
      },
      {
        "name": "Cementoss",
        "emoji": "🦸",
        "anilist": 93922,
        "mal": 152263
      },
      {
        "name": "Snipe",
        "emoji": "🦸",
        "anilist": 191596,
        "mal": 152265
      },
      {
        "name": "Power Loader",
        "emoji": "🦸",
        "anilist": 93925,
        "mal": 152266
      },
      {
        "name": "Thirteen",
        "emoji": "🦸",
        "anilist": 143542,
        "mal": 152267
      },
      {
        "name": "Hound Dog",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Nezu",
        "emoji": "🦸",
        "anilist": 143539,
        "mal": null
      },
      {
        "name": "Recovery Girl",
        "emoji": "🦸",
        "anilist": 93921,
        "mal": 152262
      },
      {
        "name": "Ectoplasm",
        "emoji": "🦸",
        "anilist": 150853,
        "mal": null
      },
      {
        "name": "Vlad King",
        "emoji": "🦸",
        "anilist": 93923,
        "mal": 152264
      },
      {
        "name": "Gran Torino",
        "emoji": "🦸",
        "anilist": 93919,
        "mal": 152260
      },
      {
        "name": "Endeavor / Enji Todoroki",
        "emoji": "🦸",
        "anilist": 93892,
        "mal": 152233
      },
      {
        "name": "Hawks / Keigo Takami",
        "emoji": "🦸",
        "anilist": 118269,
        "mal": 168492
      },
      {
        "name": "Best Jeanist",
        "emoji": "🦸",
        "anilist": 93948,
        "mal": 152289
      },
      {
        "name": "Edgeshot",
        "emoji": "🦸",
        "anilist": 93947,
        "mal": 152288
      },
      {
        "name": "Mirko",
        "emoji": "🦸",
        "anilist": 131698,
        "mal": 177342
      },
      {
        "name": "Ryukyu",
        "emoji": "🦸",
        "anilist": 93949,
        "mal": 152290
      },
      {
        "name": "Gang Orca",
        "emoji": "🦸",
        "anilist": 93902,
        "mal": 152243
      },
      {
        "name": "Fat Gum",
        "emoji": "🦸",
        "anilist": 93904,
        "mal": 152245
      },
      {
        "name": "Mt. Lady",
        "emoji": "🦸",
        "anilist": 93945,
        "mal": 152286
      },
      {
        "name": "Kamui Woods",
        "emoji": "🦸",
        "anilist": 93946,
        "mal": 152287
      },
      {
        "name": "Wash",
        "emoji": "🦸",
        "anilist": 93950,
        "mal": 152291
      },
      {
        "name": "Uwabami",
        "emoji": "🦸",
        "anilist": 210092,
        "mal": 152285
      },
      {
        "name": "Mirio Togata",
        "emoji": "🦸",
        "anilist": 123527,
        "mal": 168493
      },
      {
        "name": "Tamaki Amajiki",
        "emoji": "🦸",
        "anilist": 125934,
        "mal": 168494
      },
      {
        "name": "Nejire Hadou",
        "emoji": "🦸",
        "anilist": 126843,
        "mal": 168495
      },
      {
        "name": "Sir Nighteye",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Eri",
        "emoji": "🦸",
        "anilist": 118273,
        "mal": 168496
      },
      {
        "name": "Mei Hatsume",
        "emoji": "🦸",
        "anilist": 89248,
        "mal": 152284
      },
      {
        "name": "Hitoshi Shinsou",
        "emoji": "🦸",
        "anilist": 89242,
        "mal": 152257
      },
      {
        "name": "Itsuka Kendou",
        "emoji": "🦸",
        "anilist": 126064,
        "mal": 168498
      },
      {
        "name": "Neito Monoma",
        "emoji": "🦸",
        "anilist": 125450,
        "mal": 168500
      },
      {
        "name": "Tetsutetsu Tetsutetsu",
        "emoji": "🦸",
        "anilist": 127043,
        "mal": 168499
      },
      {
        "name": "Ibara Shiozaki",
        "emoji": "🦸",
        "anilist": 127426,
        "mal": 168502
      },
      {
        "name": "Jurota Shishida",
        "emoji": "🦸",
        "anilist": 118280,
        "mal": 168503
      },
      {
        "name": "Yosetsu Awase",
        "emoji": "🦸",
        "anilist": 208147,
        "mal": 168501
      },
      {
        "name": "Pony  Tsunotori",
        "emoji": "🦸",
        "anilist": 145387,
        "mal": null,
        "displayName": "Pony Tsunotori"
      },
      {
        "name": "Setsuna Tokage",
        "emoji": "🦸",
        "anilist": 149179,
        "mal": null
      },
      {
        "name": "Inasa Yoarashi",
        "emoji": "🦸",
        "anilist": 126855,
        "mal": 152269
      },
      {
        "name": "Camie Utsushimi",
        "emoji": "🦸",
        "anilist": 126734,
        "mal": 152270
      },
      {
        "name": "Seiji Shishikura",
        "emoji": "🦸",
        "anilist": 131155,
        "mal": 152271
      },
      {
        "name": "Tomura Shigaraki",
        "emoji": "🦸",
        "anilist": 89226,
        "mal": 152232
      },
      {
        "name": "All For One",
        "emoji": "🦸",
        "anilist": 125956,
        "mal": 152259
      },
      {
        "name": "Kurogiri",
        "emoji": "🦸",
        "anilist": 137506,
        "mal": 152281
      },
      {
        "name": "Gigantomachia",
        "emoji": "🦸",
        "anilist": 143540,
        "mal": 152280
      },
      {
        "name": "Himiko Toga",
        "emoji": "🦸",
        "anilist": 125619,
        "mal": 152228
      },
      {
        "name": "Dabi",
        "emoji": "🦸",
        "anilist": 126378,
        "mal": 152237
      },
      {
        "name": "Twice",
        "emoji": "🦸",
        "anilist": 93897,
        "mal": 152238
      },
      {
        "name": "Spinner",
        "emoji": "🦸",
        "anilist": 93898,
        "mal": 152239
      },
      {
        "name": "Mr. Compress",
        "emoji": "🦸",
        "anilist": 93899,
        "mal": 152240
      },
      {
        "name": "Magne",
        "emoji": "🦸",
        "anilist": 93934,
        "mal": 152275
      },
      {
        "name": "Muscular",
        "emoji": "🦸",
        "anilist": 141750,
        "mal": 152273
      },
      {
        "name": "Moonfish",
        "emoji": "🦸",
        "anilist": 141751,
        "mal": 152274
      },
      {
        "name": "Stain",
        "emoji": "🦸",
        "anilist": 93917,
        "mal": 152258
      },
      {
        "name": "Overhaul / Kai Chisaki",
        "emoji": "🦸",
        "anilist": 118274,
        "mal": 168497
      },
      {
        "name": "Chronostasis / Hari Kurono",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kendo Rappa",
        "emoji": "🦸",
        "anilist": 131699,
        "mal": 177343
      },
      {
        "name": "Gentle Criminal",
        "emoji": "🦸",
        "anilist": 93936,
        "mal": 152277
      },
      {
        "name": "La Brava",
        "emoji": "🦸",
        "anilist": 93937,
        "mal": 152278
      },
      {
        "name": "Re-Destro",
        "emoji": "🦸",
        "anilist": 131697,
        "mal": 177341
      },
      {
        "name": "Geten",
        "emoji": "🦸",
        "anilist": 160441,
        "mal": null
      },
      {
        "name": "Skeptic",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Curious",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Trumpet",
        "emoji": "🦸",
        "anilist": 61283,
        "mal": null
      },
      {
        "name": "Nine",
        "emoji": "🦸",
        "anilist": 88094,
        "mal": 177345
      },
      {
        "name": "Star and Stripe / Cathleen Bate",
        "emoji": "🦸",
        "anilist": 93955,
        "mal": 152296
      },
      {
        "name": "Lady Nagant",
        "emoji": "🦸",
        "anilist": 93956,
        "mal": 152297
      },
      {
        "name": "Nana Shimura",
        "emoji": "🦸",
        "anilist": 126319,
        "mal": 152283
      },
      {
        "name": "Yoichi Shigaraki",
        "emoji": "🦸",
        "anilist": 216391,
        "mal": null
      },
      {
        "name": "Kudo",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Bruce",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Hikage Shinomori",
        "emoji": "🦸",
        "anilist": 297937,
        "mal": null
      },
      {
        "name": "Daigoro Banjo",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "En",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Dark Shadow",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Nomu (U.S.J.)",
        "emoji": "🦸",
        "anilist": 89240,
        "mal": null,
        "displayName": "Nomu"
      },
      {
        "name": "USJ Nomu",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Hood",
        "emoji": "🦸",
        "anilist": null,
        "mal": null
      }
    ]
  },
  {
    "id": "jjk",
    "name": "Jujutsu Kaisen",
    "emoji": "👹",
    "color": "#8b5cf6",
    "tags": [
      "Shonen",
      "Supernatural"
    ],
    "chars": [
      {
        "name": "Yuji Itadori",
        "emoji": "👹",
        "anilist": 138259,
        "mal": 178461
      },
      {
        "name": "Megumi Fushiguro",
        "emoji": "👹",
        "anilist": 126635,
        "mal": 178463
      },
      {
        "name": "Nobara Kugisaki",
        "emoji": "👹",
        "anilist": 133700,
        "mal": 178464
      },
      {
        "name": "Satoru Gojou",
        "emoji": "👹",
        "anilist": 127691,
        "mal": 178462
      },
      {
        "name": "Ryomen Sukuna",
        "emoji": "👹",
        "anilist": 138263,
        "mal": 178465
      },
      {
        "name": "Yuta Okkotsu",
        "emoji": "👹",
        "anilist": 138270,
        "mal": 178472
      },
      {
        "name": "Rika Orimoto",
        "emoji": "👹",
        "anilist": 208533,
        "mal": 220751
      },
      {
        "name": "Maki Zenin",
        "emoji": "👹",
        "anilist": 134167,
        "mal": 178469
      },
      {
        "name": "Mai Zenin",
        "emoji": "👹",
        "anilist": 134168,
        "mal": 178470
      },
      {
        "name": "Toge Inumaki",
        "emoji": "👹",
        "anilist": 157115,
        "mal": 178468
      },
      {
        "name": "Panda",
        "emoji": "👹",
        "anilist": 137974,
        "mal": 185836
      },
      {
        "name": "Kento Nanami",
        "emoji": "👹",
        "anilist": 133704,
        "mal": 178466
      },
      {
        "name": "Aoi Todo",
        "emoji": "👹",
        "anilist": 138265,
        "mal": 178467
      },
      {
        "name": "Kasumi Miwa",
        "emoji": "👹",
        "anilist": 156848,
        "mal": 185837
      },
      {
        "name": "Momo Nishimiya",
        "emoji": "👹",
        "anilist": 157868,
        "mal": 185848
      },
      {
        "name": "Noritoshi  Kamo",
        "emoji": "👹",
        "anilist": 157866,
        "mal": 185838,
        "displayName": "Noritoshi Kamo"
      },
      {
        "name": "Kokichi Muta / Mechamaru",
        "emoji": "👹",
        "anilist": 163923,
        "mal": 185844
      },
      {
        "name": "Utahime Iori",
        "emoji": "👹",
        "anilist": 157864,
        "mal": 185839
      },
      {
        "name": "Mei Mei",
        "emoji": "👹",
        "anilist": 157215,
        "mal": 185840
      },
      {
        "name": "Ui Ui",
        "emoji": "👹",
        "anilist": 209409,
        "mal": 220765
      },
      {
        "name": "Masamichi Yaga",
        "emoji": "👹",
        "anilist": 189237,
        "mal": 185841
      },
      {
        "name": "Yoshinobu Gakuganji",
        "emoji": "👹",
        "anilist": 157867,
        "mal": null
      },
      {
        "name": "Shoko Ieiri",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kiyotaka Ijichi",
        "emoji": "👹",
        "anilist": 189238,
        "mal": null
      },
      {
        "name": "Takuma Ino",
        "emoji": "👹",
        "anilist": 157865,
        "mal": 185847
      },
      {
        "name": "Atsuya Kusakabe",
        "emoji": "👹",
        "anilist": 205234,
        "mal": 220760
      },
      {
        "name": "Suguru Getou",
        "emoji": "👹",
        "anilist": 133699,
        "mal": 178471
      },
      {
        "name": "Kenjaku",
        "emoji": "👹",
        "anilist": 289584,
        "mal": 220748
      },
      {
        "name": "Mahito",
        "emoji": "👹",
        "anilist": 133702,
        "mal": 185834
      },
      {
        "name": "Jogo",
        "emoji": "👹",
        "anilist": 163912,
        "mal": 185833
      },
      {
        "name": "Hanami",
        "emoji": "👹",
        "anilist": 172743,
        "mal": 185832
      },
      {
        "name": "Dagon",
        "emoji": "👹",
        "anilist": 204383,
        "mal": 185835
      },
      {
        "name": "Choso",
        "emoji": "👹",
        "anilist": 163908,
        "mal": 185830
      },
      {
        "name": "Eso",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kechizu",
        "emoji": "👹",
        "anilist": 210832,
        "mal": null
      },
      {
        "name": "Junpei Yoshino",
        "emoji": "👹",
        "anilist": 157214,
        "mal": 185831
      },
      {
        "name": "Toji Fushiguro",
        "emoji": "👹",
        "anilist": 163907,
        "mal": 185829
      },
      {
        "name": "Naobito Zenin",
        "emoji": "👹",
        "anilist": 188432,
        "mal": 185842
      },
      {
        "name": "Naoya Zenin",
        "emoji": "👹",
        "anilist": 208204,
        "mal": 185843
      },
      {
        "name": "Yuki Tsukumo",
        "emoji": "👹",
        "anilist": 196502,
        "mal": 220743
      },
      {
        "name": "Tengen",
        "emoji": "👹",
        "anilist": 217291,
        "mal": null
      },
      {
        "name": "Hiromi Higuruma",
        "emoji": "👹",
        "anilist": 248818,
        "mal": 220741
      },
      {
        "name": "Kinji Hakari",
        "emoji": "👹",
        "anilist": 197584,
        "mal": null
      },
      {
        "name": "Kirara Hoshi",
        "emoji": "👹",
        "anilist": 243828,
        "mal": 220750
      },
      {
        "name": "Hana Kurusu / Angel",
        "emoji": "👹",
        "anilist": 209399,
        "mal": 220755
      },
      {
        "name": "Takako Uro",
        "emoji": "👹",
        "anilist": 283136,
        "mal": null
      },
      {
        "name": "Ryu Ishigori",
        "emoji": "👹",
        "anilist": 280468,
        "mal": 220747
      },
      {
        "name": "Fumihiko Takaba",
        "emoji": "👹",
        "anilist": 280467,
        "mal": 220744
      },
      {
        "name": "Reggie Star",
        "emoji": "👹",
        "anilist": 306194,
        "mal": 220762
      },
      {
        "name": "Iori Hazenoki",
        "emoji": "👹",
        "anilist": 306243,
        "mal": 220754
      },
      {
        "name": "Charles Bernard",
        "emoji": "👹",
        "anilist": 274304,
        "mal": null
      },
      {
        "name": "Uraume",
        "emoji": "👹",
        "anilist": 210830,
        "mal": 220749
      },
      {
        "name": "Tsumiki Fushiguro",
        "emoji": "👹",
        "anilist": 193479,
        "mal": 220757
      },
      {
        "name": "Haruta Shigemo",
        "emoji": "👹",
        "anilist": 209694,
        "mal": null
      },
      {
        "name": "Jiro Awasaka",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Ogami",
        "emoji": "👹",
        "anilist": 209397,
        "mal": 220753
      },
      {
        "name": "Mimiko Hasaba",
        "emoji": "👹",
        "anilist": 228986,
        "mal": 220763
      },
      {
        "name": "Nanako Hasaba",
        "emoji": "👹",
        "anilist": 228987,
        "mal": 220764
      },
      {
        "name": "Shiu Kong",
        "emoji": "👹",
        "anilist": 303313,
        "mal": 220761
      },
      {
        "name": "Yu Haibara",
        "emoji": "👹",
        "anilist": 209411,
        "mal": 220767
      },
      {
        "name": "Riko Amanai",
        "emoji": "👹",
        "anilist": 203015,
        "mal": null
      },
      {
        "name": "Misato Kuroi",
        "emoji": "👹",
        "anilist": 255175,
        "mal": null
      },
      {
        "name": "Jin Itadori",
        "emoji": "👹",
        "anilist": 283137,
        "mal": 220768
      },
      {
        "name": "Kaori Itadori",
        "emoji": "👹",
        "anilist": 380084,
        "mal": 220769
      },
      {
        "name": "Mahoraga",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Nue",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Divine Dog",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Rabbit Escape",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Max Elephant",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Toad",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Great Serpent",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Garuda",
        "emoji": "👹",
        "anilist": 322043,
        "mal": null
      },
      {
        "name": "Judgeman",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Smallpox Deity",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kurourushi",
        "emoji": "👹",
        "anilist": 276133,
        "mal": null
      },
      {
        "name": "Cursed Naoya",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Finger Bearer",
        "emoji": "👹",
        "anilist": null,
        "mal": null
      }
    ]
  },
  {
    "id": "aot",
    "name": "Attack on Titan",
    "emoji": "🪽",
    "color": "#64748b",
    "tags": [
      "Action",
      "Dark Fantasy"
    ],
    "chars": [
      {
        "name": "Eren Yeager",
        "emoji": "🪽",
        "anilist": 40882,
        "mal": 40882
      },
      {
        "name": "Mikasa Ackerman",
        "emoji": "🪽",
        "anilist": 40881,
        "mal": 40881
      },
      {
        "name": "Armin Arlert",
        "emoji": "🪽",
        "anilist": 46494,
        "mal": 40884
      },
      {
        "name": "Levi Ackerman",
        "emoji": "🪽",
        "anilist": 40883,
        "mal": 40883
      },
      {
        "name": "Erwin Smith",
        "emoji": "🪽",
        "anilist": 46496,
        "mal": 40885
      },
      {
        "name": "Hange Zoe",
        "emoji": "🪽",
        "anilist": 71121,
        "mal": null
      },
      {
        "name": "Jean Kirstein",
        "emoji": "🪽",
        "anilist": 46498,
        "mal": 40889
      },
      {
        "name": "Connie Springer",
        "emoji": "🪽",
        "anilist": 46486,
        "mal": 40891
      },
      {
        "name": "Sasha Blouse",
        "emoji": "🪽",
        "anilist": 45887,
        "mal": 40892
      },
      {
        "name": "Historia Reiss",
        "emoji": "🪽",
        "anilist": 40890,
        "mal": 40890
      },
      {
        "name": "Ymir",
        "emoji": "🪽",
        "anilist": 71479,
        "mal": 40894
      },
      {
        "name": "Reiner Braun",
        "emoji": "🪽",
        "anilist": 46484,
        "mal": 40887
      },
      {
        "name": "Bertholdt Hoover",
        "emoji": "🪽",
        "anilist": 40893,
        "mal": 40893
      },
      {
        "name": "Annie Leonhart",
        "emoji": "🪽",
        "anilist": 46490,
        "mal": 40888
      },
      {
        "name": "Zeke Yeager",
        "emoji": "🪽",
        "anilist": 85373,
        "mal": 85373
      },
      {
        "name": "Pieck Finger",
        "emoji": "🪽",
        "anilist": 125603,
        "mal": 85371
      },
      {
        "name": "Porco Galliard",
        "emoji": "🪽",
        "anilist": 125662,
        "mal": 85372
      },
      {
        "name": "Marcel Galliard",
        "emoji": "🪽",
        "anilist": 127683,
        "mal": 85408
      },
      {
        "name": "Gabi Braun",
        "emoji": "🪽",
        "anilist": 125659,
        "mal": 85375
      },
      {
        "name": "Falco Grice",
        "emoji": "🪽",
        "anilist": 125660,
        "mal": 85376
      },
      {
        "name": "Colt Grice",
        "emoji": "🪽",
        "anilist": 125665,
        "mal": 85374
      },
      {
        "name": "Theo Magath",
        "emoji": "🪽",
        "anilist": 131763,
        "mal": 85409
      },
      {
        "name": "Willy Tybur",
        "emoji": "🪽",
        "anilist": 131762,
        "mal": 85410
      },
      {
        "name": "Lara Tybur",
        "emoji": "🪽",
        "anilist": 205015,
        "mal": 85411
      },
      {
        "name": "Grisha Yeager",
        "emoji": "🪽",
        "anilist": 62477,
        "mal": 85385
      },
      {
        "name": "Carla Yeager",
        "emoji": "🪽",
        "anilist": 62475,
        "mal": 85386
      },
      {
        "name": "Dina Fritz",
        "emoji": "🪽",
        "anilist": 85384,
        "mal": 85384
      },
      {
        "name": "Kenny Ackerman",
        "emoji": "🪽",
        "anilist": 85383,
        "mal": 85383
      },
      {
        "name": "Rod Reiss",
        "emoji": "🪽",
        "anilist": 85382,
        "mal": 85382
      },
      {
        "name": "Keith Shadis",
        "emoji": "🪽",
        "anilist": 84305,
        "mal": 85381
      },
      {
        "name": "Dot Pyxis",
        "emoji": "🪽",
        "anilist": 85380,
        "mal": 85380
      },
      {
        "name": "Nile Dok",
        "emoji": "🪽",
        "anilist": 71123,
        "mal": 85379
      },
      {
        "name": "Onyankopon",
        "emoji": "🪽",
        "anilist": 85378,
        "mal": 85378
      },
      {
        "name": "Yelena",
        "emoji": "🪽",
        "anilist": 85377,
        "mal": 85377
      },
      {
        "name": "Floch Forster",
        "emoji": "🪽",
        "anilist": 85370,
        "mal": 85370
      },
      {
        "name": "Hitch Dreyse",
        "emoji": "🪽",
        "anilist": 86017,
        "mal": 85398
      },
      {
        "name": "Marlowe Freudenberg",
        "emoji": "🪽",
        "anilist": 85399,
        "mal": 85399
      },
      {
        "name": "Moblit Berner",
        "emoji": "🪽",
        "anilist": 127573,
        "mal": 85391
      },
      {
        "name": "Mike Zacharias",
        "emoji": "🪽",
        "anilist": 71119,
        "mal": 40895
      },
      {
        "name": "Petra Ral",
        "emoji": "🪽",
        "anilist": 62501,
        "mal": 40896
      },
      {
        "name": "Oluo Bozado",
        "emoji": "🪽",
        "anilist": 40897,
        "mal": 40897
      },
      {
        "name": "Eld Jinn",
        "emoji": "🪽",
        "anilist": 40899,
        "mal": 40899
      },
      {
        "name": "Gunther Schultz",
        "emoji": "🪽",
        "anilist": 71691,
        "mal": 40898
      },
      {
        "name": "Isabel Magnolia",
        "emoji": "🪽",
        "anilist": 85389,
        "mal": 85389
      },
      {
        "name": "Furlan Church",
        "emoji": "🪽",
        "anilist": 85390,
        "mal": 85390
      },
      {
        "name": "Nifa",
        "emoji": "🪽",
        "anilist": 85395,
        "mal": 85395
      },
      {
        "name": "Louise",
        "emoji": "🪽",
        "anilist": 209870,
        "mal": 85392
      },
      {
        "name": "Daz",
        "emoji": "🪽",
        "anilist": 84321,
        "mal": 85393
      },
      {
        "name": "Samuel Linke-Jackson ",
        "emoji": "🪽",
        "anilist": 84315,
        "mal": 85394,
        "displayName": "Samuel Linke-Jackson"
      },
      {
        "name": "Zofia",
        "emoji": "🪽",
        "anilist": 85406,
        "mal": 85406
      },
      {
        "name": "Udo",
        "emoji": "🪽",
        "anilist": 85407,
        "mal": 85407
      },
      {
        "name": "Ilse Langnar",
        "emoji": "🪽",
        "anilist": 85388,
        "mal": 85388
      },
      {
        "name": "Ymir Fritz",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Frieda Reiss",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Uri Reiss",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Hannes",
        "emoji": "🪽",
        "anilist": 46492,
        "mal": null
      },
      {
        "name": "Eren Kruger / Owl",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Attack Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Founding Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Colossal Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Armored Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Female Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Beast Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Jaw Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Cart Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "War Hammer Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Pure Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Smiling Titan",
        "emoji": "🪽",
        "anilist": null,
        "mal": null
      }
    ]
  },
  {
    "id": "opm",
    "name": "One Punch Man",
    "emoji": "👊",
    "color": "#ef4444",
    "tags": [
      "Superhero",
      "Comedy"
    ],
    "chars": [
      {
        "name": "Saitama",
        "emoji": "👊",
        "anilist": 73935,
        "mal": null
      },
      {
        "name": "Genos",
        "emoji": "👊",
        "anilist": 73979,
        "mal": null
      },
      {
        "name": "King",
        "emoji": "👊",
        "anilist": 88907,
        "mal": null
      },
      {
        "name": "Mumen Rider",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Fubuki",
        "emoji": "👊",
        "anilist": 81931,
        "mal": null
      },
      {
        "name": "Tatsumaki",
        "emoji": "👊",
        "anilist": 81929,
        "mal": null
      },
      {
        "name": "Bang ",
        "emoji": "👊",
        "anilist": 81141,
        "mal": null,
        "displayName": "Bang / Silver Fang"
      },
      {
        "name": "Bomb",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Atomic Samurai",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Child Emperor",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Metal Bat",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Tanktop Master",
        "emoji": "👊",
        "anilist": 156125,
        "mal": null
      },
      {
        "name": "Puri-Puri Prisoner",
        "emoji": "👊",
        "anilist": 86029,
        "mal": null
      },
      {
        "name": "Superalloy Darkshine",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Watchdog Man",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Pig God",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Zombieman",
        "emoji": "👊",
        "anilist": 133835,
        "mal": null
      },
      {
        "name": "Flashy Flash",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Ikemen Kamen Amai Mask",
        "emoji": "👊",
        "anilist": 86031,
        "mal": null
      },
      {
        "name": "Drive Knight",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Bofoi",
        "emoji": "👊",
        "anilist": 81933,
        "mal": null,
        "displayName": "Metal Knight / Bofoi"
      },
      {
        "name": "Blast",
        "emoji": "👊",
        "anilist": 206581,
        "mal": null
      },
      {
        "name": "Garou",
        "emoji": "👊",
        "anilist": 89277,
        "mal": null
      },
      {
        "name": "Speed-o'-Sound Sonic",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Boros",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Melzargard",
        "emoji": "👊",
        "anilist": 156124,
        "mal": null
      },
      {
        "name": "Geryuganshoop",
        "emoji": "👊",
        "anilist": 208320,
        "mal": null
      },
      {
        "name": "Groribas",
        "emoji": "👊",
        "anilist": 247693,
        "mal": null
      },
      {
        "name": "Mosquito Girl",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Carnage Kabuto",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Beast King",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Deep Sea King",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Vaccine Man",
        "emoji": "👊",
        "anilist": 13125,
        "mal": null
      },
      {
        "name": "Crablante",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Hammerhead",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Suiryu",
        "emoji": "👊",
        "anilist": 132939,
        "mal": null
      },
      {
        "name": "Gouketsu",
        "emoji": "👊",
        "anilist": 327339,
        "mal": null
      },
      {
        "name": "Bakuzan",
        "emoji": "👊",
        "anilist": 327350,
        "mal": null
      },
      {
        "name": "Psykos",
        "emoji": "👊",
        "anilist": 165607,
        "mal": null
      },
      {
        "name": "Orochi ",
        "emoji": "👊",
        "anilist": 195425,
        "mal": null,
        "displayName": "Orochi"
      },
      {
        "name": "Black Sperm",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Homeless Emperor",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Fuhrer Ugly",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Gums",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Nyan",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Evil Natural Water",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Overgrown Rover",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Phoenix Man",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Royal Ripper",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Bug God",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Sage Centipede",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Elder Centipede",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Manako",
        "emoji": "👊",
        "anilist": 208572,
        "mal": null
      },
      {
        "name": "Hellfire Flame",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Gale Wind",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Choze",
        "emoji": "👊",
        "anilist": 126978,
        "mal": null
      },
      {
        "name": "Captain Mizuki",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Sekingar",
        "emoji": "👊",
        "anilist": 307003,
        "mal": null
      },
      {
        "name": "Iaian",
        "emoji": "👊",
        "anilist": 165855,
        "mal": null
      },
      {
        "name": "Okamaitachi",
        "emoji": "👊",
        "anilist": 377194,
        "mal": null
      },
      {
        "name": "Bushidrill",
        "emoji": "👊",
        "anilist": 377195,
        "mal": null
      },
      {
        "name": "Death Gatling",
        "emoji": "👊",
        "anilist": 203397,
        "mal": null
      },
      {
        "name": "Stinger",
        "emoji": "👊",
        "anilist": 86033,
        "mal": null
      },
      {
        "name": "Smile Man",
        "emoji": "👊",
        "anilist": 326813,
        "mal": null
      },
      {
        "name": "Lightning Max",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Golden Ball",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Spring Mustachio",
        "emoji": "👊",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Blue Fire",
        "emoji": "👊",
        "anilist": 326805,
        "mal": null
      }
    ]
  },
  {
    "id": "demonslayer",
    "name": "Demon Slayer",
    "emoji": "🗡️",
    "color": "#ec4899",
    "tags": [
      "Shonen",
      "Supernatural"
    ],
    "chars": [
      {
        "name": "Tanjiro Kamado",
        "emoji": "🗡️",
        "anilist": 124701,
        "mal": 163268
      },
      {
        "name": "Nezuko Kamado",
        "emoji": "🗡️",
        "anilist": 127518,
        "mal": 163269
      },
      {
        "name": "Zenitsu Agatsuma",
        "emoji": "🗡️",
        "anilist": 129131,
        "mal": 163270
      },
      {
        "name": "Inosuke Hashibira",
        "emoji": "🗡️",
        "anilist": 129130,
        "mal": 163271
      },
      {
        "name": "Kanao Tsuyuri",
        "emoji": "🗡️",
        "anilist": 139038,
        "mal": 163281
      },
      {
        "name": "Genya Shinazugawa",
        "emoji": "🗡️",
        "anilist": 137776,
        "mal": 163283
      },
      {
        "name": "Giyu Tomioka",
        "emoji": "🗡️",
        "anilist": 124705,
        "mal": 163272
      },
      {
        "name": "Shinobu Kochou",
        "emoji": "🗡️",
        "anilist": 136070,
        "mal": 163273
      },
      {
        "name": "Kyojuro Rengoku",
        "emoji": "🗡️",
        "anilist": 124707,
        "mal": 163274
      },
      {
        "name": "Tengen Uzui",
        "emoji": "🗡️",
        "anilist": 136071,
        "mal": 163275
      },
      {
        "name": "Mitsuri Kanroji",
        "emoji": "🗡️",
        "anilist": 136072,
        "mal": 163276
      },
      {
        "name": "Muichiro Tokito",
        "emoji": "🗡️",
        "anilist": 124711,
        "mal": 163278
      },
      {
        "name": "Obanai Iguro",
        "emoji": "🗡️",
        "anilist": 137777,
        "mal": 163277
      },
      {
        "name": "Sanemi Shinazugawa",
        "emoji": "🗡️",
        "anilist": 137774,
        "mal": 163279
      },
      {
        "name": "Gyomei Himejima",
        "emoji": "🗡️",
        "anilist": 124713,
        "mal": 163280
      },
      {
        "name": "Aoi Kanzaki",
        "emoji": "🗡️",
        "anilist": 145288,
        "mal": 163282
      },
      {
        "name": "Tamayo",
        "emoji": "🗡️",
        "anilist": 138847,
        "mal": 163310
      },
      {
        "name": "Yushiro",
        "emoji": "🗡️",
        "anilist": 124744,
        "mal": 163311
      },
      {
        "name": "Muzan Kibutsuji",
        "emoji": "🗡️",
        "anilist": 129132,
        "mal": 163284
      },
      {
        "name": "Kokushibo",
        "emoji": "🗡️",
        "anilist": 141918,
        "mal": 163287
      },
      {
        "name": "Doma",
        "emoji": "🗡️",
        "anilist": 124719,
        "mal": 163286
      },
      {
        "name": "Akaza",
        "emoji": "🗡️",
        "anilist": 141694,
        "mal": 163285
      },
      {
        "name": "Kaigaku",
        "emoji": "🗡️",
        "anilist": 165862,
        "mal": 163290
      },
      {
        "name": "Gyutaro",
        "emoji": "🗡️",
        "anilist": 124726,
        "mal": 163293
      },
      {
        "name": "Daki",
        "emoji": "🗡️",
        "anilist": 139734,
        "mal": 163292
      },
      {
        "name": "Hantengu",
        "emoji": "🗡️",
        "anilist": 260323,
        "mal": 163288
      },
      {
        "name": "Sekido",
        "emoji": "🗡️",
        "anilist": 53579,
        "mal": 163320
      },
      {
        "name": "Karaku",
        "emoji": "🗡️",
        "anilist": 124755,
        "mal": 163322
      },
      {
        "name": "Aizetsu",
        "emoji": "🗡️",
        "anilist": 124752,
        "mal": 163319
      },
      {
        "name": "Urogi",
        "emoji": "🗡️",
        "anilist": 124754,
        "mal": 163321
      },
      {
        "name": "Zohakuten",
        "emoji": "🗡️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Gyokko",
        "emoji": "🗡️",
        "anilist": 205590,
        "mal": 163289
      },
      {
        "name": "Nakime",
        "emoji": "🗡️",
        "anilist": 139736,
        "mal": 163291
      },
      {
        "name": "Enmu",
        "emoji": "🗡️",
        "anilist": 139737,
        "mal": 163294
      },
      {
        "name": "Rui",
        "emoji": "🗡️",
        "anilist": 124728,
        "mal": 163295
      },
      {
        "name": "Spider Demon Mother",
        "emoji": "🗡️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Spider Demon Father",
        "emoji": "🗡️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Hand Demon",
        "emoji": "🗡️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Susamaru",
        "emoji": "🗡️",
        "anilist": 138810,
        "mal": 163312
      },
      {
        "name": "Yahaba",
        "emoji": "🗡️",
        "anilist": 138811,
        "mal": 163313
      },
      {
        "name": "Kyogai",
        "emoji": "🗡️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Rokuro",
        "emoji": "🗡️",
        "anilist": 124763,
        "mal": 163330
      },
      {
        "name": "Wakuraba",
        "emoji": "🗡️",
        "anilist": 306224,
        "mal": 163328
      },
      {
        "name": "Mukago",
        "emoji": "🗡️",
        "anilist": 207959,
        "mal": 163329
      },
      {
        "name": "Kamanue",
        "emoji": "🗡️",
        "anilist": 207958,
        "mal": 163331
      },
      {
        "name": "Sakonji Urokodaki",
        "emoji": "🗡️",
        "anilist": 137773,
        "mal": 163298
      },
      {
        "name": "Sabito",
        "emoji": "🗡️",
        "anilist": 137809,
        "mal": 163301
      },
      {
        "name": "Makomo",
        "emoji": "🗡️",
        "anilist": 137806,
        "mal": 163300
      },
      {
        "name": "Jigoro Kuwajima",
        "emoji": "🗡️",
        "anilist": 124732,
        "mal": 163299
      },
      {
        "name": "Kanae Kochou",
        "emoji": "🗡️",
        "anilist": 139039,
        "mal": 163302
      },
      {
        "name": "Kagaya Ubuyashiki",
        "emoji": "🗡️",
        "anilist": 137808,
        "mal": 163297
      },
      {
        "name": "Amane Ubuyashiki",
        "emoji": "🗡️",
        "anilist": 221375,
        "mal": null
      },
      {
        "name": "Hinaki Ubuyashiki",
        "emoji": "🗡️",
        "anilist": 167549,
        "mal": null
      },
      {
        "name": "Nichika Ubuyashiki",
        "emoji": "🗡️",
        "anilist": 167548,
        "mal": null
      },
      {
        "name": "Kiriya Ubuyashiki",
        "emoji": "🗡️",
        "anilist": 139460,
        "mal": null
      },
      {
        "name": "Senjuro Rengoku",
        "emoji": "🗡️",
        "anilist": 124736,
        "mal": 163303
      },
      {
        "name": "Shinjuro Rengoku",
        "emoji": "🗡️",
        "anilist": 124737,
        "mal": 163304
      },
      {
        "name": "Suma",
        "emoji": "🗡️",
        "anilist": 124738,
        "mal": 163305
      },
      {
        "name": "Makio",
        "emoji": "🗡️",
        "anilist": 250554,
        "mal": 163306
      },
      {
        "name": "Hinatsuru",
        "emoji": "🗡️",
        "anilist": 250556,
        "mal": 163307
      },
      {
        "name": "Hotaru Haganezuka",
        "emoji": "🗡️",
        "anilist": 138990,
        "mal": 163308
      },
      {
        "name": "Kotetsu",
        "emoji": "🗡️",
        "anilist": 171768,
        "mal": null
      },
      {
        "name": "Murata",
        "emoji": "🗡️",
        "anilist": 171150,
        "mal": null
      },
      {
        "name": "Chachamaru",
        "emoji": "🗡️",
        "anilist": 268212,
        "mal": null
      },
      {
        "name": "Kaburamaru",
        "emoji": "🗡️",
        "anilist": 310304,
        "mal": null
      },
      {
        "name": "Chuntaro",
        "emoji": "🗡️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kasugai Crow",
        "emoji": "🗡️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Yoriichi Tsugikuni",
        "emoji": "🗡️",
        "anilist": 149220,
        "mal": 163296
      },
      {
        "name": "Yoriichi Type Zero",
        "emoji": "🗡️",
        "anilist": null,
        "mal": null
      }
    ]
  },
  {
    "id": "sololeveling",
    "name": "Solo Leveling",
    "emoji": "⚔️",
    "color": "#0ea5e9",
    "tags": [
      "Fantasy",
      "Action"
    ],
    "chars": [
      {
        "name": "Sung Jin-Woo / Shun Mizushino",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Hae-In Cha",
        "emoji": "⚔️",
        "anilist": 138789,
        "mal": null,
        "displayName": "Cha Hae-In / Shizuku Kosaka"
      },
      {
        "name": "Yoo Jinho / Kenta Morobishi",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Go Gun-Hee",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Baek Yoonho",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Jong-In Choi",
        "emoji": "⚔️",
        "anilist": 138794,
        "mal": null,
        "displayName": "Choi Jong-In"
      },
      {
        "name": "Woo Jinchul",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Lee Joohee",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Chi-Yul Song",
        "emoji": "⚔️",
        "anilist": 136073,
        "mal": null,
        "displayName": "Song Chi-Yul"
      },
      {
        "name": "Tae-Shik Kang",
        "emoji": "⚔️",
        "anilist": 181155,
        "mal": null,
        "displayName": "Kang Tae-Shik"
      },
      {
        "name": "Dong-Suk Hwang",
        "emoji": "⚔️",
        "anilist": 306666,
        "mal": null,
        "displayName": "Hwang Dong-Suk"
      },
      {
        "name": "Dong-Suk Hwang",
        "emoji": "⚔️",
        "anilist": 306666,
        "mal": null,
        "displayName": "Hwang Dong-Suk"
      },
      {
        "name": "Yuri Orloff",
        "emoji": "⚔️",
        "anilist": 306507,
        "mal": null
      },
      {
        "name": "Goto Ryuji",
        "emoji": "⚔️",
        "anilist": 181154,
        "mal": null
      },
      {
        "name": "Zhigang Liu",
        "emoji": "⚔️",
        "anilist": 184553,
        "mal": null,
        "displayName": "Liu Zhigang"
      },
      {
        "name": "Thomas Andre",
        "emoji": "⚔️",
        "anilist": 184540,
        "mal": null
      },
      {
        "name": "Christopher Reed",
        "emoji": "⚔️",
        "anilist": 208458,
        "mal": null
      },
      {
        "name": "Il-Hwan Seong",
        "emoji": "⚔️",
        "anilist": 138790,
        "mal": null
      },
      {
        "name": "Jinah Sung",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Beru ",
        "emoji": "⚔️",
        "anilist": 159849,
        "mal": null,
        "displayName": "Beru"
      },
      {
        "name": "Igris",
        "emoji": "⚔️",
        "anilist": 145722,
        "mal": null
      },
      {
        "name": "Bellion",
        "emoji": "⚔️",
        "anilist": 249400,
        "mal": null
      },
      {
        "name": "Iron",
        "emoji": "⚔️",
        "anilist": 184956,
        "mal": null,
        "displayName": "Iron / Kim Chul"
      },
      {
        "name": "Tusk",
        "emoji": "⚔️",
        "anilist": 184957,
        "mal": null
      },
      {
        "name": "Dong-Suk Hwang",
        "emoji": "⚔️",
        "anilist": 306666,
        "mal": null,
        "displayName": "Hwang Dong-Suk"
      },
      {
        "name": "Tank",
        "emoji": "⚔️",
        "anilist": 184545,
        "mal": null
      },
      {
        "name": "Kaisel",
        "emoji": "⚔️",
        "anilist": 184546,
        "mal": null
      },
      {
        "name": "Ashborn",
        "emoji": "⚔️",
        "anilist": 198257,
        "mal": null
      },
      {
        "name": "Antares",
        "emoji": "⚔️",
        "anilist": 253680,
        "mal": null
      },
      {
        "name": "Baran",
        "emoji": "⚔️",
        "anilist": 155917,
        "mal": null
      },
      {
        "name": "Rakan",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Sillad / Frost Monarch",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Querehsha / Plague Monarch",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Legia",
        "emoji": "⚔️",
        "anilist": 209184,
        "mal": null
      },
      {
        "name": "Tarnak / Iron Body Monarch",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Yogumunt / Monarch of Transfiguration",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Architect",
        "emoji": "⚔️",
        "anilist": 121481,
        "mal": null
      },
      {
        "name": "Statue of God",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kamish",
        "emoji": "⚔️",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Esil Radiru",
        "emoji": "⚔️",
        "anilist": 164675,
        "mal": null
      },
      {
        "name": "Cerberus",
        "emoji": "⚔️",
        "anilist": 2897,
        "mal": null
      }
    ]
  },
  {
    "id": "bluelock",
    "name": "Blue Lock",
    "emoji": "⚽",
    "color": "#2563eb",
    "tags": [
      "Sports"
    ],
    "chars": [
      {
        "name": "Yoichi Isagi",
        "emoji": "⚽",
        "anilist": 140856,
        "mal": null
      },
      {
        "name": "Meguru Bachira",
        "emoji": "⚽",
        "anilist": 162213,
        "mal": null
      },
      {
        "name": "Rin Itoshi",
        "emoji": "⚽",
        "anilist": 169395,
        "mal": null
      },
      {
        "name": "Sae Itoshi",
        "emoji": "⚽",
        "anilist": 169397,
        "mal": null
      },
      {
        "name": "Seishiro Nagi",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Reo Mikage",
        "emoji": "⚽",
        "anilist": 169394,
        "mal": null
      },
      {
        "name": "Rensuke Kunigami",
        "emoji": "⚽",
        "anilist": 162214,
        "mal": null
      },
      {
        "name": "Hyoma Chigiri",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Gin Gagamaru",
        "emoji": "⚽",
        "anilist": 169404,
        "mal": null
      },
      {
        "name": "Jingo Raichi",
        "emoji": "⚽",
        "anilist": 169402,
        "mal": null
      },
      {
        "name": "Asahi Naruhaya",
        "emoji": "⚽",
        "anilist": 179957,
        "mal": null
      },
      {
        "name": "Okuhito Iemon",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Wataru Kuon",
        "emoji": "⚽",
        "anilist": 169392,
        "mal": null
      },
      {
        "name": "Gurimu Igarashi",
        "emoji": "⚽",
        "anilist": 169398,
        "mal": null
      },
      {
        "name": "Shouei Barou",
        "emoji": "⚽",
        "anilist": 169401,
        "mal": null
      },
      {
        "name": "Ikki Niko",
        "emoji": "⚽",
        "anilist": 169403,
        "mal": null
      },
      {
        "name": "Jyubei Aryu",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Aoshi Tokimitsu",
        "emoji": "⚽",
        "anilist": 169396,
        "mal": null
      },
      {
        "name": "Tabito Karasu",
        "emoji": "⚽",
        "anilist": 187524,
        "mal": null
      },
      {
        "name": "Eita Otoya",
        "emoji": "⚽",
        "anilist": 187523,
        "mal": null
      },
      {
        "name": "Oliver Aiku",
        "emoji": "⚽",
        "anilist": 206571,
        "mal": null
      },
      {
        "name": "Kenyu Yukimiya",
        "emoji": "⚽",
        "anilist": 191409,
        "mal": null
      },
      {
        "name": "Yo Hiori",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Ranze Kurona",
        "emoji": "⚽",
        "anilist": 290887,
        "mal": null
      },
      {
        "name": "Jin Kiyora",
        "emoji": "⚽",
        "anilist": 301260,
        "mal": null
      },
      {
        "name": "Nijiro Nanase",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Zantetsu Tsurugi",
        "emoji": "⚽",
        "anilist": 169406,
        "mal": null
      },
      {
        "name": "Ryosuke Kira",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Anri Teieri",
        "emoji": "⚽",
        "anilist": 169405,
        "mal": null
      },
      {
        "name": "Jinpachi Ego",
        "emoji": "⚽",
        "anilist": 140857,
        "mal": null
      },
      {
        "name": "Noel Noa",
        "emoji": "⚽",
        "anilist": 268966,
        "mal": null
      },
      {
        "name": "Chris Prince",
        "emoji": "⚽",
        "anilist": 269063,
        "mal": null
      },
      {
        "name": "Marc Snuffy",
        "emoji": "⚽",
        "anilist": 308139,
        "mal": null
      },
      {
        "name": "Julian Loki",
        "emoji": "⚽",
        "anilist": 269064,
        "mal": null
      },
      {
        "name": "Lavinho",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Leonardo Luna",
        "emoji": "⚽",
        "anilist": 300811,
        "mal": null
      },
      {
        "name": "Adam Blake",
        "emoji": "⚽",
        "anilist": 269065,
        "mal": null
      },
      {
        "name": "Pablo Cavasoz",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Dada Silva",
        "emoji": "⚽",
        "anilist": 300790,
        "mal": null
      },
      {
        "name": "Michael Kaiser",
        "emoji": "⚽",
        "anilist": 268963,
        "mal": null
      },
      {
        "name": "Alexis Ness",
        "emoji": "⚽",
        "anilist": 269388,
        "mal": null
      },
      {
        "name": "Don Lorenzo",
        "emoji": "⚽",
        "anilist": 300793,
        "mal": null
      },
      {
        "name": "Shuto Sendou",
        "emoji": "⚽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Gen Fukaku",
        "emoji": "⚽",
        "anilist": 348627,
        "mal": null
      }
    ]
  },
  {
    "id": "blackclover",
    "name": "Black Clover",
    "emoji": "🍀",
    "color": "#22c55e",
    "tags": [
      "Shonen",
      "Fantasy"
    ],
    "chars": [
      {
        "name": "Asta",
        "emoji": "🍀",
        "anilist": 123285,
        "mal": 170830
      },
      {
        "name": "Yuno",
        "emoji": "🍀",
        "anilist": 123284,
        "mal": 170831
      },
      {
        "name": "Noelle Silva",
        "emoji": "🍀",
        "anilist": 123283,
        "mal": 170832
      },
      {
        "name": "Yami Sukehiro",
        "emoji": "🍀",
        "anilist": 124440,
        "mal": 170833
      },
      {
        "name": "Nacht Faust",
        "emoji": "🍀",
        "anilist": 187268,
        "mal": 196741
      },
      {
        "name": "Liebe",
        "emoji": "🍀",
        "anilist": 192196,
        "mal": 196740
      },
      {
        "name": "Julius Novachrono",
        "emoji": "🍀",
        "anilist": 124435,
        "mal": 170834
      },
      {
        "name": "Lucius Zogratis",
        "emoji": "🍀",
        "anilist": 167853,
        "mal": 196753
      },
      {
        "name": "Fuegoleon Vermillion",
        "emoji": "🍀",
        "anilist": 124521,
        "mal": 170835
      },
      {
        "name": "Mereoleona Vermillion",
        "emoji": "🍀",
        "anilist": 124522,
        "mal": 170836
      },
      {
        "name": "Leopold Vermillion",
        "emoji": "🍀",
        "anilist": 137881,
        "mal": 170837
      },
      {
        "name": "Mimosa Vermillion",
        "emoji": "🍀",
        "anilist": 124438,
        "mal": 170838
      },
      {
        "name": "Nozel Silva",
        "emoji": "🍀",
        "anilist": 124442,
        "mal": 170854
      },
      {
        "name": "Solid Silva",
        "emoji": "🍀",
        "anilist": 124974,
        "mal": 170855
      },
      {
        "name": "Nebra Silva",
        "emoji": "🍀",
        "anilist": 124973,
        "mal": 170856
      },
      {
        "name": "Finral Roulacase",
        "emoji": "🍀",
        "anilist": 124433,
        "mal": 170846
      },
      {
        "name": "Langris Vaude",
        "emoji": "🍀",
        "anilist": 124975,
        "mal": 170863
      },
      {
        "name": "Luck Voltia",
        "emoji": "🍀",
        "anilist": 124449,
        "mal": 170839
      },
      {
        "name": "Magna Swing",
        "emoji": "🍀",
        "anilist": 124439,
        "mal": 170840
      },
      {
        "name": "Vanessa Enoteca",
        "emoji": "🍀",
        "anilist": 124436,
        "mal": 170845
      },
      {
        "name": "Charmy Pappitson",
        "emoji": "🍀",
        "anilist": 124447,
        "mal": 170848
      },
      {
        "name": "Gauche Adlai",
        "emoji": "🍀",
        "anilist": 124446,
        "mal": 170841
      },
      {
        "name": "Grey",
        "emoji": "🍀",
        "anilist": 124444,
        "mal": 170842
      },
      {
        "name": "Gordon Agrippa",
        "emoji": "🍀",
        "anilist": 124448,
        "mal": 170843
      },
      {
        "name": "Henry Legolant",
        "emoji": "🍀",
        "anilist": 124690,
        "mal": 170844
      },
      {
        "name": "Zora Ideale",
        "emoji": "🍀",
        "anilist": 124459,
        "mal": 170847
      },
      {
        "name": "Secre Swallowtail / Nero",
        "emoji": "🍀",
        "anilist": null,
        "mal": null
      },
      {
        "name": "William Vangeance",
        "emoji": "🍀",
        "anilist": 124441,
        "mal": 170857
      },
      {
        "name": "Charlotte Roselei",
        "emoji": "🍀",
        "anilist": 124434,
        "mal": 170850
      },
      {
        "name": "Rill Boismortier",
        "emoji": "🍀",
        "anilist": 124457,
        "mal": 170849
      },
      {
        "name": "Dorothy Unsworth",
        "emoji": "🍀",
        "anilist": 124458,
        "mal": 170852
      },
      {
        "name": "Jack the Ripper",
        "emoji": "🍀",
        "anilist": 124456,
        "mal": 170853
      },
      {
        "name": "Kaiser Granvorka",
        "emoji": "🍀",
        "anilist": 182008,
        "mal": null
      },
      {
        "name": "Marx Francois",
        "emoji": "🍀",
        "anilist": 124454,
        "mal": null
      },
      {
        "name": "Sekke Bronzazza",
        "emoji": "🍀",
        "anilist": 124460,
        "mal": 170864
      },
      {
        "name": "Patolli / Patri",
        "emoji": "🍀",
        "anilist": 130458,
        "mal": 170858
      },
      {
        "name": "Licht",
        "emoji": "🍀",
        "anilist": 124472,
        "mal": 170859
      },
      {
        "name": "Rhya",
        "emoji": "🍀",
        "anilist": 124473,
        "mal": 170860
      },
      {
        "name": "Vetto",
        "emoji": "🍀",
        "anilist": 124475,
        "mal": 170861
      },
      {
        "name": "Fana",
        "emoji": "🍀",
        "anilist": 124479,
        "mal": 170862
      },
      {
        "name": "Rades Spirito",
        "emoji": "🍀",
        "anilist": 124477,
        "mal": null
      },
      {
        "name": "Sally",
        "emoji": "🍀",
        "anilist": 124519,
        "mal": null
      },
      {
        "name": "Valtos",
        "emoji": "🍀",
        "anilist": 124480,
        "mal": null
      },
      {
        "name": "Mars",
        "emoji": "🍀",
        "anilist": 124462,
        "mal": null
      },
      {
        "name": "Ladros",
        "emoji": "🍀",
        "anilist": 124995,
        "mal": null
      },
      {
        "name": "Zenon Zogratis",
        "emoji": "🍀",
        "anilist": 167952,
        "mal": 196742
      },
      {
        "name": "Dante Zogratis",
        "emoji": "🍀",
        "anilist": 163782,
        "mal": 196743
      },
      {
        "name": "Vanica Zogratis",
        "emoji": "🍀",
        "anilist": 168300,
        "mal": 196744
      },
      {
        "name": "Megicula",
        "emoji": "🍀",
        "anilist": 179901,
        "mal": 196746
      },
      {
        "name": "Lucifero",
        "emoji": "🍀",
        "anilist": 181846,
        "mal": 196747
      },
      {
        "name": "Beelzebub",
        "emoji": "🍀",
        "anilist": 135595,
        "mal": 196748
      },
      {
        "name": "Astaroth",
        "emoji": "🍀",
        "anilist": 215442,
        "mal": 196749
      },
      {
        "name": "Lilith",
        "emoji": "🍀",
        "anilist": 181690,
        "mal": null
      },
      {
        "name": "Naamah",
        "emoji": "🍀",
        "anilist": 216711,
        "mal": null
      },
      {
        "name": "Adrammelech",
        "emoji": "🍀",
        "anilist": 288931,
        "mal": null
      },
      {
        "name": "Morris Libardirt",
        "emoji": "🍀",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Undine",
        "emoji": "🍀",
        "anilist": 174446,
        "mal": null
      },
      {
        "name": "Sylph",
        "emoji": "🍀",
        "anilist": 125025,
        "mal": null,
        "displayName": "Sylph / Bell"
      },
      {
        "name": "Salamander",
        "emoji": "🍀",
        "anilist": 185539,
        "mal": null
      },
      {
        "name": "Dryad",
        "emoji": "🍀",
        "anilist": 258201,
        "mal": null
      },
      {
        "name": "Gadjah",
        "emoji": "🍀",
        "anilist": 174452,
        "mal": null
      },
      {
        "name": "Lolopechka",
        "emoji": "🍀",
        "anilist": 174449,
        "mal": null
      },
      {
        "name": "Kahono",
        "emoji": "🍀",
        "anilist": 124993,
        "mal": null
      },
      {
        "name": "Kiato",
        "emoji": "🍀",
        "anilist": 124994,
        "mal": null
      },
      {
        "name": "Revchi Salik",
        "emoji": "🍀",
        "anilist": 124463,
        "mal": null
      },
      {
        "name": "Sister Lily",
        "emoji": "🍀",
        "anilist": 167854,
        "mal": 196754
      },
      {
        "name": "Damnatio  Kira",
        "emoji": "🍀",
        "anilist": 174448,
        "mal": null,
        "displayName": "Damnatio Kira"
      },
      {
        "name": "Acier Silva",
        "emoji": "🍀",
        "anilist": 124972,
        "mal": null
      },
      {
        "name": "Licita",
        "emoji": "🍀",
        "anilist": 192588,
        "mal": null
      },
      {
        "name": "Morgen Faust",
        "emoji": "🍀",
        "anilist": 214748,
        "mal": null
      }
    ]
  },
  {
    "id": "chainsaw",
    "name": "Chainsaw Man",
    "emoji": "🪚",
    "color": "#ef4444",
    "tags": [
      "Shonen",
      "Supernatural"
    ],
    "chars": [
      {
        "name": "Denji",
        "emoji": "🪚",
        "anilist": 130102,
        "mal": 197539
      },
      {
        "name": "Pochita",
        "emoji": "🪚",
        "anilist": 170266,
        "mal": 197543
      },
      {
        "name": "Chainsaw Man / Hero of Hell",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Power",
        "emoji": "🪚",
        "anilist": 137079,
        "mal": 197540
      },
      {
        "name": "Aki Hayakawa",
        "emoji": "🪚",
        "anilist": 137081,
        "mal": 197541
      },
      {
        "name": "Makima",
        "emoji": "🪚",
        "anilist": 137080,
        "mal": 197542
      },
      {
        "name": "Himeno",
        "emoji": "🪚",
        "anilist": 144596,
        "mal": 197544
      },
      {
        "name": "Kobeni Higashiyama",
        "emoji": "🪚",
        "anilist": 144594,
        "mal": 197545
      },
      {
        "name": "Kishibe",
        "emoji": "🪚",
        "anilist": 144593,
        "mal": 197546
      },
      {
        "name": "Quanxi",
        "emoji": "🪚",
        "anilist": 162123,
        "mal": 197547
      },
      {
        "name": "Reze",
        "emoji": "🪚",
        "anilist": 148740,
        "mal": 197549
      },
      {
        "name": "Asa Mitaka",
        "emoji": "🪚",
        "anilist": 282389,
        "mal": 215729
      },
      {
        "name": "Yoru / War Devil",
        "emoji": "🪚",
        "anilist": 187303,
        "mal": 215730
      },
      {
        "name": "Nayuta",
        "emoji": "🪚",
        "anilist": 199767,
        "mal": 215731
      },
      {
        "name": "Fami / Famine Devil",
        "emoji": "🪚",
        "anilist": 187308,
        "mal": 215735
      },
      {
        "name": "Hirofumi Yoshida",
        "emoji": "🪚",
        "anilist": 162080,
        "mal": 215733,
        "displayName": "Yoshida Hirofumi"
      },
      {
        "name": "Fumiko Mifune",
        "emoji": "🪚",
        "anilist": 311954,
        "mal": 215734
      },
      {
        "name": "Haruka Iseumi",
        "emoji": "🪚",
        "anilist": 294718,
        "mal": 215732
      },
      {
        "name": "Barem Bridge",
        "emoji": "🪚",
        "anilist": 306235,
        "mal": null
      },
      {
        "name": "Miri Sugo / Sword Man",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Samurai Sword",
        "emoji": "🪚",
        "anilist": 157241,
        "mal": 197556,
        "displayName": "Katana Man / Samurai Sword"
      },
      {
        "name": "Akane Sawatari ",
        "emoji": "🪚",
        "anilist": 174264,
        "mal": 197557,
        "displayName": "Akane Sawatari"
      },
      {
        "name": "Angel Devil",
        "emoji": "🪚",
        "anilist": 166241,
        "mal": 197550
      },
      {
        "name": "Beam",
        "emoji": "🪚",
        "anilist": 157232,
        "mal": 197551,
        "displayName": "Beam / Shark Fiend"
      },
      {
        "name": "Violence Fiend / Galgali",
        "emoji": "🪚",
        "anilist": 166243,
        "mal": 197552
      },
      {
        "name": "Spider Devil / Princi",
        "emoji": "🪚",
        "anilist": 166244,
        "mal": 197553
      },
      {
        "name": "Future Devil",
        "emoji": "🪚",
        "anilist": 166249,
        "mal": 197558
      },
      {
        "name": "Ghost Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Fox Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Curse Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Gun Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Gun Fiend",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Darkness Devil",
        "emoji": "🪚",
        "anilist": 166252,
        "mal": 197561
      },
      {
        "name": "Hell Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Zombie Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Devil Bat",
        "emoji": "🪚",
        "anilist": 31334,
        "mal": null,
        "displayName": "Bat Devil"
      },
      {
        "name": "Leech Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Typhoon Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Eternity Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Control Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Falling Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Justice Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Punishment Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Sea Cucumber Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Bucky / Chicken Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Cosmo",
        "emoji": "🪚",
        "anilist": 172890,
        "mal": 215739
      },
      {
        "name": "Long",
        "emoji": "🪚",
        "anilist": 187317,
        "mal": 215744
      },
      {
        "name": "Tsugihagi",
        "emoji": "🪚",
        "anilist": 199766,
        "mal": 215740
      },
      {
        "name": "Pingtsi",
        "emoji": "🪚",
        "anilist": 172891,
        "mal": 215741
      },
      {
        "name": "Doitsu no Santa Claus ",
        "emoji": "🪚",
        "anilist": 174268,
        "mal": 197548
      },
      {
        "name": "Tolka",
        "emoji": "🪚",
        "anilist": 174279,
        "mal": 215742
      },
      {
        "name": "Yutaro Kurose",
        "emoji": "🪚",
        "anilist": 166253,
        "mal": 197562
      },
      {
        "name": "Michiko Tendou",
        "emoji": "🪚",
        "anilist": 144595,
        "mal": 197563
      },
      {
        "name": "Octopus Devil",
        "emoji": "🪚",
        "anilist": 187319,
        "mal": 215746
      },
      {
        "name": "Tomato Devil",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Yuko",
        "emoji": "🪚",
        "anilist": null,
        "mal": null
      }
    ]
  },
  {
    "id": "dandadan",
    "name": "Dandadan",
    "emoji": "👽",
    "color": "#a855f7",
    "tags": [
      "Supernatural",
      "Sci-Fi"
    ],
    "chars": [
      {
        "name": "Momo Ayase",
        "emoji": "👽",
        "anilist": 222594,
        "mal": null
      },
      {
        "name": "Ken Takakura",
        "emoji": "👽",
        "anilist": 222593,
        "mal": null,
        "displayName": "Ken Takakura / Okarun"
      },
      {
        "name": "Seiko Ayase",
        "emoji": "👽",
        "anilist": 234824,
        "mal": null
      },
      {
        "name": "Turbo Granny",
        "emoji": "👽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Aira Shiratori",
        "emoji": "👽",
        "anilist": 245466,
        "mal": null
      },
      {
        "name": "Acrobatic Silky",
        "emoji": "👽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Jin Enjoji / Jiji",
        "emoji": "👽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Evil Eye",
        "emoji": "👽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kinta Sakata",
        "emoji": "👽",
        "anilist": 289257,
        "mal": null
      },
      {
        "name": "Vamola",
        "emoji": "👽",
        "anilist": 289256,
        "mal": null
      },
      {
        "name": "Rokuro Serpo",
        "emoji": "👽",
        "anilist": 347078,
        "mal": null
      },
      {
        "name": "Serpoian",
        "emoji": "👽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Mr. Mantis Shrimp / Peeny Weeny",
        "emoji": "👽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Serpod Dover Demon Nessie",
        "emoji": "👽",
        "anilist": 309817,
        "mal": null
      },
      {
        "name": "Chiquitita",
        "emoji": "👽",
        "anilist": 270706,
        "mal": null
      },
      {
        "name": "Taro",
        "emoji": "👽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Hana",
        "emoji": "👽",
        "anilist": 270703,
        "mal": null
      },
      {
        "name": "Reiko Kashima",
        "emoji": "👽",
        "anilist": 309829,
        "mal": null
      },
      {
        "name": "Mongolian Death Worm",
        "emoji": "👽",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Saint-Germain Hakushaku",
        "emoji": "👽",
        "anilist": 319531,
        "mal": null
      },
      {
        "name": "Space Globalists",
        "emoji": "👽",
        "anilist": null,
        "mal": null
      }
    ]
  },
  {
    "id": "kaiju8",
    "name": "Kaiju No. 8",
    "emoji": "🦖",
    "color": "#14b8a6",
    "tags": [
      "Action",
      "Sci-Fi"
    ],
    "chars": [
      {
        "name": "Kafka Hibino",
        "emoji": "🦖",
        "anilist": 180692,
        "mal": null
      },
      {
        "name": "Kaiju No. 8",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Mina Ashiro",
        "emoji": "🦖",
        "anilist": 180693,
        "mal": null
      },
      {
        "name": "Reno Ichikawa",
        "emoji": "🦖",
        "anilist": 180694,
        "mal": null
      },
      {
        "name": "Kikoru Shinomiya",
        "emoji": "🦖",
        "anilist": 183889,
        "mal": null
      },
      {
        "name": "Soshiro Hoshina",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Gen Narumi",
        "emoji": "🦖",
        "anilist": 241577,
        "mal": null
      },
      {
        "name": "Isao Shinomiya",
        "emoji": "🦖",
        "anilist": 257340,
        "mal": null
      },
      {
        "name": "Hikari Shinomiya",
        "emoji": "🦖",
        "anilist": 305720,
        "mal": null
      },
      {
        "name": "Iharu Furuhashi",
        "emoji": "🦖",
        "anilist": 308020,
        "mal": null
      },
      {
        "name": "Haruichi Izumo",
        "emoji": "🦖",
        "anilist": 308023,
        "mal": null
      },
      {
        "name": "Aoi Kaguragi",
        "emoji": "🦖",
        "anilist": 308014,
        "mal": null
      },
      {
        "name": "Konomi Okonogi",
        "emoji": "🦖",
        "anilist": 308027,
        "mal": null
      },
      {
        "name": "Hakua Igarashi",
        "emoji": "🦖",
        "anilist": 311264,
        "mal": null
      },
      {
        "name": "Eiji Hasegawa",
        "emoji": "🦖",
        "anilist": 305764,
        "mal": null
      },
      {
        "name": "Kaiju No. 9",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kaiju No. 10",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kaiju No. 2",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kaiju No. 6",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kaiju No. 11",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kaiju No. 12",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kaiju No. 13",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kaiju No. 14",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      },
      {
        "name": "Kaiju No. 15",
        "emoji": "🦖",
        "anilist": null,
        "mal": null
      }
    ]
  },
  {
    "id": "genshin",
    "name": "Genshin Impact",
    "emoji": "✨",
    "color": "#06b6d4",
    "tags": [
      "Game",
      "Fantasy"
    ],
    "chars": [
      {
        "name": "Aether",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Aether.webp"
      },
      {
        "name": "Aino",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Aino.webp"
      },
      {
        "name": "Albedo",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Albedo.webp"
      },
      {
        "name": "Alhaitham",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Alhaitham.webp"
      },
      {
        "name": "Aloy",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Aloy.webp"
      },
      {
        "name": "Amber",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Amber.webp"
      },
      {
        "name": "Arataki Itto",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Arataki%20Itto.webp"
      },
      {
        "name": "Arlecchino",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Arlecchino.webp"
      },
      {
        "name": "Baizhu",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Baizhu.webp"
      },
      {
        "name": "Barbara",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Barbara.webp"
      },
      {
        "name": "Beidou",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Beidou.webp"
      },
      {
        "name": "Bennett",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Bennett.webp"
      },
      {
        "name": "Candace",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Candace.webp"
      },
      {
        "name": "Charlotte",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Charlotte.webp"
      },
      {
        "name": "Chasca",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Chasca.webp"
      },
      {
        "name": "Chevreuse",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Chevreuse.webp"
      },
      {
        "name": "Chiori",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Chiori.webp"
      },
      {
        "name": "Chongyun",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Chongyun.webp"
      },
      {
        "name": "Citlali",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Citlali.webp"
      },
      {
        "name": "Clorinde",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Clorinde.webp"
      },
      {
        "name": "Collei",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Collei.webp"
      },
      {
        "name": "Columbina",
        "emoji": "✨",
        "img": "https://i2.wp.com/images.genshin-builds.com/genshin/characters/columbina/image.png?strip=all&quality=100&w=160"
      },
      {
        "name": "Cyno",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Cyno.webp"
      },
      {
        "name": "Dahlia",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Dahlia.webp"
      },
      {
        "name": "Dehya",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Dehya.webp"
      },
      {
        "name": "Diluc",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Diluc.webp"
      },
      {
        "name": "Diona",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Diona.webp"
      },
      {
        "name": "Dori",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Dori.webp"
      },
      {
        "name": "Durin",
        "emoji": "✨",
        "img": "https://i2.wp.com/images.genshin-builds.com/genshin/characters/durin/image.png?strip=all&quality=100&w=160"
      },
      {
        "name": "Emilie",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Emilie.webp"
      },
      {
        "name": "Escoffier",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Escoffier.webp"
      },
      {
        "name": "Eula",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Eula.webp"
      },
      {
        "name": "Faruzan",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Faruzan.webp"
      },
      {
        "name": "Fischl",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Fischl.webp"
      },
      {
        "name": "Flins",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Flins.webp"
      },
      {
        "name": "Freminet",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Freminet.webp"
      },
      {
        "name": "Furina",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Furina.webp"
      },
      {
        "name": "Gaming",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Gaming.webp"
      },
      {
        "name": "Ganyu",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Ganyu.webp"
      },
      {
        "name": "Gorou",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Gorou.webp"
      },
      {
        "name": "Hu Tao",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Hu%20Tao.webp"
      },
      {
        "name": "Iansan",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Iansan.webp"
      },
      {
        "name": "Ifa",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Ifa.webp"
      },
      {
        "name": "Illuga",
        "emoji": "✨",
        "img": "https://i2.wp.com/images.genshin-builds.com/genshin/characters/illuga/image.png?strip=all&quality=100&w=160"
      },
      {
        "name": "Ineffa",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Ineffa.webp"
      },
      {
        "name": "Jahoda",
        "emoji": "✨",
        "img": "https://i2.wp.com/images.genshin-builds.com/genshin/characters/jahoda/image.png?strip=all&quality=100&w=160"
      },
      {
        "name": "Jean",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Jean.webp"
      },
      {
        "name": "Kachina",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Kachina.webp"
      },
      {
        "name": "Kaedehara Kazuha",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Kaedehara%20Kazuha.webp"
      },
      {
        "name": "Kaeya",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Kaeya.webp"
      },
      {
        "name": "Kamisato Ayaka",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Kamisato%20Ayaka.webp"
      },
      {
        "name": "Kamisato Ayato",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Kamisato%20Ayato.webp"
      },
      {
        "name": "Kaveh",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Kaveh.webp"
      },
      {
        "name": "Keqing",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Keqing.webp"
      },
      {
        "name": "Kinich",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Kinich.webp"
      },
      {
        "name": "Kirara",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Kirara.webp"
      },
      {
        "name": "Klee",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Klee.webp"
      },
      {
        "name": "Kujou Sara",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Kujou%20Sara.webp"
      },
      {
        "name": "Kuki Shinobu",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Kuki%20Shinobu.webp"
      },
      {
        "name": "Lan Yan",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Lan%20Yan.webp"
      },
      {
        "name": "Lauma",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Lauma.webp"
      },
      {
        "name": "Layla",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Layla.webp"
      },
      {
        "name": "Lisa",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Lisa.webp"
      },
      {
        "name": "Lumine",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Lumine.webp"
      },
      {
        "name": "Lynette",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Lynette.webp"
      },
      {
        "name": "Lyney",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Lyney.webp"
      },
      {
        "name": "Manekin",
        "emoji": "✨",
        "img": "https://i2.wp.com/images.genshin-builds.com/genshin/characters/manekin/image.png?strip=all&quality=100&w=160"
      },
      {
        "name": "Manekina",
        "emoji": "✨",
        "img": "https://i2.wp.com/images.genshin-builds.com/genshin/characters/manekina/image.png?strip=all&quality=100&w=160"
      },
      {
        "name": "Mavuika",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Mavuika.webp"
      },
      {
        "name": "Mika",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Mika.webp"
      },
      {
        "name": "Mona",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Mona.webp"
      },
      {
        "name": "Mualani",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Mualani.webp"
      },
      {
        "name": "Nahida",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Nahida.webp"
      },
      {
        "name": "Navia",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Navia.webp"
      },
      {
        "name": "Nefer",
        "emoji": "✨",
        "img": "https://i2.wp.com/images.genshin-builds.com/genshin/characters/nefer/image.png?strip=all&quality=100&w=160"
      },
      {
        "name": "Neuvillette",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Neuvillette.webp"
      },
      {
        "name": "Nilou",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Nilou.webp"
      },
      {
        "name": "Ningguang",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Ningguang.webp"
      },
      {
        "name": "Noelle",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Noelle.webp"
      },
      {
        "name": "Ororon",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Ororon.webp"
      },
      {
        "name": "Qiqi",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Qiqi.webp"
      },
      {
        "name": "Raiden Shogun",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Raiden%20Shogun.webp"
      },
      {
        "name": "Razor",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Razor.webp"
      },
      {
        "name": "Rosaria",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Rosaria.webp"
      },
      {
        "name": "Sangonomiya Kokomi",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Sangonomiya%20Kokomi.webp"
      },
      {
        "name": "Sayu",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Sayu.webp"
      },
      {
        "name": "Sethos",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Sethos.webp"
      },
      {
        "name": "Shenhe",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Shenhe.webp"
      },
      {
        "name": "Shikanoin Heizou",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Shikanoin%20Heizou.webp"
      },
      {
        "name": "Sigewinne",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Sigewinne.webp"
      },
      {
        "name": "Skirk",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Skirk.webp"
      },
      {
        "name": "Sucrose",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Sucrose.webp"
      },
      {
        "name": "Tartaglia",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Tartaglia.webp"
      },
      {
        "name": "Thoma",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Thoma.webp"
      },
      {
        "name": "Tighnari",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Tighnari.webp"
      },
      {
        "name": "Varesa",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Varesa.webp"
      },
      {
        "name": "Varka",
        "emoji": "✨",
        "img": "https://i2.wp.com/images.genshin-builds.com/genshin/characters/varka/image.png?strip=all&quality=100&w=160"
      },
      {
        "name": "Venti",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Venti.webp"
      },
      {
        "name": "Wanderer",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Wanderer.webp"
      },
      {
        "name": "Wriothesley",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Wriothesley.webp"
      },
      {
        "name": "Xiangling",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Xiangling.webp"
      },
      {
        "name": "Xianyun",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Xianyun.webp"
      },
      {
        "name": "Xiao",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Xiao.webp"
      },
      {
        "name": "Xilonen",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Xilonen.webp"
      },
      {
        "name": "Xingqiu",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Xingqiu.webp"
      },
      {
        "name": "Xinyan",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Xinyan.webp"
      },
      {
        "name": "Yae Miko",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Yae%20Miko.webp"
      },
      {
        "name": "Yanfei",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Yanfei.webp"
      },
      {
        "name": "Yaoyao",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Yaoyao.webp"
      },
      {
        "name": "Yelan",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Yelan.webp"
      },
      {
        "name": "Yoimiya",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Yoimiya.webp"
      },
      {
        "name": "Yumemizuki Mizuki",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Yumemizuki%20Mizuki.webp"
      },
      {
        "name": "Yun Jin",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_4star/Yun%20Jin.webp"
      },
      {
        "name": "Zhongli",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://genshin-guess-who.com/genshin/char_icons_5star/Zhongli.webp"
      },
      {
        "name": "Zibai",
        "emoji": "✨",
        "img": "https://i2.wp.com/images.genshin-builds.com/genshin/characters/zibai/image.png?strip=all&quality=100&w=160"
      },
      {
        "name": "Paimon",
        "emoji": "✨",
        "anilist": 203317,
        "mal": null
      },
      {
        "name": "Dainsleif",
        "emoji": "✨",
        "anilist": 350308,
        "mal": null
      },
      {
        "name": "Unknown God",
        "emoji": "✨",
        "anilist": null,
        "mal": null,
        "img": "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Wanderer%27s_Trail_Battle_Against_Asmoday.png/revision/latest/scale-to-width-down/185?cb=20260126142834"
      }
    ]
  },
  {
    "id": "valorant",
    "name": "VALORANT",
    "emoji": "🎯",
    "color": "#ff4655",
    "tags": [
      "Game",
      "Shooter"
    ],
    "chars": [
      {
        "name": "Astra",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/astra_portrait.png",
        "type": "agent"
      },
      {
        "name": "Breach",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/breach_portrait.png",
        "type": "agent"
      },
      {
        "name": "Brimstone",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/brimstone_portrait.png",
        "type": "agent"
      },
      {
        "name": "Chamber",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/chamber_portrait.png",
        "type": "agent"
      },
      {
        "name": "Clove",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/clove_portrait.png",
        "type": "agent"
      },
      {
        "name": "Cypher",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/cypher_portrait.png",
        "type": "agent"
      },
      {
        "name": "Deadlock",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/deadlock_portrait.png",
        "type": "agent"
      },
      {
        "name": "Fade",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/fade_portrait.png",
        "type": "agent"
      },
      {
        "name": "Gekko",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/gekko_portrait.png",
        "type": "agent"
      },
      {
        "name": "Harbor",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/harbor_portrait.png",
        "type": "agent"
      },
      {
        "name": "Iso",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/iso_portrait.png",
        "type": "agent"
      },
      {
        "name": "Jett",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/jett_portrait.png",
        "type": "agent"
      },
      {
        "name": "KAY/O",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/kayo_portrait.png",
        "type": "agent"
      },
      {
        "name": "Killjoy",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/killjoy_portrait.png",
        "type": "agent"
      },
      {
        "name": "Neon",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/neon_portrait.png",
        "type": "agent"
      },
      {
        "name": "Omen",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/omen_portrait.png",
        "type": "agent"
      },
      {
        "name": "Phoenix",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/phoenix_portrait.png",
        "type": "agent"
      },
      {
        "name": "Raze",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/raze_portrait.png",
        "type": "agent"
      },
      {
        "name": "Reyna",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/reyna_portrait.png",
        "type": "agent"
      },
      {
        "name": "Sage",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/sage_portrait.png",
        "type": "agent"
      },
      {
        "name": "Skye",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/skye_portrait.png",
        "type": "agent"
      },
      {
        "name": "Sova",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/sova_portrait.png",
        "type": "agent"
      },
      {
        "name": "Tejo",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/tejo_portrait.png",
        "type": "agent"
      },
      {
        "name": "Veto",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/veto_portrait.png",
        "type": "agent"
      },
      {
        "name": "Viper",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/viper_portrait.png",
        "type": "agent"
      },
      {
        "name": "Vyse",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/vyse_portrait.png",
        "type": "agent"
      },
      {
        "name": "Waylay",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/waylay_portrait.png",
        "type": "agent"
      },
      {
        "name": "Yoru",
        "emoji": "🎯",
        "img": "https://trackercdn.com/cdn/tracker.gg/valorant/db/agents/yoru_portrait.png",
        "type": "agent"
      },
      {
        "name": "Nova Pulse (Astra)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Astra",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Nebula  / Dissipate (Astra)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Astra",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Gravity Well (Astra)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Astra",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Astral Form / Cosmic Divide (Astra)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Astra",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Astral Form (Astra)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/abilities/passive/displayicon.png",
        "type": "ability",
        "owner": "Astra",
        "abilitySlot": "Passive"
      },
      {
        "name": "Flashpoint (Breach)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Breach",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Fault Line (Breach)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Breach",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Aftershock (Breach)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Breach",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Rolling Thunder (Breach)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Breach",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Stim Beacon (Brimstone)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Brimstone",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Incendiary (Brimstone)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Brimstone",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Sky Smoke (Brimstone)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Brimstone",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Orbital Strike (Brimstone)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Brimstone",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Rendezvous (Chamber)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Chamber",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Trademark (Chamber)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Chamber",
        "abilitySlot": "Grenade",
        "displayName": "Trademark"
      },
      {
        "name": "Headhunter (Chamber)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Chamber",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Tour De Force (Chamber)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Chamber",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Pick-me-up (Clove)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Clove",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Ruse (Clove)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Clove",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Not Dead Yet (Clove)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Clove",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Meddle (Clove)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Clove",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Cyber Cage (Cypher)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Cypher",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Spycam (Cypher)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Cypher",
        "abilitySlot": "Ability2",
        "displayName": "Spycam"
      },
      {
        "name": "Trapwire (Cypher)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Cypher",
        "abilitySlot": "Grenade",
        "displayName": "Trapwire"
      },
      {
        "name": "Neural Theft (Cypher)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Cypher",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Sonic Sensor (Deadlock)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Deadlock",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Barrier Mesh (Deadlock)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Deadlock",
        "abilitySlot": "Grenade"
      },
      {
        "name": "GravNet (Deadlock)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Deadlock",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Annihilation (Deadlock)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Deadlock",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Seize (Fade)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Fade",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Haunt (Fade)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Fade",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Prowler (Fade)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Fade",
        "abilitySlot": "Grenade",
        "displayName": "Prowler"
      },
      {
        "name": "Nightfall (Fade)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Fade",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Wingman (Gekko)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Gekko",
        "abilitySlot": "Ability1",
        "displayName": "Wingman"
      },
      {
        "name": "Dizzy (Gekko)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Gekko",
        "abilitySlot": "Ability2",
        "displayName": "Dizzy"
      },
      {
        "name": "Mosh Pit (Gekko)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Gekko",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Thrash (Gekko)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Gekko",
        "abilitySlot": "Ultimate",
        "displayName": "Thrash"
      },
      {
        "name": "High Tide (Harbor)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Harbor",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Storm Surge (Harbor)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Harbor",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Cove (Harbor)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Harbor",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Reckoning (Harbor)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Harbor",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Undercut (Iso)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Iso",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Kill Contract (Iso)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Iso",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Double Tap (Iso)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Iso",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Contingency (Iso)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Iso",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Updraft (Jett)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Jett",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Tailwind (Jett)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Jett",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Cloudburst (Jett)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Jett",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Blade Storm (Jett)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Jett",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Drift (Jett)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png",
        "type": "ability",
        "owner": "Jett",
        "abilitySlot": "Passive"
      },
      {
        "name": "FRAG/ment (KAY/O)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "KAY/O",
        "abilitySlot": "Grenade"
      },
      {
        "name": "FLASH/drive (KAY/O)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "KAY/O",
        "abilitySlot": "Ability1"
      },
      {
        "name": "ZERO/point (KAY/O)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "KAY/O",
        "abilitySlot": "Ability2"
      },
      {
        "name": "NULL/cmd (KAY/O)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "KAY/O",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Nanoswarm (Killjoy)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Killjoy",
        "abilitySlot": "Grenade"
      },
      {
        "name": "ALARMBOT (Killjoy)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Killjoy",
        "abilitySlot": "Ability1",
        "displayName": "Alarmbot"
      },
      {
        "name": "TURRET (Killjoy)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Killjoy",
        "abilitySlot": "Ability2",
        "displayName": "Turret"
      },
      {
        "name": "Lockdown (Killjoy)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Killjoy",
        "abilitySlot": "Ultimate",
        "displayName": "Lockdown"
      },
      {
        "name": "High Gear (Neon)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Neon",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Relay Bolt (Neon)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Neon",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Fast Lane (Neon)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Neon",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Overdrive (Neon)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Neon",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Paranoia (Omen)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Omen",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Dark Cover (Omen)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Omen",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Shrouded Step (Omen)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Omen",
        "abilitySlot": "Grenade"
      },
      {
        "name": "From the Shadows (Omen)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Omen",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Blaze (Phoenix)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Phoenix",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Hot Hands (Phoenix)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Phoenix",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Curveball (Phoenix)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Phoenix",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Run it Back (Phoenix)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Phoenix",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Heating Up (Phoenix)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
        "type": "ability",
        "owner": "Phoenix",
        "abilitySlot": "Passive"
      },
      {
        "name": "Blast Pack (Raze)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Raze",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Paint Shells (Raze)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Raze",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Boom Bot (Raze)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Raze",
        "abilitySlot": "Grenade",
        "displayName": "Boom Bot"
      },
      {
        "name": "Showstopper (Raze)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Raze",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Devour (Reyna)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Reyna",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Dismiss (Reyna)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Reyna",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Leer (Reyna)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Reyna",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Empress (Reyna)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Reyna",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Slow Orb (Sage)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Sage",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Healing Orb (Sage)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Sage",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Barrier Orb (Sage)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Sage",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Resurrection (Sage)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Sage",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Trailblazer (Skye)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Skye",
        "abilitySlot": "Ability1",
        "displayName": "Trailblazer"
      },
      {
        "name": "Guiding Light (Skye)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Skye",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Regrowth (Skye)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Skye",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Seekers (Skye)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Skye",
        "abilitySlot": "Ultimate",
        "displayName": "Seekers"
      },
      {
        "name": "Shock Bolt (Sova)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Sova",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Recon Bolt (Sova)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Sova",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Owl Drone (Sova)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Sova",
        "abilitySlot": "Grenade",
        "displayName": "Owl Drone"
      },
      {
        "name": "Hunter's Fury (Sova)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Sova",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Uncanny Marksman (Sova)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
        "type": "ability",
        "owner": "Sova",
        "abilitySlot": "Passive"
      },
      {
        "name": "Guided Salvo (Tejo)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/b444168c-4e35-8076-db47-ef9bf368f384/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Tejo",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Special Delivery (Tejo)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/b444168c-4e35-8076-db47-ef9bf368f384/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Tejo",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Armageddon (Tejo)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/b444168c-4e35-8076-db47-ef9bf368f384/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Tejo",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Stealth Drone (Tejo)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/b444168c-4e35-8076-db47-ef9bf368f384/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Tejo",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Interceptor (Veto)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Veto",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Crosscut (Veto)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Veto",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Evolution (Veto)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Veto",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Chokehold (Veto)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Veto",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Poison Cloud (Viper)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Viper",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Toxic Screen (Viper)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Viper",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Snake Bite (Viper)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Viper",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Viper's Pit (Viper)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Viper",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Toxic (Viper)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
        "type": "ability",
        "owner": "Viper",
        "abilitySlot": "Passive"
      },
      {
        "name": "Shear (Vyse)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/efba5359-4016-a1e5-7626-b1ae76895940/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Vyse",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Arc Rose (Vyse)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/efba5359-4016-a1e5-7626-b1ae76895940/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Vyse",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Razorvine (Vyse)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/efba5359-4016-a1e5-7626-b1ae76895940/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Vyse",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Steel Garden (Vyse)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/efba5359-4016-a1e5-7626-b1ae76895940/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Vyse",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "Refract (Waylay)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/df1cb487-4902-002e-5c17-d28e83e78588/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Waylay",
        "abilitySlot": "Ability2"
      },
      {
        "name": "Saturate (Waylay)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/df1cb487-4902-002e-5c17-d28e83e78588/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Waylay",
        "abilitySlot": "Grenade"
      },
      {
        "name": "Lightspeed (Waylay)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/df1cb487-4902-002e-5c17-d28e83e78588/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Waylay",
        "abilitySlot": "Ability1"
      },
      {
        "name": "Convergent Paths (Waylay)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/df1cb487-4902-002e-5c17-d28e83e78588/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Waylay",
        "abilitySlot": "Ultimate"
      },
      {
        "name": "FAKEOUT (Yoru)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/grenade/displayicon.png",
        "type": "ability",
        "owner": "Yoru",
        "abilitySlot": "Grenade"
      },
      {
        "name": "BLINDSIDE (Yoru)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability1/displayicon.png",
        "type": "ability",
        "owner": "Yoru",
        "abilitySlot": "Ability1"
      },
      {
        "name": "GATECRASH (Yoru)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ability2/displayicon.png",
        "type": "ability",
        "owner": "Yoru",
        "abilitySlot": "Ability2"
      },
      {
        "name": "DIMENSIONAL DRIFT (Yoru)",
        "emoji": "🎯",
        "img": "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/abilities/ultimate/displayicon.png",
        "type": "ability",
        "owner": "Yoru",
        "abilitySlot": "Ultimate"
      }
    ]
  }
];
