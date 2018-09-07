var content = document.getElementById("answer-content");

// 设置答题框的高度
var getViewPortSize = function() {
    var w = window;
    if (w.innerWidth != null) return { x: w.innerWidth, y: w.innerHeight };
    var d = w.document;
    // 表明是标准模式
    if (document.compatMode == "CSS1Compat") {
        return {
            x: d.documentElement.clientWidth,
            y: d.documentElement.clientHeight
        }
    }
    // 怪异模式
    return { x: d.body.clientWidth, y: d.body.clientHeight }
}

this.clientHeight = getViewPortSize().y;
this.clientWidth = getViewPortSize().x;

content.style.height = this.clientHeight - this.clientWidth / 2 + 'px'

var addClass = function(element, className) {
    var classNames = element.className.split(/\s+/);
    if (classNames.indexOf(className) == -1) {
        classNames.push(className);
    }
    element.className = classNames.join(' ')
}

// 打字效果
var arr = [
    // { type: 'text', text: '女神，我家的女神，又名静静，是个十足的女神经，嗯？'},
    // { type: 'wait', time: 900 },
    // { type: 'delete', num: 4 },
    // { type: 'text', text: '，嗯!' },
    // { type: 'br' },
    // { type: 'text', text: '她温柔美丽，善良大方' },
    // { type: 'text', text: '，国色天香，沉鱼落雁，如花似玉，闭月羞花，贤良淑德，花容月貌，秋水伊人，一笑倾城，冰清玉洁，娇俏佳人，朱颜玉润，玉骨冰肌，窈窕淑女，美若天仙，一顾倾城，才智国人，出水芙蓉，阿娇金屋，闭月羞花，逞娇呈美，春暖花香，春色满园……', time: 50 },
    // { type: 'br' },
    // { type: 'text', text: '给你们看张她的照片吧~' },
    // { type: 'wait', time: 900 },
    // { type: 'img', src: 'img/bishi2.jpg', id: "cat", style: "width: 50%;display: block;margin-left: auto;margin-right: auto;margin-top: 20px;margin-bottom: 20px;" },
    // { type: 'wait', time: 900 },
    // // { type: 'delete', num: 1, time: 1000 },
    // { type: 'text', text: '是不是美美哒~' }
    
    // { type: 'text', text: '再别康桥'},
    // { type: 'br' },
  

    { type: 'text', text: '轻轻的我走了，'},
    { type: 'br' },
    { type: 'text', text: '正如我轻轻的来；'},
    { type: 'br' },
    { type: 'text', text: '我轻轻的招手，'},
    { type: 'br' },
    { type: 'text', text: '作别西天的云彩。'},
    { type: 'br' },
    { type: 'br' },

    { type: 'text', text: '那河畔的金柳，'},
    { type: 'br' },
    { type: 'text', text: '是夕阳中的新娘；'},
    { type: 'br' },
    { type: 'text', text: '波光里的艳影，'},
    { type: 'br' },
    { type: 'text', text: '在我的心头荡漾。'},
    { type: 'br' },
    { type: 'br' },

    { type: 'text', text: '软泥上的青荇，'},
    { type: 'br' },
    { type: 'text', text: '油油的在水底招摇；'},
    { type: 'br' },
    { type: 'text', text: '在康河的柔波里，'},
    { type: 'br' },
    { type: 'text', text: '我甘心做一条水草！'},
    { type: 'br' },
    { type: 'br' },
  
    { type: 'text', text: '那榆荫下的一潭，'},
    { type: 'br' },
    { type: 'text', text: '不是清泉，是天上虹；'},
    { type: 'br' },
    { type: 'text', text: '揉碎在浮藻间，'},
    { type: 'br' },
    { type: 'text', text: '沉淀着彩虹似的梦。'},
    { type: 'br' },
    { type: 'br' },
  
    { type: 'text', text: '寻梦？撑一支长篙，'},
    { type: 'br' },
    { type: 'text', text: '向青草更青处漫溯；'},
    { type: 'br' },
    { type: 'text', text: '满载一船星辉，'},
    { type: 'br' },
    { type: 'text', text: '在星辉斑斓里放歌。'},
    { type: 'br' },
    { type: 'br' },

    { type: 'text', text: '但我不能放歌，'},
    { type: 'br' },
    { type: 'text', text: '悄悄是别离的笙箫；'},
    { type: 'br' },
    { type: 'text', text: '夏虫也为我沉默，'},
    { type: 'br' },
    { type: 'text', text: '沉默是今晚的康桥！'},
    { type: 'br' },
    { type: 'br' },
 
    { type: 'text', text: '悄悄的我走了，'},
    { type: 'br' },
    { type: 'text', text: '正如我悄悄的来；'},
    { type: 'br' },
    { type: 'text', text: '我挥一挥衣袖，'},
    { type: 'br' },
    { type: 'text', text: '不带走一片云彩。！'},
    { type: 'br' },
    { type: 'br' },
    
]

var autoType = new AutoType(content, arr);
autoType.once("end", function() {
    addClass(content, 'end')
})