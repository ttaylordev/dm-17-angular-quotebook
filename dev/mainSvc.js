angular.module( "quoteBookApp" ).service( "mainSvc", function ( $http ) {

  var baseUrl = './sampleData.json';
  var dataArr = [];

  var getData = function () {
    return $http( {
      method: 'GET',
      url: baseUrl
    } ).then( function ( response ) {
      dataArr = response.data;
      return dataArr;
    } );
  };

  this.getDataArr = function () {

    return getData();
  }


} );
