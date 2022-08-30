function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}
function openMenu(){
    document.getElementById('content').style.width = '100%';
    document.getElementById('content').style.height = '120vh';
}
function closeMenu(){
    document.getElementById('content').style.width = '0%';
    document.getElementById('content').style.height = '0vh';
}
var count = 0;
let react = document.getElementById('react');
    react.addEventListener("click", function(){
        count++
        var like = document.getElementById('like');
        like.style.transition = '0.5s';
        like.innerHTML = count;
        like.style.transition = '0.5s';
        
});

//this postion of the code works on the search part

var closeSearch = document.getElementById('close-search');
closeSearch.addEventListener('click', function () {
    var search = document.getElementById('search-1');
    search.style.width = '0%';
    search.style.height = '0vh';
})
var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function(){
    var search = document.getElementById('search-1');
    search.style.width = '100%';
    search.style.height = '100vh';
})
//faorite zone
var fav = document.getElementById('close-fav');
fav.addEventListener('click', function () {
    var favourite = document.getElementById('favourite');
    favourite.style.width = '0%';
    favourite.style.height = '0vh';
})
var favM = document.getElementById('fav-menu');
favM.addEventListener('click', function () {
    var favourite = document.getElementById('favourite');
    favourite.style.width = '100%';
    favourite.style.height = '100vh';
})

//notification zone
var notification = document.getElementById('close-not');
notification.addEventListener('click', function () {
    var notification = document.getElementById('notification');
    notification.style.width = '0%';
    notification.style.height = '0vh';
})
var notif = document.getElementById('notif');
notif.addEventListener('click', function () {
    var notification = document.getElementById('notification');
    notification.style.width = '100%';
    notification.style.height = '100vh';
})
//chat zone
var closeChat = document.getElementById('close-chat');
closeChat.addEventListener('click', function () {
    var chatZone = document.getElementById('chat-zone');
    chatZone.style.width = '0%';
    chatZone.style.height = '0vh';
})
var chatArea = document.getElementById('chat-area');
chatArea.addEventListener('click', function () {
    var chatZone = document.getElementById('chat-zone');
    chatZone.style.width = '100%';
    chatZone.style.height = '100vh';
})
//post zone
var closePost = document.getElementById('close-post');
closePost.addEventListener('click', function () {
    var postZone = document.getElementById('post-zone');
    postZone.style.width = '0%';
    postZone.style.height = '0vh';
})
var post = document.getElementById('post');
post.addEventListener('click', function () {
    var postZone = document.getElementById('post-zone');
    postZone.style.width = '100%';
    postZone.style.height = '100vh';
})
