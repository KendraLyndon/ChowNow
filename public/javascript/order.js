$(document).ready(function(){
  var food = $('#food');
  var addItem = $('#add_item');
  var quantity = $('#quantity');
  var cart = $('#cart');
  var subtotal = $('#subtotal');
  var tax = $('#tax');
  var total = $('#total');
  var ids = [];
  var prices = [];
  var cartObj = {};

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu'
  }).done(function(results){
    var menu = results.menu;
    addOptGroups(menu);
    addMenuItems(menu);
    addIds(menu,ids);
  });

  $(addItem).on('click',function(event){
    event.preventDefault();
    var q = Number(quantity.val());
    addToCart(q,ids);
    $(subtotal).html(calcSubtotal(prices));
    $(tax).html(calcTax(subtotal.html()));
    $(total).html(calcTotal(subtotal.html(),tax.html()))
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
      $(menuItem).html(item.name);
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
          var chosen = document.createElement('p');
          // $(chosen).attr('id',option.val());
          $(chosen).html(option.html());
          $(cart).append(chosen);
          addPrice($(option).val(),prices);
        }
      }
    }
    // console.log(calcSubtotal(prices));
  }

  // function addPrice(string){
  //   var price = Number(string.slice(-4));
  //   prices.push(price);
  // }

})
