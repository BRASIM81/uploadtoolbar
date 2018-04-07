<?php

    $filename   = $_FILES['file']['name'];
    $tmpname    = $_FILES['file']['tmp_name'];
    $targetdir  = 'uploads/';
    $targetfile = $targetdir.$filename;

if(move_uploaded_file($tmpname, $targetfile)){
    echo $filename.' upload is complete.';
}else{
    echo 'Upload failed';
}

?>
