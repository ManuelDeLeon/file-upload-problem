
Template.card.onCreated(function () {
  this.subscribe("main");
  $.cookie( 'X-Auth-Token', Accounts._storedLoginToken());
});

  Template.card.onRendered(function () {

    Images.resumable.assignDrop( this.$(".grid.middle") );

    Images.resumable.on('fileAdded', function(file) {
      return Images.insert({
        _id: file.uniqueIdentifier,
        filename: file.fileName,
        contentType: file.file.type
      }, function(err, _id) {
        if (err) {
          console.warn("File creation failed!", err);
          return;
        }
        return Images.resumable.upload();
      });
    });

  });
