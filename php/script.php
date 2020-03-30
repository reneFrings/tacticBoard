<?php

    // Der Mimetype der temporären Datei wird gespeichert
    $checkType = mime_content_type($_FILES['teamLogo']['tmp_name']);

    // Array mit MimeTypes
    $arrMimeTypes = array('image/png','image/jpeg','image/svg+xml','image/gif');

    // Prüfen,ob der Mimetype der Datei im Array vorkommt oder nicht
    if (in_array($checkType, $arrMimeTypes)) {
        echo "richtig";
    }
    else{
        echo "falsch";
    }

?>