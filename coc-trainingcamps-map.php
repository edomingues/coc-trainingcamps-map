<?php
/*
Plugin Name: Google Maps with Training Spots (COC Training Camps)
Plugin URI: 
Description: Plugin to show a map with markers on the orienteering maps location.
Version: 0.0.2
Author: Edgar Domingues
Author URI: 
License: GPL2
*/

function edomingues_enqueue_scripts()
{
    wp_register_script( 'google-maps-api-js', 'https://maps.googleapis.com/maps/api/js', array(), null, false);

    wp_register_script( 'edomingues-map', plugins_url( '/js/map.js', __FILE__ ) , array('google-maps-api-js'), '20140830', true);
 
    wp_enqueue_script( 'edomingues-map' );
}
add_action( 'wp_enqueue_scripts', 'edomingues_enqueue_scripts' );

function edomingues_enqueue_styles()
{
    wp_register_style( 'edomingues-map', plugins_url( '/css/map.css', __FILE__ ), array(), '30140830', 'all' );
 
    wp_enqueue_style( 'edomingues-map' );
}
add_action( 'wp_enqueue_scripts', 'edomingues_enqueue_styles' );

function edomingues_process_map_shortcode( $attributes, $content = null ) {
	/*extract(shortcode_atts( array(
		'class' => ''
	), $attributes ));*/

	//return file_get_contents(dirname(__FILE__) . DIRECTORY_SEPARATOR . 'html' . DIRECTORY_SEPARATOR . 'template.htm');
	return file_get_contents(plugins_url('html/template.htm', __FILE__));

}
add_shortcode('map', 'edomingues_process_map_shortcode');


