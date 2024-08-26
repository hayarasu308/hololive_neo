type memberObjectType = {
    name: string,
    index: number
}

export const image_name: Array<string> = [
    "",
    "01_tokinosora.png",
    "02_robokosan.png",
    "03_AZKi.png",
    "04_sakuraimko.png",
    "05_hoshimachisuisei.png",
    "06_akirose.png",
    "07_akaihaato.png",
    "08_shirakamifubuki.png",
    "09_natsuiromatsuri.png",
    "10_minatoaqua.png",
    "11_murasakishion.png",
    "12_nakiriayame.png",
    "13_yudukichoco.png",
    "14_oozorasubaru.png",
    "15_okamimio.png",
    "16_nekomataokayu.png",
    "17_inugamikorone.png",
    "18_usadapekora.png",
    "19_shiranuiflare.png",
    "20_shiroganenel.png",
    "21_houshomarine.png",
    "22_amanekanata.png",
    "23_tsunomakiwatame.png",
    "24_tokoyamitowa.png",
    "25_himemoriluna.png",
    "26_yukihanalamy.png",
    "27_momosuzunene.png",
    "28_shishirobotan.png",
    "29_omarupolka.png",
    "30_laplus.png",
    "31_takanelui.png",
    "32_hakuikoyori.png",
    "33_sakamatachloe.png",
    "34_kazamairoha.png"
]

export const brank_added_image_name: Array<memberObjectType> = image_name.map((name, index) => {
    if (name == "") {
        return []
    }
    const res: memberObjectType = { name, index }
    const brank = { name: "br", index: -1 }
    if (name == "09_natsuiromatsuri.png"
        || name == "21_houshomarine.png"
        || name == "25_himemoriluna.png"
        || name == "29_omarupolka.png"
    ) {
        return [res, brank]
    }
    if (name == "17_inugamikorone.png") {
        return [res, brank, brank]
    }

    return [res]
}).flat()

// export const brank_added_image_name = [
//     {
//         name: "01_tokinosora.png",
//         index: 1
//     },
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },

//     {
//         name: "03_AZKi.png",
//         index: 3
//     },

//     {
//         name: "04_sakuraimko.png",
//         index: 4
//     },

//     {
//         name: "05_hoshimachisuisei.png",
//         index: 5
//     },

//     {
//         name: "06_akirose.png",
//         index: 6
//     },

//     {
//         name: "07_akaihaato.png",
//         index: 7
//     },

//     {
//         name: "08_shirakamifubuki.png",
//         index: 8
//     },

//     {
//         name: "09_natsuiromatsuri.png",
//         index: 9
//     },
//     "br",

//     {
//         name: "10_minatoaqua.png",
//         index: 10
//     },

//     {
//         name: "11_murasakishion.png",
//         index: 11
//     },
//     "12_nakiriayame.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "13_yudukichoco.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "14_oozorasubaru.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "15_okamimio.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "16_nekomataokayu.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "17_inugamikorone.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "br",
//     "br",
//     "18_usadapekora.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "19_shiranuiflare.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "20_shiroganenel.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "21_houshomarine.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "br",
//     "22_amanekanata.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "23_tsunomakiwatame.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "24_tokoyamitowa.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "25_himemoriluna.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "br",
//     "26_yukihanalamy.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "27_momosuzunene.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "28_shishirobotan.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "29_omarupolka.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "br",
//     "30_laplus.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "31_takanelui.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "32_hakuikoyori.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "33_sakamatachloe.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
//     "34_kazamairoha.png",
//     {
//         name: "02_robokosan.png",
//         index: 2
//     },
// ]

export const unit_list = [
    {
        "name": "SorAZ",
        "member": [
            1,
            3
        ]
    },
    {
        "name": "miComet",
        "member": [
            4,
            5
        ]
    },
    {
        "name": "みっころね",
        "member": [
            4,
            17
        ]
    },
    {
        "name": "しおぺこ",
        "member": [
            11,
            18
        ]
    },
    {
        "name": "夏色吹雪",
        "member": [
            8,
            9
        ]
    },
    {
        "name": "フブミオ",
        "member": [
            8,
            15
        ]
    },
    {
        "name": "あくシオ",
        "member": [
            10,
            11
        ]
    },
    {
        "name": "あくあマリン",
        "member": [
            10,
            21
        ]
    },
    {
        "name": "おかころ",
        "member": [
            16,
            17
        ]
    },
    {
        "name": "ぺこマリ",
        "member": [
            18,
            21
        ]
    },
    {
        "name": "ノエフレ",
        "member": [
            19,
            20
        ]
    },
    {
        "name": "いろはス",
        "member": [
            30,
            34
        ]
    },
    {
        "name": "かなるーな",
        "member": [
            22,
            25
        ]
    },
    {
        "name": "トワラプ",
        "member": [
            24,
            30
        ]
    },
    {
        "name": "あくぺこ",
        "member": [
            10,
            18
        ]
    },
    {
        "name": "あずいろ",
        "member": [
            3,
            34
        ]
    },
    {
        "name": "アキそら",
        "member": [
            1,
            6
        ]
    },
    {
        "name": "画伯ルーキーズ",
        "member": [
            6,
            24
        ]
    },
    {
        "name": "ちょろぼ",
        "member": [
            2,
            13
        ]
    },
    {
        "name": "ちょこらぷ",
        "member": [
            13,
            30
        ]
    },
    {
        "name": "サマーローズ",
        "member": [
            6,
            9
        ]
    },
    {
        "name": "りっちしょこら",
        "member": [
            13,
            31
        ]
    },
    {
        "name": "塩シャチ",
        "member": [
            11,
            33
        ]
    },
    {
        "name": "こよクロ",
        "member": [
            32,
            33
        ]
    },
    {
        "name": "ししらみ",
        "member": [
            26,
            28
        ]
    },
    {
        "name": "ししねね",
        "member": [
            27,
            28
        ]
    },
    {
        "name": "夏色はあと",
        "member": [
            7,
            9
        ]
    },
    {
        "name": "鬼幹",
        "member": [
            12,
            31
        ]
    },
    {
        "name": "ししわた",
        "member": [
            23,
            28
        ]
    },
    {
        "name": "SoAzKo(そあっこ)",
        "member": [
            1,
            3,
            32
        ]
    },
    {
        "name": "あんぽんたん姉妹",
        "member": [
            2,
            6,
            25
        ]
    },
    {
        "name": "わるだ組",
        "member": [
            2,
            7,
            23
        ]
    },
    {
        "name": "ハッピーセット",
        "member": [
            2,
            9,
            12
        ]
    },
    {
        "name": "かなた建設",
        "member": [
            3,
            22,
            33
        ]
    },
    {
        "name": "かみなりおこし",
        "member": [
            4,
            16,
            17
        ]
    },
    {
        "name": "2Dシグナル",
        "member": [
            5,
            19,
            21
        ]
    },
    {
        "name": "Startend",
        "member": [
            5,
            10,
            24
        ]
    },
    {
        "name": "ねむい組",
        "member": [
            11,
            16,
            17
        ]
    },
    {
        "name": "ぴーかーぶぅ",
        "member": [
            7,
            9,
            27
        ]
    },
    {
        "name": "ちゃまたんなのら",
        "member": [
            7,
            22,
            25
        ]
    },
    {
        "name": "ぽてとりお",
        "member": [
            7,
            23,
            25
        ]
    },
    {
        "name": "いろはにほへっと あやふぶみ",
        "member": [
            8,
            12,
            15
        ]
    },
    {
        "name": "ぽいね",
        "member": [
            27,
            29,
            34
        ]
    },
    {
        "name": "山田ルイ54世",
        "member": [
            30,
            31,
            32
        ]
    },
    {
        "name": "お姉三姉妹",
        "member": [
            13,
            20,
            26
        ]
    },
    {
        "name": "かおかゆィ",
        "member": [
            16,
            22,
            26
        ]
    },
    {
        "name": "PEBOT",
        "member": [
            18,
            24,
            28
        ]
    },
    {
        "name": "スターアニマル",
        "member": [
            1,
            5,
            14,
            29,
            32,
            33
        ]
    },
    {
        "name": "薔薇☆Dice",
        "member": [
            19,
            20,
            21,
            27,
            31,
            34
        ]
    },
    {
        "name": "不知火建設",
        "member": [
            4,
            5,
            19,
            20,
            29
        ]
    },
    {
        "name": "ホロ酒呑み組",
        "member": [
            6,
            20,
            26,
            31
        ]
    },
    {
        "name": "FAMS",
        "member": [
            8,
            12,
            14,
            15
        ]
    },
    {
        "name": "バカタレサーカス",
        "member": [
            8,
            19,
            23,
            29
        ]
    },
    {
        "name": "スバちょこるなたん",
        "member": [
            13,
            14,
            25,
            28
        ]
    },
    {
        "name": "SMOK",
        "member": [
            14,
            15,
            16,
            17
        ]
    }
]