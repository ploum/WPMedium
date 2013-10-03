<?php
/**
 * @package WordPress
 * @subpackage WPMedium
 * @since WPMedium 1.0
 */
?>

<?php get_sidebar(); ?>

			<footer id="mastfoot" class="site-footer">

				<div class="footer-inner">

					<div class="footer-copyright">
						<span class="copyright"><?php printf( '&copy; %s &mdash; <a href="%s">%s</a>', date( 'Y' ), home_url(), get_bloginfo( 'name' ) ); ?></span>
					</div>

					<div class="footer-credit">
						<span class="credit"><?php printf( '%s <a href="http://wordpress.org">WordPress</a> &mdash; %s <a href="http://www.caercam.org/wpmedium">WPMedium</a> %s <a href="http://www.caercam.org/">CaerCam</a>', __( 'Proudly Powered By', 'wpmedium' ), __( 'Theme', 'wpmedium' ), __( 'By', 'wpmedium' ) ); ?></span>
					</div>

				</div>

			</footer><!-- #footer -->

		</div><!-- .site -->

<?php wp_footer(); ?>

	</body>

</html>