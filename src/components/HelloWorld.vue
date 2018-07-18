<template>
  <div class='hello container'>
    <div class='notification'>
      {{ msg }}
    </div>

    <div class='level'>
      <div class='level-left'>
        <div class='level-item'>
          <b-taglist attached>
            <b-tag type='is-dark'>node</b-tag>
            <b-tag type='is-primary'>10.6.0</b-tag>
          </b-taglist>
        </div>
      </div>

      <div class='level-item'>
        <b-icon
          icon='fire'
          size='is-large'
          type='is-danger'>
        </b-icon>
      </div>

      <div class='level-right'>
        <div class='level-item'>
          <b-taglist attached>
            <b-tag type='is-dark'>npm</b-tag>
            <b-tag type='is-info'>6.1.0</b-tag>
          </b-taglist>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
