/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var ROI = ee.FeatureCollection("projects/ee-paramsrivastavaciv21/assets/Study_Site"),
    imageVisParam = {"opacity":1,"bands":["SR_B3","SR_B2","SR_B1"],"min":8748.77,"max":12241.73,"gamma":1},
    Urban = 
    /* color: #d63000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.81934851825037, 19.00126841694333]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82175177752771, 18.999645331193673]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82415503680505, 18.9980222296123]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82518500506677, 18.997372984547145]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8269016188363, 18.995425234155046]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82758826434412, 18.993152829889482]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82827490985193, 18.99120503011429]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82827490985193, 18.990231121680683]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81728858172693, 18.967180293070097]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82003516375818, 18.963608752660846]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82278174578943, 18.962959373457764]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8214084547738, 18.96166060746493]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81660193621912, 18.961335914386204]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8159152907113, 18.96068652633224]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8159152907113, 18.957439548133912]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82037848651208, 18.955816035331434]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83617133319177, 19.018147569955133]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8430377882699, 19.018147569955133]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84200782000818, 19.017498403443685]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84235114276208, 19.030805810121542]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84750098407068, 19.028533889305773]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84956092059412, 19.0226916645465]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84235114276208, 19.02626193741983]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84235114276208, 19.028533889305773]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82930487811365, 19.06131144950594]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83342475116052, 19.05936444859695]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82896155535974, 19.056443904374508]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82861823260583, 19.053198794925724]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82758826434412, 19.052549765418284]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82758826434412, 19.07266849912414]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83342475116052, 19.07201954582247]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83067816912927, 19.07234402279097]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8323947828988, 19.070721631595465]),
            {
              "Class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8378879469613, 19.07526428691678]),
            {
              "Class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83617133319177, 19.07234402279097]),
            {
              "Class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83514136493005, 19.069099224518023]),
            {
              "Class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94581958440844, 19.162983658149653]),
            {
              "Class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94204303411547, 19.16038924755344]),
            {
              "Class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93929645208422, 19.159092026947683]),
            {
              "Class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93757983831469, 19.157470486840737]),
            {
              "Class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93414661077563, 19.157146176906146]),
            {
              "Class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93483325628344, 19.152605770865897]),
            {
              "Class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93654987005297, 19.150984166993396]),
            {
              "Class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94066974309985, 19.149362547182374]),
            {
              "Class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84385272649828, 19.198652661995652]),
            {
              "Class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84316608099047, 19.19378916185933]),
            {
              "Class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84007617620532, 19.192167963208373]),
            {
              "Class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84007617620532, 19.184710243769835]),
            {
              "Class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84556934026782, 19.183737472852588]),
            {
              "Class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8445393720061, 19.18892551800501]),
            {
              "Class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84007617620532, 19.181791913779822]),
            {
              "Class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84144946722094, 19.177252186569497]),
            {
              "Class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83973285345141, 19.17336089224498]),
            {
              "Class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85140582708422, 19.17336089224498]),
            {
              "Class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84659930852953, 19.176279371604544]),
            {
              "Class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83217975286547, 19.14190289079574]),
            {
              "Class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83629962591235, 19.13833510986642]),
            {
              "Class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8390462079436, 19.13963249367103]),
            {
              "Class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83561298040453, 19.13574031167289]),
            {
              "Class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83217975286547, 19.134442897285147]),
            {
              "Class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86218528017864, 19.245899925964977]),
            {
              "Class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86424521670207, 19.243306822747304]),
            {
              "Class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86218528017864, 19.240065386113223]),
            {
              "Class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85943869814739, 19.234230638885816]),
            {
              "Class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85600547060832, 19.232285677069054]),
            {
              "Class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8546321795927, 19.232285677069054]),
            {
              "Class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85257224306926, 19.231637351344727]),
            {
              "Class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85257224306926, 19.228395684335922]),
            {
              "Class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85806540713176, 19.227747343257214]),
            {
              "Class": 1,
              "system:index": "68"
            })]),
    Water = 
    /* color: #0f25ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.95756162061895, 19.297658192113246]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96271146192754, 19.29798222477188]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96305478468145, 19.29668609028738]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96854794874395, 19.295713982686774]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96648801222051, 19.295713982686774]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97026456251348, 19.293121667521607]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97404111280645, 19.292473582314745]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9771310175916, 19.292149538749012]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97816098585332, 19.28988121582722]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97541440382207, 19.28988121582722]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97953427686895, 19.289233117790676]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98399747266973, 19.287936914020516]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97953427686895, 19.286964754458257]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98159421339238, 19.285020418017083]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98434079542363, 19.28437230073943]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98605740919317, 19.283076058488707]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98983395948613, 19.279835407975213]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9877740229627, 19.279835407975213]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98914731397832, 19.275946542725993]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98914731397832, 19.274974311989293]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98983395948613, 19.273029833208387]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99052060499395, 19.270113071771863]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9932671870252, 19.26589988027323]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99120725050176, 19.266548070629725]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98949063673223, 19.266548070629725]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99189389600957, 19.261362476015098]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99189389600957, 19.261362476015098]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99395383253301, 19.25682494619022]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99738706007207, 19.25261141322692]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.99807370557988, 19.2516390440958]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00047696485723, 19.24742537793195]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00047696485723, 19.244184022637068]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00185025587285, 19.24159089230893]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00185025587285, 19.237376968155317]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00253690138067, 19.23283877503563]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00253690138067, 19.23154212539449]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0045968379041, 19.22765211505177]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00528348341192, 19.224086191315273]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([73.00803006544317, 19.22019600442938]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([73.01352322950567, 19.217926686218888]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([73.01592648878301, 19.21598153138644]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0207330073377, 19.21209115267146]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([73.07429135694707, 19.236728662531586]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([73.07978452100957, 19.24029431178236]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([73.08459103956426, 19.240618457874113]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([73.08871091261113, 19.23867357172302]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([73.09145749464238, 19.23770112000722]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([73.09420407667363, 19.23608035434806]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([73.10038388624395, 19.232190451494706]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25822499678104, 19.58148715978391]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26062825605838, 19.5776055095658]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2613149015662, 19.575988127703997]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26406148359744, 19.56919494659877]),
            {
              "Class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26234486982791, 19.56919494659877]),
            {
              "Class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25925496504276, 19.567577480321276]),
            {
              "Class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25994161055057, 19.56434249907653]),
            {
              "Class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2613149015662, 19.5614309604561]),
            {
              "Class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26268819258182, 19.560783944734123]),
            {
              "Class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26474812910526, 19.56013692641602]),
            {
              "Class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26612142012088, 19.55981341628347]),
            {
              "Class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26852467939823, 19.56660699276417]),
            {
              "Class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25410512373416, 19.583104486434376]),
            {
              "Class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2558217375037, 19.57954634636667]),
            {
              "Class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25788167402713, 19.576635082397136]),
            {
              "Class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26646474287479, 19.55722531185995]),
            {
              "Class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26646474287479, 19.553990122928]),
            {
              "Class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([73.27367452070682, 19.553666600466062]),
            {
              "Class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([73.27058461592166, 19.554960686420745]),
            {
              "Class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([73.418280244964, 19.528165544484896]),
            {
              "Class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42171347250306, 19.52557693257313]),
            {
              "Class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42343008627259, 19.52363544642131]),
            {
              "Class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42549002279603, 19.51942881306855]),
            {
              "Class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42274344076478, 19.518458035976007]),
            {
              "Class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4237734090265, 19.513927665788096]),
            {
              "Class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([73.43338644613587, 19.509397168647755]),
            {
              "Class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42720663656556, 19.510691609355035]),
            {
              "Class": 2,
              "system:index": "75"
            })]),
    Bareland = 
    /* color: #554e0d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([73.38281017214953, 19.592903655454705]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([73.38590007693469, 19.59031608249292]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39139324099719, 19.588698828271546]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3862433996886, 19.587081557805185]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([73.38246684939563, 19.585464271094953]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([73.38384014041125, 19.584493891272217]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([73.38727336795031, 19.582553114085563]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([73.38864665896594, 19.582876578574144]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39001994998156, 19.579641904456253]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39036327273547, 19.5786714895543]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3807502356261, 19.57834801662126]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37800365359485, 19.578024543038712]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37354045779406, 19.57381932736409]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37354045779406, 19.569614001943286]),
            {
              "Class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37594371707141, 19.562820552175587]),
            {
              "Class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36083751589953, 19.573495844689315]),
            {
              "Class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37491374880969, 19.590962979632614]),
            {
              "Class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37972026736438, 19.590962979632614]),
            {
              "Class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37491374880969, 19.589022280415463]),
            {
              "Class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37148052127063, 19.587728467941055]),
            {
              "Class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3752570715636, 19.587728467941055]),
            {
              "Class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37285381228625, 19.585464271094953]),
            {
              "Class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46589427859485, 19.6459397281447]),
            {
              "Class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46967082888781, 19.640766247759842]),
            {
              "Class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46726756961047, 19.633005714595]),
            {
              "Class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([73.47241741091906, 19.63559260065549]),
            {
              "Class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([73.47138744265735, 19.633329077631267]),
            {
              "Class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45593791873156, 19.641412941926177]),
            {
              "Class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45902782351672, 19.64529305221532]),
            {
              "Class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4631476965636, 19.64529305221532]),
            {
              "Class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45525127322375, 19.63785609177559]),
            {
              "Class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([73.457997855255, 19.632035621580044]),
            {
              "Class": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46211772830188, 19.630418786868454]),
            {
              "Class": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45696788699328, 19.625244806435553]),
            {
              "Class": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46246105105578, 19.644646373680455]),
            {
              "Class": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46074443728625, 19.6430296659447]),
            {
              "Class": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46417766482531, 19.642706322443576]),
            {
              "Class": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([73.44975810916125, 19.626538317164812]),
            {
              "Class": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45284801394641, 19.623951285293238]),
            {
              "Class": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45628124148547, 19.622981137603272]),
            {
              "Class": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46829753787219, 19.627185068624375]),
            {
              "Class": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46143108279406, 19.625244806435553]),
            {
              "Class": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4576545325011, 19.658872699467565]),
            {
              "Class": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4631476965636, 19.656609504747067]),
            {
              "Class": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46108776004016, 19.656609504747067]),
            {
              "Class": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4741340246886, 19.65272966807831]),
            {
              "Class": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4741340246886, 19.646909737153308]),
            {
              "Class": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([73.47104411990344, 19.65337631403932]),
            {
              "Class": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([73.47928386599719, 19.640442899699792]),
            {
              "Class": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([73.47619396121203, 19.638826149631168]),
            {
              "Class": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([73.47619396121203, 19.633005714595]),
            {
              "Class": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([73.47379070193469, 19.630095417973227]),
            {
              "Class": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58136143463149, 19.462482209039987]),
            {
              "Class": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58101811187758, 19.456979126466386]),
            {
              "Class": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57483830230727, 19.457950272255186]),
            {
              "Class": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57689823883071, 19.45665540991119]),
            {
              "Class": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58307804840102, 19.456331692709867]),
            {
              "Class": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57483830230727, 19.469279876701357]),
            {
              "Class": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58033146636977, 19.475429901786157]),
            {
              "Class": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57792820709243, 19.46701401915382]),
            {
              "Class": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57209172027602, 19.466690322632758]),
            {
              "Class": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57930149810805, 19.456979126466386]),
            {
              "Class": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57724156158461, 19.45277076085421]),
            {
              "Class": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57312168853774, 19.452447035900185]),
            {
              "Class": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([73.5762115933229, 19.46863249206285]),
            {
              "Class": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([73.5545822598268, 19.497438604675192]),
            {
              "Class": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([73.5545822598268, 19.493231289841646]),
            {
              "Class": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([73.55698551910415, 19.491289415338017]),
            {
              "Class": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([73.55938877838149, 19.489994819393797]),
            {
              "Class": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([73.55870213287368, 19.48675828424107]),
            {
              "Class": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([73.55046238677993, 19.48902386564158]),
            {
              "Class": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([73.55286564605727, 19.48902386564158]),
            {
              "Class": 3,
              "system:index": "71"
            })]),
    Vegetation = 
    /* color: #6cff1c */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([73.59372105377211, 19.415214359659902]),
            {
              "Class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([73.59337773101821, 19.41262394296434]),
            {
              "Class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([73.5926910855104, 19.40970967484823]),
            {
              "Class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([73.59063114898696, 19.411976332341403]),
            {
              "Class": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58857121246352, 19.413271551007725]),
            {
              "Class": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58548130767836, 19.41230013797531]),
            {
              "Class": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58479466217055, 19.414242958236006]),
            {
              "Class": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57792820709243, 19.420718858078327]),
            {
              "Class": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([73.58067478912368, 19.419423698751167]),
            {
              "Class": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57380833404555, 19.412947747308483]),
            {
              "Class": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57552494781508, 19.40938586405563]),
            {
              "Class": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([73.5765549160768, 19.406471537907446]),
            {
              "Class": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57140507476821, 19.404528624796093]),
            {
              "Class": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([73.57209172027602, 19.401614211615097]),
            {
              "Class": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([73.65208592193618, 19.432374827471715]),
            {
              "Class": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([73.64968266265883, 19.43043222398427]),
            {
              "Class": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([73.65551914947524, 19.434317407723352]),
            {
              "Class": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([73.6589523770143, 19.434317407723352]),
            {
              "Class": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([73.66375889556899, 19.433669883554685]),
            {
              "Class": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([73.66856541412368, 19.432374827471715]),
            {
              "Class": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([73.66856541412368, 19.42978468432528]),
            {
              "Class": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([73.66856541412368, 19.426223170059046]),
            {
              "Class": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([73.66787876861586, 19.42363292882443]),
            {
              "Class": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([73.66307225006118, 19.420718858078327]),
            {
              "Class": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([73.67680516021743, 19.425251834435326]),
            {
              "Class": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([73.67852177398696, 19.422661577715495]),
            {
              "Class": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([73.68195500152602, 19.417480940408304]),
            {
              "Class": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([73.68573155181899, 19.413271551007725]),
            {
              "Class": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([73.40970005767836, 19.427194499875363]),
            {
              "Class": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([73.41450657623305, 19.423309145766634]),
            {
              "Class": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([73.41931309478774, 19.423956711237043]),
            {
              "Class": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42377629058852, 19.42848959726297]),
            {
              "Class": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42343296783461, 19.43496492931005]),
            {
              "Class": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42549290435805, 19.436259964737225]),
            {
              "Class": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42755284088149, 19.4372312345294]),
            {
              "Class": 4,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42961277740493, 19.436583721980174]),
            {
              "Class": 4,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([73.42892613189711, 19.433669883554685]),
            {
              "Class": 4,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35511173980727, 19.406795354502894]),
            {
              "Class": 4,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35579838531508, 19.404528624796093]),
            {
              "Class": 4,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3564850308229, 19.40226186350094]),
            {
              "Class": 4,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35957493560805, 19.404528624796093]),
            {
              "Class": 4,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36163487213149, 19.40226186350094]),
            {
              "Class": 4,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36438145416274, 19.399995070620534]),
            {
              "Class": 4,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39253391998305, 19.392546814523254]),
            {
              "Class": 4,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39665379302993, 19.390603735132782]),
            {
              "Class": 4,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39940037506118, 19.39319450249891]),
            {
              "Class": 4,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([73.39322056549086, 19.38930833598694]),
            {
              "Class": 4,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35893257747736, 19.491936709427662]),
            {
              "Class": 4,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36339577327814, 19.49031846935044]),
            {
              "Class": 4,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36820229183283, 19.488052906066166]),
            {
              "Class": 4,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3668290008172, 19.486434627167387]),
            {
              "Class": 4,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36442574153986, 19.486434627167387]),
            {
              "Class": 4,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37163551937189, 19.48611096944674]),
            {
              "Class": 4,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3558426726922, 19.491936709427662]),
            {
              "Class": 4,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35206612239924, 19.4954967806509]),
            {
              "Class": 4,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([73.24862723331198, 19.624779438537008]),
            {
              "Class": 4,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25618033389792, 19.621545606792957]),
            {
              "Class": 4,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2390141962026, 19.619605276511688]),
            {
              "Class": 4,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([73.23970084171042, 19.609903273787975]),
            {
              "Class": 4,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25206046085104, 19.61443094791748]),
            {
              "Class": 4,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2664800165151, 19.61443094791748]),
            {
              "Class": 4,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([73.24588065128073, 19.609256452791232]),
            {
              "Class": 4,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([73.22871451358542, 19.59826009787771]),
            {
              "Class": 4,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([73.21910147647604, 19.609256452791232]),
            {
              "Class": 4,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([73.23695425967917, 19.61443094791748]),
            {
              "Class": 4,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([73.23420767764792, 19.604081791169765]),
            {
              "Class": 4,
              "system:index": "65"
            })]),
    Forest = 
    /* color: #020f11 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.81982672894058, 19.66059128930283]),
            {
              "Class": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81982672894058, 19.651538415826508]),
            {
              "Class": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82257331097183, 19.643131718779493]),
            {
              "Class": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82188666546402, 19.636018015839728]),
            {
              "Class": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82394660198746, 19.62502349146822]),
            {
              "Class": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82669318401871, 19.617908986541764]),
            {
              "Class": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81914008343277, 19.60950052929031]),
            {
              "Class": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91217093448385, 19.24922321681572]),
            {
              "Class": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91903738956198, 19.247278432628843]),
            {
              "Class": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91903738956198, 19.24274051322768]),
            {
              "Class": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91423087100729, 19.24209222878496]),
            {
              "Class": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91148428897604, 19.24209222878496]),
            {
              "Class": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90530447940573, 19.239499065410605]),
            {
              "Class": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9039311883901, 19.236905861074163]),
            {
              "Class": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9039311883901, 19.233664298057818]),
            {
              "Class": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91423087100729, 19.2291260023391]),
            {
              "Class": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91217093448385, 19.2291260023391]),
            {
              "Class": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91835074405417, 19.225884285769666]),
            {
              "Class": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92178397159323, 19.2291260023391]),
            {
              "Class": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92727713565573, 19.246630166111103]),
            {
              "Class": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89569144229635, 19.225884285769666]),
            {
              "Class": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90255789737448, 19.22653263420104]),
            {
              "Class": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9149175165151, 19.433224795400456]),
            {
              "Class": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92521719913229, 19.439699938639095]),
            {
              "Class": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9204106805776, 19.426749393976664]),
            {
              "Class": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91217093448385, 19.426749393976664]),
            {
              "Class": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90324454288229, 19.428692041508942]),
            {
              "Class": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90736441592917, 19.42286402922365]),
            {
              "Class": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91423087100729, 19.41962615429307]),
            {
              "Class": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9259038446401, 19.420921312006808]),
            {
              "Class": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93551688174948, 19.421568886992993]),
            {
              "Class": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91629080753073, 19.417683398370183]),
            {
              "Class": 5,
              "system:index": "31"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
Map.addLayer(ROI)
Map.centerObject(ROI,10)

var l8 = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')

var image=l8.filterBounds(ROI)
            .filterDate('2008-11-01','2009-02-02')
            .filterMetadata('CLOUD_COVER','less_than',1)
            .median()
            .clip(ROI)
Map.addLayer(image, imageVisParam, 'before')
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
  fileNamePrefix: 'LULC_2008_2009',
  region: ROI,
  scale: 30
});