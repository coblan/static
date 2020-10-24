/*
定制化sphinx主题read the doc
content_width=1200px   80%

*/
var scripts = document.getElementsByTagName('script');
var script = scripts[scripts.length - 1];
var scriptURL = script.src;

var ex ={
     parseSearch (queryString) {
        var queryString = queryString || location.search
        if(queryString.startsWith('?')){
            var queryString=queryString.substring(1)
        }
        var params = {}
        // Split into key/value pairs
        var queries = queryString.split("&");
        // Convert the array of strings into an object
        for (var i = 0; i < queries.length; i++ ) {
            var mt = /([^=]+?)=(.+)/.exec(queries[i])
            if(mt){
                params[mt[1]] = decodeURI(mt[2]);
            }
        }
        return params;
    }
}


if(location.pathname.endsWith('/index.html')){
    location='colorapi/color.html'
}
setTimeout(function(){
    $('#rtd-search-form input[name="q"]').attr('placeholder','搜索')
    var querystr = /\?(.+)$/.exec(scriptURL)[1]
    var search_args = ex.parseSearch(querystr)
    if(search_args.content_width){
        $('.wy-nav-content').css("max-width",search_args.content_width)
    }
},500)

