
$('.discover-more-target').click(function(){
  $('.task').css('display','block');
  $('.buyPrice').val($(this).parent().prev().children().text());
  $('.buyG').val($(this).parent().parent().children().eq(0).children().text());
  
});
$('.buygoods').click(function(){
  if($('.buyName').val() !='' && $('.buySex').val() !='' && $('.buyPhone').val() !='' && $('.buyAdd').val() !=''){
      $.ajax({
      type: "GET",
      url: "http://localhost:3000/buy",
      data: {
          username: $('.buyName').val(),
          sex:$('.buySex').val(),
          phone:$('.buyPhone').val(),
          goods:$('.buyG').val(),
          address: $('.buyAdd').val(),
          price:$('.buyPrice').val()

      },
      success: function (data) {
          alert('下单成功');
          location.reload();
      }
  });
  }else{
      alert('请正确输入相关信息');
  }
});
$('.quxiao').on('click',function(){
  $('.task').css('display','none');
});


  $('.coidea-3d-carousel').imagesLoaded({
    background: true
  }, function() {
    
    $('.loader').addClass('is-loaded');

    
    var timeline = new TimelineMax(),
      carousel = $(".coidea-3d-carousel"),
      boxes = $(".item"),
      stage = $(".stage"),
      $nav = $("#nav"),
      angle = 360 / 3;

      
    TweenMax.set(stage, {
      css: {
        perspective: "86vw",
        transformStyle: "preserve-3d"
      }
    });

    
    boxes.each(function(index, element) {
      TweenMax.set(element, {
        css: {
          rotationY: index * angle
        }
      });
      element.dataset.rotationY = index * angle;
    });


    
    $nav.on("click", "#next", function() {

      timeline
        .staggerTo($(boxes).find('.description-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "100%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo($(boxes).find('.headline-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "80%";
            },
            height: function(index, element) {
              return "80%";
            },
            top: function(index, element) {
              return "10%";
            },
            right: function(index, element) {
              return "10%";
            },
            bottom: function(index, element) {
              return "10%";
            },
            left: function(index, element) {
              return "10%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(boxes, 1, {
          cycle: {
            rotationY: function(index, element) {
              var y1 = +element.dataset.rotationY;
              var y2 = y1 - angle;
              element.dataset.rotationY = y2;
              return y2;
            }
          },
          ease: Expo.easeInOut
        }, 0, '+=0.25')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "100%";
            },
            height: function(index, element) {
              return "100%";
            },
            top: function(index, element) {
              return "0%";
            },
            right: function(index, element) {
              return "0%";
            },
            bottom: function(index, element) {
              return "0%";
            },
            left: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '+=0.3')
        .staggerTo($(boxes).find('.description-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo($(boxes).find('.headline-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
    });


    // click on prev item
    $nav.on("click", "#prev", function() {

      timeline
        .staggerTo($(boxes).find('.description-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "-100%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo($(boxes).find('.headline-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "-100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "-100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "80%";
            },
            height: function(index, element) {
              return "80%";
            },
            top: function(index, element) {
              return "10%";
            },
            right: function(index, element) {
              return "10%";
            },
            bottom: function(index, element) {
              return "10%";
            },
            left: function(index, element) {
              return "10%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(boxes, 1, {
          cycle: {
            rotationY: function(index, element) {
              var y1 = +element.dataset.rotationY;
              var y2 = y1 + angle;
              element.dataset.rotationY = y2;
              return y2;
            }
          },
          ease: Expo.easeInOut
        }, 0, '+=0.25')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "100%";
            },
            height: function(index, element) {
              return "100%";
            },
            top: function(index, element) {
              return "0%";
            },
            right: function(index, element) {
              return "0%";
            },
            bottom: function(index, element) {
              return "0%";
            },
            left: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '+=0.3')
        .staggerTo($(boxes).find('.description-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo($(boxes).find('.headline-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo($(boxes).find('.discover-more-target'), 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5');
    });

  });