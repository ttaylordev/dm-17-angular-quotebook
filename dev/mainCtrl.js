angular.module( "quoteBookApp" ).controller( "mainCtrl", function ( $scope, mainSvc ) {


  var getDataArr = mainSvc.getDataArr;
  var dataArr = getDataArr();

  dataArr.then( function ( dataArr ) {
    var newArr = [];
    for ( var i = 0; i < dataArr.quotes.length; i++ ) {
      dataArr.quotes[ i ].id = i;
      // interesting behavior, why does the console lotg out complete arrays with id's on each step, as if the id had already been added for all indices?
      console.log( i, ' i' );
      console.log( ' dataArr: ', dataArr.quotes );
      newArr.push( dataArr.quotes[ i ] );
    };
    console.log( newArr );
    $scope.dataArr = newArr;
  } );

  $scope.removeItem = function ( identifier ) {
    console.log($scope.dataArr);
    var ind = $scope.dataArr.indexOf(Object.identifier)
    console.log(ind);
    console.log( identifier, ' identifier from removeItem' );
    console.log('$scope.dataArr', $scope.dataArr);
    var removed = $scope.dataArr.splice(ind, 1);
  }

  $scope.addItem = function ( item ) {
    console.log( item, ' item from addItem' );
    // dataArr.push( item );
  }


} );
