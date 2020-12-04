/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-12-03 22:29:14
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-12-03 22:29:43
 */
var Util={
  csvToObj(csvString, allHead)
  {
    let theHead = allHead;
    var csvarry = csvString.split("\r\n");
    if (csvarry[csvarry.length - 1].length == 0) {
      csvarry.shift();
      csvarry.pop();
    }
    console.log('--csvarry:', csvarry);
    // csvarry = csvarry.forEach(item => {
    //   return item.match(/^[\"]?[,]?()[\"]?[,]?$/)
    // })
    var datas = [];
    for (let s = 0; s < csvarry.length; s++) {
      var son = csvarry[s].split(",");
      // var son = son.forEach(item => {
      //   return item.match(/\\""(+)\\""/)
      // })
      var data = {};
      // for(let i=0;i<son[i].length;i++){
      //   data[son[i]] =son[++i];
      // }
      for (let i = 0; i < son.length; i++) {
        if (/\"\"/.test(son[i])) {
          data[theHead[i]] = null;
        } else {
          data[theHead[i]] = son[i];
        }

      }
      // 判断当前对象和数组最后一个对象是否group相同，如果相同，将当前对象push进前一个对象的children
      if (datas.length > 0) {
        let lastOne = datas[datas.length - 1];
        if (lastOne['Group'] == data['Group'] && data['Group']) {
          if (lastOne.hasOwnProperty('children')) {
            lastOne.children.push(data)
          } else {
            lastOne.children = [];
            lastOne.children.push(data);
          }
        }
        else {
          datas.push(data);
        }
      } else {
        datas.push(data);
      }
    }

    // for(let s=0;s<csvarry.length;s++){
    //   var headers = csvarry[s][0].split(",");
    //   var values = csvarry[s][1].split(",");
    //   for(var i = 1;i<headers.length;i++){
    //       var data = {};
    //       // var temp = csvarry[s][i].split(",");
    //           // for(var j = 0;j<temp.length;j++){
    //           //     data[headers[j]] = temp[j];
    //           // }
    //           data[headers[i]] = values[i];

    //   }
    //   datas.push(data);
    // }
    console.log('obj:', datas)
    return datas;
  },
}

export default Util;