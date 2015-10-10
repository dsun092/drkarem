loadModalJavaScript();

function loadModalJavaScript() {
      function createModal(dom){
        console.log("Created!");
        var src = $(dom).attr("src");

        $("#modal_select").attr("name", src);
        $(".showPic").attr("src", src);

        modalShow();
      }

      var mOverlay = getId("modal_window");
      var mClose = getId("modal_close");
      var modal = getId("modal_holder");
      var modalOpen = false;
      var imgs;
      imgs = $(".getSrc");
      imgs.each(function(){
        $(this).on("click", function(){createModal(this);});
      });

      var lastFocus;
      var i;

      function getId(id){
        return document.getElementById(id);
      }

      function modalShow(){
        console.log("Clicked!");
        lastFocus=document.activeElement;
        console.log(mOverlay);
        mOverlay.setAttribute("aria-hidden", "false");
        modalOpen = true;
        modal.focus();
      }

      function modalClose ( event ) {
        if (modalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
          mOverlay.setAttribute('aria-hidden', 'true');
          modalOpen = false;
          lastFocus.focus();
        }
       }

      mOverlay.addEventListener('click', function( e ) {
        if (e.target == modal.parentNode) {
           modalClose( e );
         }
      }, false);

      mClose.addEventListener('click', modalClose);
    };