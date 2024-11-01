<?php
/**
* Plugin Name: SyntaxHighlighter Evolved: Batch Brush
* Description: Adds support for the Batch language to the SyntaxHighlighter Evolved plugin.
* Author: Chris B. Kerndter
* Version: 0.1
* Author URI: http://www.kerndter.net
* Plugin URI: http://www.kerndter.net/syntaxhighlighter_batch
*/
 
// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_batch_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_batch_addlang' );
 
// Register the brush file with WordPress
function syntaxhighlighter_batch_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-batch', plugins_url( 'shBrushBat.js', __FILE__ ), array('syntaxhighlighter-core'), '1.2.3' );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_batch_addlang( $brushes ) {
    $brushes['batch'] = 'batch';
    return $brushes;
}
 
?>
