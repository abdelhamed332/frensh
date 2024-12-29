// وظيفة لفتح النافذة المنبثقة عند الضغط على زر "اتصل الآن"
function openModal() {
    document.getElementById('contactModal').style.display = "block";
}

// وظيفة لإغلاق النافذة المنبثقة عند الضغط على زر "×"
function closeModal() {
    document.getElementById('contactModal').style.display = "none";
}

// إغلاق النافذة المنبثقة إذا تم الضغط في أي مكان خارج النافذة
window.onclick = function(event) {
    var modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
