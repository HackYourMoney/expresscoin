// crawling module import
var cheerio = require('cheerio');  
var request = require('sync-request');


/** 
 * 거래소 코인 목록 반환 모듈 
 * @returns {JSON} : '거래소이름' : 'value'
 */
exports.exchangeStore = function(){
    var store = {
        '코인네스트' :'coinnest',
        '업비트KRW': 'upbit_krw',
        '업비트BTC':'upbit_btc',
        '빗썸' : 'bithumb',
        '코인원': 'coinone'
        }
    return JSON.stringify(store);
}
/**
 * 코인네스트 목록 모듈
 * @returns {JSON} : '코인이름' : 'value'
 */
exports.coinnest = function(){
    var coinnest = {
        '카이버(KNC)':"knc",
          "에너고(TSL)": "tsl",
          "트론(TRON)" :"tron",
          "비트코인(BTC)" :"btc",
          "비트코인캐쉬(BCH)" :"bch",
          "비트코인골드(BTG)" :"btg",
          "비트코인다이아(BCD)" :"bcd",
          "이더리움(ETH)": "eth",
          "이더리움클래식(ETC)" :"etc",
          "카르다노(ADA)":   "ada",
          "큐텀(QTUM)":  "qtum",
          "네오(NEO)":"neo",  
          "NeoGas(GAS)":   "gas",  
          "OmiseGO(OMG)" :  "omg",  
          "윌튼(WTC)" :  "wtc",  
          "모나코(MCO)" :  "mco",  
          "Ink(INK)" :  "ink"        
    }
    return JSON.stringify(coinnest);
}
/** 
 * 업비트 KRW 코인 목록 모듈
 * @returns {JSON} : '코인이름' : 'value'
 */
exports.upbitKRW = function(){
    var upbit_krw = {
        "비트코인BTC/KRW":"KRW-BTC",     
        "퀀텀QTUM/KRW":"KRW-QTUM",
        "리플XRP/KRW":"KRW-XRP",
        "아인스타이늄EMC2/KRW":"KRW-EMC2",
        "에이다ADA/KRW":"KRW-ADA",
        "스테이터스네트워크토큰SNT/KRW":"KRW-SNT",
        "이더리움클래식ETC/KRW":"KRW-ETC",
        "스텔라루멘XLM/KRW":"KRW-XLM",
        "라이트코인LTC/KRW":"KRW-LTC",
        "머큐리MER/KRW":"KRW-MER",
        "오미세고OMG/KRW":"KRW-OMG",
        "비트코인캐시BCC/KRW":"KRW-BCC",
        "이더리움ETH/KRW":"KRW-ETH",
        "뉴이코노미무브먼트XEM/KRW":"KRW-XEM",
        "코모도KMD/KRW":"KRW-KMD",
        "아더ARDR/KRW":"KRW-ARDR",
        "스팀달러SBD/KRW":"KRW-SBD",
        "웨이브WAVES/KRW":"KRW-WAVES",
        "스트라티스STRAT/KRW":"KRW-STRAT",
        "비트코인골드BTG/KRW":"KRW-BTG",
        "네오NEO/KRW":"KRW-NEO",
        "파워렛저POWR/KRW":"KRW-POWR",
        "블록틱스TIX/KRW":"KRW-TIX",
        "버트코인VTC/KRW":"KRW-VTC",
        "메탈MTL/KRW":"KRW-MTL",
        "스팀STEEM/KRW":"KRW-STEEM",
        "그로스톨코인GRS/KRW":"KRW-GRS",
        "스토리지STORJ/KRW":"KRW-STORJ",
        "지캐시ZEC/KRW":"KRW-ZEC",
        "모네로XMR/KRW":"KRW-XMR",
        "리스크LSK/KRW":"KRW-LSK",
        "피벡스PIVX/KRW":"KRW-PIVX",
        "대시DASH/KRW":"KRW-DASH",
        "아크ARK/KRW":"KRW-ARK",
        "어거REP/KRW":"KRW-REP"
    }
    return upbit_krw;
}
/**
 * 업비트 BTC 코인 목록 모듈
 * @returns {JSON} : '코인이름' : 'value'
 */
exports.upbitBTC = function(){
    // TODO: 이름 다 추가 X 추가해야함
    var upbit_btc = {
        '이더리움BTC-ETH':'BTC-ETH',
        '리플BTC-XRP':'BTC-XRP',
        '이더리움클래식BTC-ETC':'BTC-ETC',
        '디지바이트BTC-DGB':'BTC-DGB',
        '라이트코인BTC-LTC':'BTC-LTC',
        '웨이브BTC-WAVES':'BTC-WAVES',
        '도지코인BTC-DOGE':'BTC-DOGE',
        '뉴이코노미무브먼트BTC-XEM':'BTC-XEM',
        '리스크BTC-LSK':'BTC-LSK',
        '네오BTC-NEO':'BTC-NEO',
        '에드엑스BTC-ADX':'BTC-ADX',
        '모나코BTC-MCO':'BTC-MCO',
        '퍼스트블러드BTC-1ST':'BTC-1ST',
        '애드토큰BTC-ADT':'BTC-ADT',
        '아드리아고나스BTC-AGRS':'BTC-AGRS',
        '에이엠피BTC-AMP':'BTC-AMP',
        'BTC-ANT':'BTC-ANT',
        'BTC-ARDR':'BTC-ARDR',
        'BTC-ARK':'BTC-ARK',
        'BTC-BAT':'BTC-BAT',
        'BTC-BAY':'BTC-BAY',
        'BTC-BCC':'BTC-BCC',
        'BTC-BITB':'BTC-BITB',
        'BTC-BLK':'BTC-BLK',
        'BTC-BLOCK':'BTC-BLOCK',
        'BTC-BNT':'BTC-BNT',
        'BTC-BSD':'BTC-BSD',
        'BTC-BURST':'BTC-BURST',
        'BTC-CFI':'BTC-CFI',
        'BTC-CLOAK':'BTC-CLOAK',
        'BTC-CVC':'BTC-CVC',
        '대시BTC-DASH':'BTC-DASH',
        'BTC-DCR':'BTC-DCR',
        'BTC-DCT':'BTC-DCT',
        'BTC-DGD':'BTC-DGD',
        'BTC-DOPE':'BTC-DOPE',
        'BTC-DYN':'BTC-DYN',
        'BTC-EDG':'BTC-EDG',
        'BTC-EMC2':'BTC-EMC2',
        'BTC-EXCL':'BTC-EXCL',
        'BTC-EXP':'BTC-EXP',
        'BTC-FCT':'BTC-FCT',
        'BTC-FTC':'BTC-FTC',
        'BTC-FUN':'BTC-FUN',
        'BTC-GAME':'BTC-GAME',
        'BTC-GBYTE':'BTC-GBYTE',
        'BTC-GNO':'BTC-GNO',
        'BTC-GNT':'BTC-GNT',
        'BTC-GRS':'BTC-GRS',
        'BTC-GUP':'BTC-GUP',
        'BTC-HMQ':'BTC-HMQ',
        'BTC-ION':'BTC-ION',
        'BTC-KMD':'BTC-KMD',
        'BTC-KORE':'BTC-KORE',
        'BTC-LBC':'BTC-LBC',
        'BTC-MAID':'BTC-MAID',
        'BTC-MEME':'BTC-MEME',
        'BTC-MONA':'BTC-MONA',
        'BTC-MTL':'BTC-MTL',
        'BTC-MUE':'BTC-MUE',
        'BTC-MYST':'BTC-MYST',
        'BTC-NBT':'BTC-NBT',
        'BTC-NMR':'BTC-NMR',
        'BTC-NXS':'BTC-NXS',
        'BTC-NXT':'BTC-NXT',
        'BTC-OK':'BTC-OK',
        'BTC-OMG':'BTC-OMG',
        'BTC-PART':'BTC-PART',
        'BTC-PAY':'BTC-PAY',
        'BTC-PIVX':'BTC-PIVX',
        'BTC-PTOY':'BTC-PTOY',
        'BTC-QRL':'BTC-QRL',
        '큐텀BTC-QTUM':'BTC-QTUM',
        'BTC-RADS':'BTC-RADS',
        'BTC-RDD':'BTC-RDD',
        'BTC-REP':'BTC-REP',
        'BTC-RLC':'BTC-RLC',
        'BTC-SAFEX':'BTC-SAFEX',
        'BTC-SC':'BTC-SC',
        'BTC-SHIFT':'BTC-SHIFT',
        'BTC-SIB':'BTC-SIB',
        'BTC-SLS':'BTC-SLS',
        'BTC-SNGLS':'BTC-SNGLS',
        'BTC-SNT':'BTC-SNT',
        'BTC-SPHR':'BTC-SPHR',
        'BTC-STEEM':'BTC-STEEM',
        'BTC-STORJ':'BTC-STORJ',
        'BTC-STRAT':'BTC-STRAT',
        'BTC-SWT':'BTC-SWT',
        'BTC-SYNX':'BTC-SYNX',
        'BTC-SYS':'BTC-SYS',
        'BTC-TX':'BTC-TX',
        'BTC-UBQ':'BTC-UBQ',
        'BTC-UNB':'BTC-UNB',
        'BTC-VIA':'BTC-VIA',
        'BTC-VOX':'BTC-VOX',
        'BTC-VRC':'BTC-VRC',
        'BTC-VTC':'BTC-VTC',
        'BTC-WINGS':'BTC-WINGS',
        'BTC-XAUR':'BTC-XAUR',
        'BTC-XDN':'BTC-XDN',
        'BTC-XEL':'BTC-XEL',
        'BTC-XLM':'BTC-XLM',
        '모네로BTC-XMR':'BTC-XMR',
        'BTC-XVG':'BTC-XVG',
        'BTC-XZC':'BTC-XZC',
        'BTC-ZEC':'BTC-ZEC',
        'BTC-ZEN':'BTC-ZEN',
        'BTC-TRIG':'BTC-TRIG',
        '인터넷오브피플BTC-IOP':'BTC-IOP',
        '나브BTC-NAV':'BTC-NAV',
        '라이즈BTC-RISE':'BTC-RISE',
        '에이다BTC-ADA':'BTC-ADA',
        'BTC-MANA':'BTC-MANA',
        'BTC-SALT':'BTC-SALT',
        'BTC-SBD':'BTC-SBD',
        'BTC-TIX':'BTC-TIX',
        'BTC-RCN':'BTC-RCN',
        'BTC-VIB':'BTC-VIB',
        '파워렛져BTC-POWR':'BTC-POWR',
        '머큐리BTC-MER':'BTC-MER',
        '비트골드BTC-BTG':'BTC-BTG',
        'BTC-ENG':'BTC-ENG'    
    }
    return upbit_btc;
}
/**
 * 빗썸 코인 목록 모듈
 * @returns {JSON} : '코인이름' : 'value'
 */
exports.bithumb = function(){
    var bithumb = {
        "비트코인":"btc",     
        "이더리움":"eth",
        "대시":"dash",
        "라이트코인":"ltc",
        "이더리움클래식":"etc",
        "리플":"xrp",
        "모네로":"xmr",
        "비트캐시":"bch",
        "제트캐시":"zec",
        "큐텀":"qtum",
        "비트골드":"btg",
        "이오스":"eos"
    }
    return bithumb;
}
/**
 * 코인원 코인 목록 모듈
 * @returns {JSON} : '코인이름' : 'value'
 */
exports.coinone = function(){
    var coinone = {
        '비트코인':"btc",
        "이더리움": "eth",
        "비트캐쉬" :"bch",
        "이더리움클래식" :"etc",
        "비트코인골드(BTG)" :"btg",
        "큐텀":"qtum",
        "리플":"xrp",
        "라이트코인":"ltc",
        "아이오타":"iota"
    }
    return coinone;
}

/**
 * 거래소 별 코인 현재가격 반환 모듈
 * @param {String} : params : '코인 value'
 * @return {String} : 'res' : '현재코인'
 */

// 코인네스트 현재 코인 가격 
exports.coinnestCoin = function(params){
    var url = 'http://api.coinnest.co.kr/api/pub/ticker?coin='+params;  
    var res = request('GET', url);
    // JSON?!
    // res = JSON.parse(res.getBody('utf8')).last;
    // var obj = { "value" : res };
    // return JSON.stringify(obj);

    res = "" + JSON.parse(res.getBody('utf8')).last;
    return res;
}

// 업비트 현재 코인 가격 
exports.upbitCoin = function(params){
    if(params == "nil"){
        params ="";
    }
    var url = "https://crix-api-endpoint.upbit.com/v1/crix/candles/days?code=CRIX.UPBIT."+params;
    var res = request('GET', url);
    // res = JSON.parse(res.getBody('utf8'))[0].tradePrice;
    // var obj = {"value": res };
    // return JSON.stringify(obj);

    res = "" + JSON.parse(res.getBody('utf8'))[0].tradePrice;
    return res;
}

// 빗썸 현재 코인 가격 
exports.bithumbCoin = function(params){
    if(params == "nil"){
        params ="";
    }
    var url = "https://api.bithumb.com/public/recent_transactions/" + params;
    var res = request('GET', url);
    // res = JSON.parse(res.getBody('utf8')).data[0].price;
    // var obj = {"value": res };
    // return JSON.stringify(obj);

    res = "" + JSON.parse(res.getBody('utf8')).data[0].price;
    return res;
}

// 코인원 현재 코인 가격 
exports.coinoneCoin = function(params){
    if(params == "nil"){
        params ="";
    }
    var url = "https://api.coinone.co.kr/ticker?currency=" + params;
    var res = request('GET', url);
    // res = JSON.parse(res.getBody('utf8')).last;
    // var obj = {"value": res };
    // return JSON.stringify(obj);;

    res = "" + JSON.parse(res.getBody('utf8')).last;
    return res;
}

/**
 * 코인 투자 수익률 반환 모듈 
 * @param {String,String} : buy : 내가 산 코인 가격, now : 현재 코인 가격 
 * @return {String} : 수익률
 */
exports.percent = function(buy,now){
    value = (((parseFloat(now)/(parseFloat(buy))-1)*100));
    return ""+Math.round(value * 100) / 100
}
/**
 * 투자금 현재 평가 가격
 * @param {String,String} : deposit : 투입금액 , percent : 수익률 
 * @return {String} : 현재 평가 금액 
 */ 
exports.coin_price = function(deposit,percent){
    value = (parseFloat(deposit))+(parseFloat(deposit))*(parseFloat(percent))/100.0
    return ""+Math.round(value * 100) / 100
}

/**
 * 현재 코인 상태
 * @param {String,String,String,String} 
 * : buycoin : 산가격 , deposit : 넣은금액, category: 거래소, coinname: 코인이름 
 * @return {JSON} : 
 * : category: 카테고리, coinname: 코인이름, buycoin : 내가 산 코인 가격
 * : nowcoin: 현재코인가격 , deposit: 입금금액 ,nowdeposit: 현재금액,
 * : percent: 수익률, present : 평가금액
 */ 
exports.coinstatus = function(buycoin,deposit,category,coinname){
    
    // 현재 코인 가격  
    var nowcoin = '';
    if(category == "coinnest")
        nowcoin= this.coinnestCoin(coinname);
    else if(category == "upbit_krw" || "ubpit_btc")
        nowcoin = upbitCoin();
    else if(category == "bithumb")
        nowcoin = bithumbCoin();
    else if(category == "coinone")
        nowcoin = coinoneCoin();
    
    // 수익률
    var percent = this.percent(buycoin,nowcoin);
    // 현재 금액 
    var present = this.coin_price(deposit,percent);

    var result = {
        category : category,
        coinname : coinname,
        buycoin : buycoin,
        nowcoin : nowcoin,
        deposit : deposit,
        nowdeposit : present-deposit,
        percent : percent,
        present : present
    };

    return JSON.stringify(result);
}
