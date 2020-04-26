import Cookie from 'js-cookie'
function  install(Vue, options) {
    Vue.prototype.perms = function (item){
        var userInfo = Cookie.getJSON('userInfo');
        var perms = userInfo.perms;
        if(typeof(item)=="string"){
            if(perms!=null&&perms.length>0){
                for(var i=0;i<perms.length;i++){
                    if(item==perms[i]){
                        return true;
                    }
                }
            }
        }else if(typeof(item)=="object"){
            if(perms!=null&&perms.length>0){
                for(var i=0;i<perms.length;i++){
                   if(item!=null&&item.length>0){
                       for(var j=0;j<item.length;j++){
                           if(perms[i]==item[j]){
                               return true;
                           }
                       }
                   }
                }
            }
        }
        return false;
    };
}
export default install
