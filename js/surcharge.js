(function($) {

  var sfplJS = {

      init : function(){
        this.moveHTMlBlocs();
        this.showNewsletterForm();
      },
      
      moveHTMlBlocs : function(){
        $(".article-intro").insertAfter(".article-title .at-content");
        $(".actus .main-title-with-link .link-view-all").insertAfter(".actus .cxp-pagination");
        $(".programme-anim .main-title-with-link .link-view-all").insertAfter(".programme-anim .cxp-pagination");
      },

      showNewsletterForm : function() {
        var $win             = $(window);
        var $doc             = $(document);
        // var wrappedElements  = '.gla-item-title, .block.partner .link-view-all, .list-articles.slider .btn-primary, .nf-form-submit .btn-primary, .article_list .la-item .link-read-more, .article-wrapper h2, .article-wrapper h4, .focus1 a, .focus2 a';
        // var animatedElements = '.la-list .la-item, .section, .section-promotions, .section-features, .social-sharing, .article-navigation, .cl-content';
      	
		$("a[href*='\\#newsletter']").click(function(){
			$('.newsletter-form').toggleClass('form-shown')
		});
		  
        // Newsletter
         if ($('.newsletter-form').length) {
           var $form = $('.newsletter-form');
      
           $form
             .detach()
             .appendTo('body');
           $form
             .find('.nf-form-input input')
             .attr('placeholder', 'Votre email');
           $form
             .find('.nf-main-content')
             .append('<a href="#" class="form-close"/>');
      
           //$('a[href*="#newsletter"]').click(function(b){
             //b.preventDefault();
      
             //$form.addClass('form-shown');
           //});
      
           $doc.click(function(e){
             var $target = $(e.target);
      
             if (($target.is('.form-close, .form-close *') || !$target.is('.nf-main-content, .nf-main-content *, [href*="#newsletter"], [href*="#newsletter"] *')) && $form.hasClass('form-shown')) {
               e.preventDefault();
      
               $form.removeClass('form-shown');
             }
      
             if (!$target.is('.lang-switcher, .lang-switcher * ')) {
               $('.lang-switcher').removeClass('is-visible');
             }
           });
      
           if (window.location.href.indexOf('#newsletter') >= 0) {
             $form.addClass('form-shown');
           }
         }
      
        //$win.load(function(){
          //$('#main').addClass('loaded');
       // }).on('load scroll', function(){
         // var winST = $win.scrollTop();
           //   });
      }

  }
  sfplJS.init();

})(jQuery);

