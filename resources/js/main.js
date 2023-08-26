$(function () {
  border_animation();
  open_close_menu();
});

function border_animation() {
  let li_elem_block = $('.li_elem_block'),
    li_border = $('.li_elem_block > .a_border');

  li_elem_block.bind('mouseover', function () {
    $(this).children(li_border).css({
      'width':'100%'
    });
  });
  li_elem_block.bind('mouseout', function () {
    $(this).children('.a_border').css({
      'width':'0%'
    });
  });
}

function open_close_menu() {
  let actionBtn = $('.openMe'),
      ul_header = $('.ul_header'),
      closeBtn = $('.li_elem_block a');
  actionBtn.click(function () {
    ul_header.slideToggle('medium', function() {
      if (ul_header.is(':visible'))
        $(this).css('display','flex');
    });
    closeBtn.click(function () {
      setTimeout(function () {
        ul_header.slideUp();
      }, 600);
    });
  });
}
