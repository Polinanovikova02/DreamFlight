$(document).ready(function(){
  
    $(".button_click_1").click(function(){
      $(".period_pic").addClass("open");
      $(".period_text").addClass("open");
      $(".kap_pic, .butan_pic, .kana_pic, .atlant_pic").removeClass("open");
      $(".kap_text, .butan_text, .kana_text, .atlant_text").removeClass("open");
    });

    $(".button_click_2").click(function(){
        $(".kap_pic").addClass("open");
        $(".kap_text").addClass("open");
        $(".period_pic, .butan_pic, .kana_pic, .atlant_pic").removeClass("open");
        $(".period_text, .butan_text, .kana_text, .atlant_text").removeClass("open");
    });

    $(".button_click_3").click(function(){
        $(".butan_pic").addClass("open");
        $(".butan_text").addClass("open");
        $(".period_pic, .kap_pic, .kana_pic, .atlant_pic").removeClass("open");
        $(".period_text, .kap_text, .kana_text, .atlant_text").removeClass("open");
    });

    $(".button_click_4").click(function(){
        $(".kana_pic").addClass("open");
        $(".kana_text").addClass("open");
        $(".period_pic, .kap_pic, .butan_pic, .atlant_pic").removeClass("open");
        $(".period_text, .kap_text, .butan_text, .atlant_text").removeClass("open");
    });

    $(".button_click_5").click(function(){
        $(".atlant_pic").addClass("open");
        $(".atlant_text").addClass("open");
        $(".period_pic, .kap_pic, .butan_pic, .kana_pic").removeClass("open");
        $(".period_text, .kap_text, .butan_text, .kana_text").removeClass("open");
    });
  });
