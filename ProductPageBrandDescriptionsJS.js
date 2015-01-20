    $(document).ready(function() {
/* Add CSS to <head> */
	$('<style type="text/css"> \
		/* Brand Logo container */\
		 .top-sep {\
		    margin: 35px 0;\
		    padding: 0;\
		    height: 3px;\
		    background: #ededed;\
		    border-width: 0;\
		}\
		.brand-banner {\
		    width: 91%;\
		    padding: 10px;\
		    border: 1px solid #ededed;\
		    border-radius: 4px;\
		    -webkit-transition: all .1s linear;\
		    transition: all .1s linear;\
		    margin: 0 auto 20px;\
		}\
		 .brand-banner .brand-logo {\
		    width: 100px;\
		    height: 100px;\
		    overflow: auto;\
		    margin: 0 auto;\
		    display: block;\
		    position: relative;\
		}\
		.brand-banner .brand-image {\
		    height: 100px;\
		    margin: 0 auto;\
		    display: block;\
		}\
		.brand-banner .brand-info {\
		    width: 85%;\
		    margin-left: 10px;\
		    margin: 0 auto;\
		    position: relative;\
		    text-align: center;\
		}\
		.brand-banner .brand-name {\
		    padding: 5px 0 5px;\
		    clear: right;\
		    display: inline-block;\
		}\
		</style>')
		.appendTo('head');
/* Find brand of current product, check the brand page for the matching brand descipriton, and add description to the DOM */
	  function ajax3() {
        return $.ajax({
          url: "/brand-descriptions/" 
	        }).done(function ( data ) {
              var html = $(data);
                  items = $('.BlockContent .brand-banner', html);
                  DankStopTheBest = html.find('#DankStopTheBest')[0].outerHTML;
              $('.ProductDescriptionContainer').append("<hr class='top-sep'>");
              $('.ProductDescriptionContainer').append(DankStopTheBest);                            
              items.each(function() {
                var brand = this.id;
                if(brand){
                var brname = '%%GLOBAL_BrandName%%'
                    replaced1 = String(brand.replace(/ /g, '')).toUpperCase(); 
                    replaced2 = String(brname.replace(/ /g, '')).toUpperCase();   
                      if( replaced1 === replaced2 ){
                          brandContent = this;
                          $('.ProductDescriptionContainer').append("<hr class='top-sep'>");
                          $('.ProductDescriptionContainer').append(brandContent);
                    }        
                }                                
/*
            }).fail(function() { 
			    	return;
*/
		    });                             
        });
      }
	  $.when(ajax3()).done(function(a3){
        var dankStopBoxProduct = $('.productTypeSpan');
        	currentProductType = $('.JointSizeHeightContainer .DetailRow:eq(2)').find('.Value').text().trim().toLowerCase();
/*
        	console.log('currentProductType 1: '+currentProductType);
        	currentProductType2 = $('.JointSizeHeightContainer .Label:contains("Type")').find('.Value').text();
        	console.log('currentProductType 2: ')+currentProductType2;
*/
/*
        	productTypes = ["ashcatcher", 
        					"bubbler", 
        					"dab rig", 
        					"glass pipe", 
        					"grinder", 
        					"recycler", 
        					"smoking accessory", 
        					"titanium product", 
        					"vaporizer", 
        					"quartz product"];
*/
		dankStopBoxProduct.text(currentProductType); 
      });
    });
