//返回当前日期
function getCurrentDate() {
    var myDate = new Date();
    //获取当前年
    var year = myDate.getFullYear();
    //获取当前月
    var month = myDate.getMonth() + 1;
    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours();       //获取当前小时数(0-23)
    var m = myDate.getMinutes();     //获取当前分钟数(0-59)
    var s = myDate.getSeconds();

    //var nowTime = year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
    var nowDate = year + '-' + p(month) + "-" + p(date);
    return nowDate;

    function p(s) {
        return s < 10 ? '0' + s : s;
    };
};

//秒换算时分秒
function secondsToTimeString(sec) {
    sec = +(sec || 0);
    var result = '';
    if (sec) {
        var hour = Math.floor(sec / 3600);
        result += hour ? (hour + '小时') : '';
        sec -= 3600 * hour;
        var miniute = Math.floor(sec / 60);
        result += miniute ? (miniute + '分钟') : '';
        sec -= 60 * miniute;
        result += sec ? (sec + '秒') : '';
        //if (miniute) {
        //    sec -= 60 * miniute;
        //    result += sec ? (sec + '秒') : '钟';
        //} else {
        //    sec -= 60 * miniute;
        //    result += sec ? (sec + '秒') : '';
        //}
    }
    else {
        result = '0';
    }
    return result;
}



//分换算时分
function minuteToTimeString(sec) {
    sec = +(sec || 0);
    var result = '';
    if (sec) {
        var hour = Math.floor(sec / 60);
        result += hour ? (hour + '时') : '';
        sec -= 60 * hour;
        result += sec ? (sec + '分钟') : '';
    }
    else {
        result = '0';
    }
    return result;
}