import {LAN} from "./interfaces"

    const  english:LAN = {
        "single_digits": ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
        "teens": ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        "double_digits": ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
        "crore_lakhs": ["hundred", "thousand", "lakh", "crore"],
        "million_billions": [ "hundred", "thousand","million","billion","trillion","quadrillion"],
        "and_currency": ["and","rupees", "paise", "point"]
    }

    const  spanish:LAN = {
        "single_digits": ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"],
        "teens": ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"],
        "double_digits": ["cero", "diez", "veinte", "trenta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"],
        "crore_lakhs": ["cien", "mil", "cienmil", "diez millones"],
        "million_billions": [ "cien", "mil", "millon","billon","trillon","quatrillon"],
        "and_currency": ["y", "rupias", "paisa", "punto"]
    }

     const kananda:LAN = {
        "single_digits": ["ಶೂನ್ಯ", "ಒಂದು", "ಎರಡು", "ಮೂರು", "ನಾಲ್ಕು", "ಐದು", "ಆರು", "ಏಳು", "ಎಂಟು", "ಒಂಬತ್ತು"],
        "teens": ["ಹತ್ತು", "ಹನ್ನೊಂದು", "ಹನ್ನೆರಡು", "ಹದಿಮೂರು", "ಹದಿನಾಲ್ಕು", "ಹದಿನೈದು", "ಹದಿನಾರು", "ಹದಿನೇಳು", "ಹದಿನೆಂಟು", "ಹತ್ತೊಂಬತ್ತು"],
        "double_digits": ["ಶೂನ್ಯ", "ಹತ್ತು", "ಇಪ್ಪತ್ತು", "ಮೂವತ್ತು", "ನಲವತ್ತು", "ಐವತ್ತು", "ಅರವತ್ತು ", "ಎಪ್ಪತ್ತು", "ಎಂಭತ್ತು", "ತೊಂಬತ್ತು"],
        "crore_lakhs": ["ನೂರು", "ಸಾವಿರ", "ಲಕ್ಷ", "ಕೋಟಿ" ],
        "million_billions": [ "ನೂರು","ಸಾವಿರ","ಮಿಲಿಯನ್", "ಬಿಲಿಯನ್","ಟ್ರಿಲಿಯನ್","ಕ್ವಾಡ್ರಿಲಿಯನ್"],
        "and_currency": ["ಮತ್ತು", "ರೂಪಾಯಿ", "ಪೈಸೆ", "ಪಾಯಿಂಟ್"]
    }
    const telagu:LAN = {
        "single_digits": ["సున్నా", "ఒక", "రెండు", "మూడు", "నాలుగు", "ఐదు", "ఆరు", "ఏడు", "ఎనిమిది", "తొమ్మిది"],
        "teens": ["పది", "పదకొండు", "పన్నెండు", "పదమూడు", "పద్నాలుగు", "పదిహేను", "పదహారు", "పదిహేడు", "పద్దెనిమిది", "పందొమ్మిది"],
        "double_digits": ["సున్నా", "పది", "ఇరవై", "ముప్పై", "నలభై", "యాభై", "అరవై", "డెబ్భై", "ఎనభై", "తొంభై"],
        "crore_lakhs": ["వంద", "వెయ్యి", "లక్ష", "కోట్ల"],
        "million_billions": ["వంద", "వెయ్యి", "మిలియన్", "బిలియన్","ట్రిలియన్","క్వాడ్రిలియన్"],
        "and_currency": ["మరియు", "రూపాయలు", "పైజ్", "పాయింట్"]
    }
    const hindi:LAN ={
        "single_digits": ["शून्य", "एक", "दो", "तीन", "चार", "पांच", "छः", "सात", "आठ", "नौ"],
        "teens": ["दस", "ग्यारह", "बारह", "तेरह", "चौदह", "पन्द्रह", "सोलह", "सत्रह", "अठारह", "उन्नीस"],
        "double_digits": ["शून्य", "दस", "बीस", "तीस", "चालीस", "पचास", "साठ", "सत्तर", "अस्सी", "नब्बे"],
        "crore_lakhs": ["सौ", "हजार", "लाख", "करोड़" ],
        "million_billions": ["सौ", "हजार", "मिलियन", "बिलियन", "ट्रिलियन", "क्वाड्रलियन"],
        "and_currency": ["और", "रुपए", "पैसे", "बिंदु"]
    }
    const marathi:LAN = {
        "single_digits": ["शून्य", "एक", "दोन", "तीन", "चार", "पाच", "सहा", "सात", "आठ", "नऊ"],
        "teens": ["दहा", "अकरा", "बारा", "तेरा", "चौदा", "पंधरा", "सोळा", "सतरा", "अठरा", "एकोणीस"],
        "double_digits": ["शंभरा", "दहा", "वीस", "तीस", "चाळीस", "पन्नास", "साठ", "सत्तर", "अस्सी", "नब्बे"],
        "crore_lakhs": [ "सौ", "हजार", "लाख", "कोटी"],
        "million_billions": ["सौ", "हजार", "मिलियन", "बिलियन", "ट्रिलियन", "क्वाड्रलियन"],
        "and_currency": ["आणि", "रुपया", "पैसे", "बिंदू"]
    }




export {english, kananda, telagu, hindi, marathi, spanish}


