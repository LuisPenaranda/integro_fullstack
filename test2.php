<?php

function divide_array($input) {
    print_r(array_chunk(array_chunk($input, 4),2));
}

$input = array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17);

divide_array($input);

?>
