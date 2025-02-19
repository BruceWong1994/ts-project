interface Book1 {
    pages:number
    cover:string
}

interface Book1 {
    year:number
}

interface HB1 extends Book1 {
    speak:()=>void
}

const hongloumeng:HB1 = {
    pages:34212,
    cover:'软',
    year:1599,
    speak:()=>{
        console.log(`红楼梦共有${hongloumeng.pages}页,封面是${hongloumeng.cover}的,历史年份为公元${hongloumeng.year}年`);
    }
}
hongloumeng.speak()


type Book2 = {
    pages:number
    cover:string
}

type History2 = {
    years:number
}

type HB2 = Book2 & History2 & {speak:()=>void}

const sanguo:HB2 = {
    pages:19234,
    cover:'硬',
    years:328,
    speak:()=>{
        console.log(`三国演义共有${sanguo.pages}页,封面是${sanguo.cover}的,历史年份为公元${sanguo.years}年`);
    }
}

sanguo.speak()
