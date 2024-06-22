/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var ROI = ee.FeatureCollection("projects/ee-paramsrivastavaciv21/assets/Study_Site"),
    imageVisParam = {"opacity":1,"bands":["SR_B4","SR_B3","SR_B2"],"min":7940.24,"max":12487.76,"gamma":1},
    Urban = 
    /* color: #f23600 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.82545207222553, 18.960244451056102]),
            {
              "Class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82751200874897, 18.955698651831455]),
            {
              "Class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83094523628803, 18.95245157654093]),
            {
              "Class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82476542671772, 18.95245157654093]),
            {
              "Class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81377909859272, 18.955049241829247]),
            {
              "Class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81583903511616, 18.954399829299017]),
            {
              "Class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81995890816303, 18.95245157654093]),
            {
              "Class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8233921357021, 18.949853870808973]),
            {
              "Class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82751200874897, 18.949853870808973]),
            {
              "Class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81446574410053, 18.998554118833304]),
            {
              "Class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8233921357021, 19.007643254701804]),
            {
              "Class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8233921357021, 18.999852597214613]),
            {
              "Class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81927226265522, 18.997904875843194]),
            {
              "Class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81927226265522, 18.99660638226442]),
            {
              "Class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81927226265522, 18.99465862290097]),
            {
              "Class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81927226265522, 18.993360103996014]),
            {
              "Class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81927226265522, 18.988165927087593]),
            {
              "Class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84261820992084, 19.0141351905423]),
            {
              "Class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8350651093349, 19.012187636401293]),
            {
              "Class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83575175484272, 19.005695624533743]),
            {
              "Class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83781169136616, 18.99660638226442]),
            {
              "Class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83369181831928, 18.99465862290097]),
            {
              "Class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83025859078022, 18.99141230664604]),
            {
              "Class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83094523628803, 18.98167297809688]),
            {
              "Class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8398716278896, 18.960893840831485]),
            {
              "Class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8405582733974, 18.951802153899347]),
            {
              "Class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83918498238178, 18.945957236389482]),
            {
              "Class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8350651093349, 18.938813170358163]),
            {
              "Class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83643840035053, 18.930369789153477]),
            {
              "Class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83025859078022, 18.93231829962344]),
            {
              "Class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83849833687397, 19.10953735941518]),
            {
              "Class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84330485542866, 19.108239739291594]),
            {
              "Class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84399150093647, 19.103697988684527]),
            {
              "Class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83849833687397, 19.10240032274936]),
            {
              "Class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82682536324116, 19.101102646635432]),
            {
              "Class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83300517281147, 19.10434681783491]),
            {
              "Class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8350651093349, 19.085529739539712]),
            {
              "Class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8350651093349, 19.075146987723382]),
            {
              "Class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83575175484272, 19.065412566965854]),
            {
              "Class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83025859078022, 19.062167633008997]),
            {
              "Class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83025859078022, 19.056326591863833]),
            {
              "Class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8343784638271, 19.051783417648277]),
            {
              "Class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82476542671772, 19.0491872622376]),
            {
              "Class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8295719452724, 19.132244062851104]),
            {
              "Class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8350651093349, 19.127054234284998]),
            {
              "Class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82545207222553, 19.12640549424988]),
            {
              "Class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86047099312397, 19.10953735941518]),
            {
              "Class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8673374482021, 19.106942108986633]),
            {
              "Class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8735172577724, 19.108239739291594]),
            {
              "Class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8673374482021, 19.106293290016314]),
            {
              "Class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8405582733974, 19.1769995613824]),
            {
              "Class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8515446015224, 19.1769995613824]),
            {
              "Class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84124491890522, 19.17116257648395]),
            {
              "Class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84261820992084, 19.166622556401418]),
            {
              "Class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84261820992084, 19.162731011090266]),
            {
              "Class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84124491890522, 19.154947644922956]),
            {
              "Class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83575175484272, 19.153650381516425]),
            {
              "Class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83781169136616, 19.149109879257757]),
            {
              "Class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84124491890522, 19.14456925205133]),
            {
              "Class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84467814644428, 19.13743372834184]),
            {
              "Class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84879801949116, 19.07449804412807]),
            {
              "Class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84742472847553, 19.06800846840261]),
            {
              "Class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89823649605366, 19.013486008363238]),
            {
              "Class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89892314156147, 19.011538446618527]),
            {
              "Class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9009830780849, 19.00699404717966]),
            {
              "Class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8845035858974, 19.108239739291594]),
            {
              "Class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88244364937397, 19.105644468500877]),
            {
              "Class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85978434761616, 19.023872619021578]),
            {
              "Class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85909770210834, 19.01738106341544]),
            {
              "Class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85429118355366, 19.009590862064048]),
            {
              "Class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85291789253803, 19.0030987488374]),
            {
              "Class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85017131050678, 18.999203359290473]),
            {
              "Class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84327230296145, 19.210411476980862]),
            {
              "Class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84807882151614, 19.214950289568048]),
            {
              "Class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85494527659426, 19.22273081959222]),
            {
              "Class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84876546702395, 19.214950289568048]),
            {
              "Class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8405257209302, 19.233104286556117]),
            {
              "Class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8350325568677, 19.204575676707115]),
            {
              "Class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84121236643801, 19.20327880408175]),
            {
              "Class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85487322432519, 19.292216264793613]),
            {
              "Class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86311297041894, 19.292216264793613]),
            {
              "Class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86791948897363, 19.28962389423098]),
            {
              "Class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86517290694238, 19.288327693554805]),
            {
              "Class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8610530338955, 19.284439029953845]),
            {
              "Class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8610530338955, 19.28249466352247]),
            {
              "Class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86791948897363, 19.283790910375135]),
            {
              "Class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87478594405175, 19.281198406409956]),
            {
              "Class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87821917159081, 19.274068808922497]),
            {
              "Class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86791948897363, 19.276661425728324]),
            {
              "Class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76221595633604, 19.691995139365797]),
            {
              "Class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76530586112119, 19.693368922282303]),
            {
              "Class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76401840079404, 19.69256081611212]),
            {
              "Class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76333175528623, 19.69175270586264]),
            {
              "Class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76290260184385, 19.69110621472606]),
            {
              "Class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76204429495908, 19.69054053284005]),
            {
              "Class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76530586112119, 19.69660130616736]),
            {
              "Class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76461921561338, 19.69595483461246]),
            {
              "Class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76384673941709, 19.695308360446415]),
            {
              "Class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76187263358213, 19.68811615926251]),
            {
              "Class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76255927908994, 19.68843941119376]),
            {
              "Class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76110015738584, 19.691187026260895]),
            {
              "Class": 1,
              "system:index": "100"
            })]),
    Water = 
    /* color: #0d0dff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.80261331643659, 19.32193652704263]),
            {
              "Class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80450159158308, 19.320154600524532]),
            {
              "Class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8055315598448, 19.31885864176218]),
            {
              "Class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80621820535261, 19.31788666594663]),
            {
              "Class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8055315598448, 19.316266693409545]),
            {
              "Class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80535989846784, 19.314808704399354]),
            {
              "Class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80535989846784, 19.314322705172927]),
            {
              "Class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80604654397565, 19.312702697316986]),
            {
              "Class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80793481912214, 19.310434659351255]),
            {
              "Class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81171136941511, 19.316914684351]),
            {
              "Class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80896478738386, 19.316914684351]),
            {
              "Class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80982309426862, 19.31561869989932]),
            {
              "Class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81256967629987, 19.31383670450169]),
            {
              "Class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8165178879698, 19.313026700172397]),
            {
              "Class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81222635354597, 19.312540695648515]),
            {
              "Class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80965143289167, 19.311406679474626]),
            {
              "Class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8110247239073, 19.310434659351255]),
            {
              "Class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81514459695417, 19.310434659351255]),
            {
              "Class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81531625833112, 19.317562672723646]),
            {
              "Class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81377130593854, 19.32193652704263]),
            {
              "Class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81720453347761, 19.321774534525723]),
            {
              "Class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81926447000104, 19.32080257605196]),
            {
              "Class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81909280862409, 19.31918263241618]),
            {
              "Class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81771951760847, 19.3182106585274]),
            {
              "Class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81874948587019, 19.316914684351]),
            {
              "Class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82012277688581, 19.31561869989932]),
            {
              "Class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82012277688581, 19.314484705075607]),
            {
              "Class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81840616311628, 19.311568682266724]),
            {
              "Class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81995111550886, 19.310920670135232]),
            {
              "Class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82286935891706, 19.314484705075607]),
            {
              "Class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82218271340925, 19.31966861719291]),
            {
              "Class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82338434304792, 19.322098519398974]),
            {
              "Class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82166772927839, 19.32388042471956]),
            {
              "Class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82389932717878, 19.32161254184822]),
            {
              "Class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82475763406354, 19.32047858860939]),
            {
              "Class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82613092507917, 19.317562672723646]),
            {
              "Class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82613092507917, 19.314322705172927]),
            {
              "Class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82441431130964, 19.312864698824956]),
            {
              "Class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83025079812604, 19.31723867885843]),
            {
              "Class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8275042160948, 19.32323246139676]),
            {
              "Class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82836252297956, 19.320154600524532]),
            {
              "Class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82853418435651, 19.31788666594663]),
            {
              "Class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83231073464948, 19.32290847877179]),
            {
              "Class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83351236428815, 19.321288556011464]),
            {
              "Class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8329973801573, 19.31885864176218]),
            {
              "Class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83110910501081, 19.321774534525723]),
            {
              "Class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82990747537214, 19.325176343656278]),
            {
              "Class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82338434304792, 19.328578081958078]),
            {
              "Class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82647424783308, 19.328740067729377]),
            {
              "Class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82544427957136, 19.32776815069211]),
            {
              "Class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82819086160261, 19.328578081958078]),
            {
              "Class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83059412087995, 19.329388009208206]),
            {
              "Class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8333407029112, 19.32841609602614]),
            {
              "Class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83557230081159, 19.325986287771954]),
            {
              "Class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83746057595808, 19.32339445246836]),
            {
              "Class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83900552835065, 19.321774534525723]),
            {
              "Class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84295374002058, 19.32193652704263]),
            {
              "Class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8439837082823, 19.320964569532375]),
            {
              "Class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84638696755964, 19.322260511594713]),
            {
              "Class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84192377175886, 19.327120202788024]),
            {
              "Class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84003549661237, 19.327282190004986]),
            {
              "Class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83213907327253, 19.33521936684899]),
            {
              "Class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83540063943464, 19.337325083712187]),
            {
              "Class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83831888284284, 19.338296943874216]),
            {
              "Class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84158044900495, 19.338620895975964]),
            {
              "Class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84467035379011, 19.33959274842428]),
            {
              "Class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([72.84621530618269, 19.338944847434895]),
            {
              "Class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87076288308698, 19.31999260624123]),
            {
              "Class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87213617410261, 19.31869664619433]),
            {
              "Class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87522607888776, 19.316104695272813]),
            {
              "Class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87385278787214, 19.314808704399354]),
            {
              "Class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87093454446394, 19.314484705075607]),
            {
              "Class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86801630105573, 19.31983061179736]),
            {
              "Class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86973291482526, 19.31918263241618]),
            {
              "Class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87402444924909, 19.32080257605196]),
            {
              "Class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87505441751081, 19.320964569532375]),
            {
              "Class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8769426926573, 19.320316594647252]),
            {
              "Class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87831598367292, 19.31885864176218]),
            {
              "Class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87951761331159, 19.316914684351]),
            {
              "Class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87814432229597, 19.316914684351]),
            {
              "Class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87762933816511, 19.316914684351]),
            {
              "Class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87762933816511, 19.315942696975522]),
            {
              "Class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8769426926573, 19.314808704399354]),
            {
              "Class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87659936990339, 19.31367470395689]),
            {
              "Class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87745767678815, 19.312216691829985]),
            {
              "Class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87608438577253, 19.31205468967995]),
            {
              "Class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8769426926573, 19.311568682266724]),
            {
              "Class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87900262918073, 19.311568682266724]),
            {
              "Class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87951761331159, 19.310596663106427]),
            {
              "Class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88140588845808, 19.31561869989932]),
            {
              "Class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88312250222761, 19.31335070238569]),
            {
              "Class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88174921121198, 19.312378693819515]),
            {
              "Class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88089090432722, 19.310272655435593]),
            {
              "Class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88140588845808, 19.30897661833215]),
            {
              "Class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88003259744245, 19.30816658992634]),
            {
              "Class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88380914773542, 19.30816658992634]),
            {
              "Class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88621240701276, 19.308004583763704]),
            {
              "Class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88312250222761, 19.307518564312858]),
            {
              "Class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88380914773542, 19.306060497294254]),
            {
              "Class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([73.01810295447149, 19.213345618814632]),
            {
              "Class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([73.01981956824102, 19.21302141890658]),
            {
              "Class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02016289099492, 19.21172461288159]),
            {
              "Class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0191329227332, 19.21091410392202]),
            {
              "Class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0184462772254, 19.210103590967275]),
            {
              "Class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([73.01981956824102, 19.20864465758133]),
            {
              "Class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02119285925664, 19.20864465758133]),
            {
              "Class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02239448889532, 19.208158343576397]),
            {
              "Class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02222282751836, 19.207347817039114]),
            {
              "Class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0217078433875, 19.205888859205817]),
            {
              "Class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02256615027227, 19.20410567094586]),
            {
              "Class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02479774817266, 19.199728672354407]),
            {
              "Class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02771599158086, 19.198431761519885]),
            {
              "Class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03217918738164, 19.197621187057386]),
            {
              "Class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03029091223516, 19.19713484046331]),
            {
              "Class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0356124149207, 19.197945417321527]),
            {
              "Class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03921730383672, 19.197621187057386]),
            {
              "Class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03732902869024, 19.19713484046331]),
            {
              "Class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([73.04265053137578, 19.198431761519885]),
            {
              "Class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([73.04677040442266, 19.20005289846579]),
            {
              "Class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([73.04934532507696, 19.201674019438627]),
            {
              "Class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26072536957597, 19.579507014576013]),
            {
              "Class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26175533783768, 19.576272272794885]),
            {
              "Class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26175533783768, 19.57271398182407]),
            {
              "Class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25900875580643, 19.5765957498957]),
            {
              "Class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25660549652909, 19.57788965180419]),
            {
              "Class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25866543305253, 19.574331396551845]),
            {
              "Class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25900875580643, 19.572390496930414]),
            {
              "Class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25957384149616, 19.570177678992415]),
            {
              "Class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([73.25957384149616, 19.565001761330592]),
            {
              "Class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2616337780196, 19.563384252979695]),
            {
              "Class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2671269420821, 19.571148145050522]),
            {
              "Class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2671269420821, 19.567589740936295]),
            {
              "Class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26644029657429, 19.564031258267402]),
            {
              "Class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26609697382038, 19.560796205865763]),
            {
              "Class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([73.2667836193282, 19.55788460321257]),
            {
              "Class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([73.26335039178913, 19.559502166731974]),
            {
              "Class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([73.267470264836, 19.55561998703013]),
            {
              "Class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([73.27056016962116, 19.554002384576137]),
            {
              "Class": 2,
              "system:index": "137"
            })]),
    Bareland = 
    /* color: #535009 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([73.37414062721534, 19.58321927741691]),
            {
              "Class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3772305320005, 19.580955017172744]),
            {
              "Class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37654388649268, 19.580631548825174]),
            {
              "Class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37345398170753, 19.578043778660597]),
            {
              "Class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37276733619971, 19.575455966927827]),
            {
              "Class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37002075416846, 19.573838563488035]),
            {
              "Class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36693084938331, 19.573191597566353]),
            {
              "Class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3610943625669, 19.573191597566353]),
            {
              "Class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36281097633643, 19.57092719638585]),
            {
              "Class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36281097633643, 19.56898625576525]),
            {
              "Class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([73.360751039813, 19.566074801010522]),
            {
              "Class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([73.360751039813, 19.560898751616765]),
            {
              "Class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([73.360751039813, 19.55895769025642]),
            {
              "Class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35903442604346, 19.556693089141287]),
            {
              "Class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35903442604346, 19.55475197716361]),
            {
              "Class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36006439430518, 19.55475197716361]),
            {
              "Class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([73.3610943625669, 19.55475197716361]),
            {
              "Class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36418426735206, 19.553781412415102]),
            {
              "Class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36727417213721, 19.549899095029097]),
            {
              "Class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37002075416846, 19.54795790130427]),
            {
              "Class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37379730446143, 19.544722526537292]),
            {
              "Class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([73.38032043678565, 19.552810841827174]),
            {
              "Class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37860382301612, 19.551840265400028]),
            {
              "Class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37791717750831, 19.552810841827174]),
            {
              "Class": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([73.38478363258643, 19.596480733779398]),
            {
              "Class": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([73.38512695534034, 19.59454010108522]),
            {
              "Class": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37826050026221, 19.592599444992395]),
            {
              "Class": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37414062721534, 19.593893218320705]),
            {
              "Class": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36761749489112, 19.591305661265558]),
            {
              "Class": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([73.37139404518409, 19.587100792345417]),
            {
              "Class": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36727417213721, 19.586777336341477]),
            {
              "Class": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45482147438331, 19.62720429836936]),
            {
              "Class": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45619476539893, 19.62494065714208]),
            {
              "Class": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45791137916846, 19.62235359954834]),
            {
              "Class": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45928467018409, 19.620736667403026]),
            {
              "Class": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46924103004737, 19.631731485142765]),
            {
              "Class": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([73.47233093483253, 19.62914453689459]),
            {
              "Class": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([73.47439087135596, 19.626234170319858]),
            {
              "Class": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([73.470614321063, 19.626557546987215]),
            {
              "Class": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([73.4651211570005, 19.628174420561013]),
            {
              "Class": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46100128395362, 19.628497793323106]),
            {
              "Class": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45585144264503, 19.64757563387417]),
            {
              "Class": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45688141090675, 19.644988940889004]),
            {
              "Class": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45379150612159, 19.642725550330127]),
            {
              "Class": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45516479713721, 19.642402206216435]),
            {
              "Class": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([73.44726837379737, 19.65113226865266]),
            {
              "Class": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45001495582862, 19.65080894147575]),
            {
              "Class": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([73.45516479713721, 19.655982098116894]),
            {
              "Class": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([73.46203125221534, 19.65436550458576]),
            {
              "Class": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([73.40709961159034, 19.596480733779398]),
            {
              "Class": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([73.40847290260596, 19.59356977596352]),
            {
              "Class": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([73.40744293434425, 19.591952554428754]),
            {
              "Class": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([73.40847290260596, 19.58904151472385]),
            {
              "Class": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35491455299659, 19.65856861387938]),
            {
              "Class": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35834778053565, 19.657921988849026]),
            {
              "Class": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([73.360751039813, 19.657598675356276]),
            {
              "Class": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36315429909034, 19.65662873096772]),
            {
              "Class": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35251129371925, 19.657598675356276]),
            {
              "Class": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35354126198096, 19.65695204641561]),
            {
              "Class": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35216797096534, 19.654042183924624]),
            {
              "Class": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35319793922706, 19.65210224627413]),
            {
              "Class": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([73.35697448952003, 19.657598675356276]),
            {
              "Class": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36693084938331, 19.655982098116894]),
            {
              "Class": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36864746315284, 19.655982098116894]),
            {
              "Class": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36967743141456, 19.654688824595276]),
            {
              "Class": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([73.36967743141456, 19.65113226865266]),
            {
              "Class": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([72.74929223676428, 19.657985358303982]),
            {
              "Class": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([72.75203881879553, 19.65701541625376]),
            {
              "Class": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([72.75478540082678, 19.65636878496176]),
            {
              "Class": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([72.74929223676428, 19.65636878496176]),
            {
              "Class": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([72.74929223676428, 19.65442887544573]),
            {
              "Class": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([72.75169549604162, 19.65442887544573]),
            {
              "Class": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([72.75993524213537, 19.655075514557684]),
            {
              "Class": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76474176069006, 19.656692100933615]),
            {
              "Class": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([72.75821862836584, 19.6541055549123]),
            {
              "Class": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([72.76474176069006, 19.655075514557684]),
            {
              "Class": 3,
              "system:index": "75"
            })]),
    Vegetation = 
    /* color: #25ff1e */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([73.08522807751649, 19.756486114279664]),
            {
              "Class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([73.08213817273133, 19.75260869908817]),
            {
              "Class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([73.08248149548524, 19.749377447782607]),
            {
              "Class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([73.07870494519227, 19.746792399630873]),
            {
              "Class": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([73.08179484997743, 19.74517672327456]),
            {
              "Class": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0306397596454, 19.769733238353787]),
            {
              "Class": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0306397596454, 19.767794703572726]),
            {
              "Class": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0306397596454, 19.766502333956463]),
            {
              "Class": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0306397596454, 19.764886857204623]),
            {
              "Class": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0306397596454, 19.76359446401866]),
            {
              "Class": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03029643689149, 19.761978957806512]),
            {
              "Class": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([73.03029643689149, 19.759071005384914]),
            {
              "Class": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02960979138368, 19.75874789628751]),
            {
              "Class": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02960979138368, 19.756162999946348]),
            {
              "Class": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([73.0306397596454, 19.754547418463208]),
            {
              "Class": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([73.02926646862977, 19.751962454061573]),
            {
              "Class": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([73.10033427868836, 19.691850235826436]),
            {
              "Class": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([73.10376750622743, 19.692496723958513]),
            {
              "Class": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([73.10170756970399, 19.688617756007517]),
            {
              "Class": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([73.09793101941102, 19.684738694085418]),
            {
              "Class": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([73.1020508924579, 19.68700149162584]),
            {
              "Class": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([73.10823070202821, 19.707688443340903]),
            {
              "Class": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([73.11166392956727, 19.70865807858369]),
            {
              "Class": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([73.10926067028993, 19.70510272062408]),
            {
              "Class": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([73.11063396130555, 19.704133063829968]),
            {
              "Class": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([73.23491679821961, 19.69637559792292]),
            {
              "Class": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([73.23835002575868, 19.69702206777832]),
            {
              "Class": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([73.24178325329774, 19.69799176766531]),
            {
              "Class": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([73.24418651257508, 19.69508265037869]),
            {
              "Class": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([73.24040996228211, 19.69508265037869]),
            {
              "Class": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([73.23114024792665, 19.69508265037869]),
            {
              "Class": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([73.23732005749696, 19.70704201658016]),
            {
              "Class": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([73.24246989880555, 19.707688443340903]),
            {
              "Class": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95545207653993, 19.77393331617254]),
            {
              "Class": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95545207653993, 19.782010077786456]),
            {
              "Class": 4,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95442210827821, 19.78685593821409]),
            {
              "Class": 4,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95682536755555, 19.788471192259784]),
            {
              "Class": 4,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82807933484071, 19.72643368270661]),
            {
              "Class": 4,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82842265759461, 19.72320190170643]),
            {
              "Class": 4,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8277360120868, 19.71803091617429]),
            {
              "Class": 4,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82842265759461, 19.7167381436541]),
            {
              "Class": 4,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82945262585633, 19.71415256725315]),
            {
              "Class": 4,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83082591687196, 19.70704201658016]),
            {
              "Class": 4,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8328858533954, 19.70510272062408]),
            {
              "Class": 4,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83219920788758, 19.69960792108676]),
            {
              "Class": 4,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83116923962586, 19.69960792108676]),
            {
              "Class": 4,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([72.83082591687196, 19.69960792108676]),
            {
              "Class": 4,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8277360120868, 19.69799176766531]),
            {
              "Class": 4,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82498943005555, 19.69702206777832]),
            {
              "Class": 4,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([72.80919658337586, 19.698638230992458]),
            {
              "Class": 4,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8112565198993, 19.698638230992458]),
            {
              "Class": 4,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([72.81228648816102, 19.69702206777832]),
            {
              "Class": 4,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8167496839618, 19.69993114981245]),
            {
              "Class": 4,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82361613903993, 19.738390704009383]),
            {
              "Class": 4,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([72.82567607556336, 19.735805477949558]),
            {
              "Class": 4,
              "system:index": "54"
            })]),
    Forest = 
    /* color: #001a1a */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.9173849063394, 19.442562311422716]),
            {
              "Class": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91978816561674, 19.440619829815805]),
            {
              "Class": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91978816561674, 19.439001077387367]),
            {
              "Class": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91669826083158, 19.440296080621422]),
            {
              "Class": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91326503329252, 19.43964858029567]),
            {
              "Class": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90880183749174, 19.436087282342623]),
            {
              "Class": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90777186923002, 19.431554608343028]),
            {
              "Class": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91051845126127, 19.431230841073567]),
            {
              "Class": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91326503329252, 19.431230841073567]),
            {
              "Class": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90433864169096, 19.432525906278862]),
            {
              "Class": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90365199618314, 19.43025953539279]),
            {
              "Class": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89953212313627, 19.42734558350091]),
            {
              "Class": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92425136141752, 19.415689253307573]),
            {
              "Class": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92528132967924, 19.413422647577313]),
            {
              "Class": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91944484286283, 19.41050839377683]),
            {
              "Class": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91360835604642, 19.405975006272364]),
            {
              "Class": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91498164706205, 19.403060619005686]),
            {
              "Class": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91944484286283, 19.402412970299828]),
            {
              "Class": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92562465243314, 19.407917902105694]),
            {
              "Class": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92493800692533, 19.409860774727825]),
            {
              "Class": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92425136141752, 19.42896445211647]),
            {
              "Class": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91978816561674, 19.42734558350091]),
            {
              "Class": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92081813387846, 19.42507914033683]),
            {
              "Class": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92459468417142, 19.424755360160948]),
            {
              "Class": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91429500155424, 19.420546159162217]),
            {
              "Class": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9173849063394, 19.42248888086395]),
            {
              "Class": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89743751086964, 19.1934137334792]),
            {
              "Class": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89228766956104, 19.202492171503785]),
            {
              "Class": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89606421985401, 19.20573434940028]),
            {
              "Class": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89743751086964, 19.204113268440004]),
            {
              "Class": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89469092883839, 19.198925702014474]),
            {
              "Class": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8953775743462, 19.192765254455846]),
            {
              "Class": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90330996052707, 19.19678990383562]),
            {
              "Class": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9050265742966, 19.195492969839147]),
            {
              "Class": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90365328328097, 19.19192634865006]),
            {
              "Class": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89747347371066, 19.189332393789254]),
            {
              "Class": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9050307687631, 19.250599683897473]),
            {
              "Class": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90367176919429, 19.25026206514365]),
            {
              "Class": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89577534585445, 19.24896555312233]),
            {
              "Class": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89920857339351, 19.24928968208813]),
            {
              "Class": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90367176919429, 19.24928968208813]),
            {
              "Class": 5,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90779164224116, 19.24864142351622]),
            {
              "Class": 5,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91191151528804, 19.24896555312233]),
            {
              "Class": 5,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91088154702632, 19.245075955591997]),
            {
              "Class": 5,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91019490151851, 19.245075955591997]),
            {
              "Class": 5,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91465809731929, 19.245075955591997]),
            {
              "Class": 5,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91225483804195, 19.257392698109644]),
            {
              "Class": 5,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90847828774898, 19.258040922098804]),
            {
              "Class": 5,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91568806558101, 19.255772126927553]),
            {
              "Class": 5,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91843464761226, 19.25350330037229]),
            {
              "Class": 5,
              "system:index": "49"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
Map.addLayer(ROI)
Map.centerObject(ROI,10)

var l8 = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")

var image=l8.filterBounds(ROI)
            .filterDate('2018-11-01','2019-02-02')
            .filterMetadata('CLOUD_COVER','less_than',1)
            .median()
            .clip(ROI)
Map.addLayer(image, imageVisParam, 'before')
var samples = Urban.merge(Water).merge(Bareland).merge(Vegetation).merge(Forest)

var bands= ['SR_B1','SR_B2','SR_B3','SR_B4','SR_B5','SR_B6','SR_B7']

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
  fileNamePrefix: 'LULC_2018_2019',
  region: ROI,
  scale: 30
});