function _(el) {
    return document.getElementById(el);
}

function uploadfile() {
    var file = _('file').files[0];
    var formdata = new FormData();

    _('myBtn').disabled = true;

    formdata.append('file', file);

    var ajax = new XMLHttpRequest();

    ajax.upload.addEventListener('progress', progressHandler, false);
    ajax.addEventListener('load', completeHandler, false);
    ajax.open('POST', 'fileupload.php');
    ajax.send(formdata);
}

function progressHandler(ev) {
    _('loaded_n_total').innerHTML = 'Upladed ' + ev.loaded + ' bytes of ' + ev.total;
    var percent = (ev.loaded / ev.total) * 100;
    _('progressBar').value = Math.round(percent);
    _('status').innerHTML = Math.round(percent) + '% uploaded...';
}

function completeHandler(ev) {
    _('status').innerHTML = ev.target.responseText;
    _('progressBar').value = 0;
    _('myBtn').disabled = false;
}
