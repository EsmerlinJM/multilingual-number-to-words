import Hundrad from "./classes/hubndreds/hundred"
import {english, kananda, telagu, marathi,hindi} from "./config/language"
import {LAN, NumberToWordStyle, DecimalStyle} from "./config/interfaces"
import Single from "./classes/hubndreds/singleDigits"



class NumberToWord{
    private _lan:LAN
    constructor(lan:LAN=english){
        this._lan = lan
    }

    /**
     * This function returns the number to word
     * @param _number Number
     * @param _style "LakhsAndCrore" | "MillionAndBillion"
     * @param _decimalStyle "Currency" | "Scientific"
     * @returns string
     */
    getWord(_number:number, _style:NumberToWordStyle="LakhsAndCrore", _decimalStyle: DecimalStyle = "Currency"):string{
        let ret =""
        let wholeNUmber = parseInt(_number.toString())
        let decimalNumber = _number - wholeNUmber
        ret = this.WholeNumberWord(wholeNUmber, _style) + " and " + this.DecimalNumberWord(decimalNumber, _decimalStyle)
        return  ret;
     }

     /**
      * This converts the decimal number into words
      * @param _number decimal number
      * @param _decimalStyle "Currency" | "Scientific"
      * @returns decimal in string
      */
     private DecimalNumberWord(_number:number, _decimalStyle:DecimalStyle):string{
        
         let ret="";
         if(_decimalStyle === "Scientific"){
             let single_digits = new Single(this._lan);
             _number.toString().split("").forEach(el=>{
                 ret = ret + " " + single_digits.getWord(parseInt(el))
             })
         }else{
            let hundrad = new Hundrad(this._lan);
            ret =  hundrad.getWord(parseInt(_number.toString().substring(2, 4)))
             
         }
         return ret;
     }


     /**
      * This retuen whole number  in words
      * @param _number 
      * @param _style "LakhsAndCrore" | "MillionAndBillion"
      * @returns string
      */
    private WholeNumberWord(_number:number, _style:NumberToWordStyle="LakhsAndCrore"):string{
  
        let ret="";
        let hundrad = new Hundrad(this._lan)
        let numberArray = this.convertComaSepartedArray(_number,_style);
    
        let numberStringArray :string[] = numberArray.map((el, i)=>{

            let numberWord = hundrad.getWord(parseInt(el));
            let place:string=""
            if(parseInt(el) === 0){
                return "" ;  
            }else{
                if(_style === "LakhsAndCrore" && i <  numberArray.length-1){
                    place =  this._lan.crore_lakhs[numberArray.length-1 - i]
                    
                  }else if(_style === "MillionAndBillion" && i <  numberArray.length-1){
                      place = this._lan.million_billions[numberArray.length -1 - i]
                  }
                  return `${numberWord} ${place}`;

            }

        })
        numberStringArray.forEach(el=>{
            ret = ret + " " + el;
        })
        
        return ret;
    }


    /**
     * This function converts number into comaseparted string array
     * @param _number  "LakhsAndCrore" | "MillionAndBillion"
     * @param style 
     * @returns string[]
     */
    private convertComaSepartedArray = (_number:number, style:NumberToWordStyle="LakhsAndCrore"):string[]=>{
        let numberString = _number.toString()
        let ret = ""
        let hundradpart:string=""

        if(numberString.length<=3){
           hundradpart = numberString.substring(0, numberString.length)
        }else{
            hundradpart = numberString.substring(numberString.length-3)            
        }

        if(numberString.length > 3){
            numberString = numberString.slice(0, numberString.length -3);
            numberString = numberString.split("").reverse().join("");
        }else{
            numberString = ""
        }
        
        let stringArray:string[] =[]
        if(numberString.length > 0){

            if(style === "MillionAndBillion"){
                let loop=true;
                let index =0
                while(loop){
                    
                    if(index < numberString.length){
                        let temp = numberString.substring(index, index + 3)
                        stringArray.push(temp)
                        index = index + 3;
                       
                    }else{
                        loop = false;
                    }                   
                }

            }else{
               
                let loop=true;
                let index =0
                while(loop){
                    
                    if(index < numberString.length){
                        let temp = numberString.substring(index, index + 2)
                        stringArray.push(temp)
                        index = index + 2;
                       
                    }else{
                        loop = false;
                    }                   
                }

            }
        }

            let RetArray = stringArray.map(el=>{
               return el.split("").reverse().join("");
            })

            RetArray.reverse().push(hundradpart)
            return RetArray;

    }

    /**
     * This function converts number into comaseparted string
     * @param _number  "LakhsAndCrore" | "MillionAndBillion"
     * @param style 
     * @returns string
     */
    public convertToComaSeparetedString = (_number:number, style:NumberToWordStyle="LakhsAndCrore"):string=>{
        return this.convertComaSepartedArray(_number, style).toString();
    }

}

export {NumberToWord,  english, kananda, telagu, marathi,hindi}
export type {LAN}




