let hasLiked = localStorage.getItem('hasLiked') === 'true';
let hasDisliked = localStorage.getItem('hasDisliked') === 'true';

let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;
let dislikeCount = localStorage.getItem('dislikeCount') ? parseInt(localStorage.getItem('dislikeCount')) : 0;

document.getElementById('like-count').innerText = likeCount;
document.getElementById('dislike-count').innerText = dislikeCount;

document.getElementById('like-btn').addEventListener('click', function() {
    if (!hasLiked && !hasDisliked) {
        likeCount++;
        localStorage.setItem('likeCount', likeCount);
        document.getElementById('like-count').innerText = likeCount;
        hasLiked = true;
        localStorage.setItem('hasLiked', 'true');
    }
});

document.getElementById('dislike-btn').addEventListener('click', function() {
    if (!hasLiked && !hasDisliked) {
        dislikeCount++;
        localStorage.setItem('dislikeCount', dislikeCount);
        document.getElementById('dislike-count').innerText = dislikeCount;
        hasDisliked = true;
        localStorage.setItem('hasDisliked', 'true');
    }
});

