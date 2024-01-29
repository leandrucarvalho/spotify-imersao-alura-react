import "../Main/Main.css";
import Playlist1 from "../../assets/playlist/1.jpeg";
import Playlist2 from "../../assets/playlist/2.png";
import Playlist3 from "../../assets/playlist/3.jpeg";
import Playlist4 from "../../assets/playlist/4.jpeg";
import Playlist5 from "../../assets/playlist/5.jpeg";
import Playlist6 from "../../assets/playlist/6.jpeg";
import Playlist7 from "../../assets/playlist/7.jpeg";
import Playlist8 from "../../assets/playlist/8.jpeg";
import Playlist9 from "../../assets/playlist/9.jpeg";
import Playlist10 from "../../assets/playlist/10.jpeg";
import Playlist11 from "../../assets/playlist/11.jpeg";
import Playlist12 from "../../assets/playlist/12.jpeg";
import Playlist13 from "../../assets/playlist/13.jpeg";
import Playlist14 from "../../assets/playlist/14.jpeg";
import Playlist15 from "../../assets/playlist/15.jpeg";

const Main = () => {
  return (
    <main>
      <div class="main-container">
        {/* <!-- PLAYLIST --> */}
        <div class="playlist-container">
          <div id="result-playlists">
            <div class="playlist">
              <h1 id="greeting">Boas vindas</h1>
              <h2 class="session">Navegar por todas as seções</h2>
            </div>

            {/* <!-- LIST DE CARDS --> */}
            <div class="offer__scroll-container">
              <div class="offer__list">
                <section class="offer__list-item">
                  {/* <!-- CARD 1 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card1">
                      <img src={Playlist1} alt="" />
                      <span>Boas festas</span>
                    </div>
                  </a>

                  {/* <!-- CARD 2 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card2">
                      <img src={Playlist2} alt="" />
                      <span>Feitos para você</span>
                    </div>
                  </a>

                  {/* <!-- CARD 3 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card3">
                      <img src={Playlist3} alt="" />
                      <span>Lançamentos</span>
                    </div>
                  </a>

                  {/* <!-- CARD 4 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card4">
                      <img src={Playlist4} alt="" />
                      <span>Creators</span>
                    </div>
                  </a>

                  {/* <!-- CARD 5 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card5">
                      <img src={Playlist5} alt="" />
                      <span>Para treinar</span>
                    </div>
                  </a>

                  {/* <!-- CARD 6 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card6">
                      <img src={Playlist6} alt="" />
                      <span>Podcasts</span>
                    </div>
                  </a>

                  {/* <!-- CARD 7 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card7">
                      <img src={Playlist7} alt="" />
                      <span>Sertanejo</span>
                    </div>
                  </a>

                  {/* <!-- CARD 8 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card8">
                      <img src={Playlist8} alt="" />
                      <span>Samba e pagode</span>
                    </div>
                  </a>

                  {/* <!-- CARD 9 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card9">
                      <img src={Playlist9} alt="" />
                      <span>Funk</span>
                    </div>
                  </a>

                  {/* <!-- CARD 10 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card10">
                      <img src={Playlist10} alt="" />
                      <span>MPB</span>
                    </div>
                  </a>

                  {/* <!-- CARD 11 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card11">
                      <img src={Playlist11} alt="" />
                      <span>Rock</span>
                    </div>
                  </a>

                  {/* <!-- CARD 12 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card12">
                      <img src={Playlist12} alt="" />
                      <span>Hip Hop</span>
                    </div>
                  </a>

                  {/* <!-- CARD 13 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card13">
                      <img src={Playlist13} alt="" />
                      <span>Indie</span>
                    </div>
                  </a>

                  {/* <!-- CARD 14 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card14">
                      <img src={Playlist14} alt="" />
                      <span>Relax</span>
                    </div>
                  </a>

                  {/* <!-- CARD 15 --> */}
                  <a href="/#" class="cards">
                    <div class="cards card15">
                      <img src={Playlist15} alt="" />
                      <span>Música Latina</span>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div id="result-artist" class="hidden">
            <div class="grid-container">
              <div class="artist-card" id="">
                <div class="card-img">
                  <img
                    id="artist-img"
                    class="artist-img"
                    alt="imagem do artista"
                  />
                  <div class="play">
                    <span class="fa fa-solid fa-play"></span>
                  </div>
                </div>
                <div class="card-text">
                  <a title="Foo Fighters" class="vst" href="/#"></a>
                  <span class="artist-name" id="artist-name"></span>
                  <span class="artist-categorie">Artista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
