define(['jquery', 'exports'], function($, exports) {
    exports.req = function(data) {
        var char = $('#whichChar p')[0].innerHTML;
        if(char) {
            var x = data.x;
            var y = data.y;
            var l = data.locks;
            var len = l.length;
            var points = '';
            for(var k in x) {
                if(parseInt(k) + 1 < len && !l[parseInt(k) + 1]) {
                    points += '@';
                }
                points += x[k] + '/' + y[k] + '/';
            }
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/judge",
                dataType: "jsonp",
                data : {
                    c : char,
                    points : points
                },
                success : function(res) {
                    if(res == 0) {
                        $('#revertChar').click();
                    }
                },
                jsonpCallback : 'test'
            });
        }
    };
});