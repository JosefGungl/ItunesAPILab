$('#search-btn').click(function (e){
    e.preventDefault()
   const params = {
       term: 'jack johnson',
       limit: 10
   }

   $.get(
       'https://itunes.apple.com/search?',
       params,
       function (data){
           for(let item of data.results){
               $('#results').append(`
               <h3>${result.trackName}</h3>
               `)
           }
       }
   )

});
