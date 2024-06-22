/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var ROI = ee.FeatureCollection("projects/ee-paramsrivastavaciv21/assets/Study_Site"),
    imageVisParam = {"opacity":1,"bands":["SR_B3","SR_B2","SR_B1"],"min":8304.46,"max":12838.54,"gamma":1},
    Urban = 
    /* color: #d63000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.83643840035053, 19.075073087907075]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83163188179584, 19.073775197596067]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84124491890522, 19.117897761311244]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84467814644428, 19.11205868581069]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84742472847553, 19.101677598022075]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8460514374599, 19.093891354670728]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83300517281147, 19.06274271956695]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83094523628803, 19.057550711157567]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83712504585834, 19.140603315903974]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87145732124897, 19.099082224279044]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85429118355366, 19.10297526962626]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86047099312397, 19.119844073978253]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8350651093349, 19.13281890593248]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8460514374599, 19.17854705583191]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84742472847553, 19.175952890216735]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84845469673725, 19.17173728397375]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84330485542866, 19.173358683753904]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84433482369037, 19.17173728397375]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84845469673725, 19.16103564537332]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84742472847553, 19.15617103455477]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83403514107319, 19.056577191484863]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83609507759662, 19.055279156366367]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83128855904194, 19.05430562336163]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82579539497944, 19.046192626160916]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82751200874897, 19.055279156366367]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84193156441303, 19.032886452225345]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84433482369037, 19.029965442057204]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84261820992084, 19.0296408822011]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86356089790912, 19.099082224279044]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86527751167866, 19.09746009501682]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8680240937099, 19.095513518913197]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87077067574116, 19.121465983692588]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86974070747944, 19.11854653474678]),
            {
              "Class": 1,
              "system:index": "32"
            })]),
    Water = 
    /* color: #160bff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.95044619388337, 19.299152609997666]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9525061304068, 19.296884384136074]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94769961185212, 19.296884384136074]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95353609866852, 19.29558824095594]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9466696435904, 19.29558824095594]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95662600345368, 19.29818051704991]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96074587650055, 19.29818051704991]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9634924585318, 19.296560349303483]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97001559085602, 19.293968047544663]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96692568607087, 19.29494016551618]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9689856225943, 19.292671881267452]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97379214114899, 19.290079517920407]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97653872318024, 19.288783320851728]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98134524173493, 19.287487113520367]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98271853275055, 19.284894668072]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98477846927399, 19.283598429956122]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98752505130524, 19.28100592294397]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98924166507477, 19.27841337489513]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98752505130524, 19.277117085483397]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98992831058258, 19.27322815570599]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99130160159821, 19.270311397799475]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99130160159821, 19.267718680523508]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99885470218415, 19.249892639268722]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0016012842154, 19.24535479215797]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00057131595368, 19.2411409646286]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00228792972321, 19.23530625562567]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0019446069693, 19.233037146129096]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([73.01945406741852, 19.21099273701573]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02185732669587, 19.20742645183812]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02185732669587, 19.204508524625055]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02494723148102, 19.19996942385375]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02632052249665, 19.199320970663113]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03078371829743, 19.198348286085395]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03765017337555, 19.198672514916847]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03353030032868, 19.198348286085395]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([73.04245669193024, 19.198348286085395]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25683332072616, 19.582074895898348]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25786328898788, 19.58013408956282]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25854993449569, 19.57786978594977]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25820661174178, 19.574311530258694]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25854993449569, 19.57140017170132]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26026654826522, 19.566871287185396]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26266980754257, 19.562989284896815]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25854993449569, 19.56137175635629]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25443006144882, 19.5694592367767]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25099683390975, 19.580457558909362]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26163983928085, 19.580781027606335]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26266980754257, 19.578516733086836]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26369977580428, 19.576252406741027]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26404309855819, 19.574958491683834]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26507306681991, 19.5726941153315]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26541638957382, 19.571723658582876]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26644635783553, 19.566547790565007]),
            {
              "Class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26678968058944, 19.564606797210253]),
            {
              "Class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25202680217147, 19.578516733086836]),
            {
              "Class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26198316203475, 19.560401231443418]),
            {
              "Class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26541638957382, 19.558136650598414]),
            {
              "Class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26610303508163, 19.556842590124198]),
            {
              "Class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26232648478866, 19.55457795931151]),
            {
              "Class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2698795853746, 19.557166106216144]),
            {
              "Class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26747632609725, 19.552313296705197]),
            {
              "Class": 2,
              "system:index": "60"
            })]),
    Bareland = 
    /* color: #67531e */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([73.36259823612755, 19.545254159710794]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37152462772912, 19.542018730742928]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36259823612755, 19.53748902124197]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35023861698693, 19.534253436649323]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([73.33925228886193, 19.533606311951097]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([73.30903988651818, 19.642933516863234]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([73.30217343144005, 19.6461669179877]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2939336853463, 19.647460260198855]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([73.29187374882287, 19.6461669179877]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2994268494088, 19.640346749069028]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([73.29462033085412, 19.640346749069028]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35161190800255, 19.648106927395858]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35710507206505, 19.65069357012508]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36397152714318, 19.652633524808245]),
            {
              "Class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36053829960412, 19.65069357012508]),
            {
              "Class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4147832947213, 19.6461669179877]),
            {
              "Class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([73.41341000370568, 19.633879647247415]),
            {
              "Class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4037969665963, 19.640346749069028]),
            {
              "Class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([73.40723019413537, 19.62999926114698]),
            {
              "Class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([73.40791683964318, 19.62288497651922]),
            {
              "Class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4037969665963, 19.621591436381408]),
            {
              "Class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39693051151818, 19.612536363928687]),
            {
              "Class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39487057499474, 19.59959966155818]),
            {
              "Class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3818243103463, 19.591837140819745]),
            {
              "Class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37701779179162, 19.586661919022543]),
            {
              "Class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37770443729943, 19.580192657872814]),
            {
              "Class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37289791874474, 19.578251828858704]),
            {
              "Class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3763311462838, 19.570488278998447]),
            {
              "Class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([73.40173703007287, 19.577604880657827]),
            {
              "Class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39555722050255, 19.579545717466278]),
            {
              "Class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39006405644005, 19.58860264669078]),
            {
              "Class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([73.38045101933068, 19.565312371310196]),
            {
              "Class": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37015133671349, 19.569194317657974]),
            {
              "Class": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36603146366662, 19.562724355145505]),
            {
              "Class": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([73.51778012089318, 19.52066327353991]),
            {
              "Class": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([73.51640682987755, 19.51354416050607]),
            {
              "Class": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([73.51022702030724, 19.51354416050607]),
            {
              "Class": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([73.50748043827599, 19.512896952865706]),
            {
              "Class": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([73.50542050175255, 19.509660875804038]),
            {
              "Class": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([73.50748043827599, 19.50901365262024]),
            {
              "Class": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([73.53288632206505, 19.51483856801426]),
            {
              "Class": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([73.5301397400338, 19.514191365555604]),
            {
              "Class": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([73.52807980351037, 19.51354416050607]),
            {
              "Class": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([73.52395993046349, 19.51354416050607]),
            {
              "Class": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([73.52258663944787, 19.60348078151288]),
            {
              "Class": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([73.52670651249474, 19.59765906647429]),
            {
              "Class": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([73.52670651249474, 19.591837140819745]),
            {
              "Class": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([73.51846676640099, 19.602187085263928]),
            {
              "Class": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([73.53837948612755, 19.50513025912335]),
            {
              "Class": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([73.54318600468224, 19.500599515538333]),
            {
              "Class": 3,
              "system:index": "49"
            })]),
    Vegetation = 
    /* color: #1eff22 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([73.03163510136193, 19.654573456034598]),
            {
              "Class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03077286267563, 19.6461669179877]),
            {
              "Class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03214615369126, 19.640346749069028]),
            {
              "Class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03214615369126, 19.633232922740824]),
            {
              "Class": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([73.05343216443345, 19.692720667029874]),
            {
              "Class": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([73.04793900037095, 19.72439534159667]),
            {
              "Class": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([73.04381912732407, 19.716638858483496]),
            {
              "Class": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89893692517563, 19.615770376928026]),
            {
              "Class": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2264668324022, 19.646813590396103]),
            {
              "Class": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2209736683397, 19.65069357012508]),
            {
              "Class": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([73.21479385876938, 19.646813590396103]),
            {
              "Class": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([73.12896317029282, 19.718578014547763]),
            {
              "Class": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([73.14132278943345, 19.723748982380716]),
            {
              "Class": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([73.13514297986313, 19.71987077218923]),
            {
              "Class": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([73.13239639783188, 19.717285246451752]),
            {
              "Class": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([73.1275898792772, 19.707589152551467]),
            {
              "Class": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98888748669907, 19.59895279913054]),
            {
              "Class": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98957413220688, 19.594424689331493]),
            {
              "Class": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99232071423813, 19.591837140819745]),
            {
              "Class": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99506729626938, 19.58924955071524]),
            {
              "Class": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([73.62608852106656, 19.35273690054203]),
            {
              "Class": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([73.62471523005094, 19.34107522844346]),
            {
              "Class": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([73.61922206598844, 19.334596161680214]),
            {
              "Class": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([73.66179408747281, 19.325525036332337]),
            {
              "Class": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([73.64531459528531, 19.33070859821887]),
            {
              "Class": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([73.63844814020719, 19.33718781923926]),
            {
              "Class": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([73.66042079645719, 19.319045352697458]),
            {
              "Class": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([73.66866054255094, 19.32034130997926]),
            {
              "Class": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([73.50386562067594, 19.232192834680678]),
            {
              "Class": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([73.52995814997281, 19.234786113450134]),
            {
              "Class": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([73.51622523981656, 19.232192834680678]),
            {
              "Class": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([73.59175624567594, 19.26071664792763]),
            {
              "Class": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58900966364469, 19.241269131191626]),
            {
              "Class": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58626308161344, 19.229599514962292]),
            {
              "Class": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25529994684781, 19.360510885522537]),
            {
              "Class": 4,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25804652887906, 19.356623939351266]),
            {
              "Class": 4,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([73.23607387262906, 19.368284499888517]),
            {
              "Class": 4,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([73.24019374567594, 19.364397739040186]),
            {
              "Class": 4,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([73.24568690973844, 19.355328270040506]),
            {
              "Class": 4,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([73.28413905817594, 19.43434524072311]),
            {
              "Class": 4,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([73.29174791081873, 19.424614582577494]),
            {
              "Class": 4,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([73.30960069402185, 19.415548467870554]),
            {
              "Class": 4,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([73.30410752995935, 19.405186574761508]),
            {
              "Class": 4,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2738951276156, 19.295050749872765]),
            {
              "Class": 4,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2903746198031, 19.29375459217005]),
            {
              "Class": 4,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([73.30273423894373, 19.29375459217005]),
            {
              "Class": 4,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3178404401156, 19.301531384392444]),
            {
              "Class": 4,
              "system:index": "46"
            })]),
    Forest = 
    /* color: #001c1c */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.9168394635531, 19.436270272448382]),
            {
              "Class": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9168394635531, 19.42979499244742]),
            {
              "Class": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90722642644373, 19.420729166775686]),
            {
              "Class": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90722642644373, 19.418138837964438]),
            {
              "Class": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90859971745935, 19.415548467870554]),
            {
              "Class": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90859971745935, 19.415548467870554]),
            {
              "Class": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9223326276156, 19.425909700531744]),
            {
              "Class": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93057237370935, 19.425909700531744]),
            {
              "Class": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91409288152185, 19.41425326734408]),
            {
              "Class": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91409288152185, 19.400005380631796]),
            {
              "Class": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([73.01708970769373, 19.43497523710341]),
            {
              "Class": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02395616277185, 19.423319454299662]),
            {
              "Class": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([73.01296983464685, 19.425909700531744]),
            {
              "Class": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99649034245935, 19.44404026759379]),
            {
              "Class": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00335679753748, 19.431090069101668]),
            {
              "Class": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9223326276156, 19.257458011072654]),
            {
              "Class": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91958604558435, 19.24449299849848]),
            {
              "Class": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91958604558435, 19.235416880217468]),
            {
              "Class": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91821275456873, 19.218559901104424]),
            {
              "Class": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92645250066248, 19.21337279038359]),
            {
              "Class": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91958604558435, 19.19781047640925]),
            {
              "Class": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90447984441248, 19.20429495283721]),
            {
              "Class": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89212022527185, 19.217263138769415]),
            {
              "Class": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89761338933435, 19.230230301650224]),
            {
              "Class": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89212022527185, 19.19262271127173]),
            {
              "Class": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89349351628748, 19.164087081263194]),
            {
              "Class": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90859971745935, 19.171870015988016]),
            {
              "Class": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9223326276156, 19.184840756994475]),
            {
              "Class": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90997300847498, 19.82689572447925]),
            {
              "Class": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89761338933435, 19.81914422787]),
            {
              "Class": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88662706120935, 19.815268337819987]),
            {
              "Class": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87152086003748, 19.820436170222596]),
            {
              "Class": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90859971745935, 19.804932169177533]),
            {
              "Class": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91958604558435, 19.79588747073349]),
            {
              "Class": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([73.06790147527185, 19.914719565366983]),
            {
              "Class": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([73.06790147527185, 19.909554804615986]),
            {
              "Class": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81666704123637, 20.067482680205234]),
            {
              "Class": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81529375022075, 20.064902824316157]),
            {
              "Class": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80842729514262, 20.054582976508236]),
            {
              "Class": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80430742209575, 20.054582976508236]),
            {
              "Class": 5,
              "system:index": "39"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
Map.addLayer(ROI)
Map.centerObject(ROI,10)

var l8 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')

var image=l8.filterBounds(ROI)
            .filterDate('1998-11-01','1999-02-02')
            .filterMetadata('CLOUD_COVER','less_than',1)
            .median()
            .clip(ROI)
Map.addLayer(image,imageVisParam,'before')
var samples = Urban.merge(Water).merge(Bareland).merge(Vegetation).merge(Forest)

var bands= ['SR_B1','SR_B2','SR_B3','SR_B4','SR_B5','SR_B7']

var training = image.select(bands).sampleRegions({
  collection:samples ,
  properties:['Class'] ,
  scale:30})

var trainData= training.randomColumn()

var trainset=trainData.filter(ee.Filter.lessThan('random',0.8))
var testSet= trainData.filter(ee.Filter.greaterThanOrEquals('random',0.8))

var classifier= ee.Classifier.smileCart().train({
  features:trainset,
  classProperty: 'Class',
  inputProperties:bands})

var classified=image.select(bands).classify(classifier)

Map.addLayer(classified ,{min:1 , max:5 , palette:['red','blue','yellow','green','black']})

// Calculate area of each land cover class
var areaDict = classified.reduceRegion({
  reducer: ee.Reducer.frequencyHistogram().unweighted(),
  geometry: ROI,
  scale: 30,
  maxPixels: 1e9
});

// Extract the histogram dictionary
var histogram = ee.Dictionary(areaDict.get('classification'));

// Get area for each class
var waterArea = ee.Number(histogram.get('2')).multiply(900); // Assuming each pixel is 30x30 meters
var vegetationArea = ee.Number(histogram.get('4')).multiply(900);
var forestArea = ee.Number(histogram.get('5')).multiply(900);
var urbanArea = ee.Number(histogram.get('1')).multiply(900);
var barelandArea = ee.Number(histogram.get('3')).multiply(900);

// Print area for each class
print('Water Area (sq. meters):', waterArea);
print('Vegetation Area (sq. meters):', vegetationArea);
print('Forest Area (sq. meters):', forestArea);
print('Urban Area (sq. meters):', urbanArea);
print('Bareland Area (sq. meters):', barelandArea);
// Alternatively, you can compute the total area by summing all classes
var totalArea = waterArea.add(vegetationArea).add(forestArea).add(urbanArea).add(barelandArea);
print('Total Area (sq. meters):', totalArea);
Export.image.toDrive({
  image: classified,
  description: 'classified_image',
  folder: 'LULC LandSat',
  fileNamePrefix: 'LULC_1998_1999',
  region: ROI,
  scale: 30
});