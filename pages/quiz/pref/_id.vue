<template>
  <section class="container">
    <div class="answer">
      <div class="row mb-2">
        <div class="col"/>
        <div class="col-10 text-center question-text">
          <span v-if="type==0">この地名の読み方、わかるかな?</span><span v-if="type==1"><span class="correct-text">正解！</span>カードをゲットしました</span><span v-if="type==2"><span class="incorrect-text">不正解！</span>もう一度答えてみよう</span>
        </div>
        <div class="col"/>
      </div>
      <div v-if="type==0 || type==2" class="row text-center">
        <div class="col-sm-2"/>
        <div class="col-sm-8 mb-2">
          <div class="location-panel">
            <img :src="questions[question_index].map_img" > 
          </div>
          <span class="pref-city-text">{{ questions[question_index].pref }}{{ questions[question_index].city }}</span><span class="town-text">{{ questions[question_index].town }}</span>
        </div>
        <div class="col-sm-2"/>
      </div>
      <div v-if="type==0 || type==2" class="row text-center mb-2">
        <div class="col-sm-2"/>
        <div class="col-sm-8 justify-content-md-center">
          <b-form inline class="justify-content-center" @submit.prevent="answer">
            <b-input ref="answer" v-model="yomi" placeholder="ここに入力してね" class="answer-input w-50 mr-2" />
            <b-button type="submit" class="answer-btn badge-pill"><span v-if="type==0">回答</span><span v-if="type==2">再回答</span></b-button>
          </b-form>
        </div>
        <div class="col-sm-2"/>
      </div>
      <div v-if="type==0 || type==2" class="row clearfix modalh">
        <div class="col"/>
        <div class="col-5 text-right">
          <b-button class="other-btn badge-pill" @click="next">別の問題に挑戦</b-button>
        </div>
        <div class="col-5">
          <b-btn v-b-modal.modal1 class="hint-btn badge-pill" @click="openModal">ヒントをみる</b-btn>
        </div>
        <b-modal id="modal1" class ="modalk" title="ヒント">
          <HINTO :hinto="hinto"/>
        </b-modal>
        <div class="col"/>
      </div>
      <div v-if="type==1">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <Card :id="card.id" :pref="card.pref" :city="card.city" :rare="card.rare" :town_yomi="card.town_yomi" :town="card.town" :map_img="card.map_img" :spot="card.spot" :spot_img="card.spot_img" :spot_guide="card.spot_guide"/>
          </div>
          <div class="col-md-5 mt-1">
            <a href="https://www.facebook.com/sharer/sharer.php?u=http://nantai.metro.co.jp" target="_blank"><img class="social-btn" src="facebook-b.png"></a>
            <a href="http://twitter.com/share?url=http://nantai.metro.co.jp" target="_blank"><img class="social-btn" src="twitter-b.png"></a>
            <a href="https://social-plugins.line.me/lineit/share?url=http://nantai.metro.co.jp" target="_blank"><img class="social-btn" src="line-b.png"></a>
            <div class="mt-1">
              <nuxt-link :to="'/collection/' + (Math.floor((card.id - 1) / 10 ) + 1)" class="collection-btn badge-pill btn" role="button"><b>コレクションをみる</b></nuxt-link>
            </div>
            <div>
              <a :href="'https://google.co.jp/search?q=' + card.pref + card.city + card.town" target="_blank" class="google-btn badge-pill btn" role="button"><b>Google検索</b></a>
            </div>
            <div v-if="questions.length > 0" class="mt-5">        
              <b-button class="answer-btn badge-pill" @click="next">別の問題に挑戦</b-button>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card.vue'
import HINTO from '~/components/hinto.vue'
export default {
  components: {
    Card,
    HINTO
  },
  data() {
    return {
      questions: this.$store.state.questions,
      question_index: this.$store.state.question_index,
      yomi: '',
      type: 0,
      card: null,
      hinto: '',
      showModal: false
    }
  },
  fetch({ store, params }) {
    store.dispatch('shuffle', { pref_id: params.id })
  },
  mounted() {
    this.$nextTick(function() {
      this.$refs.answer.focus()
    })
  },
  methods: {
    answer: function() {
      // `this` inside methods point to the Vue instance
      var question = this.questions[this.question_index]
      if (question.town_yomi == this.yomi) {
        this.type = 1
        this.$store.state.cards.push({
          town_yomi: this.yomi,
          town: question.town,
          map_img: question.map_img,
          id: question.id
        })
        this.card = question
        this.$store.dispatch('saveCards', this.$store.state.cards)
        this.$store.commit('setCards', this.$store.state.cards)
        this.questions.splice(this.question_index, 1)
      } else {
        this.type = 2
        this.yomi = ''
        this.$nextTick(function() {
          this.$refs.answer.focus()
        })
      }
    },
    openModal: function() {
      var question = this.questions[this.question_index]
      var hintobox = question.town_yomi.substr(0, 1)
      var i
      for (i = 1; i < question.town_yomi.length; i++) {
        if (i == 1) {
          hintobox = hintobox + '〇'
        } else {
          hintobox = hintobox + question.town_yomi.substr(i, 1)
        }
      }
      this.hinto = hintobox
    },
    next: function() {
      this.question_index++
      if (this.questions.length <= this.question_index) {
        this.question_index = 0
      }
      this.type = 0
      this.yomi = ''
      this.$nextTick(function() {
        this.$refs.answer.focus()
      })
    }
  }
}
</script>

<style>
.answer {
  background-color: #efffff;
} /* 左右余白 */
.location-panel {
  background-color: #ffffff;
}
.question-text {
  font-size: 36px;
  color: #534741;
}
.incorrect-text {
  color: #036a9e;
  font-weight: bold;
}
.correct-text {
  color: #e06a3b;
  font-weight: bold;
}
.pref-city-text {
  font-size: 28px;
}
.town-text {
  font-size: 36px;
  color: #e06a3b;
} /* 左右余白 */
.social-btn {
  width: 30px;
}
.answer-input,
.answer-input:focus {
  outline: 0;
  border-width: 2px;
  border-color: #036a9e;
}
.answer-btn {
  color: white;
  background-color: #036a9e;
} /* 左右余白 */
.collection-btn,
.google-btn,
.other-btn,
.hint-btn,
.return-btn {
  color: white;
  background-color: #1e98b9;
} /* 左右余白 */
</style>
