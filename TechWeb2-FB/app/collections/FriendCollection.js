
FriendCollection = Backbone.Collection.extend({
  model: FriendModel,

  initialize: function(){
  },



  // Recherche par Prénom


  filterByName: function(name){
    name = name.toLowerCase();

    var friends = this.filter(function(friend){
      return friend.get('first_name').toLowerCase().indexOf(name) !== -1;
    });


  this.trigger('reset', new FriendCollection(friends));
  },



 // Recherche par Nom


  filterByLastName: function(lastName){
    lastName = lastName.toLowerCase();

    var friends = this.filter(function(friend){
      return friend.get('last_name').toLowerCase().indexOf(lastName) !== -1;
    });


  this.trigger('reset', new FriendCollection(friends));
  },


 // Recherche par nombre de Like



countFriends: function(count){
   
    var friends = this.filter(function(friend){
    if(friend.get('friend_count') > 5){  
      return friend.get('friend_count');
    }
    });

    this.trigger('reset', new FriendCollection(friends));
  } 


/*
  countLikes: function(count){
   
    var friends = this.filter(function(friend){
    if(friend.get('likes_count') > count-1){  
      return friend.get('likes_count');
    }
    });

    this.trigger('reset', new FriendCollection(friends));
  } 
*/





  


  
});
