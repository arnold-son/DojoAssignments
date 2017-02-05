$("img").click(function(){
    var url = "http://www.anapioficeandfire.com/api/houses/" + $(this).attr("id") + "/";
    console.log(url);
    $.get(url,function(res){
        var str = "<h1>"+res.name+"</h1><br><h5>Words:</h5><p>"+res.words+"</p>";
        str+= "<h5>Titles:</h5><ul>"
        for(var i = 0; i<res.titles.length; i++){
            str+="<li>"+res.titles[i]+"</li>";
        }
        str+= "</ul>";
        $(".info").html(str);
        console.log(res.words);
    });
});
