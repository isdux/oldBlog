/* global NexT: true */

$(document).ready(function () {
  $('.container-solar').hide();
  $('.main-inner').show();
  $('.site-meta').show();
  $('.footer-inner').show();


  // $(window).scroll(function() {
  //   var width = $("#main").width()

  //   if($("body").scrollTop() + $("body").height() < $(".main-inner").height() + $(".header").height() - $(".comments").height() + 44) {
  //     $(".cong-form-diy-id").width(width - 8)
  //     $(".cong-form-diy-id").addClass("cong-form-diy");
  //     $(".cong-tab-diy-id").addClass("cong-tab-diy");
  //   }
  //   else {
  //     $(".cong-form-diy-id").removeClass("cong-form-diy");
  //     $(".cong-tab-diy-id").removeClass("cong-tab-diy");
  //   }
  // });

  $(document).trigger('bootstrap:before');

  NexT.utils.isMobile() && window.FastClick.attach(document.body);

  NexT.utils.lazyLoadPostsImages();

  NexT.utils.registerBackToTop();


  $('.site-nav-toggle button').on('click', function () {
    var $siteNav = $('.site-nav');
    var ON_CLASS_NAME = 'site-nav-on';
    var isSiteNavOn = $siteNav.hasClass(ON_CLASS_NAME);
    var animateAction = isSiteNavOn ? 'slideUp' : 'slideDown';
    var animateCallback = isSiteNavOn ? 'removeClass' : 'addClass';

    $siteNav.stop()[animateAction]('fast', function () {
      $siteNav[animateCallback](ON_CLASS_NAME);
    });
  });


  CONFIG.fancybox && NexT.utils.wrapImageWithFancyBox();
  NexT.utils.embeddedVideoTransformer();
  NexT.utils.addActiveClassToMenuItem();


  // Define Motion Sequence.
  NexT.motion.integrator
    .add(NexT.motion.middleWares.logo)
    .add(NexT.motion.middleWares.menu)
    .add(NexT.motion.middleWares.postList)
    .add(NexT.motion.middleWares.sidebar);

  $(document).trigger('motion:before');

  // Bootstrap Motion.
  CONFIG.motion && NexT.motion.integrator.bootstrap();

  $(document).trigger('bootstrap:after');
});
