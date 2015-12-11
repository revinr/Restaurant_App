angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var mdata =[];
  return{
  setdata:function(e)
  {
    mdata.push(e);
  },
  getData:function()
  {
    return mdata;
  }
}
});
