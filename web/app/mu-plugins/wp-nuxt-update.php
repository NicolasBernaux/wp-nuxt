<?php
namespace WpNuxt;

/**
 * Update for a new generate
 */
class WpNuxt {
	/**
	 * Contructor
	 */
	public function __construct() {
		add_action( 'save_post', array( $this, 'update' ), 10, 3 );
		add_action( 'acf/save_post', array( $this, 'update' ), 10, 3 );
	}

	public function update() {
		$update_method = getenv( 'UPDATE_METHOD' );
		if ( ! $update_method ) {
			return false;
		} elseif ( 'git' === $update_method ) {
			return $this->update_git();
		}

		return false;
	}

	public function update_git( $message = null ) {
		$deploy_branch  = getenv( 'GIT_UPDATE_BRANCH' );
		$current_branch = shell_exec( 'git rev-parse --abbrev-ref HEAD' );

		if ( ! $message ) {
			$message = ( new \DateTime() )->format( 'Y-m-d H:i:s' );
		}

		if ( $deploy_branch !== $current_branch ) {
			shell_exec( 'git checkout ' . $deploy_branch );
			$current_branch = shell_exec( 'git rev-parse --abbrev-ref HEAD' );

			if ( $deploy_branch !== $current_branch ) {
				$new_branch = true;
				shell_exec( 'git checkout -b ' . $deploy_branch );
			}
		}

		shell_exec( 'git commit --allow-empty -m "' . $message . '"' );
		if ( $new_branch ) {
			shell_exec( ' git push --set-upstream origin ' . $deploy_branch );
		} else {
			shell_exec( 'git push' );
		}
	}
}

$wp_nuxt = new WpNuxt();
$wp_nuxt->update();
