Meteor.publish('main', function(){
  return [
    Images.find({
      'metadata._Resumable': {
        $exists: false
      }
    })
  ];
});