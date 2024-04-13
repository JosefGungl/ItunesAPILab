$("#searchMusic").on("click", function (e) {
    e.preventDefault();
    limit = $("#limit").val();
    let artist = $("#artist").val();
    $.get({
        url: "https://itunes.apple.com/search?term=" + artist + "&limit" + limit,
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {
            console.log(result);
            $('#display').empty();
            search(result)

        },
        error: function () {
            alert('Failed!');
        }

    });
});

function search(result) {
    for (let i = 0; i < limit; i++) {
        let albumName = result.results[i].collectionName;
        let artistName = result.results[i].artistName;
        let cover = result.results[i].artworkUrl100;
        let nameSong = result.results[i].trackName;

        $("#display").append(`
        <div class="row g-2 p-2">
            <div class="col col-auto">
                <img src="${cover}">
            </div>
            <div class="col align-content-center col-auto">
            <h3><i class="fa-solid fa-record-vinyl"></i>  ${nameSong}</h3>
            <h5><i class="fa-solid fa-user"></i>  ${artistName}</h5>
            <h5><i class="fa-solid fa-rectangle-list"></i>  ${albumName}</h5>
            </div>
        </div>
        `)
    }
}
