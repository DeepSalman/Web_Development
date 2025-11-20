//Example 01
//Type 01
function getFirstElement(array: number[]){
    return array[0]
}

const numberss = [1,2,3]
const FirstElement=getFirstElement(numberss)


//Type 02
function getSecondElement(array: string[]){
    return array[0]
}

const strings = ['Hello','world']
const SecondElement=getSecondElement(strings)

//Type 03
function getThirdElement(array: any[]){
    return array[0]
}

const str = ['Hello','world']
const ThirdElement=getThirdElement(str)

//Type 04
function getFourthElement<ElementType>(array: ElementType[]){
    return array[0]
}

const stri = ['Hello','world']
const numb = [1,2,3,4]

const FourthElement=getFourthElement(str)
const FourthElement2=getFourthElement(numb)


//Type 05

function getFifthElemet<ElementType,ElementType1>(array: ElementType[],array1: ElementType1[]){
    return array[0]
}

const strin = ['Hello','world']
const numbe = [1,2,3,4]

const FifthElement=getFifthElemet(str,numbe)



const input = document.querySelector<HTMLInputElement>(".input")
input?.value


const a =[1,2,3]
a.map(()=>{
    return "Std"
})
