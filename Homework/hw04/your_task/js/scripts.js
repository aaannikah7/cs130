const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";

// Note: AudioPlayer is defined in audio-player.js
let audioFile =
	"https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c";
const audioPlayer = AudioPlayer(".player", audioFile);

const search = (ev) => {
	const term = document.querySelector("#search").value;
	console.log("search for:", term);
	// issue three Spotify queries at once...
	getTracks(term);
	getAlbums(term);
	getArtist(term);
	if (ev) {
		ev.preventDefault();
	}
};

const getTracks = async function (term) {
	const urlTracks = baseURL + "?type=track&q=" + term;
	const response = await fetch(urlTracks);
	const data = await response.json();

	getTracksHTML(data);
};

const getTracksHTML = (data) => {
	trackArray = data;
	console.log(trackArray.length);
	const tracks = document.querySelector("#tracks");
	tracks.innerHTML = "";
	count = 1;

    if(trackArray.length === 0){
        tracks.innerHTML += `
            <div>
            <h2>No tracks found that match your search criteria.</h2>
            <div>
        `
    } else {
        trackArray.forEach((track) => {
            if (count <= 5) {
                tracks.innerHTML += `
                <>button class="track-item preview" data-preview-track="${track.preview_url}" data-artist="${track.artist.name}" data-name="${track.name}" data-img="${track.album.image_url}">
                <img src="${track.album.image_url}" alt="Album image of ${track.artist.name}">
                <i class="fas play-track fa-play" aria-hidden="true" ></i>
                    <div class="label">
                        <h2>${track.name}</h2>
                        <p>
                            ${track.artist.name}
                        </p>
                    </div>
                </button>
            `;
                count++;
            }
        });
    }

	

	const preview = document.querySelectorAll(".preview");
	console.log(preview);
	preview.forEach((prev) => {
		prev.addEventListener("click", (e) => {
			console.log(e.target);

			handleTrackClick(e);
		});
	});
};

const getAlbums = async function (term) {
	const urlAlbum = baseURL + "?type=album&q=" + term;
	const response = await fetch(urlAlbum);
	const data = await response.json();
    console.log(data);

	getAlbumsHTML(data);
};

const getAlbumsHTML = (data) => {
	albumArray = data;
	const albums = document.querySelector("#albums");
	albums.innerHTML = "";

    if(albumArray.length === 0){
        albums.innerHTML += `
            <div>
            <h2>No albums were returned.</h2>
            </div>
        `
    } else {
        albumArray.forEach((album) => {
			albums.innerHTML += `
            <section class="album-card" id="${album.id}">
                    <div>
                        <img src="${album.image_url}" alt="Album cover image of ${album.image_url}">
                        <h2>${album.name}</h2>
                        <div class="footer">
                            <a href="https://open.spotify.com/album/${album.id}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>
        `;
	});
    }
};

const getArtist = (term) => {
	console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);

	const elem = document.querySelector("#artist");
	elem.innerHTML = "";

	fetch(baseURL + "?type=artist&q=" + term)
		.then((response) => response.json())
		.then((data) => {
			if (data.length > 0) {
				const firstArtist = data[0];
				elem.innerHTML += getArtistHTML(firstArtist);
			}
		});
};

const getArtistHTML = (data) => {
	if (!data.image_url) {
	}

	return `
    <section class="artist-card" id="${data.id}">
        <div>
            <img src="${data.image_url}">
            <h2>${data.name}</h2>
            <div class="footer">
                <a href="${data.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
    `;
};

const handleTrackClick = (ev) => {
	const previewUrl = ev.currentTarget.getAttribute("data-preview-track");
	const track = (ev.currentTarget.getAttribute("data-name"));
	const artist = (ev.currentTarget.getAttribute("data-artist"));
    const albumImg = (ev.currentTarget.getAttribute("data-img"));
	const current = document.querySelector("#current-track");
	current.innerHTML = `
            <img src="${albumImg}">
            <i class="fas play-track fa-pause" aria-hidden="true"></i>
            <div class="label">
                <h2>${track}</h2>
                <p>${artist}</p>
            </div>
            `;
	AudioPlayer(".player", previewUrl);
};

document.querySelector("#search").onkeyup = (ev) => {
	// Number 13 is the "Enter" key on the keyboard
	console.log(ev.keyCode);
	if (ev.keyCode === 13) {
		ev.preventDefault();
		search();
	}
};