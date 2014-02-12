AppView = Backbone.View.extend({
  
  template: _.template($('#tmpl_sexe').html()),
  template2: _.template($('#tmpl_friend').html()),

  events:{
    'keyup #search': 'search', 
    'keyup #search_last': 'search_last',	
    'keyup #count_likes':'count_likes'
  },

 initialize: function(){
    this.listenTo(this.collection, 'reset', this.render.bind(this));
  
  }, 

  search: function(e){
    this.collection.filterByName(e.target.value);
  },

  search_last: function(e){
    this.collection.filterByLastName(e.target.value);
  },


  count_friend:function(e){
     this.collection.countFriends(e.target.value);
  },

  count_likes:function(e){
     this.collection.countLikes(e.target.value);
  },

  


  render: function(friends){
 
	// Affichage et statistiques du nombre d'amis par sexe en fonction des recherche effectuées

    var $sexe_container = this.$el.find('#sexe_container');

    $sexe_container.empty();
      var nbMen=0;
      var nbWoman=0;
      var i=0;	

    friends.forEach(function(friend, i){	
      if(friend.get('sex')=="female"){nbWoman++}
              else nbMen++;
    }, this);
    i=nbMen+nbWoman; 
    $sexe_container.append($(this.template({
        
  	
        total: i,
        men: Math.floor((nbMen/i)*100),
        women : Math.floor((nbWoman/i)*100) 
      })));

     var $trombinoscope = this.$el.find('#trombinoscope');

    $trombinoscope.empty();

    friends.forEach(function(friend, i){
      $trombinoscope.append($(this.template2({
        pic: friend.get('pic'),
        last_name: friend.get('last_name'),
        first_name: friend.get('first_name'),
        likes_count: friend.get('likes_count'),
        friend_count : friend.get('friend_count')
      })));
    }, this);

  }
});
