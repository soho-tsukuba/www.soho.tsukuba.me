<template>
  <b-container class="root">
    <b-row>
      <div class="col-lg-1" />

      <div class="col-lg-10 my-4" id="top">
        <h5 class="title title-play">How To Play</h5>
        <p>
          このページでは雙峰祭当日の遊び方と注意事項について説明します。<br />
        </p>

        <h6 class="title-sub mt-4">キャンパス建設</h6>
        <p>
          サーバー内にはある程度筑波大学本キャンパスが建築されていますが、当日も引き続きキャンパスの建築を行います。<br />
          拡張するもよし、既存のキャンパスを更に作りこむもよし。思い思いのキャンパスをみんなで作ろう！<br />
        </p>

        <h6 class="title-sub mt-4">イベント企画</h6>
        <p>
          当日は制作したキャンパスの中でイベントを行う予定です。<br />
          詳細は未定ですが、たくさんの方の参加をお待ちしております！！<br />
        </p>

        <h6 class="title-sub mt-4">生配信</h6>
        <p>
          更に、サーバー内の様子を生配信にてお届けすることになっています！<br />
          残念ながらマイクラ雙峰祭プロジェクトに参加できなかった方も、生配信を通して一生に楽しみましょう！
        </p>

        <hr class="my-4" />

        <h5 class="title title-attention" id="attention">Attention</h5>
        <p>
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

</style>