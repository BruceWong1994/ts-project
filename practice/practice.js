"use strict";
const hongloumeng = {
    pages: 34212,
    cover: '软',
    year: 1599,
    speak: () => {
        console.log(`红楼梦共有${hongloumeng.pages}页,封面是${hongloumeng.cover}的,历史年份为公元${hongloumeng.year}年`);
    }
};
hongloumeng.speak();
const sanguo = {
    pages: 19234,
    cover: '硬',
    years: 328,
    speak: () => {
        console.log(`三国演义共有${sanguo.pages}页,封面是${sanguo.cover}的,历史年份为公元${sanguo.years}年`);
    }
};
sanguo.speak();
