<template>
  <b-container class="root">
    <b-row>
      <div class="col-lg-1" />

      <div class="col-lg-10 my-4" id="top">
        <h5 class="title title-play">How To Play</h5>
        <p>
          このページでは雙峰祭当日の遊び方と注意事項について説明します。<br />
        </p>

        <h4 class="title-play mt-4">生配信企画</h4>
        <p>
          当初の告知とは異なり、残念ながら一般の方にサーバーに入っていただいて筑波大学 Minecraftキャンパスを楽しんでいただくことはできなくなってしまいました。<br />
          そこで、予定を変更して<b>サーバー内の生配信</b>を行うこととなりました！<br /><br />
          配信では、サーバー内の様子やミニゲームの様子をお届けする予定です。ぜひご参加ください！<br /><br />
        </p>

        <b-container>
          <b-row class="mt-3 mb-5">
            <div class="col-lg-6">
              <a href="https://www.youtube.com/watch?v=ibn_eg8lNro" class="btn btn--orange btn-c">YouTube Live（11/6）に参加</a>
            </div>
            <div class="col-lg-6">
              <a href="https://www.youtube.com/watch?v=kZnndJl7k7g" class="btn btn--orange btn-c">YouTube Live（11/7）に参加</a>
            </div>
          </b-row>
        </b-container>

        <h4 class="title-attention mt-4">雙峰祭後の楽しみ方（予定）</h4>
        <p>
          <b>雙峰祭後、改めて一般ユーザー向けにサーバーを開放</b>し、キャンパス建築を楽しんでもらおうと考えています。<br />
          そして、建設したキャンパスの中でのミニゲームやイベント企画の開催も検討しています。<br />
          その際には当サイトやTwitter上で告知いたしますので、ぜひご確認ください。
        </p>

        <hr class="my-4" />

        <h5 class="title title-attention" id="attention">Attention</h5>
        <p>
          <b>生配信時</b><br />
          ・コメント欄では節度ある言動を心がけ、誹謗中傷や公序良俗に反する内容や、その他不適切な内容を書き込むことはおやめください。<br /><br />
          <b>サーバーに参加する際</b><br />
          ・当日はサーバーへの負荷を考慮し参加人数に制限をかけさせていただきますので、譲り合ってご参加ください。<br />
          ・サーバーに負荷をかける行為は行わないでください。<br />
          ・Mod等チートツールを使用しての参加はご遠慮ください。<br />
          ・ゲーム内チャットにおいての暴言、名誉棄損、誹謗中傷、公序良俗に反する発言などは行わないでください。<br />
          ・キャンパス等ワールドを破壊する行為は行わないでください。<br />
          ・その他、問題のある行為や過度に迷惑をかける行為を行わないでください。<br />
          ・以上のことが守られない場合、発見次第すみやかに追放等の処置を行います。
        </p>
      </div>

      <div class="col-lg-1" />
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HowToPlayPage"
}
</script>

<style scoped>
  .root {
    color: #333333;
    text-align: left;
  }

  .title {
    font-family: 'DotGothic16', sans-serif;
    font-size: 2.2em;
  }

  .title-play:first-letter {
    color: #00C0D4;
  }

  .title-sub {
    font-family: 'DotGothic16', sans-serif;
    font-size: 1.6em;
  }

  .title-attention:first-letter {
    color: #e53935;
  }

  a.btn--orange {
    color: #fff;
    background-color: #c4302b;
  }

  a.btn--orange:hover {
    color: #fff;
    background: #D64946;
  }

  a.btn-c {
    font-size: 1.5rem;
    position: relative;
    padding: 1.0rem 3rem 1.0rem 3rem;
  }

  a.btn-c i.fa {
    margin-right: 1rem;
  }

</style>