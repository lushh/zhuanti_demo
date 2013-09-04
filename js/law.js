/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-9-3
 * Time: 上午10:37
 * To change this template use File | Settings | File Templates.
 */
function PageObj(){

}

PageObj.prototype.init = function(){
    $(".slideTxtBox").slide();
}

$(function(){
    var pageobj = new PageObj();
    pageobj.init();
})
