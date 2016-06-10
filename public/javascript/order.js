$(document).ready(function(){
  var food = $('#food');
  var addItem = $('#add_item');
  var quantity = $('#quantity');
  var receipt = $('#receipt');
  var ids = [];
  var prices = [];
  var cartObj = {};

  $.ajax({
    url: 'https://galvanize-eats-api.herokuapp.com/menu'
  }).done(function(results){
    var menu = results.menu;
    addOptGroups(menu);
    addMenuItems(menu);
    ids = addIds(menu,ids);
  });
  $(addItem).on('click',function(event){
    event.preventDefault();
    var q = Number(quantity.val());
    addToReceipt(q,ids);
    //calculate subtotal
    //calculate tax (denver sales tax 2.9%)
    //calculate total
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
      $(menuItem).html(item.name+'   '+item.price);
      $(menuItem).attr('id',item.id);
      $(menuItem).attr('value',item.price);
      $(menuItem).appendTo(matchedGroup);
    })
  }

  function addIds(menu,ids){
    menu.forEach(function(item){
      ids.push(item.id);
    })
    return ids;
  }

  function addToReceipt(q,ids){
    for(var i=0;i<ids.length;i++){
      var option = $('#'+ids[i]);
      if(option[0].selected){
        for(var j=0 ; j<q; j++){
          var chosen = document.createElement('p');
          $(chosen).html(option.html());
          $(receipt).append(chosen);
          addPrice($(chosen).html());
        }
      }
    }
  }

  function addPrice(string){
    var
  }

})
