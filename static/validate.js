exports.install = function (Vue, options) {


    /**
     * 注意:  定义type 规则时 不用做非空验证
     *        只需要传入 required:true 即可
     * */
    /*保留两位小数*/
    const isvalidateMoney = (rule, value, callback) => {
        if(value != null && value != "") {
            if(!validateMoneyNumber(value)) {
                callback(new Error('请输入正确的数字，最多保留两位小数!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    };
    /*验证QQ号码*/
    const isvalidateQQ= (rule, value, callback) => {
        if(value != null && value != "") {
            if(!qq(value)) {
                callback(new Error('您输入的QQ号不正确!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    };
    /*验证手机号*/
    const isvalidatePhone= (rule, value, callback) => {
        if(value != null && value != "") {
            var reg = /^[0-9]*$/;
            if(!reg.test(value)){
                callback(new Error('该输入项只能输入数字!'))
            }else{
                var phoneReg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
                if(!phoneReg.test(value)){
                    callback(new Error('请输入正确的11位手机号码'));
                }else{
                    callback();
                }
            }
        }
        else{
            callback();
        }
    };

    /*含有非法字符(只能输入字母、汉字)*/
    const isvalidateRegexn= (rule, value, callback) => {
        if(value != null && value != "") {
            if(!regexn(value)) {
                callback(new Error('含有非法字符(只能输入字母、汉字)!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    };
    /*请输入正整数*/
    const isvalidateInteger= (rule, value, callback) => {
        if(value != null && value != "") {
            var reg = /^[0-9]*$/;
            if(!reg.test(value)){
                callback(new Error('该输入项只能输入数字!'))
            }else{
                callback();
            }
        }
        else{
            callback();
        }
    };

    /*请输入小数验证*/
    const isvalidateNumber1310=(rule,value,callback)=>{
        if(value!=null&&value!=""){
            var reg = /^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
            if(!reg.test(value)){
                callback(new Error("该项只能输入数值型！"))
            }else{
                var obj=value+"";
                var intNum=13;
                var floatNum=10;
                var onenum=intNum-floatNum;
                var b=obj.length;
                var a=obj.indexOf(".");
                var one=null;
                var two=null;
                if(a!=-1){
                    one =obj.substring(0,a).length;
                    if(one>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        two=obj.substring(a+1,b).length;
                        if(two>floatNum){
                            callback(new Error("小数部分最多只能输入"+floatNum+"位"))
                        }else{
                            callback();
                        }
                    }
                }else{
                    if(b>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        callback();
                    }
                }
            }
        }else{
            callback();
        }
    };
    /*请输入小数验证*/
    const isvalidateNumber92=(rule,value,callback)=>{
        if(value!=null&&value!=""){
            var reg = /^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
            if(!reg.test(value)){
                callback(new Error("该项只能输入数值型！"))
            }else{
                var obj=value+"";
                var intNum=9;
                var floatNum=2;
                var onenum=intNum-floatNum;
                var b=obj.length;
                var a=obj.indexOf(".");
                var one=null;
                var two=null;
                if(a!=-1){
                    one =obj.substring(0,a).length;
                    if(one>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        two=obj.substring(a+1,b).length;
                        if(two>floatNum){
                            callback(new Error("小数部分最多只能输入"+floatNum+"位"))
                        }else{
                            callback();
                        }
                    }
                }else{
                    if(b>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        callback();
                    }
                }
            }
        }else{
            callback();
        }
    };
    /*请输入小数验证*/
    const isvalidateNumber62=(rule,value,callback)=>{
        if(value!=null&&value!=""){
            var reg = /^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
            if(!reg.test(value)){
                callback(new Error("该项只能输入数值型！"))
            }else{
                var obj=value+"";
                var intNum=6;
                var floatNum=2;
                var onenum=intNum-floatNum;
                var b=obj.length;
                var a=obj.indexOf(".");
                var one=null;
                var two=null;
                if(a!=-1){
                    one =obj.substring(0,a).length;
                    if(one>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        two=obj.substring(a+1,b).length;
                        if(two>floatNum){
                            callback(new Error("小数部分最多只能输入"+floatNum+"位"))
                        }else{
                            callback();
                        }
                    }
                }else{
                    if(b>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        callback();
                    }
                }
            }
        }else{
            callback();
        }
    };
    /*请输入小数验证*/
    const isvalidateNumber103=(rule,value,callback)=>{
        if(value!=null&&value!=""){
            var reg = /^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
            if(!reg.test(value)){
                callback(new Error("该项只能输入数值型！"))
            }else{
                var obj=value+"";
                var intNum=10;
                var floatNum=3;
                var onenum=intNum-floatNum;
                var b=obj.length;
                var a=obj.indexOf(".");
                var one=null;
                var two=null;
                if(a!=-1){
                    one =obj.substring(0,a).length;
                    if(one>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        two=obj.substring(a+1,b).length;
                        if(two>floatNum){
                            callback(new Error("小数部分最多只能输入"+floatNum+"位"))
                        }else{
                            callback();
                        }
                    }
                }else{
                    if(b>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        callback();
                    }
                }
            }
        }else{
            callback();
        }
    };
    /*请输入小数验证*/
    const isvalidateNumber101=(rule,value,callback)=>{
        if(value!=null&&value!=""){
            var reg = /^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
            if(!reg.test(value)){
                callback(new Error("该项只能输入数值型！"))
            }else{
                var obj=value+"";
                var intNum=10;
                var floatNum=1;
                var onenum=intNum-floatNum;
                var b=obj.length;
                var a=obj.indexOf(".");
                var one=null;
                var two=null;
                if(a!=-1){
                    one =obj.substring(0,a).length;
                    if(one>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        two=obj.substring(a+1,b).length;
                        if(two>floatNum){
                            callback(new Error("小数部分最多只能输入"+floatNum+"位"))
                        }else{
                            callback();
                        }
                    }
                }else{
                    if(b>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        callback();
                    }
                }
            }
        }else{
            callback();
        }
    };
    /*请输入小数验证*/
    const isvalidateNumber52=(rule,value,callback)=>{
        if(value!=null&&value!=""){
            var reg = /^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
            if(!reg.test(value)){
                callback(new Error("该项只能输入数值型！"))
            }else{
                var obj=value+"";
                var intNum=5;
                var floatNum=2;
                var onenum=intNum-floatNum;
                var b=obj.length;
                var a=obj.indexOf(".");
                var one=null;
                var two=null;
                if(a!=-1){
                    one =obj.substring(0,a).length;
                    if(one>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        two=obj.substring(a+1,b).length;
                        if(two>floatNum){
                            callback(new Error("小数部分最多只能输入"+floatNum+"位"))
                        }else{
                            callback();
                        }
                    }
                }else{
                    if(b>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        callback();
                    }
                }
            }
        }else{
            callback();
        }
    };
    /*请输入小数验证10.2*/
    const isvalidateNumber102=(rule,value,callback)=>{
        if(value!=null&&value!=""){
            var reg = /^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
            if(!reg.test(value)){
                callback(new Error("该项只能输入数值型！"))
            }else{
                var obj=value+"";
                var intNum=10;
                var floatNum=2;
                var onenum=intNum-floatNum;
                var b=obj.length;
                var a=obj.indexOf(".");
                var one=null;
                var two=null;
                if(a!=-1){
                    one =obj.substring(0,a).length;
                    if(one>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        two=obj.substring(a+1,b).length;
                        if(two>floatNum){
                            callback(new Error("小数部分最多只能输入"+floatNum+"位"))
                        }else{
                            callback();
                        }
                    }
                }else{
                    if(b>onenum){
                        callback(new Error("整数部分最多只能输入"+onenum+"位"))
                    }else{
                        callback();
                    }
                }
            }
        }else{
            callback();
        }
    };

    /*只能输入数字和字母*/
    const isvalidateCanNumbersAndLetters=(rule,value,callback)=>{
        if(value!=null&&value!=""){

            var reg=/^[0-9a-zA-Z]*$/g; //只输入数字和字母的正则
            if(!reg.test(value)){
                callback(new Error("该项只能输入数字或字母！"))
            }else{
                callback();
            }
        }else{
            callback();
        }

    };




    /**
     * 参数 item
     * required true  必填项
     * maxLength  字符串的最大长度
     * min 和 max 必须同时给 min < max  type=number
     * type 手机号 mobile
     *      邮箱   email
     *      网址   url
     *      各种自定义类型   定义在 src/utils/validate 中    持续添加中.......
     * */

    Vue.prototype.filter_rules = function (item){
        let rules = [];
        if(item.required){
            rules.push({ required: true, message: '该输入项为必填项!', trigger: 'blur' });
        }
        if(item.maxLength){
            rules.push({ min:1,max:item.maxLength, message: '最多输入'+item.maxLength+'个字符!', trigger: 'blur' })
        }
        if(item.min&&item.max){
            rules.push({ min:item.min,max:item.max, message: '字符长度在'+item.min+'至'+item.max+'之间!', trigger: 'blur' })
        }
        if(item.type){
            let type = item.type;
            switch(type) {
                case 'email':
                    rules.push({ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'  });
                    break;
                case 'qq':
                    rules.push( { validator: isvalidateQQ, trigger: 'blur' });
                    break;
                case 'phone':
                    rules.push( { validator: isvalidatePhone, trigger: 'blur' });
                    break;
                case 'regexn':
                    rules.push( { validator: isvalidateRegexn, trigger: 'blur' });
                    break;
                case 'integer':
                    rules.push( { validator: isvalidateInteger, trigger: 'blur' });
                    break;
                case 'number52':
                    rules.push( { validator: isvalidateNumber52,trigger:'blur'});
                    break;
                case 'numbersAndLetters':
                    rules.push( { validator: isvalidateCanNumbersAndLetters,trigger:'blur'});
                    break;
                case 'isvalidateCanNmbersAndLetters':
                    rules.push( { validator: isvalidateCanNmbersAndLetters,trigger:'blur'});
                    break;
                case 'number1310':
                    rules.push( { validator: isvalidateNumber1310,trigger:'blur'});
                    break;
                case 'number102':
                    rules.push( { validator: isvalidateNumber102,trigger:'blur'});
                    break;
                case 'number62':
                    rules.push( { validator: isvalidateNumber62,trigger:'blur'});
                    break;
                case 'number103':
                    rules.push( { validator: isvalidateNumber103,trigger:'blur'});
                    break;
                case 'number92':
                    rules.push( { validator: isvalidateNumber92,trigger:'blur'});
                    break;
                case 'number101':
                    rules.push( { validator: isvalidateNumber101,trigger:'blur'});
                    break;
                default:
                    rule.push({});
                    break;
            }
        }


        return rules;
    };
};
