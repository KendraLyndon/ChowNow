$(document).ready(function(){
  var food = $('#food');
  var addItem = $('#add_item');
  var quantity = $('#quantity');
  var cart = $('#cart');
  var subtotal = $('#subtotal');
  var tax = $('#tax');
  var total = $('#total');
  var submit = $('#submit');
  var ids = [];
  var prices = [];
  var orderData = [];

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu'
  }).done(function(results){
    var menu = results.menu;
    addOptGroups(menu);
    addMenuItems(menu);
    addIds(menu,ids);
  });

  $(addItem).on('mouseenter',function(){
    $(this).fadeTo('fast',1);
  })

  $(addItem).on('mouseleave'),function(){
    $(this).fadeTo('fast',.8);
  }

  $(addItem).on('click',function(event){
    event.preventDefault();
    var q = Number(quantity.val());
    addToCart(q,ids);
    addTotals(prices);
  })

  $(submit).on('mouseenter',function(){
    $(this).fadeTo('fast',1);
  })

  $(submit).on('mouseleave'),function(){
    $(this).fadeTo('fast',.8);
  }

  $(submit).on('click',function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'https://galvanize-eats-api.herokuapp.com/orders',
      data: orderData,
    }).done(function(response){
      alert('Your Order has been Submitted!');
    })
  })

  function addOptGroups(menu){
    var groups = [];
    menu.forEach(function(item){
      if(groups.indexOf(item.type)=== -1){
        var optGroup = document.createElement('optgroup');
        if(item.type === 'burger'){
          $(optGroup).attr('label','Burgers');
        } else if (item.type === 'pizza'){
          $(optGroup).attr('label','Pizza');
        }
        $(optGroup).attr('id',item.type)
        $(food).append(optGroup);
        groups.push(item.type);
      }
    })
  }

  function addMenuItems(menu){
    menu.forEach(function(item){
      var matchedGroup = $('#'+item.type);
      var menuItem = document.createElement('option');
      var price = document.createElement('span');
      $(menuItem).html(item.name+' ');
      $(price).html(item.price);
      $(menuItem).attr('id',item.id);
      $(menuItem).attr('value',item.price);
      $(price).appendTo(menuItem);
      $(menuItem).appendTo(matchedGroup);
    })
  }

  function addIds(menu,ids){
    menu.forEach(function(item){
      ids.push(item.id);
    })
    return ids;
  }

  function addToCart(q,ids){
    for(var i=0;i<ids.length;i++){
      var option = $('#'+ids[i]);
      if(option[0].selected){
        for(var j=0 ; j<q; j++){
          var container = document.createElement('div');
          $(container).addClass('container');
          var menuItem = document.createElement('p');
          $(menuItem).html(option.html());
          $(menuItem).find('span').remove();
          $(menuItem).addClass('inline_name');
          var price = document.createElement('p');
          $(price).html(option.val());
          $(price).addClass('inline_price')
          $(menuItem).attr('id',option.val());
          $(container).append(menuItem);
          $(container).append(price);
          $(cart).append(container);
          addPriceToArray($(option).val(),prices);
          addOrderData(orderData,menuItem);
        }
      }
    }
  }

  function addOrderData(orderData,menuItem){
    var item = {};
    var name = $(menuItem).html();
    item[name] = Number($(menuItem).attr('id'));
    orderData.push(item);
  }

  function addTotals(prices){
    $(subtotal).html(calcSubtotal(prices));
    $(tax).html(calcTax(subtotal.html()));
    $(total).html(calcTotal(subtotal.html(),tax.html()));
  }
})
