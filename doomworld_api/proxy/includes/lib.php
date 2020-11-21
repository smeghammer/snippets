<?php
/*
 * Simple proxy for connecting with ID Games API
 */
class proxy{
    const api_root = 'https://www.doomworld.com/idgames/api/api.php';

    function __construct(){ }
    
    function doRequest($request){
        $_param_string_array = Array();
        foreach ($_GET as $key => $value) { 
            array_push($_param_string_array, $key . '=' . $value);
        }
        $query_string = implode($_param_string_array,'&');
        
        /*
         * See: https://stackoverflow.com/questions/26148701/file-get-contents-ssl-operation-failed-with-code-1-failed-to-enable-crypto
         * LOCAL DEV ONLY!!
         * */
        $arrContextOptions=array(
            "ssl"=>array(
                "verify_peer"=>false,
                "verify_peer_name"=>false,
            ),
        );
        
        return(file_get_contents(self::api_root . '?' . $query_string . '&out=json', false, stream_context_create($arrContextOptions)));
    }
}